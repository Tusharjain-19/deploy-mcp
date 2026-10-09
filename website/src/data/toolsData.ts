export interface McpTool {
  id: string;
  name: string;
  category: 'smart' | 'domains' | 'secrets' | 'git' | 'vercel' | 'system';
  categoryLabel: string;
  description: string;
  readOnly: boolean;
  destructive: boolean;
  inputSchema: Record<string, string>;
  exampleUsage: string;
}

export const MCP_TOOLS: McpTool[] = [
  {
    id: 'smart_deploy',
    name: 'smart_deploy',
    category: 'smart',
    categoryLabel: 'Smart Control & Build',
    description: 'Master Deployment Pipeline — Detects framework, checks local build, syncs environment keys, triggers deployment, polls status, and auto-diagnoses build errors.',
    readOnly: false,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)',
      projectName: 'string (Vercel target project name)',
      maxPollSeconds: 'number (optional, default: 180s)'
    },
    exampleUsage: 'smart_deploy({ projectPath: "/projects/my-app", projectName: "my-app" })'
  },
  {
    id: 'detect_project',
    name: 'detect_project',
    category: 'smart',
    categoryLabel: 'Smart Control & Build',
    description: 'Inspects package.json and directory markers to determine project framework (Next.js, Vite, React, Vue, HTML, etc.) and build scripts.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'detect_project({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'check_project',
    name: 'check_project',
    category: 'smart',
    categoryLabel: 'Smart Control & Build',
    description: 'Runs dry-run compilation locally (e.g. npm run build) to catch syntax and dependency issues prior to uploading to Vercel.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'check_project({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'project_report',
    name: 'project_report',
    category: 'smart',
    categoryLabel: 'Smart Control & Build',
    description: 'Generates a master pre-flight audit report covering Git status, local build check, and Vercel environment synchronization.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)',
      projectName: 'string (optional Vercel project name)'
    },
    exampleUsage: 'project_report({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'delete_project',
    name: 'delete_project',
    category: 'smart',
    categoryLabel: 'Smart Control & Build',
    description: 'Permanently deletes a Vercel project with safety confirmation (triggers explicit native OS approval dialog popup).',
    readOnly: false,
    destructive: true,
    inputSchema: {
      projectName: 'string (Target Vercel project name)'
    },
    exampleUsage: 'delete_project({ projectName: "old-test-app" })'
  },
  {
    id: 'check_domain_availability',
    name: 'check_domain_availability',
    category: 'domains',
    categoryLabel: 'Domain Management',
    description: 'Queries Vercel domain registry to verify availability. If taken, automatically computes and presents the top 2 best alternative domain names.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      domainName: 'string (Desired domain or Vercel alias, e.g. "my-portfolio")'
    },
    exampleUsage: 'check_domain_availability({ domainName: "my-portfolio" })'
  },
  {
    id: 'manage_domain',
    name: 'manage_domain',
    category: 'domains',
    categoryLabel: 'Domain Management',
    description: 'Assigns custom domains or Vercel aliases to projects, with optional 308 permanent redirect or old domain removal.',
    readOnly: false,
    destructive: false,
    inputSchema: {
      projectName: 'string (Vercel project name)',
      newDomain: 'string (New custom domain/alias)',
      oldDomain: 'string (optional old domain to remove/redirect)',
      oldDomainAction: '"remove" | "redirect" (default: "redirect")'
    },
    exampleUsage: 'manage_domain({ projectName: "my-app", newDomain: "my-app.com" })'
  },
  {
    id: 'scan_env',
    name: 'scan_env',
    category: 'secrets',
    categoryLabel: 'Environment & Secrets',
    description: 'Audits local .env files and returns sanitized variable key names (redacting all confidential secret values).',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'scan_env({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'compare_env',
    name: 'compare_env',
    category: 'secrets',
    categoryLabel: 'Environment & Secrets',
    description: 'Performs key diffing between local .env declarations and target Vercel project settings.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)',
      projectName: 'string (Vercel target project name)'
    },
    exampleUsage: 'compare_env({ projectPath: "/projects/my-app", projectName: "my-app" })'
  },
  {
    id: 'sync_env',
    name: 'sync_env',
    category: 'secrets',
    categoryLabel: 'Environment & Secrets',
    description: 'Securely transmits missing environment variables directly from local storage to Vercel REST endpoints without exposing values to AI LLMs.',
    readOnly: false,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)',
      projectName: 'string (Vercel target project name)',
      keysToSync: 'array of string key names',
      overwrite: 'boolean (optional, default: false)'
    },
    exampleUsage: 'sync_env({ projectPath: "/projects/my-app", projectName: "my-app", keysToSync: ["API_KEY"] })'
  },
  {
    id: 'create_env_example',
    name: 'create_env_example',
    category: 'secrets',
    categoryLabel: 'Environment & Secrets',
    description: 'Automatically synthesizes a sanitized .env.example template with blanked default values for Git tracking.',
    readOnly: false,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'create_env_example({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'validate_environment_variables',
    name: 'validate_environment_variables',
    category: 'secrets',
    categoryLabel: 'Environment & Secrets',
    description: 'Cross-checks runtime environment variables against expected project schema definitions.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'validate_environment_variables({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'check_env_leak',
    name: 'check_env_leak',
    category: 'secrets',
    categoryLabel: 'Environment & Secrets',
    description: '🚨 Audits Git index via git ls-files to flag accidentally committed .env files before deployment.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'check_env_leak({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'git_status',
    name: 'git_status',
    category: 'git',
    categoryLabel: 'Git Safety & Control',
    description: 'Returns git repository state, modified file count, current branch, and uncommitted change summary.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)'
    },
    exampleUsage: 'git_status({ projectPath: "/projects/my-app" })'
  },
  {
    id: 'git_commit_and_push',
    name: 'git_commit_and_push',
    category: 'git',
    categoryLabel: 'Git Safety & Control',
    description: 'Stages modified files, generates formatted git commit, and pushes to configured upstream repository.',
    readOnly: false,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)',
      message: 'string (Commit message)'
    },
    exampleUsage: 'git_commit_and_push({ projectPath: "/projects/my-app", message: "feat: update UI" })'
  },
  {
    id: 'deploy_to_vercel',
    name: 'deploy_to_vercel',
    category: 'vercel',
    categoryLabel: 'Vercel Telemetry',
    description: 'Initiates direct cloud deployment via native Vercel REST deployment API endpoints.',
    readOnly: false,
    destructive: false,
    inputSchema: {
      projectPath: 'string (Absolute path to project directory)',
      projectName: 'string (Vercel project name)'
    },
    exampleUsage: 'deploy_to_vercel({ projectPath: "/projects/my-app", projectName: "my-app" })'
  },
  {
    id: 'get_deployment_status',
    name: 'get_deployment_status',
    category: 'vercel',
    categoryLabel: 'Vercel Telemetry',
    description: 'Polls current deployment pipeline status (BUILDING, READY, ERROR).',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectName: 'string (Vercel project name)'
    },
    exampleUsage: 'get_deployment_status({ projectName: "my-app" })'
  },
  {
    id: 'get_deployment_logs',
    name: 'get_deployment_logs',
    category: 'vercel',
    categoryLabel: 'Vercel Telemetry',
    description: 'Fetches raw build log stdout/stderr stream from Vercel build nodes.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      projectName: 'string (Vercel project name)'
    },
    exampleUsage: 'get_deployment_logs({ projectName: "my-app" })'
  },
  {
    id: 'diagnose_build_failure',
    name: 'diagnose_build_failure',
    category: 'vercel',
    categoryLabel: 'Vercel Telemetry',
    description: 'Parses raw error output lines and generates structured, machine-actionable repair instructions for the AI assistant.',
    readOnly: true,
    destructive: false,
    inputSchema: {
      logs: 'array of log lines string'
    },
    exampleUsage: 'diagnose_build_failure({ logs: ["Error: Module not found..."] })'
  },
  {
    id: 'check_for_updates',
    name: 'check_for_updates',
    category: 'system',
    categoryLabel: 'System Control',
    description: 'Queries npm registry for new Deploy MCP releases, features, and performance enhancements.',
    readOnly: true,
    destructive: false,
    inputSchema: {},
    exampleUsage: 'check_for_updates({})'
  }
];
