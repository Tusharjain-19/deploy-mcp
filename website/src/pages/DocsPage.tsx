import React, { useState } from 'react';
import { BookOpen, Terminal, Code2, ShieldCheck, Wrench, HelpCircle, Copy, Check, ArrowLeft, Layers, Laptop, ExternalLink, Cpu, CheckCircle2 } from 'lucide-react';
import { HaikeiContourBackground } from '../components/HaikeiDecorations';
import { FadeIn } from '../components/motion/MotionPrimitives';
import { MCP_TOOLS } from '../data/toolsData';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

interface DocsPageProps {
  onBackToHome: () => void;
}

export const DocsPage: React.FC<DocsPageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'quickstart' | 'tools' | 'cli' | 'ide' | 'security' | 'faq'>('quickstart');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    playSuccessSound();
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const navItems = [
    { id: 'quickstart', label: 'Quickstart Guide', icon: BookOpen },
    { id: 'tools', label: '20 MCP Tools Reference', icon: Wrench },
    { id: 'cli', label: 'CLI Commands Suite', icon: Terminal },
    { id: 'ide', label: 'IDE & Agent Config', icon: Laptop },
    { id: 'security', label: 'Security Architecture', icon: ShieldCheck },
    { id: 'faq', label: 'Troubleshooting & FAQ', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-[#101010] text-[#E6D5BD] pt-8 pb-20 relative overflow-hidden">
      <HaikeiContourBackground strokeColor="rgba(230, 213, 176, 0.04)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <FadeIn direction="down">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10 text-xs font-mono">
            <button
              onClick={() => { playClickSound(); onBackToHome(); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] border border-white/10 hover:border-[#D5380C] text-[#FAF6EE] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OVERVIEW</span>
            </button>
            <div className="flex items-center gap-2 text-[#D5380C]">
              <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
              <span>DOCUMENTATION // DEVELOPER SPECIFICATION PORTAL</span>
            </div>
          </div>
        </FadeIn>

        {/* Docs Container */}
        <div className="rounded-3xl bg-[#141414] border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[720px]">
          
          {/* Docs Navigation Sidebar */}
          <div className="w-full md:w-64 bg-[#101010] border-b md:border-b-0 md:border-r border-white/10 p-4 space-y-1.5 shrink-0 font-mono text-xs">
            {navItems.map(item => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { playClickSound(); setActiveTab(item.id as typeof activeTab); }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#D5380C] text-[#FAF6EE] shadow-sm font-black'
                      : 'text-[#E6D5BD]/70 hover:text-[#FAF6EE] hover:bg-[#1a1a1a]'
                  }`}
                >
                  <IconComp className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Docs Main Content Panel */}
          <div className="flex-1 p-6 sm:p-10 overflow-y-auto max-h-[800px] space-y-8 font-sans">
            
            {/* TAB 1: QUICKSTART GUIDE */}
            {activeTab === 'quickstart' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#FAF6EE] uppercase mb-2">
                    QUICKSTART GUIDE
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/80">
                    Equip your AI coding assistant with autonomous Vercel deployment capabilities in under 60 seconds.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-3 font-mono text-xs">
                  <span className="text-[#D5380C] font-bold">STEP 1: RUN THE INTERACTIVE SETUP CLI</span>
                  <div className="p-3 bg-[#181818] rounded-xl flex items-center justify-between text-[#FAF6EE]">
                    <span>$ npx deploymcp setup</span>
                    <button onClick={() => handleCopy('npx deploymcp setup')} className="p-1 hover:text-[#D5380C]">
                      {copiedCmd === 'npx deploymcp setup' ? <Check className="w-4 h-4 text-[#D5380C]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[#E6D5BD]/70 text-[11px] font-sans">
                    The wizard configures your Vercel authentication, detects project dependencies, and writes configuration files for Cursor, Claude, Antigravity, or VS Code.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-3 font-mono text-xs">
                  <span className="text-[#D5380C] font-bold">STEP 2: TEST PRE-FLIGHT COMPILATION</span>
                  <div className="p-3 bg-[#181818] rounded-xl flex items-center justify-between text-[#FAF6EE]">
                    <span>$ npx deploymcp check</span>
                    <button onClick={() => handleCopy('npx deploymcp check')} className="p-1 hover:text-[#D5380C]">
                      {copiedCmd === 'npx deploymcp check' ? <Check className="w-4 h-4 text-[#D5380C]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[#E6D5BD]/70 text-[11px] font-sans">
                    Executes local build tests across Next.js 14, React Vite, Remix, Astro, or Static HTML, ensuring zero build errors before remote deployment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-3 font-mono text-xs">
                  <span className="text-[#D5380C] font-bold">STEP 3: SHIP TO VERCEL EDGE RUNTIME</span>
                  <div className="p-3 bg-[#181818] rounded-xl flex items-center justify-between text-[#FAF6EE]">
                    <span>$ npx deploymcp deploy --prod</span>
                    <button onClick={() => handleCopy('npx deploymcp deploy --prod')} className="p-1 hover:text-[#D5380C]">
                      {copiedCmd === 'npx deploymcp deploy --prod' ? <Check className="w-4 h-4 text-[#D5380C]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[#E6D5BD]/70 text-[11px] font-sans">
                    Instantly deploys your production bundle to Vercel global edge points of presence with atomic rollbacks.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: 20 TOOLS REFERENCE */}
            {activeTab === 'tools' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#FAF6EE] uppercase mb-2">
                    20 MCP TOOLS SPECIFICATION
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/80">
                    Comprehensive catalog of all 20 atomic Model Context Protocol tools exposed to your AI agent.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 font-mono text-xs">
                  {MCP_TOOLS.map(tool => (
                    <div key={tool.id} className="p-4 rounded-xl bg-[#101010] border border-white/10 hover:border-[#D5380C]/70 transition-colors">
                      <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                        <span className="text-[#FAF6EE] font-bold text-sm">{tool.name}()</span>
                        <span className="text-[10px] bg-[#1a1a1a] text-[#D5380C] px-2 py-0.5 rounded border border-[#D5380C]/30 font-semibold">
                          {tool.category.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-[#E6D5BD]/70 text-xs font-sans leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: CLI COMMANDS SUITE */}
            {activeTab === 'cli' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#FAF6EE] uppercase mb-2">
                    CLI COMMAND REFERENCE
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/80">
                    Direct command-line operations available through the npx runtime.
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  {[
                    { cmd: 'npx deploymcp setup', desc: 'Runs the guided onboarding wizard to configure tokens and IDE configs.' },
                    { cmd: 'npx deploymcp check', desc: 'Validates local project structure, framework configuration, and package dependencies.' },
                    { cmd: 'npx deploymcp deploy', desc: 'Triggers an autonomous edge deployment to Vercel with streaming logs.' },
                    { cmd: 'npx deploymcp deploy --prod', desc: 'Ships the active build directly to your primary production domain.' },
                    { cmd: 'npx deploymcp doctor', desc: 'Executes self-healing build inspection and generates structured bug triage reports.' },
                    { cmd: 'npx deploymcp status', desc: 'Outputs real-time Vercel deployment status, live URL, and edge latency.' },
                    { cmd: 'npx deploymcp logs', desc: 'Streams runtime execution and build logs from Vercel edge instances.' },
                  ].map((c, i) => (
                    <div key={i} className="p-4 rounded-xl bg-[#101010] border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[#FAF6EE]">
                        <span className="text-[#FAF6EE] font-bold">{c.cmd}</span>
                        <button onClick={() => handleCopy(c.cmd)} className="p-1 hover:text-[#D5380C]">
                          {copiedCmd === c.cmd ? <Check className="w-3.5 h-3.5 text-[#D5380C]" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <p className="text-[#E6D5BD]/70 text-xs font-sans">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: IDE CONFIGURATION GUIDES */}
            {activeTab === 'ide' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#FAF6EE] uppercase mb-2">
                    IDE & AGENT INTEGRATIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/80">
                    Step-by-step setup snippets for Cursor, Claude Desktop, Antigravity, and VS Code.
                  </p>
                </div>

                {/* Cursor Setup */}
                <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-syne font-bold text-base text-[#FAF6EE]">1. Cursor AI (.cursorrules & MCP)</h3>
                    <span className="text-[10px] font-mono text-[#D5380C] bg-[#1a1a1a] px-2 py-0.5 rounded border border-[#D5380C]/30">RECOMMENDED</span>
                  </div>
                  <p className="text-xs text-[#E6D5BD]/80 leading-relaxed font-sans">
                    Navigate to <strong>Cursor Settings &gt; Features &gt; MCP Servers</strong>, click <em>+ Add New MCP Server</em>, and enter:
                  </p>
                  <pre className="p-3 bg-[#181818] rounded-xl text-xs font-mono text-[#FAF6EE] overflow-x-auto">
{`{
  "name": "deploy-mcp",
  "type": "command",
  "command": "npx -y deploy-mcp-server@latest"
}`}
                  </pre>
                </div>

                {/* Claude Desktop Setup */}
                <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-3">
                  <h3 className="font-syne font-bold text-base text-[#FAF6EE]">2. Claude Desktop (claude_desktop_config.json)</h3>
                  <p className="text-xs text-[#E6D5BD]/80 leading-relaxed font-sans">
                    Add the following to your Claude Desktop configuration file:
                  </p>
                  <pre className="p-3 bg-[#181818] rounded-xl text-xs font-mono text-[#FAF6EE] overflow-x-auto">
{`{
  "mcpServers": {
    "deploy-mcp": {
      "command": "npx",
      "args": ["-y", "deploy-mcp-server@latest"]
    }
  }
}`}
                  </pre>
                </div>
              </div>
            )}

            {/* TAB 5: SECURITY WHITEPAPER */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#FAF6EE] uppercase mb-2">
                    ZERO-TRUST ARCHITECTURE
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/80">
                    Detailed specification of client-side secret fencing and hardware-level isolation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                    <h3 className="font-syne font-bold text-sm text-[#FAF6EE]">LOCAL AST SECRET MASKING</h3>
                    <p className="text-xs text-[#E6D5BD]/80 font-sans leading-relaxed">
                      Deploy MCP scans environment files using an AST parser. It only extracts variable identifiers (e.g. <code>DATABASE_URL</code>). The secret values remain encrypted on your device and are never included in prompts sent to AI LLMs.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                    <h3 className="font-syne font-bold text-sm text-[#FAF6EE]">MUTUAL TLS DIRECT TUNNEL</h3>
                    <p className="text-xs text-[#E6D5BD]/80 font-sans leading-relaxed">
                      Communication with Vercel REST endpoints is executed directly from your local node process over mutual TLS. There are no hosted proxy servers or intermediary logging nodes.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: TROUBLESHOOTING & FAQ */}
            {activeTab === 'faq' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#FAF6EE] uppercase mb-2">
                    TROUBLESHOOTING & FAQ
                  </h2>
                  <p className="text-xs sm:text-sm text-[#E6D5BD]/80">
                    Solutions to common developer questions and setup issues.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: 'Do I need a paid Vercel subscription to use Deploy MCP?',
                      a: 'No. Deploy MCP works with standard personal Hobby accounts as well as Pro/Enterprise teams. All REST API interactions use native Vercel developer endpoints with zero server markups.'
                    },
                    {
                      q: 'How does self-healing diagnosis handle failed Next.js 14 builds?',
                      a: 'When Vercel build runners return a non-zero exit code, Deploy MCP captures the build log, parses TypeScript compiler outputs and dependency conflicts, and injects structured repair patches for your AI agent.'
                    },
                    {
                      q: 'Can I use Deploy MCP offline or during local testing?',
                      a: 'Yes! The `deploymcp check` command runs 100% locally on your machine, testing framework builds and auditing git status without making network calls.'
                    }
                  ].map((faq, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[#101010] border border-white/10 space-y-2">
                      <h3 className="font-syne font-bold text-sm text-[#FAF6EE]">{faq.q}</h3>
                      <p className="text-xs text-[#E6D5BD]/80 font-sans leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
