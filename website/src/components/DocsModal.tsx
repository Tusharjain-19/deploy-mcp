import React, { useState } from 'react';
import { X, BookOpen, Terminal, Code2, ShieldCheck, Wrench, HelpCircle, Copy, Check, ChevronRight } from 'lucide-react';
import { MCP_TOOLS } from '../data/toolsData';

interface DocsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DocsModal: React.FC<DocsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'quickstart' | 'ide' | 'tools' | 'cli' | 'security' | 'faq'>('quickstart');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const navItems = [
    { id: 'quickstart', label: 'Quickstart Guide', icon: BookOpen },
    { id: 'ide', label: 'IDE Configuration', icon: Code2 },
    { id: 'tools', label: '20 Tools Reference', icon: Wrench },
    { id: 'cli', label: 'CLI Commands Suite', icon: Terminal },
    { id: 'security', label: 'Security Architecture', icon: ShieldCheck },
    { id: 'faq', label: 'Troubleshooting & FAQ', icon: HelpCircle },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#141414] border-2 border-[#E6D5BD]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#D5360C]/20">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6D5BD]/15 bg-[#101010] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C] border border-[#E6D5BD]/40 flex items-center justify-center text-[#E6D5BD]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#E6D5BD] tracking-tight uppercase">Deploy MCP Documentation</h2>
              <p className="text-xs text-[#E6D5BD]/70 font-mono">Complete Developer & System Reference</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#181818] hover:bg-[#D5360C] border border-[#E6D5BD]/20 text-[#E6D5BD] flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-1 overflow-hidden">
          
          {/* Sidebar Tabs */}
          <div className="w-64 border-r border-[#E6D5BD]/15 bg-[#101010] p-4 space-y-1.5 overflow-y-auto shrink-0 hidden sm:block">
            {navItems.map((item) => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#D5360C] text-[#E6D5BD] border border-[#E6D5BD] shadow-lg shadow-[#D5360C]/25'
                      : 'text-[#E6D5BD]/70 hover:text-[#E6D5BD] hover:bg-[#181818]'
                  }`}
                >
                  <IconComp className="w-4 h-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content Pane */}
          <div className="flex-1 p-6 sm:p-8 overflow-y-auto font-sans text-[#E6D5BD] text-sm leading-relaxed space-y-6 bg-[#141414]">
            
            {/* Quickstart Tab */}
            {activeTab === 'quickstart' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h3 className="text-2xl font-black text-[#E6D5BD] mb-2">QUICKSTART GUIDE</h3>
                  <p className="text-[#E6D5BD]/80 text-xs leading-relaxed">
                    Deploy MCP is an open-source Model Context Protocol server that gives AI coding assistants native access to build-check, secret sync, and deploy your websites to Vercel.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-[#D5360C]">STEP 1 — RUN INTERACTIVE SETUP WIZARD</span>
                    <p className="text-xs text-[#E6D5BD]/70">Execute in your system terminal or IDE integrated terminal:</p>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#161616] border border-[#E6D5BD]/20 font-mono text-xs text-[#E6D5BD]">
                      <span>npx deploymcp setup</span>
                      <button
                        onClick={() => handleCopy('npx deploymcp setup')}
                        className="text-[#E6D5BD] hover:text-[#D5360C] transition-colors"
                      >
                        {copiedCmd === 'npx deploymcp setup' ? <Check className="w-4 h-4 text-[#E6D5BD]" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-[#D5360C]">STEP 2 — PASTE JSON TO AI IDE CONFIGURATION</span>
                    <p className="text-xs text-[#E6D5BD]/70">
                      Copy the generated JSON snippet from the wizard output and paste it into your IDE settings file (e.g. Cursor, VS Code, Claude Desktop, Antigravity).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20 space-y-2">
                    <span className="text-xs font-mono font-bold text-[#D5360C]">STEP 3 — DEPLOY FROM CHAT PROMPT</span>
                    <p className="text-xs text-[#E6D5BD]/70">
                      Open your AI chat prompt and type: <code className="text-[#E6D5BD] bg-[#161616] px-2 py-0.5 rounded border border-[#D5360C] font-mono">"Check local build and deploy to Vercel"</code>.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* IDE Config Tab */}
            {activeTab === 'ide' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-[#E6D5BD]">IDE CONFIGURATIONS</h3>
                
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20">
                    <h4 className="text-sm font-bold text-[#E6D5BD] mb-1">Cursor IDE</h4>
                    <p className="text-xs text-[#E6D5BD]/70 mb-2 font-mono">Path: <code className="text-[#D5360C]">%APPDATA%\Cursor\User\settings\cursor_settings.json</code></p>
                    <pre className="p-3.5 rounded-xl bg-[#161616] border border-[#E6D5BD]/15 font-mono text-xs text-[#E6D5BD] overflow-x-auto">
{`{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}`}
                    </pre>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20">
                    <h4 className="text-sm font-bold text-[#E6D5BD] mb-1">VS Code / Claude Desktop / Antigravity</h4>
                    <p className="text-xs text-[#E6D5BD]/70 mb-2 font-mono">Path: <code className="text-[#D5360C]">%APPDATA%\Claude\claude_desktop_config.json</code></p>
                    <pre className="p-3.5 rounded-xl bg-[#161616] border border-[#E6D5BD]/15 font-mono text-xs text-[#E6D5BD] overflow-x-auto">
{`{
  "mcpServers": {
    "deploy": {
      "command": "npx",
      "args": ["-y", "@tusharjain-19/deploy-mcp"]
    }
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Tools Catalog Tab */}
            {activeTab === 'tools' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-black text-[#E6D5BD]">20 MCP TOOLS REFERENCE</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {MCP_TOOLS.map((t) => (
                    <div key={t.id} className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20">
                      <span className="font-mono text-xs font-black text-[#E6D5BD] bg-[#D5360C] px-2 py-0.5 rounded">`{t.name}`</span>
                      <p className="text-xs text-[#E6D5BD]/70 mt-2">{t.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CLI Tab */}
            {activeTab === 'cli' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-black text-[#E6D5BD]">CLI COMMAND SUITE</h3>
                
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20 space-y-1">
                    <span className="text-[#D5360C] font-bold">npx deploymcp setup</span>
                    <p className="text-[#E6D5BD]/70 font-sans">Interactive setup wizard: token configuration, verification, and snippet generation.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20 space-y-1">
                    <span className="text-[#D5360C] font-bold">npx deploymcp check</span>
                    <p className="text-[#E6D5BD]/70 font-sans">Performs local dry-run build validation on current project directory.</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20 space-y-1">
                    <span className="text-[#D5360C] font-bold">npx deploymcp version</span>
                    <p className="text-[#E6D5BD]/70 font-sans">Prints current CLI release version and installed binary path.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-black text-[#E6D5BD]">ZERO-TRUST SECURITY MODEL</h3>
                <p className="text-xs text-[#E6D5BD]/80">
                  Deploy MCP isolates secret credentials strictly on your machine. Local scanners parse environment key names only. Values are posted directly to Vercel API via encrypted HTTPS requests.
                </p>
                <div className="p-4 rounded-2xl bg-[#101010] border border-[#D5360C] text-xs font-mono text-[#E6D5BD] space-y-2">
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D5360C] shrink-0" />
                    <span>LLMs never process secret API keys or passwords</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#D5360C] shrink-0" />
                    <span>Config credentials saved locally under ~/.deploy-mcp/config.json</span>
                  </p>
                </div>
              </div>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-2xl font-black text-[#E6D5BD]">TROUBLESHOOTING</h3>
                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20">
                    <h4 className="font-bold text-[#E6D5BD] mb-1">What if Vercel token fails validation?</h4>
                    <p className="text-[#E6D5BD]/70">Re-run `npx deploymcp setup` to issue a fresh Vercel Personal Access Token.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#101010] border border-[#E6D5BD]/20">
                    <h4 className="font-bold text-[#E6D5BD] mb-1">How to inspect local server logs?</h4>
                    <p className="text-[#E6D5BD]/70">Logs are written to standard stderr stream inside your AI IDE's MCP output console.</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
