# Deploy MCP Website - Complete Specification

## 🎯 Website Overview

**Purpose**: Market and document Deploy MCP - a free, open-source MCP server for one-command website deployments

**Target Audience**: 
- Vibe coders (build with AI, stuck at deployment)
- Developers using Cursor/VS Code
- People tired of manual Vercel configuration

**Website Goals**:
1. Show what Deploy MCP does in 10 seconds
2. Make installation dead simple
3. Build trust (open-source, free, secure)
4. Drive GitHub stars and npm downloads

---

## 🎨 Design System

### Color Palette

**Primary Colors** (Professional, not AI-generated):
```
Deep Navy:     #0F172A (backgrounds, text)
Bright Blue:   #0EA5E9 (CTAs, highlights)
Mint Green:    #10B981 (success states)
Alert Orange:  #F97316 (warnings)
Clean White:   #FFFFFF (cards, surfaces)
Gray Text:     #6B7280 (secondary text)
```

**Usage**:
- Deep Navy: Main background, headings
- Bright Blue: Buttons, links, hover states
- Mint Green: "Deployed successfully" messages, checkmarks
- Gray Text: Body text, descriptions

### Typography

**Font Stack** (Non-AI, Professional):
```css
/* Headings - Modern & Clean */
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
font-weight: 700;
letter-spacing: -0.02em;

/* Body Text - Readable & Accessible */
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
font-weight: 400;
line-height: 1.6;

/* Code - Monospace */
font-family: "JetBrains Mono", "Courier New", monospace;
font-weight: 400;
font-size: 0.875rem;
```

**Size Hierarchy**:
- H1: 48px / 56px (hero section)
- H2: 36px (section headers)
- H3: 24px (subsection headers)
- Body: 16px (main text)
- Small: 14px (secondary text)

### Spacing System

```
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
4xl: 64px
```

### Animations & Transitions

**Easing Functions** (Professional, smooth):
```css
/* Entrance animations */
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

/* Transition times */
--transition-fast: 150ms;
--transition-base: 250ms;
--transition-slow: 350ms;
```

**Animation Types**:
1. **Fade In**: Elements appear smoothly
2. **Slide Up**: Content enters from bottom
3. **Scale In**: Elements grow into view
4. **Gradient Flow**: Background gradient shifts
5. **Float**: Subtle up/down movement
6. **Pulse**: Attention-drawing pulse on CTAs
7. **Typewriter**: Text types out character by character

---

## 📄 Page Structure & Content

### PAGE 1: Homepage / Landing

**URL**: `/`

**Sections**:

#### 1.1 Hero Section
```
Layout: Split screen (left text, right animation)

Left Side (Text):
┌──────────────────────────────────┐
│                                  │
│  Deploy Your Website             │
│  In One Command                  │
│                                  │
│  Stop leaving your IDE.          │
│  Say "Deploy this" to Cursor.    │
│  Vercel handles the rest.        │
│                                  │
│  [Get Started] [Learn More]      │
│                                  │
└──────────────────────────────────┘

Right Side (Animation):
Animated terminal showing:
$ Deploy this website
✓ Detecting project...
✓ Building...
✓ Deploying...
🚀 Live: https://my-site.vercel.app
```

**Animation Details**:
- H1 text: Fade in + slide up (400ms)
- Body text: Staggered fade in (each line 100ms apart)
- CTA buttons: Scale in (300ms) + bounce on hover
- Terminal animation: Typewriter effect (2s total)

**Copy**:
```
Heading: "Deploy Your Website In One Command"
Subheading: "Stop leaving your IDE. Say 'Deploy this' to Cursor. Vercel handles the rest."
CTA 1: "Get Started" (primary, links to setup)
CTA 2: "Watch Demo" (secondary, links to demo video)
```

---

#### 1.2 How It Works Section

**Layout**: 3-step flow visualization

```
Step 1                  Step 2                  Step 3
┌──────────┐           ┌──────────┐           ┌──────────┐
│  You Say │  ─────→  │  AI Reads │  ─────→  │  Website │
│  Deploy  │           │  Your MCP│           │   LIVE   │
│ "Deploy" │           │ & Deploys│           │          │
└──────────┘           └──────────┘           └──────────┘

Animation:
- Each box fades in on scroll
- Arrows animate: line draws, then fills with color
- Icons in boxes: scale in + rotate
- On hover: box glows with blue shadow
```

**Content for Each Step**:

