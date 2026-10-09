export interface IdeConfig {
  id: string;
  name: string;
  badge: string;
  iconColor: string;
  filePathWindows: string;
  filePathMacLinux: string;
  configJson: string;
}

export const IDE_CONFIGS: IdeConfig[] = [
  {
    id: 'cursor',
    name: 'Cursor IDE',
    badge: 'RECOMMENDED',
    iconColor: '#0070F3',
    filePathWindows: '%APPDATA%\\Cursor\\User\\settings\\cursor_settings.json',
    filePathMacLinux: '~/.cursor/rules/cursor_settings.json',
    configJson: `{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}`
  },
  {
    id: 'vscode',
    name: 'VS Code / Claude Extension / Antigravity AI',
    badge: 'POPULAR',
    iconColor: '#10B981',
    filePathWindows: 'Press Ctrl+Shift+P → "Open User Settings (JSON)"',
    filePathMacLinux: 'Press Cmd+Shift+P → "Open User Settings (JSON)"',
    configJson: `{
  "claude.mcp.servers": [
    {
      "name": "deploy",
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  ]
}`
  },
  {
    id: 'windsurf',
    name: 'Windsurf / Supermaven',
    badge: 'FAST',
    iconColor: '#00E5FF',
    filePathWindows: '%USERPROFILE%\\.codeium\\windsurf\\mcp_config.json',
    filePathMacLinux: '~/.codeium/windsurf/mcp_config.json',
    configJson: `{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}`
  }
];
