<div align="center">

```text
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│  ● ● ● terminal : deploymcp                                                               │
├───────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                           │
│   ██████╗ ███████╗██████╗ ██╗      ██████╗ ██╗   ██╗    ███╗   ███╗  ██████╗  ██████╗     │
│   ██╔══██╗██╔════╝██╔══██╗██║     ██╔═══██╗╚██╗ ██╔╝    ████╗ ████║ ██╔════╝  ██╔══██╗    │
│   ██║  ██║█████╗  ██████╔╝██║     ██║   ██║ ╚████╔╝     ██╔████╔██║ ██║       ██████╔╝    │
│   ██║  ██║██╔══╝  ██╔═══╝ ██║     ██║   ██║  ╚██╔╝      ██║╚██╔╝██║ ██║       ██╔═══╝     │
│   ██████╔╝███████╗██║     ███████╗╚██████╔╝   ██║       ██║ ╚═╝ ██║ ╚██████╗  ██║         │
│   ╚═════╝ ╚══════╝╚═╝     ╚══════╝ ╚═════╝    ╚═╝       ╚═╝     ╚═╝  ╚═════╝  ╚═╝         │
│                                                                                           │
│         Deploy your website in seconds directly from your AI editor.                      │
│         Documentation: https://github.com/Tusharjain-19/deploy-mcp#readme                 │
│                                                                                           │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

# Deploy MCP

### Deploy your website in seconds directly from your AI editor.

[![Version 2.0](https://img.shields.io/badge/Deploy%20MCP-v2.0-E7BA05?style=for-the-badge&labelColor=000000)](https://github.com/Tusharjain-19/deploy-mcp#readme)
[![npm version](https://img.shields.io/npm/v/deploymcp?color=E7BA05&style=for-the-badge&logo=npm&logoColor=000000)](https://www.npmjs.com/package/deploymcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-E7BA05.svg?style=for-the-badge&labelColor=000000&color=E7BA05)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-000000?style=for-the-badge&logo=typescript&logoColor=E7BA05)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-000000?style=for-the-badge&logo=nodedotjs&logoColor=6B9E5A)](https://nodejs.org/)
[![Vercel](https://img.shields.io/badge/Vercel-REST_v13-000000?style=for-the-badge&logo=vercel&logoColor=F6E3B8)](https://vercel.com/)
[![MCP Protocol](https://img.shields.io/badge/MCP-Protocol-000000?style=for-the-badge&logo=anthropic&logoColor=E7BA05)](https://modelcontextprotocol.io/)

**Free. Open source. Zero server costs. Engineered for modern developers.**

[Quickstart Guide](#quickstart-guide) • [IDE Setup](#step-2--connect-to-your-ai-ide) • [20 Tools Reference](#20-autonomous-mcp-tools) • [Security Model](#zero-trust-security-architecture) • [Documentation](#documentation)

</div>

---

## ⭐ Star This Project

> **If you like Deploy MCP, please give it a star on GitHub!** It takes two seconds and directly supports the project's ongoing development.

[![GitHub stars](https://img.shields.io/github/stars/Tusharjain-19/deploy-mcp?style=social)](https://github.com/Tusharjain-19/deploy-mcp)

---

## What is Deploy MCP?

**Deploy MCP** is an enterprise-grade Model Context Protocol (MCP) server that empowers AI coding assistants—including **Cursor**, **VS Code**, **Antigravity**, **Windsurf**, and **Claude Desktop**—to autonomously validate, configure, environment-sync, and deploy web applications to Vercel in seconds.

Rather than manually running builds, managing Vercel CLI logins, or copy-pasting environment variables across developer portals, simply ask your AI assistant:

> *"Deploy my website with Deploy MCP"*

```text
You:  "Deploy this website."

AI:   [OK] Framework Detected: Next.js 14 (App Router)
      [OK] Local Build Check: Passed (0 errors, 0 warnings)
      [OK] Git Status Verified: Clean branch & zero tracked secrets
      [OK] Environment Sync: Uploaded 4 required secrets directly to Vercel
      [OK] Deployment Triggered: Deployed to Vercel Infrastructure
      [OK] Health Check: Status READY in 14.2s

      Production URL live at: https://my-app.vercel.app
```

---

## Version 2.0 Architectural Specification

Deploy MCP **Version 2.0** introduces a high-performance sovereign architecture engineered specifically for modern AI code editors:

1. **Autonomous 20-Tool Matrix**: 20 atomic tools spanning project detection, dry-run build checks, local secret isolation, smart error diagnosis, domain assignment, and deployment rollouts.
2. **Zero-Trust Client-Side Isolation**: Environment variable values are never passed to AI prompt contexts. Secrets are transferred strictly from local storage to Vercel REST endpoints over encrypted local TLS.
3. **Clean Terminal Standard**: Zero emoji characters. Strict Unix-grade status logging (`[OK]`, `[ERROR]`, `[!]`, `->`) designed for developer clarity.
4. **Self-Healing Error Diagnosis**: If a deployment fails during cloud compilation, Deploy MCP inspects the remote build log, extracts the root cause file and line number, and gives the AI structured fix instructions to repair the code automatically.
5. **Brand Color Palette**: Yellow (`#E7BA05`), Butter (`#F6E3B8`), Leaf (`#6B9E5A`), Brown (`#906342`), and Pure OLED Black (`#000000`).

---

## Quickstart Guide

Set up Deploy MCP in under 60 seconds:

