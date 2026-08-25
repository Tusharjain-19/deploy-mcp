<div align="center">

# 🚀 Deploy MCP

### Deploy your website from your AI IDE with a single command

[![npm version](https://img.shields.io/npm/v/deploy-mcp?color=0076D1&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/deploy-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![MCP](https://img.shields.io/badge/Model_Context_Protocol-FF6B35?style=for-the-badge)](https://modelcontextprotocol.io/)

**Built for vibe coders. Zero server costs. Open source forever.**

[Installation](#-installation) • [Usage](#-usage) • [Tools](#-available-tools) • [How It Works](#-how-it-works) • [Security](#-security) • [Contributing](#-contributing)

</div>

---

## ✨ What is Deploy MCP?

Deploy MCP is a **free, open-source Model Context Protocol (MCP) server** that bridges your AI coding assistant (Cursor, VS Code + Claude, etc.) with Vercel deployment — so you can go from "I built this" to "It's live" without ever leaving your IDE.

### The Problem It Solves

```
Vibe coder builds a website with AI ✅
Vibe coder gets stuck at deployment ❌
  - Opens Vercel dashboard
  - Manually configures project
  - Copies 15 environment variables one by one
  - Wonders why DATABASE_URL is missing
  - Gets error: "Build failed"
  - Closes laptop
```

### The Solution

```
User: "Deploy this website."

AI (via Deploy MCP):
  ✓ Next.js detected
  ✓ Build check passed
  ✓ Environment variables verified (secrets never exposed)
  ✓ Deployed to Vercel

Your website is live at https://my-portfolio.vercel.app 🎉
```

---

## 🛠 Technology Stack

| Technology | Purpose | Version |
|---|---|---|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) | Runtime | 20+ |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | Language | 7.x |
| ![MCP SDK](https://img.shields.io/badge/MCP_SDK-FF6B35?style=flat) | Protocol Layer | @modelcontextprotocol/server v2 |
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Deployment Platform | REST API v9/v10/v13 |
| ![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat) | Schema Validation | v4 |

### Compatible AI IDEs

| IDE | Status |
|---|---|
| ![Cursor](https://img.shields.io/badge/Cursor-000000?style=flat&logo=cursor&logoColor=white) | ✅ Fully Supported |
| ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white) + Claude Extension | ✅ Fully Supported |
| ![Antigravity](https://img.shields.io/badge/Antigravity-6C63FF?style=flat&logo=visual-studio-code&logoColor=white) (VS Code + Antigravity AI) | ✅ Fully Supported |
| Any MCP-compatible IDE | ✅ Should work |

### Supported Frameworks

| Framework | Detection | Deployment |
|---|---|---|
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white) Next.js | ✅ | ✅ |
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) React + Vite | ✅ | ✅ |
| ![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=flat&logo=vue.js&logoColor=4FC08D) Vue 3 | ✅ | ✅ |
| ![Astro](https://img.shields.io/badge/Astro-FF5D01?style=flat&logo=astro&logoColor=white) Astro | ✅ | ✅ |
| ![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=flat&logo=svelte&logoColor=FF3E00) Svelte | ✅ | ✅ |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) Static HTML | ✅ | ✅ |

### Package Manager Support

![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=yarn&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat&logo=pnpm&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=flat&logo=bun&logoColor=white)

---

## 📦 Installation

### One-time Setup (2 minutes)

```bash
# 1. Run the setup wizard
npx deploy-mcp setup
```

The wizard will:
1. Ask for your Vercel Personal Access Token
2. Verify it works by authenticating with Vercel
3. Store it securely on your local machine at `~/.deploy-mcp/config.json`
4. Print the exact config to paste into your IDE

### Get Your Vercel Token

1. Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
2. Click **Create** → choose **Full Access**
3. Copy the token
4. Paste it when the wizard asks

### Connect to Your IDE

**Cursor** — Add to `%APPDATA%\Cursor\User\settings\cursor_settings.json` (Windows) or `~/.cursor/rules/cursor_settings.json` (Mac/Linux):

```json
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "deploy-mcp"],
      "disabled": false
    }
  }
}
```

**VS Code + Claude Extension** — Add to `settings.json`:

```json
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "deploy-mcp"]
    }
  ]
}
```

**Antigravity (VS Code + Antigravity AI)** — Add to `settings.json`:

```json
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "deploy-mcp"]
    }
  ]
}
```

> **Restart your IDE** after updating the config.

---

## 🚀 Usage

### In Your AI IDE (Recommended)

Open any web project in Cursor/VS Code and just say:

```
"Deploy this website"
```

The AI will automatically call the right tools in sequence:

```
1. project_report()       → Full pre-flight check
2. detect_project()       → Identify framework & build system
3. check_project()        → Validate the build works
4. scan_env()             → Check environment variables (names only, never values)
5. compare_env()          → Diff local vs Vercel env vars
6. sync_env()             → Upload missing secrets directly to Vercel (never through AI)
7. deploy_to_vercel()     → Execute the deployment
8. get_deployment_status() → Poll until live
9. Returns your live URL! 🎉
```

### CLI Commands

```bash
# First-time setup
npx deploy-mcp setup

# Run MCP server manually (used by IDEs automatically)
npx deploy-mcp
```

---

## 🧰 Available Tools

Deploy MCP exposes **15 tools** to your AI agent, organized into 4 modules:

### 📦 Project Module

#### `detect_project`
Detects the framework and build configuration of a project.

```json
Input:  { "projectPath": "/path/to/my-website" }

Output: {
  "framework": "Next.js",
  "packageManager": "npm",
  "nodeVersion": "20",
  "buildCommand": "npm run build",
  "detected": true
}
```

#### `check_project`
Validates the project is ready to deploy by running a full build check.

```json
Input:  { "projectPath": "/path/to/my-website" }

Output: {
  "packageJsonExists": true,
  "buildSucceeds": true,
  "gitRepository": true,
  "warnings": ["No .env.local found"],
  "errors": []
}
```

#### `project_report`
Master pre-flight tool — combines framework, git, build, and environment checks into one comprehensive report.

```json
Input:  { "projectPath": "/path/to/my-website", "projectName": "my-portfolio" }

Output: {
  "projectDetails": { ... },
  "git": { "branch": "main", "uncommittedChanges": 2, "leakDetected": false },
  "buildCheck": { "buildSucceeds": true },
  "environment": { "scan": { "variables": [...] }, "diff": { ... } }
}
```

---

### 🔐 Environment Module

> **Security First**: All environment tools operate on **variable names only**. Secret values are **never returned to the AI** — they are read locally by the MCP process and transmitted directly to Vercel.

#### `scan_env`
Scans local `.env` files and classifies variables by sensitivity. Values are never exposed.

```json
Input:  { "projectPath": "/path/to/my-website" }

Output: {
  "variables": [
    { "key": "DATABASE_URL",              "classification": "Secret" },
    { "key": "SUPABASE_SERVICE_ROLE_KEY", "classification": "Secret" },
    { "key": "NEXT_PUBLIC_SUPABASE_URL",  "classification": "Public" }
  ],
  "message": "3 environment variables detected. Values hidden for security."
}
```

**Classification Rules:**
| Pattern | Classification |
|---|---|
| `NEXT_PUBLIC_*` | 🟢 Public (safe for browser) |
| `VITE_*` | 🟢 Public (safe for browser) |
| `*ANON_KEY*` | 🟡 Client-visible |
| Everything else | 🔴 Secret |

#### `compare_env`
Diffs your local env variables against what's configured on Vercel. Shows what's missing, without revealing values.

```json
Input:  { "projectPath": "/path", "projectName": "my-portfolio" }

Output: {
  "diff": [
    { "key": "DATABASE_URL",  "local": "Exists", "vercel": "Missing",  "conflict": false },
    { "key": "SUPABASE_URL",  "local": "Exists", "vercel": "Exists",   "conflict": true  }
  ],
  "summary": { "missingInVercel": 1, "configuredInVercel": 1, "conflicts": 1 }
}
```

#### `sync_env`
Safely uploads specific environment variables from your machine directly to Vercel. Values never pass through the AI.

```json
Input: {
  "projectPath": "/path",
  "projectName": "my-portfolio",
  "keysToSync": ["DATABASE_URL", "STRIPE_SECRET_KEY"],
  "overwrite": false
}

Output: {
  "success": true,
  "synced": ["DATABASE_URL", "STRIPE_SECRET_KEY"],
  "skipped": []
}
```

> ⚠️ `overwrite: false` (default) will **skip** variables already on Vercel to prevent accidental overwrites of production secrets.

#### `create_env_example`
Generates a `.env.example` file from your local `.env` with **all values blanked out** — safe to commit to GitHub.

```json
Input:  { "projectPath": "/path/to/my-website" }

Output: { "success": true, "message": "Created .env.example with redacted values." }
```

Generated file:
```env
DATABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_SUPABASE_URL=
```

#### `validate_environment_variables`
Compares `.env.example` required keys against what you have locally configured.

---

### 🌿 Git Module

#### `git_status`
Checks the git repository status of a project.

```json
Input:  { "projectPath": "/path/to/my-website" }

Output: {
  "hasRepository": true,
  "branch": "main",
  "uncommittedChanges": 3,
  "files": ["src/app/page.tsx", "src/components/Navbar.tsx"]
}
```

#### `check_env_leak`
🚨 **Security check**: Uses `git ls-files` to detect if any `.env` files are accidentally tracked by Git.

```json
Input:  { "projectPath": "/path/to/my-website" }

Output: {
  "leakDetected": true,
  "trackedFiles": [".env.local"]
}
```

If a leak is detected, the AI will warn you and guide you through removing it from tracking safely.

#### `git_commit_and_push`
Commits and pushes all local changes. **Requires explicit user instruction.**

```json
Input: { "projectPath": "/path", "message": "Fix: update API endpoint" }
Output: { "success": true, "commitHash": "a1b2c3d" }
```

---

### ☁️ Vercel Module

#### `deploy_to_vercel`
Triggers an actual deployment of your project to Vercel.

```json
Input: { "projectPath": "/path/to/my-website", "projectName": "my-portfolio" }
Output: { "success": true, "deploymentId": "dpl_xxxxx", "deploymentUrl": "https://my-portfolio.vercel.app" }
```

#### `get_deployment_status`
Polls the latest deployment status for a project.

```json
Input:  { "projectName": "my-portfolio" }
Output: { "success": true, "status": "READY", "deploymentUrl": "https://my-portfolio.vercel.app" }
```

#### `get_deployment_logs`
Fetches the raw build logs from Vercel for debugging.

```json
Input:  { "projectName": "my-portfolio" }
Output: { "success": true, "logs": ["Installing dependencies...", "Error: Module not found..."], "errorMessage": "..." }
```

#### `diagnose_build_failure`
Parses raw build logs and returns a structured, AI-readable diagnosis.

```json
Input:  { "logs": ["Error: Module not found: '@/components/Navbar'"] }
Output: {
  "errorType": "MISSING_MODULE",
  "issue": "Missing module: @/components/Navbar",
  "suggestion": "Run 'npm install @/components/Navbar' or check your import path."
}
```

---

## ⚙️ How It Works

### Architecture Overview

```
 ┌─────────────────────────────────────────────────┐
 │  Your IDE (Cursor / VS Code)                    │
 │                                                 │
 │  AI Agent says: "Deploy this"                   │
 └───────────────────┬─────────────────────────────┘
                     │ MCP Protocol (stdio)
                     ▼
 ┌─────────────────────────────────────────────────┐
 │  Deploy MCP Server (runs on your machine)       │
 │                                                 │
 │  ├── detect_project()   → Read package.json     │
 │  ├── check_project()    → Run build locally      │
 │  ├── scan_env()         → Read .env (names only) │
 │  ├── sync_env()         → Push secrets to Vercel │
 │  └── deploy_to_vercel() → Trigger deployment     │
 └───────────────────┬─────────────────────────────┘
                     │ Vercel REST API (Bearer token)
                     ▼
 ┌─────────────────────────────────────────────────┐
 │  Vercel                                         │
 │  ├── Creates/finds your project                 │
 │  ├── Receives encrypted env vars                │
 │  ├── Builds your site                           │
 │  └── Returns live URL                           │
 └─────────────────────────────────────────────────┘
```

### How .env Syncing Works (Security Model)

```
❌  WRONG way (secret touches the AI):
   .env → AI Model → MCP → Vercel

✅  RIGHT way (secret never leaves your machine):
   .env → MCP Process → Vercel API directly
                 ↑
          AI only sees key NAMES, never values
```

### Transport

Deploy MCP uses **stdio transport** — the standard for local npm packages. When you run `npx deploy-mcp`, it starts a process that communicates with your IDE via stdin/stdout. This means:
- ✅ No server required
- ✅ No cloud account needed (except Vercel, which is yours)
- ✅ Runs entirely on your machine
- ✅ Zero infrastructure cost

---

## 🔐 Security

### Design Principles

| Principle | Implementation |
|---|---|
| **Secrets never touch the AI** | `scan_env` returns only key names + classifications |
| **Secrets never touch our servers** | There are no servers. MCP runs locally. |
| **No overwrite without consent** | `sync_env` with `overwrite: false` by default |
| **Leak detection** | `check_env_leak` scans `git ls-files` before deploy |
| **Token stored locally** | `~/.deploy-mcp/config.json` — your machine only |
| **No hardcoded credentials** | Zero hardcoded tokens in the codebase |

### What This MCP Does NOT Do

- ❌ Send your secret values to any AI model
- ❌ Store your Vercel token on any external server
- ❌ Execute arbitrary shell commands provided by the AI
- ❌ Access files outside of specified project paths
- ❌ Automatically overwrite production secrets

### Secret Storage

```
~/.deploy-mcp/
└── config.json     ← Your Vercel token (local machine only)
```

---

## 📁 Project Structure

```
deploy-mcp/
│
├── src/
│   ├── index.ts                    # MCP server entry point (15 tools)
│   │
│   ├── tools/
│   │   ├── check-project.ts        # Build validation
│   │   ├── deploy.ts               # Vercel deployment trigger
│   │   ├── diagnose.ts             # Build failure diagnosis
│   │   ├── env-vars.ts             # .env scanning, diffing, syncing
│   │   ├── git.ts                  # Git status, commit, leak detection
│   │   ├── logs.ts                 # Deployment log fetching
│   │   └── project-report.ts       # Master pre-flight report
│   │
│   ├── vercel/
│   │   └── client.ts               # Vercel REST API wrapper
│   │
│   ├── utils/
│   │   ├── config.ts               # Token storage/retrieval
│   │   ├── filesystem.ts           # File reading utilities
│   │   └── framework-detector.ts   # Framework & package manager detection
│   │
│   └── cli/
│       ├── index.ts                # CLI entry point
│       └── setup.ts                # Interactive setup wizard
│
├── dist/                           # Compiled JavaScript (git-ignored)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🔧 Development

### Prerequisites

- Node.js 20+
- npm / yarn / pnpm
- Git

### Clone & Build

```bash
# Clone the repo
git clone https://github.com/Tusharjain-19/deploy-mcp.git
cd deploy-mcp

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run locally
npm run dev
```

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Build | `npm run build` | Compile TypeScript to `dist/` |
| Dev | `npm run dev` | Run server with tsx (no compile) |
| Setup | `npm run setup` | Run the interactive setup wizard |

### Test with MCP Inspector

```bash
npx @modelcontextprotocol/inspector npx tsx src/index.ts
```

This opens a browser-based UI where you can test every tool interactively without needing Cursor.

---

## 🔍 Troubleshooting

### "Module not found" error
```bash
npm run build
```

### "Vercel not authenticated"
```bash
npx deploy-mcp setup
```

### "MCP not showing in Cursor"
1. Check your `cursor_settings.json` has the correct config (see [Installation](#-installation))
2. Restart Cursor completely
3. Test the server manually: `npx @modelcontextprotocol/inspector npx tsx src/index.ts`

### "Cannot find Vercel CLI"
```bash
npm install -g vercel
```

### Environment variables not syncing
- Ensure your Vercel token has **Full Access** permissions
- Check that your project name on Vercel matches what you pass to `sync_env`

---

## 🗺 Roadmap

| Version | Status | Features |
|---|---|---|
| **v1.0** | ✅ Done | Project detection, build check, Vercel deployment, deployment status |
| **v1.5** | ✅ Done | .env scanning (no secret leakage), env diff, env sync, git safety, project report |
| **v2.0** | 🔄 Planned | AI error auto-fix loop, preview deployments, rollback |
| **v3.0** | 💭 Future | Netlify/Railway support, GitHub integration, team deployments |

---

## 🤝 Contributing

Contributions are welcome! This is a free, open-source project built for the community.

```bash
# Fork and clone
git clone https://github.com/Tusharjain-19/deploy-mcp.git

# Create a feature branch
git checkout -b feature/my-feature

# Make changes and commit
git commit -m "feat: add my feature"

# Push and open a PR
git push origin feature/my-feature
```

Please open an issue first for large changes.

---

## 📄 License

MIT — free forever. See [LICENSE](LICENSE).

---

<div align="center">

**Built with ❤️ for vibe coders everywhere**

⭐ Star this repo if it saved you time!

[![GitHub stars](https://img.shields.io/github/stars/Tusharjain-19/deploy-mcp?style=social)](https://github.com/Tusharjain-19/deploy-mcp)

</div>
