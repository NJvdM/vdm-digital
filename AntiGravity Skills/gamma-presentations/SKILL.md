---
name: creating-gamma-presentations
description: Generates professional presentations via the Gamma API. Use when the user asks to "create a presentation", "make slides", "build a deck", "generate a pitch deck", or mentions Gamma presentations.
---

# Gamma Presentation Generator

Create polished, on-brand presentations through the Gamma API (`gamma.app`) by gathering requirements, confirming them, and executing the generation request.

## When to Use This Skill

- User asks to "create a presentation", "build a deck", or "make slides"
- User wants a pitch deck, investor deck, or any slide-based deliverable
- User mentions Gamma or `gamma.app`
- User provides a topic and wants it turned into a visual presentation

---

## Brand Guidelines

Before generating, check if the user has brand settings. If not, use sensible defaults.

| Element            | Default         |
| ------------------ | --------------- |
| **Primary Color**  | _(ask or skip)_ |
| **Secondary Color**| _(ask or skip)_ |
| **Logo URL**       | _(ask or skip)_ |
| **Preferred Theme** | `default`      |

> [!TIP]
> If the user has a `brand-identity` skill or config, pull colors and logo from there automatically.

---

## Workflow

### Step 1 — Gather Requirements

Ask these **6 questions** before creating anything:

- [ ] 1. **Topic & Objective** — What is the presentation about, and what action should the audience take?
- [ ] 2. **Number of Slides** — `5` (quick pitch) · `8–10` (standard) · `12–15` (comprehensive)
- [ ] 3. **Target Audience** — Executives · Investors · Clients · Students · Internal team
- [ ] 4. **Text Density** — Minimalistic · Balanced · Detailed
- [ ] 5. **Visual Style** — Corporate · Lifestyle · Tech · Abstract · Playful · Serious
- [ ] 6. **Logo Placement** — Top-right · Top-left · Bottom-right · Bottom-left · None

> [!IMPORTANT]
> Never skip the 6 questions. If the user provides partial info up front, fill in what you can and ask only the missing ones.

---

### Step 2 — Confirm Requirements

Summarize everything and **wait for explicit confirmation** before proceeding:

```
📋 Presentation Requirements
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Topic:        [topic]
Objective:    [objective]
Slides:       [number]
Audience:     [audience]
Text Density: [minimalistic/balanced/detailed]
Visual Style: [style]
Theme:        [theme name]
Logo:         [placement]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Ready to create? (yes / no)
```

> [!CAUTION]
> Do **not** call the API until the user confirms.

---

### Step 3 — Build API Parameters

Map the confirmed requirements into the Gamma generation payload:

```json
{
  "inputText": "<detailed prompt based on requirements>",
  "textMode": "generate",
  "format": "presentation",
  "numCards": "<slide count>",
  "cardSplit": "auto",
  "exportAs": "pdf",

  "themeId": "<selected theme>",

  "textOptions": {
    "amount": "<brief | concise | detailed>",
    "language": "en"
  },

  "imageOptions": {
    "source": "aiGenerated",
    "model": "dall-e-3",
    "style": "<visual style description>"
  },

  "cardOptions": {
    "headerFooter": {
      "<logoPlacement>": {
        "type": "image",
        "source": "custom",
        "src": "<logo-url>",
        "size": "md"
      }
    }
  }
}
```

**Text density mapping:**

| User Choice   | API Value  |
| ------------- | ---------- |
| Minimalistic  | `brief`    |
| Balanced      | `concise`  |
| Detailed      | `detailed` |

**Image style prompt tips:**
- Be specific: *"Clean, modern corporate photography with blue tones"* instead of *"professional"*
- Match audience: executives → polished & minimal; students → vibrant & engaging
- Include color cues from brand guidelines when available

---

### Step 4 — Execute API Call

1. **POST** to `https://api.gamma.app/v1.0/generations` with the JSON body from Step 3.
2. **Poll** `GET https://api.gamma.app/v1.0/generations/{id}` every **10 seconds** until `status === "completed"`.
3. Extract `gammaUrl` (online viewer) and `exportUrl` (PDF download) from the response.

> [!NOTE]
> If the API returns an error, surface the error message to the user and ask how they'd like to proceed (retry, adjust parameters, etc.).

---

### Step 5 — Deliver Results

Present the final output in this format:

```
✅ Presentation Complete!

📊 [Presentation Title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Slides:    [number]
Theme:     [theme name]
Style:     [visual style]

🔗 View Online:   [gammaUrl]
📥 Download PDF:  [exportUrl]

💳 Credits Used:      [deducted]
💰 Credits Remaining: [remaining]
```

---

## Content Structure Templates

Use these as the backbone for the `inputText` prompt. Adjust based on topic.

### 5-Slide (Quick Pitch)

| Slide | Purpose            |
| ----- | ------------------ |
| 1     | Hook / Overview    |
| 2     | Problem / Opportunity |
| 3     | Solution / Approach |
| 4     | Proof / Results    |
| 5     | Call-to-Action     |

### 8–10 Slides (Standard)

| Slide | Purpose            |
| ----- | ------------------ |
| 1     | Title / Hook       |
| 2     | Problem Statement  |
| 3     | Market / Context   |
| 4     | Solution Overview  |
| 5     | Features / Benefits |
| 6     | How It Works       |
| 7     | Case Study / Results |
| 8     | Pricing / Offering |
| 9     | Next Steps         |
| 10    | Contact / CTA      |

### 12–15 Slides (Comprehensive)

| Slide | Purpose              |
| ----- | -------------------- |
| 1     | Title / Hook         |
| 2     | Agenda / Overview    |
| 3     | Problem Statement    |
| 4     | Market / Context     |
| 5     | Solution Overview    |
| 6     | Key Feature 1        |
| 7     | Key Feature 2        |
| 8     | Key Feature 3        |
| 9     | How It Works         |
| 10    | Case Study / Results |
| 11    | Competitive Edge     |
| 12    | Roadmap / Timeline   |
| 13    | Pricing / Offering   |
| 14    | Team / About         |
| 15    | Contact / CTA        |

---

## Quality Checklist

Before delivering, verify:

- [ ] Theme matches brand guidelines (if provided)
- [ ] Brand colors applied consistently
- [ ] Logo URL is correct and placement matches request
- [ ] Image style prompt is detailed and specific (not vague)
- [ ] Text density matches audience expectations
- [ ] One clear idea per slide
- [ ] Visual style is consistent throughout
- [ ] Both URLs (view + download) are included in delivery

---

## Resources

- [Themes reference](resources/themes.json) — Available Gamma theme IDs
- [Sample request](examples/sample-request.json) — Example API payload