**Step 1: You Say "Deploy"**
- Icon: Chat bubble with checkmark
- Text: "Just tell your AI coding agent to deploy your website."
- Detail: "No need to leave your IDE, no dashboard navigation."

**Step 2: AI Reads Your MCP**
- Icon: Gears/settings spinning
- Text: "Deploy MCP detects your project, validates it, and deploys."
- Detail: "Handles Next.js, React, Vue, and static sites."

**Step 3: Website Goes Live**
- Icon: Rocket 🚀
- Text: "Your website is live on Vercel within seconds."
- Detail: "Get a shareable URL instantly."

---

#### 1.3 Features Grid

**Layout**: 4-column grid (2 rows × 4 columns = 8 features)

```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│   Feature   │   Feature   │   Feature   │   Feature   │
├─────────────┼─────────────┼─────────────┼─────────────┤
│   Feature   │   Feature   │   Feature   │   Feature   │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Animation**:
- Stagger: Each feature card slides in from left, bottom, or right (150ms between)
- On hover: Card lifts up (transform: translateY(-8px)) + shadow expands
- Icon rotates on hover (360deg in 600ms)

**Features (with icons & descriptions)**:

1. **🚀 One Command Deploy**
   - "Say 'Deploy this' and it's live in seconds"

2. **🤖 AI-Powered**
   - "Cursor, Claude Code, and any MCP-compatible IDE"

3. **🔍 Auto-Detection**
   - "Detects Next.js, React, Vue automatically"

4. **💰 Completely Free**
   - "No server costs. Runs on your computer"

5. **🔐 Secure**
   - "Your Vercel token stays on your machine"

6. **📦 Open Source**
   - "Inspect every line. No hidden code"

7. **⚡ Fast Setup**
   - "Works in 2 minutes. Install and go"

8. **✅ Pre-Flight Checks**
   - "Validates your project before deploying"

---

#### 1.4 Framework Support Section

**Layout**: 
```
Supported Frameworks:
[Next.js] [React] [Vue] [Astro] [HTML/CSS]

Each shown as icon + name
Hover: Icon scales up + shows checkmark
Animation: Cards appear in sequence as you scroll
```

---

#### 1.5 Before & After Comparison

**Layout**: Two columns

```
BEFORE Deploy MCP          AFTER Deploy MCP
─────────────────────────────────────────────
❌ Leave IDE              ✅ Stay in IDE
❌ Open Vercel dashboard  ✅ Say "Deploy"
❌ Click deploy button    ✅ Done
❌ Copy URL              ✅ Auto-shared
❌ 5+ minutes            ✅ 30 seconds
```

**Animation**:
- Left side (red X's): Fade in with shake animation
- Right side (green checkmarks): Fade in with bounce animation
- Both in staggered sequence

---

#### 1.6 Testimonials / Social Proof

**Layout**: Carousel of 3-4 cards

```
┌──────────────────────────────┐
│  "This is exactly what I     │
│   needed. Deployed in 10     │
│   seconds!"                  │
│                              │
│   - Vibe Coder Dev           │
│   @vibedev                   │
└──────────────────────────────┘
```

**Animation**:
- Cards slide in horizontally
- Auto-rotate every 4 seconds
- Smooth fade between testimonials
- Hover: Pause auto-rotation

---

#### 1.7 FAQ Section

**Layout**: Accordion

```
Q: Do I need to pay?
A: No, Deploy MCP is completely free. Open source.

Q: Will my Vercel token be safe?
A: Yes, it stays on your computer in ~/.deploy-mcp/

Q: Can I use this with GitHub?
A: Yes, in V2 we're adding Git integration.

Q: Which IDEs does this work with?
A: Cursor, VS Code Claude, and any MCP-compatible editor.

Q: What if the deployment fails?
A: You see the error and can ask AI to fix it.
```

**Animation**:
- On click: Answer slides down smoothly
- Icon rotates 180deg
- Background of answer section subtly highlights

---

#### 1.8 CTA Section (Call-to-Action)

```
Ready to Deploy?

It takes 2 minutes.
No credit card. No complications.

[Get Started Now] [View on GitHub]
```

**Animation**:
- Buttons have pulsing glow effect
- On hover: Scale up + glow intensifies
- Text has subtle bounce animation

---

### PAGE 2: Getting Started / Docs

**URL**: `/getting-started` or `/docs`

**Sections**:

#### 2.1 Quick Start (Step-by-step)

```
Step 1: Install
$ npx deploy-mcp setup

Animation: Code block types out, output appears below

