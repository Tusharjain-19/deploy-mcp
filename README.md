<div align="center">

```text
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  ● ● ● terminal — deploy-mcp                                                              │
├───────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                           │
│   ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗    ███╗   ███╗  ██████╗  ██████╗     │
│   ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝    ████╗ ████║ ██╔════╝  ██╔══██╗    │
│   ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝     ██╔████╔██║ ██║       ██████╔╝    │
│   ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝      ██║╚██╔╝██║ ██║       ██╔═══╝     │
│   ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║       ██║ ╚═╝ ██║ ╚██████╗  ██║         │
│   ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═════╝  ╚═╝         │
│                                                                                           │
│         🔥 Zero-Config Autonomous Vercel Deployment Engine for AI IDEs                    │
│                                                                                           │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

# 🚀 Deploy MCP

### Deploy any web application to Vercel — autonomously from your AI IDE in seconds.

[![M8ven Score](https://m8ven.ai/badge/mcp/tusharjain-19-deploy-mcp-erwsd3)](https://m8ven.ai/mcp/tusharjain-19-deploy-mcp-erwsd3)
[![npm version](https://img.shields.io/npm/v/@tusharjain-19/deploy-mcp?color=D5380C&style=for-the-badge&logo=npm&logoColor=FAF6EE)](https://www.npmjs.com/package/@tusharjain-19/deploy-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-F1B333.svg?style=for-the-badge&labelColor=101010&color=F1B333)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/Tusharjain-19/deploy-mcp?color=D5380C&style=for-the-badge&logo=github&labelColor=101010)](https://github.com/Tusharjain-19/deploy-mcp/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-FAF6EE?style=for-the-badge&labelColor=101010&color=D5380C)](https://github.com/Tusharjain-19/deploy-mcp/pulls)

<br/>

<!-- Technology Stack Badges with Official Logos -->
[![MCP Protocol](https://img.shields.io/badge/Model_Context_Protocol-Anthropic-101010?style=flat-square&logo=anthropic&logoColor=D5380C)](https://modelcontextprotocol.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-101010?style=flat-square&logo=typescript&logoColor=3178C6)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-101010?style=flat-square&logo=nodedotjs&logoColor=5FA04E)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-REST_v13-101010?style=flat-square&logo=vercel&logoColor=FAF6EE)](https://vercel.com/)
[![React](https://img.shields.io/badge/React-18.x-101010?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-101010?style=flat-square&logo=vite&logoColor=646CFF)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-101010?style=flat-square&logo=tailwindcss&logoColor=38BDF8)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-3D_WebGL-101010?style=flat-square&logo=threedotjs&logoColor=FAF6EE)](https://threejs.org/)
[![Zod](https://img.shields.io/badge/Zod-Validation-101010?style=flat-square&logo=zod&logoColor=3E67B1)](https://zod.dev/)
[![Git](https://img.shields.io/badge/Git-VCS-101010?style=flat-square&logo=git&logoColor=F05032)](https://git-scm.com/)

<p align="center">
  <b>Free • Open Source • Zero Cloud Costs • Zero-Trust Local Security Boundary</b>
</p>

[Quick Start](#-quick-start-guide) • [About](#-about-deploy-mcp) • [Brand Design](#-brand-identity--design-tokens) • [IDE Setup](#2%EF%B8%8F%E2%83%A3-step-2--connect-to-your-ai-ide) • [Tool Reference](#-comprehensive-tool-suite) • [Architecture](#-architecture--security-model) • [Troubleshooting](#-troubleshooting--diagnostics) • [Official Website](#-official-website--monorepo)

</div>

---

## 📖 About Deploy MCP

### The Vision
In the modern AI coding era, AI assistants like **Cursor**, **VS Code**, **Antigravity**, **Windsurf**, and **Claude Desktop** can write complex full-stack web applications in minutes. However, getting those applications shipped to a live production URL has remained a tedious, manual, and error-prone process:
- Developers must leave their IDE, open separate terminal windows, and run confusing CLI login flows.
- Environment variables often get copied by hand or inadvertently pasted into LLM prompts, causing severe security leaks.
- Build failures in cloud pipelines require digging through remote web dashboards to copy-paste cryptic stack traces back into the AI prompt.

### The Solution
**Deploy MCP bridges this gap entirely.** Built on Anthropic's **Model Context Protocol (MCP)**, it turns your AI assistant into an autonomous DevOps engineer that:
1. **Detects Frameworks Automatically**: Inspects your project structure (Next.js, Vite, React, Vue, Svelte, Remix, static HTML, etc.) without configuration.
2. **Validates Builds Locally**: Executes a pre-flight dry run build on your machine to catch syntax or bundler errors before touching the cloud.
3. **Isolates Secrets Locally**: Reads `.env` keys and syncs them straight to Vercel via secure local REST calls. **Confidential values never enter the LLM context window.**
4. **Deploys Autonomously**: Initiates Vercel cloud deployments, polls telemetry status, and provides the live HTTPS production URL.
5. **Self-Heals on Error**: If a cloud build ever fails, Deploy MCP captures the exact error lines, analyzes the root cause, and provides your AI assistant with actionable instructions to fix the code and redeploy automatically.

```text
Developer:  "Deploy this website."

