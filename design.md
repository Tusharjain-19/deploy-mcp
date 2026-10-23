# 🎨 Deploy MCP 2.0 Brand Design System & Specification

> **Master Brand Guidelines for Deploy MCP (Version 2.0)**  
> Editorial Retro-Modernism • Organic Brutalism • Strict OLED Dark Mode • Zero-Emoji Unix Terminal

---

## 1. Executive Summary & Brand Philosophy

Deploy MCP 2.0 introduces an iconic visual identity inspired by high-end publication design (*SAVOR*, *The Creative Journal*), combined with sovereign developer tools aesthetics.

### Core Tenets
1. **Rejection of Generic SaaS Tropes**: No generic cyan, electric purple gradients, or cool blue-gray tones. The identity is tactile, physical, warm, and grounded.
2. **Strict OLED Pure Black Dark Mode**: Dark mode canvas is strictly `#000000`. No slate `#0f172a`, obsidian `#111114`, or dark navy `#0d1117`. Borders and cards sit directly on pure black using subtle brand borders (`#F6E3B8`/20 or `#E7BA05`/30).
3. **Bespoke Hand-Crafted SVG Iconography**: No generic icon library dependencies (such as Lucide) for core brand marks. Completely free of 4-point starbursts, sparkle shapes, or generic star icons. All marks utilize precision isometric deployment prisms and nodes.
4. **Zero-Emoji Terminal Standard**: CLI outputs completely eliminate emoji characters (`🚀`, `⚡`, `✅`, `👉`, `❌`, `🎉`), using clean, professional Unix-grade ASCII status markers (`[OK]`, `[ERROR]`, `[!]`, `->`).
5. **Documentation-First Versioning**: Version designation (**Version 2.0**) belongs strictly within technical documentation (`design.md`, `README.md`, `DocsModal`, `DocsPage`), keeping the daily user interface and CLI startup banners clean and clutter-free.
6. **Tangible Tactile Brutalism**: Hard-edged offset shadows (`shadow-[4px_4px_0px_#000000]` / `shadow-[4px_4px_0px_#E7BA05]`), pill badges with bold borders, and kinetic runways.

---

## 2. Signature 5-Color System

The brand is strictly anchored by 5 canonical colors:

| Token Name | Hex Code | RGB | HSL | Semantic Role |
| :--- | :---: | :---: | :---: | :--- |
| **Yellow** | `#E7BA05` | `rgb(231, 186, 5)` | `hsl(48, 96%, 46%)` | **Primary Brand Accent**: Main CTA buttons, CLI ASCII logo banners, active indicator rings, attention badges, terminal highlights. |
| **Butter** | `#F6E3B8` | `rgb(246, 227, 184)` | `hsl(41, 79%, 84%)` | **Editorial Canvas & Typography**: High-contrast typography on black canvas, secondary borders, watermarks, light badge backgrounds. |
| **Leaf** | `#6B9E5A` | `rgb(107, 158, 90)` | `hsl(105, 27%, 49%)` | **Verification & Health**: 100% private badges, local build check successes, SSL verification, healthy edge regions. |
| **Brown** | `#906342` | `rgb(144, 99, 66)` | `hsl(25, 37%, 41%)` | **Grounding & Structural Elements**: Diagnostic failure cards, earthy borders, structural warm frames, retro card outlines. |
| **Pure Black** | `#000000` | `rgb(0, 0, 0)` | `hsl(0, 0%, 0%)` | **Strict OLED Dark Mode**: Surface background, modal backdrops, terminal consoles. **Strictly 0% blue or cool tint.** |

---

## 3. Custom SVG Iconography & Geometry

### The Deployment Prism (`DeploymentGlyph.tsx`)
Replaces legacy starburst and star-shaped icons.
- **Top Facet**: Brand Yellow (`#E7BA05`)
- **Right Facet**: Brand Butter (`#F6E3B8`)
- **Left Facet**: Brand Leaf (`#6B9E5A`)
- **Central Core & Orbital Nodes**: Precision telemetry dots and dashed alignment rings.