Step 2: Authenticate
[Opens browser]
[User logs into Vercel]
[Token saved]

Animation: Browser window slides in, shows Vercel login

Step 3: Configure IDE
Add to Cursor settings:
{
  "mcpServers": {
    "deploy": { ... }
  }
}

Animation: Settings code appears with syntax highlighting

Step 4: Deploy
In Cursor, say: "Deploy this website"

Animation: Chat bubble appears, shows conversation flow
```

**Animation Types**:
- Code typewriter effect
- Terminal output appears line by line
- Syntax highlighting with color transition
- Icons with check animations as steps complete

---

#### 2.2 Installation Methods

**Tabs**:
- `npm` (recommended)
- `yarn`
- `pnpm`
- `Global install`

```
npm version:
npm install -g deploy-mcp

yarn version:
yarn global add deploy-mcp

pnpm version:
pnpm add -g deploy-mcp

Global:
npx deploy-mcp setup
```

**Animation**:
- Tab switching: Fade in/out content
- Code blocks slide in from left

---

#### 2.3 Supported Frameworks

**Interactive List**:
```
Framework          Package Manager    Status
─────────────────────────────────────────────
Next.js            npm/yarn/pnpm      ✅ Full Support
React + Vite       npm/yarn/pnpm      ✅ Full Support
Vue 3              npm/yarn/pnpm      ✅ Full Support
Astro              npm/yarn/pnpm      ✅ Full Support
Static HTML        -                  ✅ Full Support
Remix              npm/yarn/pnpm      ⏳ Coming Soon
Svelte             npm/yarn/pnpm      ⏳ Coming Soon
```

**Animation**:
- Table rows fade in as page scrolls
- Status badges have pulsing indicator for "Coming Soon"

---

#### 2.4 FAQ

```
Q: Is my Vercel token secure?
A: 100%. The token never leaves your computer.
   It's stored locally in ~/.deploy-mcp/config.json
   We never see it. We never store it on our servers.
   [Read Security Details]

Q: Do I need Git?
A: For V1, no. For V2+, Git integration is optional.

Q: What if the build fails?
A: You'll see the error. AI can help debug.

Q: Can I use this for team projects?
A: Yes, but each team member needs their own 
   Vercel token. Coming in V2: Team mode.

Q: Does this replace GitHub Actions?
A: No, it's for quick deployments. GitHub Actions 
   is better for CI/CD pipelines.
```

---

### PAGE 3: Showcase / Examples

**URL**: `/examples`

**Sections**:

#### 3.1 Real Projects Deployed with Deploy MCP

**Layout**: Grid of cards with projects

```
┌─────────────────────────────────────┐
│                                     │
│  Portfolio Website                  │
│  Built with: Next.js + Tailwind    │
│  Deployed with: Deploy MCP         │
│  Time: 30 seconds                  │
│                                     │
│  [Visit Site] [View Code]          │
│                                     │
└─────────────────────────────────────┘
```

**Projects to Show**:
1. **Personal Portfolio**
   - Tech: Next.js, Tailwind CSS
   - Deployed: 30 seconds
   - Link: example1.vercel.app

2. **Blog Platform**
   - Tech: React + Vite
   - Deployed: 45 seconds
   - Link: example2.vercel.app

3. **SaaS Landing Page**
   - Tech: Next.js + MDX
   - Deployed: 25 seconds
   - Link: example3.vercel.app

4. **Personal Dashboard**
   - Tech: Vue 3 + Vite
   - Deployed: 35 seconds
   - Link: example4.vercel.app

**Animation**:
- Cards fade in as you scroll
- On hover: Card lifts, shows project details overlay
- Project images: Zoom effect on hover
- "Visit Site" button: Glow effect

---

#### 3.2 Video Demo

**Section**: Embedded video showing complete workflow

```
[Video Player - 2-3 minute demo]

Voice over:
"Let's deploy a website in under a minute..."

Shows:
- Opening Cursor
- Saying "Deploy this"
- AI calling MCP tools
- Live URL appearing
- Website loading
```

---

### PAGE 4: Documentation

**URL**: `/docs`

**Layout**: Sidebar + Main Content

**Sidebar Navigation**:
```
├── Getting Started
│  ├── Installation
│  ├── Setup
│  └── First Deploy
├── Guide
│  ├── Framework Setup
│  ├── Environment Variables
│  ├── Troubleshooting
│  └── Best Practices
├── API Reference
│  ├── detect_project
│  ├── check_project
│  ├── deploy_to_vercel
│  └── get_deployment_status
├── Advanced
│  ├── Custom Frameworks
│  ├── Extending MCP
│  └── Security
└── FAQ
```

**Animation**:
- Active nav item highlights with blue background + left border
- Content sections fade in
- Code examples have syntax highlighting

---

#### 4.1 Tool Documentation

**For each tool:**

```
detect_project
──────────────

