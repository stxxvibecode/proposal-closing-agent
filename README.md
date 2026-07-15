# Proposal & Closing Agent

A reusable AI agent skill for closing paid AI education workshop deals. Handles everything after discovery — proposals, pricing, negotiation, objection handling, follow-ups, contracts, deposits, and deal tracking.

## What This Skill Does

- **Intake** — Extracts deal details from discovery call notes (Granola, transcripts, or summaries)
- **Diagnose** — Matches buyer needs to the closest proven workshop package
- **Price** — Applies a tiered pricing model with floor protection and underpricing detection
- **Propose** — Generates ready-to-send proposals and scope-of-work documents
- **Handle Objections** — Anticipates the top 3 objections with prepared responses
- **Follow Up** — Cadence-based follow-up emails that always add value
- **Close** — Contract checklist, deposit invoicing, and post-delivery handoff

## Workshop Packages

The skill ships with four proven workshop formats:

| Package | Price Range | Best For |
|---|---|---|
| AI Foundations Workshop | $3,500–$7,500 | Broad audience, practical AI literacy |
| AI Builder Lab | $5,000–$12,000 | Hands-on build, prototype by end of session |
| Team Adoption Sprint | $6,000–$15,000 | One team, defined problem, adoption plan |
| Custom Program / Series | $8,000–$30,000+ | Recurring cohorts, institutional partnership |

## File Structure

```
proposal-closing-agent/
├── SKILL.md                              # Agent instructions and workflow
├── README.md                             # This file
├── LICENSE                               # MIT
├── .gitignore
├── pipeline.md                           # Living deal pipeline and health snapshot
├── assets/
│   ├── proposal-template.md             # Proposal email + document template
│   ├── scope-of-work-template.md        # SOW template for larger engagements
│   ├── objection-responses.md           # Library of objection responses
│   ├── follow-up-email-templates.md     # Cadence-based follow-up emails
│   ├── contract-checklist.md            # Contract review checklist
│   └── deposit-invoice-guide.md         # Deposit and invoice process
└── references/
    ├── workshop-catalog.md              # The four proven workshop packages
    └── closing-ops.md                   # Pricing model, negotiation, deal tracking
└── scripts/
    └── pipeline.ts                      # Zero-dependency pipeline CLI
```

## Setup

1. **Install in Zo Computer.** In the [Skills](/?t=skills) tab, choose the option to add a local skill or import from GitHub, then select this repository. If your Zo installation does not offer GitHub import, clone it into `/home/workspace/Skills/proposal-closing-agent`:

   ```bash
   git clone https://github.com/stxxvibecode/proposal-closing-agent.git /home/workspace/Skills/proposal-closing-agent
   ```

   Zo recognizes the skill when it finds `Skills/proposal-closing-agent/SKILL.md`. Start a new chat after installing.

2. **Find and replace** these placeholders throughout the files:

| Placeholder | Replace With |
|---|---|
| `[Your Name]` | Your name |
| `[Your Company]` | Your company name |
| `[your-email@yourcompany.com]` | Your email address |
| `[your-phone]` | Your phone number |
| `[Reference Client]` | Your strongest past client/engagement |
| `[Floor Price]` | Your minimum engagement fee |
| `[your business goals document]` | Path to your business goals file |
| `your-handle.zo.computer` | Your Zo Computer handle |

3. **Update the workshop catalog** (`references/workshop-catalog.md`) with your own proven packages, pricing ranges, and proof points.

4. **Update the closing ops** (`references/closing-ops.md`) with your payment structure, contract process, and deal tracking fields.

## How to Use

### With Zo Computer

This skill follows the [Agent Skills specification](https://agentskills.io/specification). Place it in your `Skills/` directory and Zo will recognize it automatically.

**Trigger:** Share discovery call notes and ask for a proposal, or ask for help closing a workshop deal.

### Pipeline CLI

The skill includes a Bun CLI for keeping a simple markdown deal pipeline. It requires no package installation.

```bash
cd /home/workspace/Skills/proposal-closing-agent
bun scripts/pipeline.ts health
bun scripts/pipeline.ts add --name "Example Organization" --stage proposal-sent --package "AI Foundations Workshop" --fee 5000 --probability 50 --next "Follow up on proposal" --due 2026-08-01
bun scripts/pipeline.ts set DEAL-001 --stage negotiating --probability 70 --next "Send contract" --due 2026-08-05
```

Use `bun scripts/pipeline.ts list` to view all deals. To keep working data outside the installed skill, initialize a separate file with `bun scripts/pipeline.ts init --file /path/to/pipeline.md` and pass the same `--file` option to future commands.

### With Other AI Tools

The `SKILL.md` file contains the full workflow as structured instructions. Copy it into your AI tool's system prompt or custom instructions, and attach the relevant `assets/` and `references/` files as context.

## Integration

This skill is the **downstream closer**. It pairs with a business development / prospecting skill that handles lead generation and qualification. The BD agent feeds qualified opportunities; this agent converts them to signed deals.

## License

MIT — free to use, modify, and distribute. See `LICENSE`.