AI Agent:   ✓ Framework Detected: Next.js (App Router)
            ✓ Pre-Flight Validation: Local build passed (0 errors)
            ✓ Security Check: Git index clean, 0 tracked secrets
            ✓ Secret Sync: Transmitted 4 required env keys directly to Vercel API
            ✓ Deployment Pipeline: Triggered cloud build on Vercel Edge
            ✓ Telemetry Polling: Status READY in 12.8s

            🎉 Production URL Live: https://my-app.vercel.app
```

---

## 🎨 Brand Identity & Design Tokens

Deploy MCP is built with an iconic, warm, retro-modern brand identity that avoids generic cyan/blue tech tropes. All official landing pages, CLI tools, and assets share these cohesive design tokens:

| Token | Swatch | Hex Code | RGB | Role & Usage |
| :--- | :---: | :---: | :---: | :--- |
| **Burnt Orange** | `🟧` | `#!#D5380C` | `213, 56, 12` | Primary brand accent, primary buttons, CLI banners, active states |
| **Warm Ivory** | `⬜` | `#!#FAF6EE` | `250, 246, 238` | High-contrast typography, crisp borders, surface text highlights |
| **Rich Gold** | `🟨` | `#!#F1B333` | `241, 179, 51` | Badges, warning telemetry, secondary highlights, cosmic accents |
| **Carbon Black** | `⬛` | `#!#101010` | `16, 16, 16` | Main terminal background, deep dark canvas, card backdrops |

```css
/* Deploy MCP Core Color Tokens */
:root {
  --deploy-burnt-orange: #D5380C; /* hsl(14, 89%, 44%) */
  --deploy-warm-ivory:   #FAF6EE; /* hsl(40, 50%, 96%) */
  --deploy-rich-gold:     #F1B333; /* hsl(41, 87%, 57%) */
  --deploy-carbon-black:  #101010; /* hsl(0, 0%, 6%)    */
}
```

---

## 🛠 Technology Stack