Detects framework and build configuration of a project.

INPUT:
{
  "projectPath": "/path/to/project"
}

OUTPUT:
{
  "framework": "Next.js",
  "packageManager": "npm",
  "buildCommand": "npm run build",
  "detected": true
}

EXAMPLE:
"What framework is my project using?"
→ MCP calls detect_project
→ "It's a Next.js project"

ERRORS:
- "No package.json found": Make sure you're in project root
- "Unknown framework": Add issue on GitHub
```

---

### PAGE 5: About / Contact

**URL**: `/about`

**Sections**:

#### 5.1 About Section

```
Why Deploy MCP?

Deploy MCP exists because developers like you
told us: "I can build with AI, but I get stuck 
at deployment."

We built this to solve that problem.

Open source. Free forever. No ads.
```

**Animation**:
- Text fades in as you scroll
- Quote appears with emphasis

---

#### 5.2 Roadmap

**Interactive Roadmap**:

```
V1 (Now)
─────
✅ One-command deploy
✅ Framework detection
✅ Pre-deployment checks
✅ Vercel integration

V2 (Next Month)
───────────────
⏳ Deployment logs
⏳ Error diagnosis
⏳ Auto-fix simple errors
⏳ Git integration

V3 (Future)
──────────
⏳ Multi-platform (Netlify, Railway)
⏳ Team deployments
⏳ Deployment history
⏳ Rollback functionality
```

**Animation**:
- Timeline line draws from top to bottom
- Items appear when timeline reaches them
- Completed items have checkmark animation
- Future items have "coming soon" pulse

---

#### 5.3 Open Source & Contribution

```
Deploy MCP is 100% open source.

GitHub: github.com/[yourname]/deploy-mcp
License: MIT

We welcome contributions!

How to contribute:
1. Fork the repo
2. Create feature branch
3. Make changes
4. Submit PR

Top Contributors:
[Show avatars of GitHub contributors]
```

**Animation**:
- GitHub stats update in real-time
- Contributor avatars appear in sequence
- "Fork on GitHub" button has hover glow

---

### PAGE 6: Pricing (Even though it's free!)

**URL**: `/pricing`

**Simple message**:

```
Deploy MCP

Forever Free

No hidden costs.
No premium tiers.
No freemium traps.

Deploy unlimited websites.
One command per website.
$0 per year.

[Get Started]

---

Why is it free?

Deploy MCP is open source.
No servers to maintain.
No support team.
No cloud infrastructure.

You own the tool.
You can inspect the code.
You can fork it.

We believe in free software.
```

**Animation**:
- "Forever Free" text shimmers with gradient
- Pricing breakdown appears as you scroll
- Free icon has subtle float animation

---

## 🎬 Animation Details by Section

### Global Animations

**Scroll Reveal** (On every section):
```
When element enters viewport:
1. Opacity: 0 → 1 (250ms)
2. Transform: translateY(20px) → translateY(0)
3. Easing: cubic-bezier(0.4, 0, 0.2, 1)

Stagger: Each child element 100ms apart
```

**Hover Effects** (On all buttons/cards):
```
Button:
- Background color shift (150ms)
- Scale: 1 → 1.05
- Shadow: small → large

Card:
- Transform: translateY(-8px)
- Shadow expansion (250ms)
- Icon rotation (if present)
```

**Typewriter Effect** (For code/terminal):
```
Character by character animation
Speed: 50ms per character
Cursor blink effect
Smooth line-by-line reveal
```

**Gradient Shift** (Background sections):
```
Subtle background gradient animation
360deg rotation over 8 seconds
Opacity pulse: 0.5 → 1 → 0.5 over 4 seconds
Easing: ease-in-out
```

**Loading States** (Progress indicators):
```
Pulse animation: scale(1) → scale(1.1) → scale(1)
Duration: 2 seconds, infinite
Easing: cubic-bezier(0.4, 0, 0.6, 1)

