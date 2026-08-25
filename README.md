# Deploy MCP

Deploy your website from your AI IDE with one command.

```bash
npm install -g deploy-mcp
deploy-mcp setup
```

Then in Cursor:
```
"Deploy this website"
```

## Features

- 🚀 Deploy to Vercel with one command
- 🤖 AI-powered deployment from your IDE
- 🔍 Automatic project detection
- ✅ Pre-deployment validation
- 🎯 No server costs (runs locally)

## Installation

```bash
npx deploy-mcp setup
```

## Usage

### In Cursor

1. Open your website project
2. Say: "Deploy this website"
3. The AI handles the rest

### CLI

```bash
# Setup (one time)
npx deploy-mcp setup

# Check project
npx deploy-mcp status --path .

# Deploy
npx deploy-mcp deploy --path .
```

## Supported Frameworks

- Next.js
- React + Vite
- Vue 3
- Astro
- Plain HTML

## Contributing

Issues and PRs welcome!

## License

MIT
