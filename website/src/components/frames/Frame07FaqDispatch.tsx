import React, { useState } from 'react';
import { StarburstIcon } from '../StarburstIcon';
import { ChevronDown, HelpCircle, Github, Globe, ExternalLink, ArrowLeft, ArrowUp, Sparkles, BookOpen, Shield } from 'lucide-react';
import { playClickSound } from '../../utils/soundEffects';

interface Frame07Props {
  onPrevFrame: () => void;
  onGoToStart: () => void;
  onOpenDocs: () => void;
  onOpenSecurity: () => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Frame07FaqDispatch: React.FC<Frame07Props> = ({
  onPrevFrame,
  onGoToStart,
  onOpenDocs,
  onOpenSecurity,
  onOpenPrivacy,
  onOpenTerms
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Does Deploy MCP cost anything to run?',
      a: 'Zero server costs! Deploy MCP is 100% free and open-source software under the MIT License. It runs locally as an MCP server on your computer and deploys directly into your personal or team Vercel account.'
    },
    {
      q: 'Are my Vercel Access Tokens or .env secrets exposed to AI models?',
      a: 'Never! Deploy MCP enforces a Zero-Trust Security Boundary. Local environment scanning parses variable key names only. Values are transmitted strictly via encrypted local TLS calls to Vercel endpoints. AI models only see key names and diff states, never actual secret values.'
    },
    {
      q: 'Which frameworks are supported?',
      a: 'Deploy MCP automatically detects Next.js 14+ (Pages and App Router), React + Vite, Vue 3, Svelte, Remix, Astro, Static HTML/CSS/JS, and custom npm build scripts.'
    },
    {
      q: 'How does this differ from the raw Vercel CLI?',
      a: 'Raw Vercel CLI requires interactive prompts, crashes without structured remediation if a build fails, and leaves tokens exposed. Deploy MCP speaks structured Model Context Protocol JSON-RPC, performs pre-flight dry-run builds, and feeds parsed error diagnostics back to your AI assistant.'
    }
  ];