Progress bar: width 0 → 100% (duration based on actual progress)
```

---

## 📱 Responsive Design

### Breakpoints

```
Mobile:     320px - 640px   (sm)
Tablet:     641px - 1024px  (md)
Desktop:    1025px+         (lg)
Wide:       1440px+         (xl)
```

### Responsive Changes

**Hero Section**:
- Desktop: Split screen (text left, animation right)
- Tablet: Stacked, animation on top
- Mobile: Full width, animation centered

**Features Grid**:
- Desktop: 4 columns
- Tablet: 2 columns
- Mobile: 1 column

**Navigation**:
- Desktop: Horizontal nav bar
- Mobile: Hamburger menu → slide-out sidebar

---

## 🗂️ Site Structure (URL Map)

```
deploy-mcp.dev/
├── /                          (Homepage)
├── /getting-started           (Quick Start Guide)
├── /docs                      (Full Documentation)
│  ├── /docs/installation
│  ├── /docs/setup
│  ├── /docs/frameworks
│  ├── /docs/api-reference
│  └── /docs/troubleshooting
├── /examples                  (Showcase Projects)
├── /about                     (About + Roadmap)
├── /pricing                   (Free!)
├── /github                    (Redirect to GitHub)
└── /blog                      (Optional, for later)
```

---

## 💻 Technical Stack

**Frontend**:
- Framework: React 18+
- Styling: Tailwind CSS 3+
- Animations: Framer Motion (smooth, performant)
- Icons: Heroicons + custom SVGs
- Build: Vite
- Deployment: Vercel (ironic, but free)

**Dependencies**:
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.0",
  "tailwindcss": "^3.3.0",
  "@heroicons/react": "^2.0.0"
}
```

**Performance**:
- Images: Optimized, lazy-loaded
- Code splitting: By page
- CSS: Minified + purged
- Target: Lighthouse 95+

---

## 🎨 Component Library

### Reusable Components

**Button**:
```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```
- Variants: primary, secondary, ghost
- Sizes: sm, md, lg
- Hover: Scale + glow
- Loading: Pulse animation

**Card**:
```tsx
<Card hover>
  <CardImage src={url} />
  <CardContent>
    <h3>Title</h3>
    <p>Description</p>
  </CardContent>
</Card>
```
- Hover: Lift + shadow
- Image: Zoom on hover
- Animated reveal on scroll

**Code Block**:
```tsx
<CodeBlock language="javascript">
  {codeString}
</CodeBlock>
```
- Syntax highlighting
- Copy button
- Line numbers (optional)
- Line highlighting

**Testimonial Card**:
```tsx
<TestimonialCard
  quote="..."
  author="..."
  role="..."
  avatar={url}
/>
```
- Avatar fade-in
- Quote appears with emphasis
- Carousel auto-rotate

---

## 📊 SEO Optimization

**Meta Tags**:
```html
<meta name="description" content="Deploy your website in one command from your AI IDE. Free, open-source MCP for Cursor and VS Code.">
<meta name="keywords" content="deploy, vercel, cursor, mcp, ai coding">
<meta property="og:title" content="Deploy MCP - One Command Deploy">
<meta property="og:description" content="Say 'Deploy this' and your website is live.">
<meta property="og:image" content="/og-image.png">
```

**Structured Data**:
```json
{
  "@context": "schema.org",
  "@type": "SoftwareApplication",
  "name": "Deploy MCP",
  "description": "Free MCP server for one-command deployments",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0"
  },
  "url": "https://deploy-mcp.dev"
}
```

---

## 🚀 Launch Checklist

Before going live:

- [ ] All pages content finalized
- [ ] All animations tested (smooth 60fps)
- [ ] Mobile responsive tested (iOS + Android)
- [ ] Links all working
- [ ] Forms functional (contact, waitlist)
- [ ] Analytics setup (Vercel Analytics)
- [ ] SEO checked
- [ ] Performance tested (Lighthouse 95+)
- [ ] Accessibility tested (WCAG 2.1 AA)
- [ ] Domain configured
- [ ] SSL certificate (auto via Vercel)
- [ ] Social media preview images ready
- [ ] Email domain warmed up for contact form

---

## 📈 Analytics & Tracking

**What to Track**:
- Homepage visits
- Button clicks (Get Started, GitHub, etc.)
- Time on page
- Scroll depth
- Docs visits
- External link clicks
- Form submissions

**Tools**:
- Vercel Analytics (built-in, free)
- Google Analytics 4 (optional)
- Plausible Analytics (privacy-friendly alternative)

---

## 🎁 Optional: Email Newsletter

