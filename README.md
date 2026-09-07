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
│           🚀 Zero-Config Autonomous Vercel Deployment Engine for AI IDEs                  │
│                                                                                           │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

# 🚀 Deploy MCP

### Deploy any web application to Vercel — directly from your AI IDE in seconds.

[![M8ven Score](https://m8ven.ai/badge/mcp/tusharjain-19-deploy-mcp-erwsd3)](https://m8ven.ai/mcp/tusharjain-19-deploy-mcp-erwsd3)
[![npm version](https://img.shields.io/npm/v/@tusharjain-19/deploy-mcp?color=0076D1&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@tusharjain-19/deploy-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-purple?style=for-the-badge)](https://modelcontextprotocol.io/)

**Free. Open source. Zero server costs. Engineered for modern developers.**

[Quick Start](#-quick-start-guide) • [IDE Setup](#2%EF%B8%8F%E2%83%A3-step-2--connect-to-your-ai-ide) • [Tool Reference](#-comprehensive-tool-suite) • [Architecture](#-architecture--security-model) • [Troubleshooting](#-troubleshooting--diagnostics)

</div>

---

## ✨ What is Deploy MCP?

**Deploy MCP** is an enterprise-grade Model Context Protocol (MCP) server that empowers AI coding assistants—including **Cursor**, **VS Code**, **Antigravity**, **Windsurf**, and **Claude Desktop**—to autonomously validate, configure, environment-sync, and deploy web applications to Vercel.

Rather than manually running builds, managing Vercel CLI logins, or copy-pasting environment variables across developer portals, simply ask your AI assistant **"Deploy this"**.

```text
You:  "Deploy this website."

AI:   ✓ Framework Detected: Next.js (App Router)
      ✓ Local Build Check: Passed (0 errors)
      ✓ Git Status Verified: Clean branch & zero tracked secrets
      ✓ Environment Sync: Uploaded 4 required secrets directly to Vercel
      ✓ Deployment Triggered: Deployed to Vercel Infrastructure
      ✓ Health Check: Status READY in 14.2s

      🎉 Production URL live at: https://my-app.vercel.app
```

---

## ⚡ Key Pillars & Features

- **⚡ Zero-Touch Automated Deployments**: Automatic framework detection for Next.js, React, Vite, Vue, Svelte, Remix, Static HTML, and more.
- **🔐 Zero-Trust Local Secret Isolation**: Scans local `.env` keys and syncs them straight to Vercel via secure local REST calls. Secret values are **never sent to AI models**.
- **🩺 Self-Healing Build Diagnosis**: If a deployment fails on Vercel, Deploy MCP retrieves build logs, identifies exact code errors, and gives your AI model structured fix instructions to redeploy automatically.
- **🌿 Version Control Safety Matrix**: Prevents accidental deployment of uncommitted changes or secret leakage in Git tracking.
- **🌐 Smart Domain Management**: Checks domain availability instantly and suggests optimized alternatives if taken. Manages custom domain bindings and 308 permanent redirects.

---

## ⚡ Quick Start Guide

Set up Deploy MCP in less than 2 minutes:

### 1️⃣ Step 1 — Run the Easy 1-Minute Setup Command

Open your terminal and run:

```bash
npx deploymcp setup
```

*(or: `npx deploy-mcp setup` / `npx @tusharjain-19/deploy-mcp setup`)*

**What this wizard does in 3 easy steps:**
1. 🔑 **Connects Vercel**: Guides you to get your free [Vercel Personal Access Token](https://vercel.com/account/tokens).
2. 🔒 **Saves Token Securely**: Stores your token safely on your machine (`~/.deploy-mcp/config.json`).
3. 📋 **Gives You IDE Config**: Prints the exact JSON snippet ready to copy into your AI IDE!

---

### 2️⃣ Step 2 — Connect to Your AI IDE

Copy and paste the appropriate snippet into your IDE's MCP configuration settings:

#### 🟦 Cursor IDE
File: `%APPDATA%\Cursor\User\settings\cursor_settings.json` (Windows) or `~/.cursor/rules/cursor_settings.json` (Mac/Linux)

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

#### 🟩 VS Code / Claude Extension / Antigravity AI
File: `settings.json` (Press `Ctrl+Shift+P` → *"Open User Settings (JSON)"*)

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

---

### 3️⃣ Step 3 — Instruct Your AI Assistant

Open any web project in your IDE, open the AI prompt panel, and request:

```text
"Use Deploy MCP to deploy my project to Vercel."
```

*(or simply: "Deploy my website")*

---

### 4️⃣ Step 4 — Autonomous Execution Engine

Once invoked, Deploy MCP coordinates the full lifecycle end-to-end:

```text
┌────────────────────────────────────────────────────────────────────────┐
│  1. 🔍 Detect Framework   → Scans package.json & directory markers    │
│  2. 🔨 Validate Build     → Executes dry-run build locally             │
│  3. 🌿 Audit Git State    → Checks uncommitted files & secret leaks    │
│  4. 🔐 Sync Environment   → Directly pushes local .env keys to Vercel  │
│  5. 🚀 Trigger Deployment → Calls Vercel REST API                      │
│  6. ⏳ Poll Telemetry     → Awaits READY status from Vercel servers    │
│  7. 🩺 Self-Diagnose      → Reads raw logs & guides code fix if needed │
│  8. 🎉 Deliver Live Link  → Returns active production URL              │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 🧰 Comprehensive Tool Suite

Deploy MCP equips your AI assistant with **20 purpose-built tools** categorized across 6 core functional modules:

### 📦 Smart Deployment & Build Validation

| Tool | Capability & Description |
|---|---|
| `smart_deploy` | **Master Deployment Pipeline** — Detects framework, checks local build, syncs environment keys, triggers deployment, polls status, and auto-diagnoses build errors. |
| `detect_project` | Inspects directory structure and configuration to determine project framework (Next.js, Vite, React, Vue, HTML, etc.) and build scripts. |
| `check_project` | Runs local build dry-run validation to ensure clean compilation prior to cloud upload. |
| `project_report` | Generates a full pre-flight audit report covering Git status, build health, and environment synchronization. |
| `delete_project` | Permanently deletes a Vercel project with safety confirmation (requires explicit native OS dialog confirmation). |

### 🌐 Custom Domain & Alias Management

| Tool | Capability & Description |
|---|---|
| `check_domain_availability` | Queries Vercel domain registry to verify availability. If taken, automatically computes and presents the top 2 best alternative domain names. |
| `manage_domain` | Assigns custom domains or Vercel aliases to projects, with optional 308 permanent redirect or old domain removal. |

### 🔐 Secret & Environment Security Isolation

> 🛡️ **Security Architecture**: Environment values remain strictly on your local device. The AI model receives key names and validation metadata only.

| Tool | Capability & Description |
|---|---|
| `scan_env` | Audits local `.env` files and returns sanitized variable key names (redacting all confidential values). |
| `compare_env` | Performs key diffing between local `.env` declarations and target Vercel project settings. |
| `sync_env` | Securely transmits missing environment variables directly from local environment storage to Vercel REST endpoints. |
| `create_env_example` | Automatically synthesizes a sanitized `.env.example` template with blanked default values. |
| `validate_environment_variables` | Cross-checks runtime environment variables against expected project schema definitions. |
| `check_env_leak` | 🚨 Audits Git index via `git ls-files` to flag accidentally committed `.env` files. |

### 🌿 Version Control & Safety Matrix

| Tool | Capability & Description |
|---|---|
| `git_status` | Returns git repository state, modified file count, current branch, and uncommitted change summary. |
| `git_commit_and_push` | Stages modified files, generates formatted git commit, and pushes to configured upstream repository. |

### ☁️ Vercel Infrastructure & Telemetry

| Tool | Capability & Description |
|---|---|
| `deploy_to_vercel` | Initiates direct cloud deployment via Vercel REST deployment API endpoints. |
| `get_deployment_status` | Polls current deployment pipeline status (`BUILDING`, `READY`, `ERROR`). |
| `get_deployment_logs` | Fetches raw build log stdout/stderr stream from Vercel build nodes. |
| `diagnose_build_failure` | Parses raw error output lines and generates structured, machine-actionable repair instructions for the AI assistant. |

### ⚡ System & Version Management

| Tool | Capability & Description |
|---|---|
| `check_for_updates` | Queries npm registry for new Deploy MCP releases, features, and performance enhancements. |

---

## 🔒 Architecture & Security Model

Deploy MCP is designed with a **Zero-Trust Security Boundary** to ensure project secrets and access tokens are never exposed to external AI APIs:

```
 ┌──────────────────────────────────────────────────────────────────┐
 │  AI IDE (Cursor / VS Code / Antigravity)                         │
 │                                                                  │
 │  Prompt: "Deploy my website to Vercel"                           │
 └─────────────────────────────────┬────────────────────────────────┘
                                   │ MCP Stdio Channel
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

### Secret Protection Layer

```text
❌  INSECURE ARCHITECTURE (Secret exposed to LLM context):
    .env values → LLM Context Window → MCP Server → Vercel API

✅  DEPLOY MCP ZERO-TRUST MODEL (Secret isolated locally):
    .env values ───[ Local Machine Execution ]───> Vercel API
                             │
                  (AI sees key NAMES only)
```

---

## 🛠 Troubleshooting & Diagnostics

### ❌ "Vercel not authenticated" or API Token Error

Re-run the configuration wizard to refresh your access token:

```bash
npx @tusharjain-19/deploy-mcp setup
```

Ensure your token generated on [Vercel Account Tokens](https://vercel.com/account/tokens) has **Full Access** scope enabled.

---

### ❌ "MCP server not detected in IDE"

1. Validate syntax in your IDE configuration file (`settings.json` or `cursor_settings.json`).
2. **Perform a full IDE restart** (close all active windows and reopen).
3. Test server startup manually in terminal:
   ```bash
   npx @tusharjain-19/deploy-mcp
   ```
   Expected output: `🚀 Deploy MCP server running on stdio`

---

### ❌ Build Failure During Cloud Compilation

Ask your AI assistant: *"Diagnose the build failure and fix it"*. 

Deploy MCP will invoke `diagnose_build_failure` to extract Vercel build logs, locate syntax or dependency errors, and guide the AI to edit broken files directly.

Common fixes:
- **Missing node modules**: Run `npm install` locally.
- **Node version mismatch**: Specify `"engines": { "node": "20.x" }` inside `package.json`.
- **Missing environment keys**: Run `compare_env` and ask AI to sync missing secrets.

---

### ❌ Sensitive `.env` Files Tracked by Git

If `check_env_leak` detects `.env` files in your git repository:

```bash
# Untrack sensitive files while preserving local copies
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
git rm --cached .env .env.local
git commit -m "fix(security): untrack local environment files"
```

---

## ⚙️ Development & Local Testing

To contribute or extend Deploy MCP locally from source:

```bash
# 1. Clone source repository
git clone https://github.com/Tusharjain-19/deploy-mcp.git
cd deploy-mcp/mcp-server

# 2. Install dependencies
npm install

# 3. Compile TypeScript
npm run build

# 4. Execute setup wizard
npm run setup

# 5. Run local development mode
npm run dev
```

### Interactive MCP Inspector Test GUI

Launch the official MCP Inspector to test all 20 tools interactively in a web interface without needing an IDE restart:

```bash
npx @modelcontextprotocol/inspector npx tsx src/index.ts
```

---

## 📁 Repository Structure

```
mcp-server/
├── src/
│   ├── index.ts                    ← Main MCP Server Entry & Tool Registry
│   │
│   ├── tools/                      ← Modular Tool Implementation Suite
│   │   ├── smart-deploy.ts         ← Master Deployment Pipeline
│   │   ├── domains.ts              ← Domain Availability & Custom DNS Management
│   │   ├── check-project.ts        ← Local Compilation & Build Validation
│   │   ├── deploy.ts               ← Vercel Deployment REST Client
│   │   ├── diagnose.ts             ← Failure Analysis Engine
│   │   ├── env-vars.ts             ← Redacted Env Scanner & Diff Engine
│   │   ├── git.ts                  ← Git Repository Telemetry & Secret Leak Auditor
│   │   ├── logs.ts                 ← Telemetry & Build Log Extractor
│   │   ├── delete-project.ts       ← Safe Project Removal Engine
│   │   └── project-report.ts       ← Comprehensive Pre-flight Inspector
│   │
│   ├── vercel/
│   │   └── client.ts               ← Native Vercel REST API Client
│   │
│   ├── utils/                      ← Shared Helpers, Rate Limiting & Utilities
│   │   ├── config.ts               ← Encrypted Local Credentials Manager
│   │   ├── filesystem.ts           ← Safe Disk I/O Utilities
│   │   ├── framework-detector.ts   ← Project Ecosystem Classifier
│   │   ├── rate-limiter.ts         ← Operation Rate Limiter
│   │   └── version-checker.ts      ← Registry Release Monitor
│   │
│   └── cli/
│       ├── index.ts                ← Executable CLI Entry Point
│       └── setup.ts                ← Interactive Config & Token Wizard
│
├── dist/                           ← Compiled Production Artifacts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🗺 Roadmap

| Milestone | Status | Key Deliverables |
|---|---|---|
| **v1.0** | ✅ Production | Vercel REST API deployment, auto-diagnose self-healing, zero-trust env sync, Git security matrix, domain management |
| **v2.0** | 🔄 Planned | Multi-cloud deployment targets (Netlify, Railway, Render, Cloudflare Pages) & team organization sharing |

---

## 🤝 Contributing

Contributions are welcomed! Help build the ultimate deployment tooling for AI pair programmers:

```bash
git clone https://github.com/YOUR-USERNAME/deploy-mcp.git
cd deploy-mcp/mcp-server
npm install
git checkout -b feature/amazing-feature
npm run build
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

Please open an issue before submitting major structural refactors.

---

## 📄 License

Distributed under the **MIT License**. Free for commercial and open-source projects. See [LICENSE](LICENSE) for details.

---

<div align="center">

**Crafted with care by Tushar Jain**

[Website](https://tusharjain.in) • [GitHub](https://github.com/Tusharjain-19)

⭐ Star this repository if Deploy MCP accelerated your development workflow!

[![GitHub stars](https://img.shields.io/github/stars/Tusharjain-19/deploy-mcp?style=social)](https://github.com/Tusharjain-19/deploy-mcp)

</div>
