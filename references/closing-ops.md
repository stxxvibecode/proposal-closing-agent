# Closing Operations

## Primary Metric (North Star)

Two numbers define success:

1. **Proposal-to-close rate** — proposals that convert to signed deals (target: >60%)
2. **Average contract value (ACV)** — mean revenue per closed deal

Every output should either advance a deal toward close or increase ACV. Report both numbers when reporting pipeline health.

## Deal Record

Maintain one record per active deal. Update after every material action.

| Field | Content |
|---|---|
| Organization | Normalized name |
| Deal ID | ORG-SHORT-YYYY-MM (e.g., [Reference Client]-2025-06) |
| Stage | discovery → proposal drafted → proposal sent → negotiating → verbal commit → contracted → deposit paid → delivered → invoiced → paid → closed |
| Package | Recommended package from catalog |
| Scope | Duration, format, audience, customizations |
| Proposed fee | Quoted amount with breakdown |
| Agreed fee | Final contracted amount |
| Discount given | If any, and what was traded for it |
| Decision-maker | Name, role, decision authority |
| Decision process | Who approves, timeline, budget source |
| Competing alternatives | What else they're considering (internal, competitor, do-nothing) |
| Key objections | Active objections and status |
| Next action | Owner, channel, specific action, due date |
| Contract status | Draft / sent / signed / N/A |
| Deposit status | Requested / paid / N/A |
| Invoice status | Draft / sent / paid / N/A |
| Close probability | % confidence this will close at or above proposed fee |
| Notes | Call summaries, signals, risks |

## Pricing Model

### Foundation

The only verified price point: **$4,500 for an AI Foundations Workshop** ([Reference Client]). Use this as the floor for any comparable engagement.

### Pricing by Package (Recommended Ranges)

These are judgment-based ranges anchored to the [Reference Client] proof point and market positioning. Always present as "custom quote" unless [Your Name] has supplied a current rate card.

| Package | Range | What drives the high end |
|---|---|---|
| AI Foundations Workshop | $3,500–$7,500 | Full-day, large audience, travel, custom industry prep |
| AI Builder Lab | $5,000–$12,000 | Full-day, hands-on build, demo day, pre-work materials |
| Team Adoption Sprint | $6,000–$15,000 | Two-session format, team-specific prep, adoption plan, executive summary |
| Custom Program / Series | $8,000–$30,000+ | Multi-session, curriculum design, recurring delivery, facilitator training |

### Pricing by Audience Type

| Buyer type | Positioning | Typical range |
|---|---|---|
| Community / nonprofit / student | Value-focused, proof-building | $2,500–$5,000 |
| University / association | Honorarium + workshop add-on | $4,000–$10,000 |
| Workforce / economic development | Program budget, per-cohort | $4,500–$15,000 |
| Corporate / private | Business value, prep, rights | $8,000–$25,000+ |

### Fee Structure

Every proposal should include a clear fee breakdown:

1. **Base workshop fee** — delivery of the core session(s)
2. **Customization / prep** — audience-specific tailoring, materials development
3. **Travel and expenses** — if in-person (itemize or flat)
4. **Materials and licenses** — participant handouts, templates, tool access
5. **Optional add-ons:**
   - Office hours / follow-up sessions
   - Executive summary or stakeholder brief
   - Recording and reuse rights
   - Train-the-trainer enablement

### Underpricing Flags

Raise a warning when any of these are true:

- **Below [Reference Client] anchor:** Proposed fee is under $4,500 for a comparable engagement. Say: "This is below the $4,500 [Reference Client] benchmark for a similar workshop. Are we discounting for a strategic reason, or should we price at market?"
- **Scope creep without price increase:** Buyer asks for more sessions, more audience, more customization — but price stays flat. Say: "That adds [specific scope element]. I recommend adjusting the fee to [$X–$Y] to reflect the additional [prep/delivery/materials]."
- **Free or exposure-only:** No fee, with "exposure" or "future opportunities" as the rationale. Say: "Exposure doesn't pay invoices. If this is strategic, let's identify the concrete conversion path — specific paid follow-on, introductions, or proof asset — that makes this worth it. Otherwise, I recommend a minimum fee of $2,500."
- **Rush / short-notice without premium:** Delivery within 2 weeks without a rush fee. Say: "That timeline requires accelerated prep. I recommend adding a 15–20% rush premium."
- **Corporate buyer at nonprofit pricing:** Corporation paying community rates. Say: "This is a corporate engagement. The comparable range is $8,000–$25,000+. Let's price for business value, not cost-plus."

### Over-Customization Flags

Raise a warning when:

- **New curriculum requested:** Buyer wants a topic [Your Name] hasn't taught before. Say: "Here's my closest proven workshop — [Package X]. Starting from that foundation and adapting for your audience is faster, more reliable, and keeps costs reasonable. Building entirely new curriculum adds 2–3× prep time and would increase the fee to [$X]."
- **Excessive tailoring:** Buyer wants industry-specific examples across 5+ industries or roles. Say: "That level of customization across [N] different contexts adds significant prep. I recommend focusing on 2–3 core examples that work cross-functionally, or scoping this as a Custom Program at [$X]."
- **Unrealistic outcomes:** Buyer expects participants to "master AI" or "become developers" in one session. Say: "A single workshop builds practical literacy and momentum. Mastery takes practice. Here's what's realistic in [duration]: [specific outcomes]. For deeper capability, I recommend the [Builder Lab / Series] format."
- **Scope exceeds proven format:** Request doubling the standard duration, combining two packages into one, or delivering to 100+ people hands-on. Say: "That scope exceeds what I've validated in a single engagement. I recommend either [alternative structure] or scoping this as a Custom Program."

## Discovery → Proposal Workflow

### Step 1: Intake the Discovery Call

When receiving call notes (from Granola or any source), extract:

- Organization name and type
- Named contacts, roles, decision authority
- Stated need / initiative
- Audience: who, how many, AI comfort level
- Timing: preferred dates, urgency drivers
- Budget signals: stated budget, budget process, price sensitivity cues
- Decision process: who decides, timeline, competing options
- Format constraints: in-person/virtual, duration, tools/platform
- Success criteria: what "good" looks like to them
- Objections raised or hinted at
- Rapport cues: enthusiasm, skepticism, relationship warmth

### Step 2: Diagnose and Recommend

1. Map the stated need to the closest proven package (see `references/workshop-catalog.md`)
2. If no clear match, use the customization decision tree — default to the closest package
3. Check for over-customization flags
4. Recommend a specific package with tailored outcomes
5. Propose a fee range based on package, audience type, and scope
6. Check for underpricing flags

### Step 3: Produce the Proposal

Use `assets/proposal-template.md`. Populate with:
- Recommended package and rationale
- Tailored outcomes in the buyer's language
- Scope of work (see `assets/scope-of-work-template.md`)
- Timeline
- Pricing options (always offer at least two: recommended and an alternative)
- Expected outcomes
- Proof points ([Reference Client] + relevant testimonials)
- Next step (specific meeting, date, or action)

### Step 4: Prepare for Objections

For every proposal, anticipate the top 3 objections based on:
- Price ("it's more than we expected")
- Relevance ("will this actually work for our people?")
- Timing ("we're not ready yet")
- Customization ("can you tailor it more?")
- Credibility ("have you done this before for someone like us?")

Prepare responses using `assets/objection-responses.md`.

### Step 5: Send and Follow Up

1. Send proposal within 1 business day of discovery call
2. Include `assets/follow-up-email-templates.md` pattern
3. Propose a specific follow-up date (3–5 business days out)
4. If no response: follow up once with new value (relevant article, audience insight, or timing hook), then pause

### Step 6: Close and Hand Off

When deal reaches verbal commit:
1. Prepare contract using `assets/contract-checklist.md`
2. Send deposit and invoice instructions using `assets/deposit-invoice-guide.md`
3. Confirm delivery date, format, audience details, and prep timeline
4. Hand off confirmed details to delivery

## Negotiation Principles

- **Never drop price without removing scope.** If they push on fee: "I can adjust the scope to fit your budget — for example, [condensed format / virtual delivery / fewer customizations]. Which element is most important to keep?"
- **Trade, don't discount.** If they need a lower price, ask for: testimonial, referral introduction, case study permission, multi-session commitment, or faster payment terms.
- **Anchor high, settle at target.** Quote at the upper end of the range. Target the middle. Floor is the package minimum.
- **Know when to walk.** If the negotiated fee drops below the package floor AND there's no strategic rationale (pipeline-building, new segment entry, ecosystem access), recommend walking away.
- **Corporate procurement.** Expect PO, net-30/60 terms, vendor registration. Build this into the timeline. Do not treat procurement delays as rejection.

## Objection Library

See `assets/objection-responses.md` for the full library.

## Post-Close: Deposit and Invoice

See `assets/deposit-invoice-guide.md` for standard instructions.

## Sales Call Brief Template

Prepare before every discovery or negotiation call:

```markdown
# [Organization] Closing Call Brief

## Meeting
- Date/time:
- Attendees and roles:
- Stage: discovery / proposal review / negotiation / close
- Desired commitment before call ends:

## Deal Snapshot
- Package recommended:
- Proposed fee range:
- Key customizations:
- Decision-maker and process:
- Competing alternatives:

## Call Objectives
1.
2.
3.

## Discovery Questions (if early stage)
1. What change do you want participants to make after the workshop?
2. Who is the audience, and what is their current AI comfort level?
3. What makes this timely now?
4. What date window are you targeting?
5. Who approves the budget, and what's that process?
6. How will you judge whether this was successful?
7. What else are you considering?

## Negotiation Plan (if price discussion expected)
- Opening position:
- Target:
- Floor:
- Trades to offer:
- Walk-away point:

## Anticipated Objections
1. [Objection] → Response:
2. [Objection] → Response:
3. [Objection] → Response:

## Next Step
- Commitment to ask for:
- Follow-up date:
```