Deploy MCP is engineered with modern, robust technologies:

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Protocol** | [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) | Standardized JSON-RPC stdio protocol connecting AI IDEs to external tools |
| **Core Runtime** | [Node.js (18+)](https://nodejs.org/) & [TypeScript (5.x)](https://www.typescriptlang.org/) | Strict static typing, async streaming, and cross-platform compatibility |
| **Deployment Cloud** | [Vercel REST API (v13)](https://vercel.com/docs/rest-api) | Global serverless edge deployment, domain routing, and environment synchronization |
| **Validation & Schema** | [Zod](https://zod.dev/) | Type-safe schema validation for all 20 MCP tool inputs and configurations |
| **Interactive Website** | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) | Ultra-fast landing page with Lenis 120Hz smooth momentum scrolling |
| **3D & Visuals** | [Three.js](https://threejs.org/) + [Lucide Icons](https://lucide.dev/) | Interactive 3D Earth globe, cosmic galaxy, and pixel-art brand headers |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Curated utility classes strictly adhering to the Burnt Orange & Warm Ivory palette |

---

## ⚡ Quick Start Guide

Set up Deploy MCP in less than 2 minutes:

### 1️⃣ Step 1 — Run the Interactive Setup Wizard

Open your terminal in any directory and run:

```bash
npx @tusharjain-19/deploy-mcp setup
```

*(or: `npx deploymcp setup`)*

**What the setup wizard does:**
1. 🔑 **Connects Vercel**: Guides you to get your free [Vercel Personal Access Token](https://vercel.com/account/tokens).
2. 🔒 **Encrypts & Stores Locally**: Saves your token safely on your local machine (`~/.deploy-mcp/config.json`).
3. 📋 **Prints Ready Configuration**: Outputs the exact JSON snippet formatted for your specific AI IDE.

---

### 2️⃣ Step 2 — Connect to Your AI IDE

Add the configuration snippet into your IDE settings:

#### 🟧 Cursor IDE
File: `%APPDATA%\Cursor\User\settings\cursor_settings.json` (Windows) or `~/.cursor/rules/cursor_settings.json` (macOS/Linux)

```json
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}
```

#### 🟩 VS Code / Antigravity / Claude Code
File: `settings.json` (Press `Ctrl+Shift+P` / `Cmd+Shift+P` → *Preferences: Open User Settings (JSON)*)

```json
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  ]
}
```

#### 🏄 Windsurf / Supermaven
File: `~/.codeium/windsurf/mcp_config.json`

```json
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}
```

#### 🤖 Claude Desktop
File: `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)

```json
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}
```

---

### 3️⃣ Step 3 — Instruct Your AI Assistant

Open any web repository in your IDE, open the AI prompt panel, and request:

```text
"Use Deploy MCP to deploy my project to Vercel."
```

*(or simply: "Deploy my website")*

---

## 🧰 Comprehensive Tool Suite

Deploy MCP provides your AI assistant with **20 purpose-built tools** categorized across 6 core modules:

### 📦 1. Smart Deployment & Pre-Flight Validation
| Tool | Capability & Description |
| :--- | :--- |
| `smart_deploy` | **Master Autonomous Pipeline** — Detects framework, checks local build, audits Git, syncs secrets, deploys to Vercel, polls status, and auto-diagnoses build failures. |
| `detect_project` | Analyzes file tree and `package.json` to identify project framework (Next.js, Vite, React, Vue, Svelte, HTML, etc.) and build scripts. |
| `check_project` | Executes a dry-run local compilation to ensure zero syntax or bundling errors before cloud upload. |
| `project_report` | Compiles a full pre-flight audit report covering Git status, build health, and environment synchronization readiness. |
| `delete_project` | Permanently deletes a Vercel project with safety confirmation dialogs to prevent accidental loss. |

### 🌐 2. Custom Domain & DNS Management
| Tool | Capability & Description |
| :--- | :--- |
| `check_domain_availability` | Queries Vercel domain registry. If taken, automatically computes and returns optimized domain alternatives. |
| `manage_domain` | Assigns custom domains or aliases to projects, with optional 308 permanent redirect configuration. |

### 🔐 3. Secret & Environment Security Isolation
| Tool | Capability & Description |
| :--- | :--- |
| `scan_env` | Audits local `.env` files and returns sanitized variable key names (**all secret values are completely redacted**). |
| `compare_env` | Computes diffs between local `.env` declarations and target Vercel project environment configuration. |
| `sync_env` | Securely transmits missing environment variables directly from local environment storage to Vercel REST endpoints. |
| `create_env_example` | Synthesizes a clean `.env.example` template with redacted default values. |
| `validate_environment_variables` | Validates runtime variables against project schema definitions. |
| `check_env_leak` | 🚨 Audits Git index via `git ls-files` to guarantee no unencrypted `.env` files are tracked in version control. |

### 🌿 4. Version Control & Safety Matrix
| Tool | Capability & Description |
| :--- | :--- |
| `git_status` | Inspects local Git repository state, uncommitted changes, staged files, and active branch. |
| `git_commit_and_push` | Stages modified files, generates formatted Git commit messages, and pushes upstream safely. |

### ☁️ 5. Vercel Telemetry & Self-Healing Diagnostics
| Tool | Capability & Description |
| :--- | :--- |
| `deploy_to_vercel` | Initiates direct cloud deployment via Vercel REST deployment API endpoints. |
| `get_deployment_status` | Polls current deployment pipeline status (`BUILDING`, `READY`, `ERROR`). |
| `get_deployment_logs` | Streams raw build log stdout/stderr from Vercel edge build nodes. |
| `diagnose_build_failure` | Parses raw error output lines and generates structured, machine-actionable repair instructions for the AI assistant. |

### ⚡ 6. System & Version Management
| Tool | Capability & Description |
| :--- | :--- |
| `check_for_updates` | Queries the npm registry for new Deploy MCP releases, security patches, and performance optimizations. |

---

## 🔒 Architecture & Security Model

Deploy MCP is designed with a **Zero-Trust Security Boundary** to ensure secrets never leave your local machine or enter LLM training/prompt contexts:

```text
 ┌──────────────────────────────────────────────────────────────────┐
 │  AI IDE (Cursor / VS Code / Antigravity / Windsurf / Claude)     │
 │                                                                  │
 │  Prompt: "Deploy my website to Vercel"                           │
 └─────────────────────────────────┬────────────────────────────────┘
                                   │ MCP Stdio Channel (JSON-RPC)
                                   ▼
 ┌──────────────────────────────────────────────────────────────────┐
 │  Local Deploy MCP Server (Runs strictly on YOUR machine)         │
 │                                                                  │
 │  ├── detect_project()   → Parses package.json                    │
 │  ├── check_project()    → Executes local build check             │
 │  ├── scan_env()         → Reads local .env (Returns KEYS ONLY)  │
 │  ├── sync_env()         → Sends values directly to Vercel API    │
 │  └── deploy_to_vercel() → Executes Vercel REST deploy call       │
 └─────────────────────────────────┬────────────────────────────────┘
                                   │ HTTPS (Vercel REST API)
                                   ▼
 ┌──────────────────────────────────────────────────────────────────┐
 │  Vercel Global Edge Network                                      │
 │                                                                  │
 │  ├── Encrypts & assigns environment variables                    │
 │  ├── Compiles production asset bundle                            │
 │  └── Returns active HTTPS production deployment URL 🎉           │
 └──────────────────────────────────────────────────────────────────┘
```

### Local Secret Isolation
```text
❌  INSECURE ARCHITECTURE (Vulnerable to AI prompt logging):
    .env values ──> LLM Context Window ──> MCP Server ──> Vercel API

✅  DEPLOY MCP ZERO-TRUST MODEL (Isolated locally):
    .env values ─────────[ Local Machine Execution ]─────────> Vercel API
                                     │
                          (AI sees key NAMES only)
```

---

## 🌐 Official Website & Monorepo

The official Deploy MCP landing website is included directly in this repository under [`website/`](file:///d:/deploy%20mcp/mcp-server/website).

Features included in the website:
- **Lenis Smooth Momentum Scrolling (120Hz/144Hz)**
- **Interactive 3D Earth Globe & Galaxy Simulator** with clickable cloud deployment hubs
- **Real-Time Interactive CLI Terminal** with animated command runner and brand loading dots
- **Horizontal Showcase Runway** with smooth pinned transition
- **Sound Effects Engine & Design Modals** (Documentation, Privacy Policy, Terms of Service, Cookie Preferences)

### Running the Website Locally
```bash
cd website
npm install
npm run dev
```

Open `http://localhost:3000` (or `http://localhost:3001`) in your browser to view the live site.

---

## 🛠 Troubleshooting & Diagnostics

### ❌ "Vercel not authenticated" or API Token Error
Re-run the setup wizard to refresh your access token:
```bash
npx @tusharjain-19/deploy-mcp setup
```
Ensure your token generated on [Vercel Account Tokens](https://vercel.com/account/tokens) has **Full Access** scope enabled.

### ❌ "MCP server not detected in IDE"
1. Verify the JSON syntax in your IDE configuration file (`settings.json` or `cursor_settings.json`).
2. **Perform a full IDE restart** (close all active windows and reopen).
3. Test server startup manually in your terminal:
   ```bash
   npx @tusharjain-19/deploy-mcp
   ```
   Expected output: `🚀 Deploy MCP server running on stdio`

### ❌ Cloud Build Fails During Compilation
Ask your AI assistant: *"Diagnose the build failure and fix it"*. Deploy MCP will invoke `diagnose_build_failure` to extract Vercel build logs, pinpoint syntax errors, and guide the AI to correct the code directly.

---

## 🗺 Roadmap

- [x] **v1.0**: Vercel REST deployment, automated framework detection, zero-trust local secret sync, self-healing build diagnostics, custom domain routing, interactive terminal simulator.
- [ ] **v2.0**: Multi-cloud deployment adapters for Cloudflare Pages, Netlify, Railway, and AWS Amplify.
- [ ] **v2.1**: Team collaboration workspaces and staging deployment previews with automated PR comments.

---

## 🤝 Contributing

Contributions are warmly welcomed! 

```bash
# 1. Clone source repository
git clone https://github.com/Tusharjain-19/deploy-mcp.git
cd deploy-mcp

# 2. Install dependencies & build
npm install
npm run build

# 3. Create feature branch
git checkout -b feature/my-new-feature
```

Please adhere to the signature brand palette (Burnt Orange `#D5380C` & Warm Ivory `#FAF6EE`) and run tests before submitting PRs.

---

## 📄 License

Distributed under the **MIT License**. Free for personal, open-source, and commercial projects. See [LICENSE](LICENSE) for details.

---

<div align="center">

**Crafted with care by [Tushar Jain](https://github.com/Tusharjain-19)**  
Founder & Maintainer • [jaint0910@gmail.com](mailto:jaint0910@gmail.com)

⭐ **Star this repository on [GitHub](https://github.com/Tusharjain-19/deploy-mcp) if Deploy MCP accelerated your development workflow!**

</div>