**Landing Page CTA**:
```
Want updates about new features?

[Email input] [Subscribe]

We'll email you when:
- New frameworks are supported
- V2 features launch
- Breaking changes happen

No spam. One email per month.
```

**Animation**:
- Form input: Focus state with glow
- Submit: Loading spinner
- Success: Checkmark appears

---

## 🌐 Domain & Hosting

**Domain**: `deploy-mcp.dev` or `deploymcp.dev`

**Hosting**: Vercel (free tier sufficient)

**DNS**: Point to Vercel nameservers

**SSL**: Automatic via Vercel

---

## 📋 Content Calendar (First Month)

**Week 1**: Launch website + docs
**Week 2**: Write 2 blog posts on use cases
**Week 3**: Release V1 + announce on Product Hunt
**Week 4**: Community feedback + feature requests

---

## ✨ Brand Voice & Tone

**Tone**: Friendly, direct, non-technical when possible

**Avoid**:
- Jargon without explanation
- AI-generated feel
- Corporate speak
- Overpromising

**Examples**:

❌ "Leverage our paradigm-shifting deployment paradigm"
✅ "Deploy in one command"

❌ "Utilizing artificial intelligence technologies"
✅ "Your AI coding agent handles deployment"

❌ "Enterprise-grade solutions at scale"
✅ "Works for you and your team"

---

## 🎯 Success Metrics (Website-Specific)

**30-Day Goals**:
- 5,000+ unique visitors
- 2% conversion to GitHub (100 stars)
- 1% conversion to npm (50 installs)
- 0.5% email signup (25 emails)
- 90+ Lighthouse score

**90-Day Goals**:
- 20,000+ visitors
- 500+ GitHub stars
- 500+ npm installs
- 200+ email subscribers

---

## 🔗 Social Media Integration

**Share buttons on**:
- Homepage (Twitter/X, Reddit, Dev.to)
- Blog posts (Twitter/X, LinkedIn, Reddit)

**Social Preview**:
- Title: "Deploy MCP - One Command Deploy"
- Description: "Say 'Deploy this' in Cursor. Your website goes live."
- Image: Hero screenshot or GIF

---

## 🎬 Video Content Plan

**Video 1: 30-second teaser**
- Problem: "Building is fast, deploying is slow"
- Solution: Deploy MCP
- CTA: "Learn more"

**Video 2: 2-minute demo**
- Full workflow from "Deploy this" to live URL
- Shows framework detection
- Shows error handling

**Video 3: 10-minute tutorial**
- Step-by-step setup
- First deployment walkthrough
- Troubleshooting

---

## 🚨 Common Page Mistakes to Avoid

❌ **Autoplay videos** → Disable, let user click
❌ **Too many animations** → 3-4 per section max
❌ **Slow load times** → Optimize images, code-split
❌ **Unclear CTAs** → Make buttons obvious and large
❌ **Mobile unfriendly** → Test on actual devices
❌ **Dense text** → Break into scannable chunks
❌ **AI-generated feel** → Use real language
❌ **Outdated design** → Follow modern conventions

---

## 📝 Copy Examples

### Homepage CTA Copy

**Strong**:
"Deploy your website. Now."

**Weak**:
"Click here to learn more about deployment"

### Button Copy

**Strong**:
- "Get Started Now"
- "Deploy My Website"
- "View on GitHub"

**Weak**:
- "Click Here"
- "Submit"
- "Read More"

### Feature Headlines

**Strong**:
- "Say 'Deploy' and it's live"
- "No dashboard needed"
- "Your token stays safe"

**Weak**:
- "Feature-rich deployment"
- "Advanced capabilities"
- "Security-focused"

---

## 🎁 Bonus: Email Template

**Welcome Email**:
```
Subject: Welcome to Deploy MCP! 🚀

Hi [Name],

Thanks for signing up.

Your first deploy starts with three simple steps:

1. npx deploy-mcp setup
2. Say "Deploy this" in Cursor
3. Share your website

Questions? Reply to this email.

Happy deploying,
Deploy MCP Team
```

---

## 🎬 Final Checklist

- [ ] Design system documented
- [ ] All colors finalized
- [ ] All fonts selected
- [ ] All animations defined
- [ ] Page layouts designed
- [ ] Content written
- [ ] Components planned
- [ ] Navigation structure clear
- [ ] Responsive breakpoints set
- [ ] Analytics planned
- [ ] SEO optimized
- [ ] Accessibility checked

---

**Status**: Ready to hand off to dev team  
**Last Updated**: 2026-08-25  
**Version**: 1.0
