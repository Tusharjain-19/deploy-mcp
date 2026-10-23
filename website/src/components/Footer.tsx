import React, { useState } from 'react';
import { LogoMark } from './LogoMark';
import { HaikeiWaveDivider } from './HaikeiDecorations';
import {
  IconTerminal,
  IconShield,
  IconBook,
  IconGlobe,
  IconCopy,
  IconCheck,
  IconArrowUp,
  IconArrowRight,
  IconExternalLink,
  IconGithub,
  IconBolt,
} from './CustomIcons';
import { DeploymentGlyph } from './DeploymentGlyph';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { NavPage } from './Navbar';
import { triggerToast } from './ToastNotification';

interface FooterProps {
  onNavigate?: (page: NavPage) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenSecurity?: () => void;
  onOpenCookies?: () => void;
  onOpenDocs?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrivacy,
  onOpenTerms,
  onOpenSecurity,
  onOpenCookies,
  onOpenDocs,
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
    triggerToast('Command copied: npx deploymcp setup', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDocsClick = () => {
    playClickSound();
    if (onOpenDocs) {
      onOpenDocs();
    } else if (onNavigate) {
      onNavigate('docs');
    } else {
      window.open('https://github.com/Tusharjain-19/deploy-mcp#readme', '_blank');
    }
  };

  return (
    <footer className="bg-[#000000] border-t-2 border-[#F6E3B8]/15 relative text-[#F6E3B8] font-sans overflow-hidden">
      {/* Top Wave Transition */}
      <HaikeiWaveDivider fill="#000000" className="opacity-95 -mt-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 relative z-10">
        
        {/* EDITORIAL HERO BANNER IN FOOTER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#000000] border-2 border-[#F6E3B8]/20 shadow-[12px_12px_0px_#000000] mb-14 relative overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 xl:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#E7BA05] text-[#F6E3B8] text-xs font-mono font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#E7BA05] animate-pulse" />
                <span>AUTONOMOUS VERCEL DEPLOYMENT // MODEL CONTEXT PROTOCOL</span>
              </div>

              <h2 className="font-syne font-black text-3xl sm:text-5xl lg:text-5xl text-[#F6E3B8] uppercase tracking-tight leading-[1.05]">
                DEPLOY YOUR WEBSITE <br />
                <span className="text-[#E7BA05]">IN SECONDS.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#F6E3B8]/85 font-sans leading-relaxed max-w-xl">
                Deploy your website in seconds directly from your AI editor. Connect Cursor, Claude, or Antigravity to Vercel with zero server costs, zero secrets leaked, and zero manual configuration.
              </p>

              <div className="pt-2">
                <button
                  onClick={handleDocsClick}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] border border-[#F6E3B8]/30 hover:border-[#E7BA05] text-xs font-mono font-bold text-[#F6E3B8] hover:text-[#E7BA05] transition-all cursor-pointer"
                >
                  <IconBook className="w-4 h-4 text-[#E7BA05]" />
                  <span>VIEW FULL DOCUMENTATION</span>
                  <IconArrowRight className="w-3.5 h-3.5 ml-1 text-[#E7BA05]" />
                </button>
              </div>
            </div>

            {/* Quick 1-Click Install Capsule */}
            <div className="lg:col-span-5 xl:col-span-4 w-full p-6 rounded-2xl bg-[#000000] border-2 border-[#F6E3B8]/20 space-y-4 shrink-0 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono text-[#F6E3B8] pb-2 border-b border-[#F6E3B8]/15">
                <span className="font-bold flex items-center gap-1.5">
                  <IconTerminal className="w-3.5 h-3.5 text-[#E7BA05]" /> QUICK START
                </span>
                <span className="text-[#E7BA05] font-bold">ZERO CONFIG</span>
              </div>

              <div className="flex items-center justify-between bg-[#000000] p-3.5 rounded-xl border border-[#F6E3B8]/15 font-mono text-xs sm:text-sm text-[#F6E3B8]">
                <div className="flex items-center gap-2 truncate">
                  <span className="text-[#E7BA05] font-black select-none">$</span>
                  <span className="font-bold">npx deploymcp setup</span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className="p-1.5 hover:text-[#E7BA05] text-[#F6E3B8]/50 cursor-pointer ml-2 transition-colors"
                  title="Copy command"
                >
                  {copied ? <IconCheck className="w-4 h-4 text-[#6B9E5A]" /> : <IconCopy className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={handleCopyCmd}
                className="w-full py-3 px-4 rounded-xl bg-[#E7BA05] hover:bg-[#C79F04] text-[#000000] font-sans font-black text-xs uppercase tracking-wide transition-all flex items-center justify-center gap-2 border border-[#000000] shadow-md cursor-pointer"
              >
                <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY SETUP COMMAND'}</span>
                <IconBolt className="w-3.5 h-3.5 text-[#000000]" />
              </button>
            </div>
          </div>
        </div>

        {/* Real-time System Telemetry Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-[#F6E3B8]/15 text-xs font-mono">
          <div className="flex items-center gap-3">
            <LogoMark size="sm" />
            <span className="text-[#F6E3B8]/40">•</span>
            <span className="text-[#F6E3B8]/80 text-xs font-mono">AUTONOMOUS DEPLOYMENT RUNTIME</span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#6B9E5A]/50 text-[#6B9E5A] text-xs shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#6B9E5A] animate-pulse" />
              <span className="font-bold">VERIFIED: 100% PRIVATE • 0 SECRETS LEAKED</span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border border-[#F6E3B8]/20 text-[#F6E3B8]">
              <span className="w-2 h-2 rounded-full bg-[#6B9E5A]" />
              <span className="font-bold text-[#6B9E5A]">12/12 EDGE REGIONS ONLINE</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#000000] hover:bg-[#E7BA05]/15 hover:border-[#E7BA05] border border-[#F6E3B8]/20 text-[#F6E3B8] font-bold cursor-pointer transition-colors"
              title="Back to top"
            >
              <IconArrowUp className="w-3.5 h-3.5 text-[#E7BA05]" />
              <span>TOP</span>
            </button>
          </div>
        </div>

        {/* Streamlined 4-Column Sitemap Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-10 border-b border-[#F6E3B8]/15">
          
          {/* Column 1: Product */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#F6E3B8] uppercase tracking-wider flex items-center gap-2">
              <IconBolt className="w-4 h-4 text-[#E7BA05]" />
              <span>PRODUCT</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#F6E3B8]/80">
              <li>
                <button onClick={() => { onNavigate?.('home'); scrollToTop(); }} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('terminal')} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Terminal Simulator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('tools')} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  20 Built-In Tools
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate?.('security')} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Security Architecture
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Documentation */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#F6E3B8] uppercase tracking-wider flex items-center gap-2">
              <IconBook className="w-4 h-4 text-[#E7BA05]" />
              <span>DOCUMENTATION</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#F6E3B8]/80">
              <li>
                <button onClick={handleDocsClick} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left font-bold text-[#E7BA05]">
                  Quickstart Guide →
                </button>
              </li>
              <li>
                <button onClick={handleDocsClick} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  CLI Commands Reference
                </button>
              </li>
              <li>
                <button onClick={handleDocsClick} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Cursor & Claude Configs
                </button>
              </li>
              <li>
                <button onClick={handleDocsClick} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Troubleshooting & FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Privacy & Security */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#F6E3B8] uppercase tracking-wider flex items-center gap-2">
              <IconShield className="w-4 h-4 text-[#6B9E5A]" />
              <span>PRIVACY & SECURITY</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#F6E3B8]/80">
              <li>
                <button onClick={onOpenPrivacy} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenTerms} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={onOpenSecurity} className="hover:text-[#E7BA05] transition-colors cursor-pointer text-left">
                  Security Whitepaper
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/Tusharjain-19/deploy-mcp/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7BA05] transition-colors inline-flex items-center gap-1"
                >
                  <span>MIT Open Source</span>
                  <IconExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Community & Links */}
          <div className="space-y-4">
            <h4 className="font-syne font-black text-sm text-[#F6E3B8] uppercase tracking-wider flex items-center gap-2">
              <IconGlobe className="w-4 h-4 text-[#F6E3B8]" />
              <span>COMMUNITY</span>
            </h4>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#F6E3B8]/80">
              <li>
                <a
                  href="https://github.com/Tusharjain-19/deploy-mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7BA05] transition-colors inline-flex items-center gap-1.5"
                >
                  <IconGithub className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </li>
              <li>
                <a
                  href="https://tusharjain.in/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7BA05] transition-colors inline-flex items-center gap-1.5 font-bold text-[#E7BA05]"
                >
                  <IconExternalLink className="w-3.5 h-3.5" />
                  <span>Contact Architect</span>
                </a>
              </li>
              <li>
                <a
                  href="https://modelcontextprotocol.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E7BA05] transition-colors inline-flex items-center gap-1.5"
                >
                  <IconExternalLink className="w-3.5 h-3.5" />
                  <span>Model Context Protocol</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F6E3B8]/60">
          <div>
            © 2026 DEPLOY MCP • ARCHITECTED BY TUSHAR JAIN • OPEN SOURCE MIT
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#F6E3B8]/40">DOCUMENTATION:</span>
            <a
              href="https://github.com/Tusharjain-19/deploy-mcp#readme"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E7BA05] hover:underline font-bold"
            >
              github.com/Tusharjain-19/deploy-mcp#readme
            </a>
          </div>
        </div>

        {/* Giant Single-Line Brand Watermark in Canonical Butter #F6E3B8 */}
        <div className="w-full overflow-hidden select-none pointer-events-none mt-8 sm:mt-12 pt-6 border-t border-[#F6E3B8]/15">
          <div className="font-syne font-black text-[10vw] sm:text-[9.5vw] text-[#F6E3B8] text-center leading-none tracking-tight uppercase whitespace-nowrap opacity-90 drop-shadow-[0_0_40px_rgba(246,227,184,0.18)]">
            DEPLOY MCP
          </div>
        </div>

      </div>
    </footer>
  );
};