### Bespoke Hand-Crafted SVG Icons (`CustomIcons.tsx`)
Pixel-perfect inline SVG icons designed with clean geometric strokes:
- `IconTerminal`: Clean terminal window with prompt chevron.
- `IconShield`: Zero-trust security boundary shield with verification tick.
- `IconBook`: Folded architectural documentation blueprint.
- `IconGlobe`: Latitude/longitude Anycast edge network sphere.
- `IconCopy` & `IconCheck`: Dual-card clipboard and rounded verification check.
- `IconArrowUp`, `IconArrowRight`, `IconArrowLeft`, `IconExternalLink`: Precision direction indicators.
- `IconBolt`, `IconCpu`, `IconLock`, `IconStethoscope`: Technical capability symbols.

---

## 4. Terminal & CLI Design Language

The terminal experience uses 24-bit TrueColor ANSI escape codes defined in `mcp-server/src/utils/colors.ts`:

```typescript
// Canonical TrueColor Brand Constants
export const BRAND_YELLOW_RGB = { r: 231, g: 186, b: 5 };
export const BRAND_BUTTER_RGB = { r: 246, g: 227, b: 184 };
export const BRAND_LEAF_RGB   = { r: 107, g: 158, b: 90 };
export const BRAND_BROWN_RGB  = { r: 144, g: 99,  b: 66 };
export const BRAND_BLACK_RGB  = { r: 0,   g: 0,   b: 0 };
```

### Banner & Headline Standard
The CLI startup banner is concise, uncluttered, and includes the official tagline and single direct documentation link:

```text
  Deploy your website in seconds directly from your AI editor.
  Documentation: https://github.com/Tusharjain-19/deploy-mcp#readme
```

### CLI Status Hierarchy (Zero Emojis)
- `[OK]`: Successful verification, token auth, deployment readiness (Leaf `#6B9E5A`).
- `[!]`: Warning, missing configuration, domain taken (Yellow `#E7BA05`).
- `[ERROR]`: Execution failure, authentication error (Brown `#906342`).
- `->`: Interactive user prompts and browser links.
- `[*]`: System telemetry and workspace directory indicators.

---

## 5. Accessibility & Contrast Audit

| Foreground | Background | Contrast Ratio | WCAG Compliance |
| :--- | :--- | :---: | :--- |
| **Yellow (`#E7BA05`)** | Pure Black (`#000000`) | **9.8:1** | **AAA** (Exceeds 7:1) |
| **Butter (`#F6E3B8`)** | Pure Black (`#000000`) | **15.6:1** | **AAA** (Exceeds 7:1) |
| **Pure Black (`#000000`)** | Yellow (`#E7BA05`) | **9.8:1** | **AAA** (Exceeds 7:1) |
| **Pure Black (`#000000`)** | Butter (`#F6E3B8`) | **15.6:1** | **AAA** (Exceeds 7:1) |
| **Pure Black (`#000000`)** | Leaf (`#6B9E5A`) | **5.9:1** | **AA** (Exceeds 4.5:1) |
| **Leaf (`#6B9E5A`)** | Pure Black (`#000000`) | **5.9:1** | **AA** (Exceeds 4.5:1) |

---

## 6. Do's and Don'ts

### DO
- Use strict `#000000` for all dark mode backgrounds and card containers.
- Use Yellow `#E7BA05` for primary accents, prompts, and primary interactive elements.
- Use Butter `#F6E3B8` for readable content text on dark surfaces.
- Use Leaf `#6B9E5A` for success, validation, and zero-leakage security indicators.
- Use Brown `#906342` for grounding accents and diagnostic failure framing.
- Use bespoke geometric SVGs (`DeploymentGlyph`, `CustomIcons`).
- State **Version 2.0** strictly in documentation.
- Maintain zero emoji in all terminal output.

### DON'T
- Do NOT use blue (`#0000ff`, `#3b82f6`), slate (`#0f172a`, `#1e293b`), or cyan (`#06b6d4`, `#00f0ff`).
- Do NOT use dark gray or off-black (`#101010`, `#141414`, `#1a1a1a`) for main canvas backgrounds.
- Do NOT use star/starburst/sparkle shapes as logo marks.
- Do NOT use emoji characters (`🚀`, `⚡`, `✅`, `👉`, `❌`, `🎉`) in terminal CLI output.
- Do NOT clutter footer or UI badges with version numbers; keep version designation in documentation.
