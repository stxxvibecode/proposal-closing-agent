#!/usr/bin/env bun

import { existsSync } from "node:fs";
import { resolve } from "node:path";

type Deal = {
  id: string;
  organization: string;
  stage: string;
  package: string;
  fee: string;
  probability: string;
  nextAction: string;
  due: string;
};

const stages = [
  "discovery", "proposal-drafted", "proposal-sent", "negotiating",
  "verbal-commit", "contracted", "deposit-paid", "delivered",
  "invoiced", "paid", "closed", "lost", "nurture",
];

const tableStart = "<!-- PIPELINE-TABLE:START -->";
const tableEnd = "<!-- PIPELINE-TABLE:END -->";

function usage(exitCode = 0): never {
  console.log(`Proposal Closing Pipeline CLI

Usage:
  bun scripts/pipeline.ts init [--file path]
  bun scripts/pipeline.ts add --name "Organization" --stage proposal-sent --package "AI Foundations Workshop" --fee 5000 --probability 50 --next "Follow up" --due 2026-08-01 [--file path]
  bun scripts/pipeline.ts list [--file path]
  bun scripts/pipeline.ts set DEAL-001 --stage negotiating --fee 7500 --probability 70 --next "Send contract" --due 2026-08-05 [--file path]
  bun scripts/pipeline.ts health [--file path]

The default file is ./pipeline.md. Stages: ${stages.join(", ")}`);
  process.exit(exitCode);
}

function getOption(name: string): string | undefined {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

function pipelinePath() {
  return resolve(getOption("file") || "pipeline.md");
}

function template() {
  return `# Proposal Closing Pipeline

Track each active deal here. Use \`bun scripts/pipeline.ts\` to update the table and health snapshot.

## Health Snapshot

<!-- PIPELINE-HEALTH:START -->
Run \`bun scripts/pipeline.ts health\` to refresh this section.
<!-- PIPELINE-HEALTH:END -->

## Deals

${tableStart}
| ID | Organization | Stage | Package | Proposed Fee | Close Probability | Next Action | Due |
| --- | --- | --- | --- | ---: | ---: | --- | --- |
${tableEnd}
`;
}

async function readPipeline(file: string) {
  if (!existsSync(file)) throw new Error(`Pipeline not found: ${file}. Run \`init\` first.`);
  return await Bun.file(file).text();
}

function parseDeals(content: string): Deal[] {
  const body = content.split(tableStart)[1]?.split(tableEnd)[0] || "";
  return body.split("\n").slice(2).flatMap((line) => {
    const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
    if (cells.length !== 8 || !cells[0] || cells[0] === "---") return [];
    return [{ id: cells[0], organization: cells[1], stage: cells[2], package: cells[3], fee: cells[4], probability: cells[5], nextAction: cells[6], due: cells[7] }];
  });
}

function renderTable(deals: Deal[]) {
  const rows = deals.map((deal) => `| ${deal.id} | ${deal.organization} | ${deal.stage} | ${deal.package} | ${deal.fee} | ${deal.probability} | ${deal.nextAction} | ${deal.due} |`);
  return `${tableStart}\n| ID | Organization | Stage | Package | Proposed Fee | Close Probability | Next Action | Due |\n| --- | --- | --- | --- | ---: | ---: | --- | --- |\n${rows.join("\n")}\n${tableEnd}`;
}

function amount(value: string) {
  return Number(value.replace(/[$,]/g, "")) || 0;
}

function health(deals: Deal[]) {
  const active = deals.filter((deal) => !["closed", "lost", "paid"].includes(deal.stage));
  const weighted = active.reduce((total, deal) => total + amount(deal.fee) * (Number(deal.probability) || 0) / 100, 0);
  const byStage = Object.entries(Object.groupBy(active, (deal) => deal.stage)).map(([stage, entries]) => `- ${stage}: ${entries?.length || 0}`).join("\n") || "- No active deals";
  const next = [...active].sort((a, b) => a.due.localeCompare(b.due))[0];
  return `**Active deals:** ${active.length}\n\n**Weighted pipeline:** $${weighted.toLocaleString(undefined, { maximumFractionDigits: 0 })}\n\n**By stage:**\n${byStage}\n\n**Next action:** ${next ? `${next.organization} - ${next.nextAction} (${next.due})` : "None"}`;
}

async function writePipeline(file: string, content: string, deals: Deal[]) {
  const withTable = content.replace(new RegExp(`${tableStart}[\\s\\S]*?${tableEnd}`), renderTable(deals));
  const withHealth = withTable.replace(/<!-- PIPELINE-HEALTH:START -->[\s\S]*?<!-- PIPELINE-HEALTH:END -->/, `<!-- PIPELINE-HEALTH:START -->\n${health(deals)}\n<!-- PIPELINE-HEALTH:END -->`);
  await Bun.write(file, withHealth);
}

const command = process.argv[2];
const file = pipelinePath();

try {
  if (!command || ["-h", "--help", "help"].includes(command)) usage();
  if (command === "init") {
    if (existsSync(file)) throw new Error(`Pipeline already exists: ${file}`);
    await Bun.write(file, template());
    console.log(`Created ${file}`);
    process.exit();
  }

  const content = await readPipeline(file);
  const deals = parseDeals(content);

  if (command === "list") {
    console.table(deals);
  } else if (command === "health") {
    await writePipeline(file, content, deals);
    console.log(health(deals));
  } else if (command === "add") {
    const organization = getOption("name");
    const stage = getOption("stage") || "discovery";
    if (!organization) throw new Error("Missing --name");
    if (!stages.includes(stage)) throw new Error(`Invalid stage: ${stage}`);
    const nextNumber = Math.max(0, ...deals.map((deal) => Number(deal.id.match(/(\d+)$/)?.[1]) || 0)) + 1;
    deals.push({
      id: `DEAL-${String(nextNumber).padStart(3, "0")}`,
      organization,
      stage,
      package: getOption("package") || "TBD",
      fee: getOption("fee") || "0",
      probability: getOption("probability") || "0",
      nextAction: getOption("next") || "TBD",
      due: getOption("due") || "TBD",
    });
    await writePipeline(file, content, deals);
    console.log(`Added ${deals.at(-1)?.id}: ${organization}`);
  } else if (command === "set") {
    const id = process.argv[3];
    if (!id) throw new Error("Missing deal ID");
    const deal = deals.find((item) => item.id === id);
    if (!deal) throw new Error(`Deal not found: ${id}`);
    for (const [option, field] of Object.entries({ name: "organization", stage: "stage", package: "package", fee: "fee", probability: "probability", next: "nextAction", due: "due" } as const)) {
      const value = getOption(option);
      if (value) (deal as any)[field] = value;
    }
    if (!stages.includes(deal.stage)) throw new Error(`Invalid stage: ${deal.stage}`);
    await writePipeline(file, content, deals);
    console.log(`Updated ${id}`);
  } else {
    usage(1);
  }
} catch (error) {
  console.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