  return (
    <div className="w-full h-full min-h-screen relative flex flex-col justify-between p-4 sm:p-8 lg:p-12 overflow-y-auto overflow-x-hidden bg-[#101010] text-[#E6D5B0]">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* TOP HEADER */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-4 border-b-2 border-[#E6D5B0]/20">
        <div className="flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); onPrevFrame(); }}
            className="p-1.5 rounded-full bg-[#161616] border border-[#E6D5B0]/20 hover:border-[#D5380C] text-[#E6D5B0] transition-colors"
            title="Previous Frame"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <span className="font-syne font-black text-sm tracking-wider text-[#FAF6EE]">FRAME 07 // DISPATCH</span>
            <span className="text-[10px] font-mono text-[#FAF6EE] ml-2 font-bold px-2 py-0.5 rounded-full bg-[#D5380C]">
              FINAL FRAME
            </span>
          </div>
        </div>

        <button
          onClick={() => { playClickSound(); onGoToStart(); }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#FAF6EE]/30 hover:border-[#D5380C] text-xs font-mono font-bold text-[#FAF6EE] transition-all"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#D5380C]" />
          <span>BACK TO FRAME 01</span>
        </button>
      </div>

      {/* MAIN CLOSING POSTER & FAQ BODY */}
      <div className="relative z-10 my-auto py-6 max-w-6xl mx-auto w-full space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#D5380C] text-[#D5380C] font-mono text-xs font-bold">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="font-syne font-black text-2xl sm:text-4xl text-[#FAF6EE] uppercase leading-tight">
                GOT QUESTIONS? WE HAVE ANSWERS.
              </h2>
            </div>

            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#141414] border-2 border-[#E6D5B0]/15 overflow-hidden transition-all duration-200 hover:border-[#D5380C]"
                  >
                    <button
                      onClick={() => { playClickSound(); setOpenFaqIndex(isOpen ? null : idx); }}
                      className="w-full px-5 py-4 flex items-center justify-between text-left font-syne font-bold text-sm text-[#FAF6EE] hover:text-[#D5380C] transition-colors"
                    >
                      <span className="pr-3">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-[#E6D5B0]/60 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D5380C]' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#E6D5B0]/80 leading-relaxed border-t border-[#E6D5B0]/10 pt-3 font-sans">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Impact Burnt Orange Closing Card */}
          <div className="lg:col-span-5 relative rounded-3xl bg-[#D5380C] border-4 border-[#FAF6EE] p-6 sm:p-8 text-left shadow-[8px_8px_0px_#101010] space-y-5 text-[#FAF6EE]">
            
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold uppercase tracking-widest bg-[#101010] text-[#FAF6EE] px-3 py-1 rounded-full border border-[#FAF6EE]/30">
                GET STARTED NOW
              </span>
              <StarburstIcon points={8} fill="#101010" stroke="#FAF6EE" strokeWidth={2} className="w-10 h-10 animate-spin-slow" />
            </div>

            <h3 className="font-syne font-black text-2xl sm:text-3xl leading-tight uppercase">
              READY TO EQUIP YOUR AGENT?
            </h3>

            <p className="text-xs sm:text-sm font-medium leading-relaxed opacity-95">
              Run the setup command in your terminal or IDE, plug in your free Vercel token, and ship your next web app autonomously.
            </p>

            <div className="bg-[#101010] p-4 rounded-2xl border border-[#FAF6EE]/30 font-mono text-xs space-y-2">
              <div className="text-[11px] text-[#FAF6EE]">$ npx deploymcp setup</div>
              <div className="text-[10px] text-[#E6D5B0]/60">Zero configuration • Free forever MIT</div>
            </div>

            {/* Quick Links Modals */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono font-bold">
              <button
                onClick={() => { playClickSound(); onOpenDocs(); }}
                className="p-2.5 rounded-xl bg-[#101010] text-[#FAF6EE] hover:bg-black border border-[#FAF6EE]/30 flex items-center justify-center gap-1.5 transition-all"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#FAF6EE]" />
                <span>FULL DOCS</span>
              </button>
              <button
                onClick={() => { playClickSound(); onOpenSecurity(); }}
                className="p-2.5 rounded-xl bg-[#101010] text-[#FAF6EE] hover:bg-black border border-[#FAF6EE]/30 flex items-center justify-center gap-1.5 transition-all"
              >
                <Shield className="w-3.5 h-3.5 text-[#D5380C]" />
                <span>SECURITY</span>
              </button>
              <button
                onClick={() => { playClickSound(); onOpenPrivacy(); }}
                className="p-2 rounded-xl bg-[#101010] text-[#E6D5B0]/70 hover:text-[#FAF6EE] text-[11px] transition-all"
              >
                PRIVACY POLICY
              </button>
              <button
                onClick={() => { playClickSound(); onOpenTerms(); }}
                className="p-2 rounded-xl bg-[#101010] text-[#E6D5B0]/70 hover:text-[#FAF6EE] text-[11px] transition-all"
              >
                TERMS OF SERVICE
              </button>
            </div>

            {/* External Links */}
            <div className="pt-2 border-t border-[#FAF6EE]/30 flex items-center justify-between text-xs font-mono">
              <a
                href="https://github.com/Tusharjain-19/deploy-mcp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline text-[#FAF6EE]"
              >
                <Github className="w-3.5 h-3.5" />
                <span>STAR ON GITHUB</span>
              </a>
              <a
                href="https://tusharjain.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline text-[#FAF6EE]"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>tusharjain.in</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* FOOTER BAR OF FRAME 07 */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-3 border-t-2 border-[#E6D5B0]/20 text-xs font-mono text-[#E6D5B0]/70">
        <button
          onClick={() => { playClickSound(); onPrevFrame(); }}
          className="flex items-center gap-1 text-[#E6D5B0] hover:text-[#D5380C]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK: FRAME 06 TOOL MATRIX</span>
        </button>

        <p className="text-[11px]">
          © {new Date().getFullYear()} DEPLOY MCP • CRAFTED WITH PRIDE BY TUSHAR JAIN
        </p>
      </div>
    </div>
  );
};
