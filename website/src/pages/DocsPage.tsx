import React, { useState } from 'react';
import {
  IconBook,
  IconTerminal,
  IconCpu,
  IconShield,
  IconBolt,
  IconCopy,
  IconCheck,
  IconArrowLeft,
  IconExternalLink
} from '../components/CustomIcons';
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
    { id: 'quickstart', label: 'Quickstart Guide', icon: IconBook },
    { id: 'tools', label: '20 MCP Tools Reference', icon: IconBolt },
    { id: 'cli', label: 'CLI Commands Suite', icon: IconTerminal },
    { id: 'ide', label: 'IDE & Agent Config', icon: IconCpu },
    { id: 'security', label: 'Security Architecture', icon: IconShield },
    { id: 'faq', label: 'Troubleshooting & FAQ', icon: IconBook },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#F6E3B8] pt-8 pb-20 relative overflow-hidden">
      <HaikeiContourBackground strokeColor="rgba(246, 227, 184, 0.04)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <FadeIn direction="down">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#F6E3B8]/15 text-xs font-mono">
            <button
              onClick={() => { playClickSound(); onBackToHome(); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#000000] border border-[#F6E3B8]/20 hover:border-[#E7BA05] text-[#F6E3B8] transition-all cursor-pointer"
            >
              <IconArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OVERVIEW</span>
            </button>
            <div className="flex items-center gap-2 text-[#E7BA05]">
              <span className="w-2 h-2 rounded-full bg-[#E7BA05] animate-pulse" />
              <span>DOCUMENTATION // DEPLOY MCP VERSION 2.0 SPECIFICATION</span>
            </div>
          </div>
        </FadeIn>

        {/* Docs Container */}
        <div className="rounded-3xl bg-[#000000] border border-[#F6E3B8]/20 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[720px]">
          
          {/* Docs Navigation Sidebar */}
          <div className="w-full md:w-64 bg-[#000000] border-b md:border-b-0 md:border-r border-[#F6E3B8]/15 p-4 space-y-1.5 shrink-0 font-mono text-xs">
            {navItems.map(item => {
              const IconComp = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => { playClickSound(); setActiveTab(item.id as typeof activeTab); }}
                  className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-left font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E7BA05] text-[#000000] shadow-sm font-black'
                      : 'text-[#F6E3B8]/70 hover:text-[#E7BA05] hover:bg-[#E7BA05]/10'
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
                  <div className="flex items-center gap-2.5 mb-2">
                    <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#F6E3B8] uppercase">
                      QUICKSTART GUIDE
                    </h2>
                    <span className="text-[10px] font-mono font-bold bg-[#E7BA05] text-[#000000] px-2 py-0.5 rounded-full">
                      VERSION 2.0
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F6E3B8]/80">
                    Deploy your website in seconds directly from your AI editor. Equip Cursor, Claude, Antigravity, or VS Code with autonomous deployment capabilities in under 60 seconds.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 space-y-3 font-mono text-xs">
                  <span className="text-[#E7BA05] font-bold">STEP 1: RUN THE INTERACTIVE SETUP CLI</span>
                  <div className="p-3 bg-[#000000] border border-[#F6E3B8]/20 rounded-xl flex items-center justify-between text-[#F6E3B8]">
                    <span>$ npx deploymcp setup</span>
                    <button onClick={() => handleCopy('npx deploymcp setup')} className="p-1 hover:text-[#E7BA05] cursor-pointer">
                      {copiedCmd === 'npx deploymcp setup' ? <IconCheck className="w-4 h-4 text-[#6B9E5A]" /> : <IconCopy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[#F6E3B8]/70 text-[11px] font-sans">
                    The wizard configures your Vercel authentication, detects project dependencies, and writes configuration files for Cursor, Claude, Antigravity, or VS Code.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 space-y-3 font-mono text-xs">
                  <span className="text-[#E7BA05] font-bold">STEP 2: TEST PRE-FLIGHT COMPILATION</span>
                  <div className="p-3 bg-[#000000] border border-[#F6E3B8]/20 rounded-xl flex items-center justify-between text-[#F6E3B8]">
                    <span>$ npx deploymcp check</span>
                    <button onClick={() => handleCopy('npx deploymcp check')} className="p-1 hover:text-[#E7BA05] cursor-pointer">
                      {copiedCmd === 'npx deploymcp check' ? <IconCheck className="w-4 h-4 text-[#6B9E5A]" /> : <IconCopy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[#F6E3B8]/70 text-[11px] font-sans">
                    Executes local build tests across Next.js 14, React Vite, Remix, Astro, or Static HTML, ensuring zero build errors before remote deployment.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 space-y-3 font-mono text-xs">
                  <span className="text-[#E7BA05] font-bold">STEP 3: SHIP TO VERCEL EDGE RUNTIME</span>
                  <div className="p-3 bg-[#000000] border border-[#F6E3B8]/20 rounded-xl flex items-center justify-between text-[#F6E3B8]">
                    <span>$ npx deploymcp deploy --prod</span>
                    <button onClick={() => handleCopy('npx deploymcp deploy --prod')} className="p-1 hover:text-[#E7BA05] cursor-pointer">
                      {copiedCmd === 'npx deploymcp deploy --prod' ? <IconCheck className="w-4 h-4 text-[#6B9E5A]" /> : <IconCopy className="w-4 h-4" />}
                    </button>
                  </div>
                  <p className="text-[#F6E3B8]/70 text-[11px] font-sans">
                    Instantly deploys your production bundle to Vercel global edge points of presence with atomic rollbacks.
                  </p>
                </div>
              </div>
            )}

            {/* TAB 2: 20 TOOLS REFERENCE */}
            {activeTab === 'tools' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#F6E3B8] uppercase mb-2">
                    20 MCP TOOLS SPECIFICATION
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F6E3B8]/80">
                    Comprehensive catalog of all 20 atomic Model Context Protocol tools exposed to your AI agent.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 font-mono text-xs">
                  {MCP_TOOLS.map(tool => (
                    <div key={tool.id} className="p-4 rounded-xl bg-[#000000] border border-[#F6E3B8]/15 hover:border-[#E7BA05] transition-colors">
                      <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                        <span className="text-[#F6E3B8] font-bold text-sm">{tool.name}()</span>
                        <span className="text-[10px] bg-[#000000] text-[#E7BA05] px-2 py-0.5 rounded border border-[#E7BA05]/40 font-semibold">
                          {tool.category.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-[#F6E3B8]/70 text-xs font-sans leading-relaxed">
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
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#F6E3B8] uppercase mb-2">
                    CLI COMMAND REFERENCE
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F6E3B8]/80">
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
                    <div key={i} className="p-4 rounded-xl bg-[#000000] border border-[#F6E3B8]/15 space-y-2">
                      <div className="flex items-center justify-between text-[#F6E3B8]">
                        <span className="text-[#F6E3B8] font-bold">{c.cmd}</span>
                        <button onClick={() => handleCopy(c.cmd)} className="p-1 hover:text-[#E7BA05] cursor-pointer">
                          {copiedCmd === c.cmd ? <IconCheck className="w-3.5 h-3.5 text-[#6B9E5A]" /> : <IconCopy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <p className="text-[#F6E3B8]/70 text-xs font-sans">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: IDE CONFIGURATION GUIDES */}
            {activeTab === 'ide' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#F6E3B8] uppercase mb-2">
                    IDE & AGENT INTEGRATIONS
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F6E3B8]/80">
                    Step-by-step setup snippets for Cursor, Claude Desktop, Antigravity, and VS Code.
                  </p>
                </div>

                {/* Cursor Setup */}
                <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-syne font-bold text-base text-[#F6E3B8]">1. Cursor AI (.cursorrules & MCP)</h3>
                    <span className="text-[10px] font-mono text-[#E7BA05] bg-[#000000] px-2 py-0.5 rounded border border-[#E7BA05]/30">RECOMMENDED</span>
                  </div>
                  <p className="text-xs text-[#F6E3B8]/80 leading-relaxed font-sans">
                    Navigate to <strong>Cursor Settings &gt; Features &gt; MCP Servers</strong>, click <em>+ Add New MCP Server</em>, and enter:
                  </p>
                  <pre className="p-3 bg-[#000000] border border-[#F6E3B8]/15 rounded-xl text-xs font-mono text-[#F6E3B8] overflow-x-auto">
{`{
  "name": "deploymcp",
  "type": "command",
  "command": "npx -y deploymcp@latest"
}`}
                  </pre>
                </div>

                {/* Claude Desktop Setup */}
                <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/15 space-y-3">
                  <h3 className="font-syne font-bold text-base text-[#F6E3B8]">2. Claude Desktop (claude_desktop_config.json)</h3>
                  <p className="text-xs text-[#F6E3B8]/80 leading-relaxed font-sans">
                    Add the following to your Claude Desktop configuration file:
                  </p>
                  <pre className="p-3 bg-[#000000] border border-[#F6E3B8]/15 rounded-xl text-xs font-mono text-[#F6E3B8] overflow-x-auto">
{`{
  "mcpServers": {
    "deploymcp": {
      "command": "npx",
      "args": ["-y", "deploymcp@latest"]
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
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#F6E3B8] uppercase mb-2">
                    ZERO-TRUST ARCHITECTURE
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F6E3B8]/80">
                    Detailed specification of client-side secret fencing and hardware-level isolation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/15 space-y-2">
                    <h3 className="font-syne font-bold text-sm text-[#F6E3B8]">LOCAL AST SECRET MASKING</h3>
                    <p className="text-xs text-[#F6E3B8]/80 font-sans leading-relaxed">
                      Deploy MCP scans environment files using an AST parser. It only extracts variable identifiers (e.g. <code>DATABASE_URL</code>). The secret values remain encrypted on your device and are never included in prompts sent to AI LLMs.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/15 space-y-2">
                    <h3 className="font-syne font-bold text-sm text-[#F6E3B8]">MUTUAL TLS DIRECT TUNNEL</h3>
                    <p className="text-xs text-[#F6E3B8]/80 font-sans leading-relaxed">
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
                  <h2 className="font-syne font-black text-2xl sm:text-3xl text-[#F6E3B8] uppercase mb-2">
                    TROUBLESHOOTING & FAQ
                  </h2>
                  <p className="text-xs sm:text-sm text-[#F6E3B8]/80">
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
                    },
                    {
                      q: 'How do I contact the author or request enterprise support?',
                      a: 'You can reach out directly to Tushar Jain via https://tusharjain.in/contact or file feature requests on the official GitHub repository.'
                    }
                  ].map((faq, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-[#000000] border border-[#F6E3B8]/15 space-y-2">
                      <h3 className="font-syne font-bold text-sm text-[#F6E3B8]">{faq.q}</h3>
                      <p className="text-xs text-[#F6E3B8]/80 font-sans leading-relaxed">{faq.a}</p>
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