### Step 1: Run the Interactive Setup Command

Open your terminal and run:

```bash
npx deploymcp setup
```

*(or: `npx deploy-mcp setup`)*

**What this wizard does in 3 quick steps:**

1. **Connects Vercel**: Prompts for your free [Vercel Personal Access Token](https://vercel.com/account/tokens).
2. **Saves Token Securely**: Stores your token locally in `~/.deploy-mcp/config.json`.
3. **Generates IDE Snippet**: Prints the exact JSON configuration block ready to paste into your AI IDE.

---

### Step 2: Connect to Your AI IDE

Copy and paste the configuration snippet below into your editor's MCP settings:

#### Cursor IDE

File: `%APPDATA%\Cursor\User\settings\cursor_settings.json` (Windows) or `~/.cursor/rules/cursor_settings.json` (Mac/Linux)

```json
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "deploymcp"]
    }
  }
}
```

#### VS Code / Claude Extension / Antigravity AI

File: `settings.json` (Press `Ctrl+Shift+P` → *"Open User Settings (JSON)"*)

```json
{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "deploymcp"]
    }
  ]
}
```

#### Claude Desktop

File: `%APPDATA%\Claude\claude_desktop_config.json` (Windows) or `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS)

```json
{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "deploymcp"]
    }
  }
}
```

---

### Step 3: Instruct Your AI Assistant

Open any web project folder in your IDE, open the chat panel, and prompt:

```text
"Use Deploy MCP to check and deploy this website."
```

Your AI assistant will automatically run pre-flight build checks, synchronize environment keys, deploy the bundle to Vercel, and return your live production URL.

---

## 20 Autonomous MCP Tools

| Tool Name | Type | Description |
| --------- | ---- | ----------- |
| `smart_deploy` | Deploy | Master pipeline: pre-flight check, deploys, auto-polls, and diagnoses failures |
| `detect_project` | Read | Detects framework (Next.js, Vite, React, Astro, Vue, Remix) and build commands |
| `check_project` | Read | Executes local dry-run build tests without cloud upload |
| `deploy_to_vercel` | Deploy | Uploads build artifacts to Vercel Edge infrastructure |
| `get_deployment_status` | Read | Queries deployment build state (BUILDING, READY, ERROR) |
| `get_deployment_logs` | Read | Fetches real-time serverless build and runtime logs |
| `diagnose_build_failure` | Read | Analyzes build error logs and generates structured remediation instructions |
| `project_report` | Read | Comprehensive pre-flight readiness audit |
| `validate_env` | Read | Validates required `.env` variables against `.env.example` |
| `scan_env` | Read | Scans local environment key names with complete value redaction |
| `compare_env` | Read | Diffs local `.env` keys against active Vercel project environment |
| `sync_env` | Write | Pushes environment variables directly to Vercel via local TLS |
| `create_env_example` | Write | Generates `.env.example` template with values stripped |
| `git_status` | Read | Verifies git working tree status and branch cleanliness |
| `git_commit_and_push` | Write | Commits and pushes changes before deployment |
| `check_env_leak` | Read | Scans git index to prevent committing `.env` files |
| `check_domain_availability` | Read | Checks custom domain availability and suggests alternatives |
| `manage_domain` | Write | Configures custom domain bindings and 308 permanent redirects |
| `delete_project` | Delete | Permanently deletes a Vercel project with native confirmation prompt |
| `check_for_updates` | Read | Queries npm registry for newer Deploy MCP releases |

---

## Zero-Trust Security Architecture

Deploy MCP enforces a strict client-side security enclave:

- **Local Value Redaction**: Environment scanning tools (`scan_env`, `compare_env`) extract only variable identifier keys (e.g. `DATABASE_URL`). Secret values are NEVER passed to the LLM context.
- **Direct Local TLS**: Secrets are synced from local files directly to Vercel REST endpoints over encrypted HTTPS (`https://api.vercel.com`).
- **Git Leak Prevention**: `check_env_leak` validates the local git index via `git ls-files` to block deployments if `.env` files were accidentally staged.
- **Destructive Action Safety**: `delete_project` requires explicit local interactive confirmation before deleting cloud resources.

---

## CLI Command Suite

| Command | Purpose |
| ------- | ------- |
| `npx deploymcp setup` | Guided interactive setup wizard: token verification and IDE configuration |
| `npx deploymcp check` | Runs local pre-flight dry-run build tests on the current project |
| `npx deploymcp version` | Displays installed release version |

---

## Documentation

Full documentation, guides, and developer references:
- **Online Documentation**: [https://github.com/Tusharjain-19/deploy-mcp#readme](https://github.com/Tusharjain-19/deploy-mcp#readme)
- **Architecture & Design System**: [design.md](design.md)
- **Product Requirements**: [DEPLOY_MCP_PRD.md](DEPLOY_MCP_PRD.md)

---

## License

Distributed under the **MIT License**. Free for commercial and open-source use. See [LICENSE](LICENSE) for details.

<div align="center">

**Architected by Tushar Jain**

[Website](https://tusharjain.in) • [Contact](https://tusharjain.in/contact) • [GitHub](https://github.com/Tusharjain-19)

⭐ **If you find Deploy MCP helpful, please give it a star on GitHub!**

[![GitHub stars](https://img.shields.io/github/stars/Tusharjain-19/deploy-mcp?style=social)](https://github.com/Tusharjain-19/deploy-mcp)

</div>
