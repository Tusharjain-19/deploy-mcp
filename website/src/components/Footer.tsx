import React, { useState } from 'react';
import { LogoMark } from './LogoMark';
import { HaikeiWaveDivider } from './HaikeiDecorations';
import { Github, Globe, ExternalLink, ArrowUp, ShieldCheck, Terminal, BookOpen, Cookie, FileText, CheckCircle2, Copy, Check, Zap, Sparkles } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { NavPage } from './Navbar';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenSecurity?: () => void;
  onOpenCookies?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenSecurity,
  onOpenCookies,
}) => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyCmd = () => {
    playSuccessSound();
    navigator.clipboard.writeText('npx deploymcp setup');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-[#0C0C0C] border-t-2 border-white/10 relative text-[#E6D5BD] font-sans overflow-hidden">
      {/* Top Wave Transition */}
      <HaikeiWaveDivider fill="#0C0C0C" className="opacity-95 -mt-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative z-10">
        
        {/* BIG BOLD EDITORIAL HERO CALLOUT BANNER IN FOOTER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border-2 border-white/15 shadow-[12px_12px_0px_#101010] mb-16 relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181818] border border-[#D5380C] text-[#FAF6EE] text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
                <span>SOVEREIGN RUNTIME // MODEL CONTEXT PROTOCOL</span>
              </div>

              <h2 className="font-syne font-black text-3xl sm:text-5xl lg:text-6xl text-[#FAF6EE] uppercase tracking-tight leading-[0.98]">
                SHIP AT THE SPEED OF <br />
                <span className="text-[#D5380C]">AUTONOMOUS THOUGHT.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#E6D5BD]/85 font-sans leading-relaxed">
                Connect Cursor, Claude 3.7, and Antigravity directly to Vercel infrastructure. Zero server costs, zero credential leaks, and 100% deterministic edge deployments.
              </p>
            </div>

            {/* Quick 1-Click Install Capsule */}
            <div className="w-full lg:w-96 p-6 rounded-2xl bg-[#0E0E0E] border-2 border-white/10 space-y-4 shrink-0 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#FAF6EE] pb-2 border-b border-white/10">
                <span className="font-bold flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-[#D5380C]" /> QUICK START
                </span>
                <span className="text-[#F1B333] font-bold">ZERO CONFIG</span>
              </div>

              <div className="flex items-center justify-between bg-[#161616] p-3.5 rounded-xl border border-white/10 font-mono text-xs sm:text-sm text-[#FAF6EE]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#D5380C] font-black select-none">$</span>
                  <span className="font-bold">npx deploymcp setup</span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className="p-1.5 hover:text-[#D5380C] text-white/50 cursor-pointer ml-2 transition-colors"
                  title="Copy command"
                >
                  {copied ? <Check className="w-4 h-4 text-[#0C9367]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={handleCopyCmd}
                className="w-full py-3 px-4 rounded-xl bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-syne font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-[#FAF6EE]/30 shadow-md cursor-pointer"
              >
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY SETUP COMMAND'}</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Real-time System Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 border-b border-white/10 text-xs font-mono">
          <div className="flex items-center gap-3">
            <LogoMark size="sm" showBadge={false} />
            <span className="font-bold text-[#FAF6EE] text-sm">DEPLOY MCP</span>
            <span className="text-white/30">/</span>
            <span className="text-[#E6D5BD]/70 text-xs">v1.0.0 OPEN SOURCE</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-white/10 text-[#FAF6EE]">
              <span className="w-2 h-2 rounded-full bg-[#0C9367] animate-pulse" />
              <span className="font-bold">ALL 12 VERCEL EDGE REGIONS 100% NOMINAL</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#181818] hover:bg-[#252525] border border-white/10 text-[#FAF6EE] font-bold cursor-pointer transition-colors"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#D5380C]" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Fully Detailed 4-Column Sitemap Grid with BIGGER Text */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-white/10">
          
          {/* Column 1: Product Runtime */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#FAF6EE] uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#D5380C]" />
              <span>PRODUCT RUNTIME</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#E6D5BD]/80">
              <li>
                <button onClick={() => { onNavigate?.('home'); scrollToTop(); }} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Platform Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('terminal')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Terminal Console Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('tools')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  20 Governed MCP Tools
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('security')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Zero-Trust Enclave Model
                </button>
              </li>
              <li>
                <a href="#showcase-runway" className="hover:text-[#D5380C] transition-colors">
                  Showcase Runway (5 Frames)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Developer Documentation */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#FAF6EE] uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#F1B333]" />
              <span>DEVELOPER DOCS</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#E6D5BD]/80">
              <li>
                <button onClick={() => onNavigate?.('docs')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Quickstart Guide (60s)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('docs')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  CLI Commands Reference
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('docs')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Cursor & Claude Configs
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('docs')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Antigravity Stdio Protocol
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('docs')} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Troubleshooting & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Security Policies */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#FAF6EE] uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0C9367]" />
              <span>GOVERNANCE & TRUST</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#E6D5BD]/80">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={onOpenSecurity} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Security Model & Whitepaper
                </button>
              </li>
              <li>
                <button onClick={onOpenCookies} className="hover:text-[#D5380C] transition-colors cursor-pointer text-left">
                  Cookie & Storage Policy
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/Tusharjain-19/deploy-mcp/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5380C] transition-colors inline-flex items-center gap-1"
                >
                  <span>MIT Open-Source License</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Source */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#FAF6EE] uppercase tracking-wider flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#FAF6EE]" />
              <span>COMMUNITY & REPO</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#E6D5BD]/80">
              <li>
                <a
                  href="https://github.com/Tusharjain-19/deploy-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5380C] transition-colors inline-flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@tusharjain-19/deploy-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5380C] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>npm Registry Package</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Tusharjain-19/deploy-mcp/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5380C] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Issue Tracker</span>
                </a>
              </li>
              <li>
                <a
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5380C] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Model Context Protocol Standard</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D5380C] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Vercel Edge Network</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Giant Brand Watermark & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
          <div>
            © {new Date().getFullYear()} DEPLOY MCP. ARCHITECTED BY TUSHAR JAIN. 100% FREE MIT.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#D5380C] font-bold">BURNT ORANGE & WARM IVORY</span>
            <span>•</span>
            <span>ZERO CLOUD CREDENTIAL LEAKAGE</span>
          </div>
        </div>

        {/* Giant Watermark Typography across footer background */}
        <div className="font-syne font-black text-[70px] sm:text-[140px] lg:text-[180px] text-white/[0.025] select-none pointer-events-none text-center leading-none mt-6 tracking-tighter uppercase">
          DEPLOY MCP
        </div>

      </div>
    </footer>
  );
};
