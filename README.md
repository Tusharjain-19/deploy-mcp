<div align="center">

# 🚀 Deploy MCP

### Deploy any website to Vercel — straight from your AI IDE, in seconds.

[![M8ven Score](https://m8ven.ai/badge/mcp/tusharjain-19-deploy-mcp-erwsd3)](https://m8ven.ai/mcp/tusharjain-19-deploy-mcp-erwsd3)
[![npm version](https://img.shields.io/npm/v/@tusharjain-19/deploy-mcp?color=0076D1&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/@tusharjain-19/deploy-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**Free. Open source. Zero server costs. Built for vibe coders.**

[Quick Start](#-quick-start-deploy-in-3-steps) • [IDE Setup](#-connect-to-your-ide) • [Tools](#-available-tools) • [Troubleshooting](#-troubleshooting) • [Contributing](#-contributing)

</div>

---

## ✨ What is Deploy MCP?

Deploy MCP is a **free, open-source MCP (Model Context Protocol) server** that lets your AI coding assistant (Cursor, VS Code, Antigravity, etc.) deploy your website to Vercel automatically — with full environment variable syncing, build validation, and git safety checks.

Just say **"Deploy this"** in your AI chat. That's it.

```
You:  "Deploy this website."

AI:   ✓ Next.js detected
      ✓ Build check passed
      ✓ Environment variables verified (secrets never exposed)
      ✓ Deployed to Vercel

      🎉 Live at: https://my-portfolio.vercel.app
```

---

## ⚡ Easy 4-Step Quick Start Guide

Deploying your website takes less than 2 minutes. Follow these 4 easy steps:

---

### 1️⃣ Step 1 — Run the Setup Command (One-Time Only)

Open your terminal in any directory and run:

```bash
npx @tusharjain-19/deploy-mcp setup
```

> 💡 **Tip:** If you want to use the short `deploymcp setup` command, install it globally once:
> ```bash
> npm install -g @tusharjain-19/deploy-mcp
> deploymcp setup
> ```

This interactive wizard will:
1. Guide you to get your free **Vercel Personal Access Token** ([vercel.com/account/tokens](https://vercel.com/account/tokens))
2. Save your token securely on your machine (`~/.deploy-mcp/config.json`)
3. Provide the exact JSON configuration to paste into your IDE!

---

### 2️⃣ Step 2 — Add Deploy MCP to Your AI IDE

Copy and paste the configuration snippet for your IDE:

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

> 🔄 **Restart your IDE** after saving the file.

---

### 3️⃣ Step 3 — Open Your Project & Ask Your AI Model!

Open your website project folder in your IDE, open your AI chat (Claude / Cursor / Antigravity), and simply say:

```text
"Use Deploy MCP to deploy my website"
```
*(or simply "Deploy my website to Vercel")*

---

### 4️⃣ Step 4 — Sit Back & Relax! The AI Model Does Everything Automatically

Once you tell your AI model to deploy, **it handles 100% of the workflow autonomously**:

```text
1. 🔍 Detects Framework   → Next.js, React, Vite, Vue, HTML, etc.
2. 🔨 Validates Build     → Ensures local project builds without errors
3. 🌿 Checks Git Safety   → Warns if uncommitted changes or leaked secrets exist
4. 🔐 Syncs Secrets       → Securely uploads missing .env keys to Vercel
5. 🚀 Deploys to Vercel    → Triggers deployment via Vercel REST API
6. ⏳ Auto-Polls Status   → Waits until deployment turns READY
7. 🩺 Auto-Diagnoses      → If build fails, reads logs & automatically fixes code!
8. 🎉 Returns Live URL    → Gives you your live production URL!
```

---

## 🔄 Version Control (Git) — Built In

Deploy MCP has **full Git support** built in. Your AI can:

| What it does | Command to ask AI |
|---|---|
| Check uncommitted changes | *"Check my git status"* |
| Commit & push before deploy | *"Commit my changes and deploy"* |
| Detect leaked `.env` files | *"Check if my .env is in git"* |

> **Best practice:** Always commit your code before deploying. Ask the AI: *"Commit my changes with message 'fix: update homepage' and then deploy"*

The git tools work automatically during deployment — if you have uncommitted changes, the AI will warn you and ask if you want to commit first.

---

## 🧰 Available Tools

Your AI has access to **16 tools** across 4 modules:

### 📦 Project Tools

| Tool | What it does |
|---|---|
| `smart_deploy` | **All-in-one deploy** — detects, checks, syncs env, deploys, polls, and auto-diagnoses failures |
| `detect_project` | Detects framework (Next.js, React, Vue, etc.) and build config |
| `check_project` | Validates the project can build successfully |
| `project_report` | Full pre-flight report — git, build, env, everything |
| `delete_project` | Permanently deletes a Vercel project (requires your manual approval via OS popup) |

### 🔐 Environment Variable Tools

> **Security:** Secret values **never** reach the AI. Only key names are shown. Values go directly from your machine to Vercel.

| Tool | What it does |
|---|---|
| `scan_env` | Lists all local `.env` variables (names only, values hidden) |
| `compare_env` | Shows what's missing on Vercel vs. your local `.env` |
| `sync_env` | Uploads missing secrets directly from your machine to Vercel |
| `create_env_example` | Generates a safe `.env.example` file with all values blanked out |
| `validate_environment_variables` | Checks your local env against `.env.example` requirements |
| `check_env_leak` | 🚨 Detects if any `.env` files are accidentally tracked by Git |

### 🌿 Git Tools

| Tool | What it does |
|---|---|
| `git_status` | Shows branch, uncommitted files, and change count |
| `git_commit_and_push` | Commits all changes and pushes to remote |

### ☁️ Vercel Tools

| Tool | What it does |
|---|---|
| `deploy_to_vercel` | Triggers deployment |
| `get_deployment_status` | Polls current deployment status |
| `get_deployment_logs` | Fetches raw build logs for debugging |
| `diagnose_build_failure` | Parses logs and gives AI-readable fix suggestions |

---

## 🛠 Troubleshooting

### ❌ "Vercel not authenticated" or token error

```bash
npx @tusharjain-19/deploy-mcp setup
```

Re-run setup and paste a fresh token. Make sure the token has **Full Access** scope.

---

### ❌ "MCP not showing up in my IDE"

1. Double-check the JSON config you pasted — look for missing commas or brackets
2. **Fully restart your IDE** (close all windows, reopen)
3. Test the server manually:
   ```bash
   npx @tusharjain-19/deploy-mcp
   ```
   You should see: `Deploy MCP server running on stdio`

---

### ❌ "Build failed" during deployment

Ask your AI: *"Diagnose the build failure and fix it"* — the `diagnose_build_failure` tool will automatically parse the error logs and tell the AI exactly what to fix.

Common causes:
- Missing `npm install` → run `npm install` in your project
- Wrong Node.js version → add `"engines": { "node": "20" }` to `package.json`
- Missing environment variable → ask AI to sync your env vars

---

### ❌ "Environment variables not syncing"

- Make sure your Vercel token has **Full Access** permissions
- Check that the project name you tell the AI **exactly matches** your Vercel project name
- Run: *"Compare my local env vars with Vercel"* — the AI will show exactly what's missing

---

### ❌ ".env file accidentally in Git"

Ask your AI: *"Check if my .env is tracked by git"*

The `check_env_leak` tool will detect it. If found, fix it:

```bash
# Remove .env from git tracking (keeps the file locally)
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
git rm --cached .env
git rm --cached .env.local
git commit -m "fix: remove .env from git tracking"
```

---

### ❌ "Module not found" error locally

```bash
npm install
npm run build
```

---

### ❌ "Cannot find Vercel CLI"

Deploy MCP uses the **Vercel REST API directly** — no Vercel CLI needed. But if you want the CLI anyway:

```bash
npm install -g vercel
```

---

## ⚙️ How It Works

```
 ┌─────────────────────────────────────────────────┐
 │  Your IDE (Cursor / VS Code / Antigravity)      │
 │                                                 │
 │  You say: "Deploy this"                         │
 └───────────────────┬─────────────────────────────┘
                     │ MCP Protocol (stdio)
                     ▼
 ┌─────────────────────────────────────────────────┐
 │  Deploy MCP Server (runs on YOUR machine)       │
 │                                                 │
 │  ├── detect_project()   → Read package.json     │
 │  ├── check_project()    → Run build locally     │
 │  ├── scan_env()         → Read .env names only  │
 │  ├── sync_env()         → Push secrets directly │
 │  └── deploy_to_vercel() → Trigger deployment    │
 └───────────────────┬─────────────────────────────┘
                     │ Vercel REST API
                     ▼
 ┌─────────────────────────────────────────────────┐
 │  Vercel                                         │
 │  ├── Finds or creates your project              │
 │  ├── Receives encrypted env vars                │
 │  ├── Builds your site                           │
 │  └── Returns your live URL 🎉                   │
 └─────────────────────────────────────────────────┘
```

### Security Model

```
❌  INSECURE (secret touches the AI):
    .env → AI Model → MCP → Vercel

✅  DEPLOY MCP (secret never leaves your machine):
    .env → MCP Process → Vercel API
               ↑
      AI sees key NAMES only, never values
```

---

## 🔧 Development Setup

Want to run Deploy MCP locally from source?

```bash
# 1. Clone the repo
git clone https://github.com/Tusharjain-19/deploy-mcp.git
cd deploy-mcp/mcp-server

# 2. Install dependencies
npm install

# 3. Build TypeScript
npm run build

# 4. Run setup wizard
npm run setup

# 5. Start the server (IDEs do this automatically)
npm run dev
```

### Test All Tools Without an IDE

```bash
npx @modelcontextprotocol/inspector npx tsx src/index.ts
```

This opens a browser UI where you can call every tool manually and see outputs.

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Build | `npm run build` | Compile TypeScript to `dist/` |
| Dev | `npm run dev` | Run server directly with tsx |
| Setup | `npm run setup` | Run the setup wizard |

---

## 📁 Project Structure

```
mcp-server/
├── src/
│   ├── index.ts                    ← MCP server entry (all 16 tools registered)
│   │
│   ├── tools/
│   │   ├── smart-deploy.ts         ← All-in-one deploy with auto-diagnose
│   │   ├── check-project.ts        ← Build validation
│   │   ├── deploy.ts               ← Vercel deployment trigger
│   │   ├── diagnose.ts             ← Build failure diagnosis
│   │   ├── env-vars.ts             ← .env scanning, diffing, syncing
│   │   ├── git.ts                  ← Git status, commit, leak detection
│   │   ├── logs.ts                 ← Deployment log fetching
│   │   ├── delete-project.ts       ← Safe project deletion with OS prompt
│   │   └── project-report.ts       ← Master pre-flight report
│   │
│   ├── vercel/
│   │   └── client.ts               ← Vercel REST API wrapper
│   │
│   ├── utils/
│   │   ├── config.ts               ← Token storage/retrieval
│   │   ├── filesystem.ts           ← File reading utilities
│   │   └── framework-detector.ts   ← Framework & package manager detection
│   │
│   └── cli/
│       ├── index.ts                ← CLI entry point
│       └── setup.ts                ← Interactive setup wizard
│
├── dist/                           ← Compiled JS (auto-generated, git-ignored)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🗺 Roadmap

| Version | Status | Features |
|---|---|---|
| **v1.0** | ✅ Done | Project detection, build check, Vercel deployment, status polling |
| **v1.5** | ✅ Done | Env scanning (no leakage), env diff, env sync, git tools, project report |
| **v1.6** | ✅ Done | Smart deploy (auto-diagnose failures), safe project deletion |
| **v2.0** | 🔄 Planned | AI error auto-fix loop, preview deployments, rollback |
| **v3.0** | 💭 Future | Netlify/Railway support, GitHub integration, team deployments |

---

## 🔄 Automatic Updates

Because your IDE config uses `npx -y @tusharjain-19/deploy-mcp`, Node.js will **automatically pull the latest version from npm** every time your IDE starts the server. No manual update commands needed — you always get the latest features and fixes automatically.

---

## 🤝 Contributing

Contributions are welcome! This is a free, open-source project built for the community.

```bash
# Fork the repo, then:
git clone https://github.com/YOUR-USERNAME/deploy-mcp.git
cd deploy-mcp/mcp-server
npm install

# Create a feature branch
git checkout -b feature/my-feature

# Make changes, then build and test
npm run build

# Commit and push
git commit -m "feat: add my feature"
git push origin feature/my-feature

# Open a Pull Request on GitHub
```

Please open an issue first for large changes. Bug fixes and docs improvements are always welcome!

---

## 🔐 Security

| Principle | How it's implemented |
|---|---|
| **Secrets never touch the AI** | `scan_env` returns only key names + classifications |
| **No external servers** | MCP runs entirely on your machine |
| **No overwrite without consent** | `sync_env` skips existing Vercel vars by default |
| **Leak detection** | `check_env_leak` scans `git ls-files` before deploy |
| **Token stored locally** | `~/.deploy-mcp/config.json` — your machine only |
| **No hardcoded credentials** | Zero hardcoded tokens in the codebase |

---

## 👨‍💻 About

Built by **Tushar Jain** — tools that bridge the gap between AI and shipping real products.

- 🌐 [tusharjain.in](https://tusharjain.in)
- 🐙 [@Tusharjain-19](https://github.com/Tusharjain-19)

---

## 📄 License

MIT License — 100% free forever. Use it in commercial projects, modify it, distribute it. See [LICENSE](LICENSE) for full text.

---

<div align="center">

**Built with ❤️ for vibe coders everywhere**

⭐ Star this repo if it saved you time!

[![GitHub stars](https://img.shields.io/github/stars/Tusharjain-19/deploy-mcp?style=social)](https://github.com/Tusharjain-19/deploy-mcp)

</div>
