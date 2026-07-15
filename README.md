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
```

## Setup

1. **Clone or download** this skill into your `Skills/` directory.

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

### With Other AI Tools

The `SKILL.md` file contains the full workflow as structured instructions. Copy it into your AI tool's system prompt or custom instructions, and attach the relevant `assets/` and `references/` files as context.

## Integration

This skill is the **downstream closer**. It pairs with a business development / prospecting skill that handles lead generation and qualification. The BD agent feeds qualified opportunities; this agent converts them to signed deals.

## License

MIT — free to use, modify, and distribute. See `LICENSE`.
