import React, { useState } from 'react';
import { LogoMark } from './LogoMark';
import {
  IconCopy,
  IconCheck,
  IconGithub,
  IconMenu,
  IconClose,
  IconExternalLink,
  IconAlertTriangle,
} from './CustomIcons';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';
import { triggerToast } from './ToastNotification';

export type NavPage = 'home' | 'terminal' | 'tools' | 'security' | 'docs' | 'error';

interface NavbarProps {
  currentPage?: NavPage;
  onNavigate?: (page: NavPage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCopySetup = () => {
    playSuccessSound();
    navigator.clipboard.writeText('npx deploymcp setup');
    setCopied(true);
    triggerToast('Command copied: npx deploymcp setup', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const navPages: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'OVERVIEW' },
    { id: 'terminal', label: 'TERMINAL' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'security', label: 'SECURITY' },
    { id: 'docs', label: 'DOCS' },
  ];

  const handleLinkClick = (pageId: NavPage) => {
    playClickSound();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  const handleLogoClick = () => {
    playClickSound();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-3 sm:px-6 select-none">
      {/* Wide, Premium Minimalist Capsule Bar in Pure Brand Colors */}
      <div className="max-w-6xl mx-auto rounded-full bg-[#000000]/95 backdrop-blur-2xl border border-[#F6E3B8]/25 px-4 sm:px-6 h-14 sm:h-15 flex items-center justify-between gap-4 shadow-2xl shadow-black">
        
        {/* Minimal Geometric Clickable Logo */}
        <button
          onClick={handleLogoClick}
          className="group flex items-center shrink-0 cursor-pointer text-left whitespace-nowrap focus:outline-none"
          title="Deploy MCP Home (Click to return to overview)"
        >
          <LogoMark size="sm" showBadge={false} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-[#F6E3B8]/80 whitespace-nowrap">
          {navPages.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer leading-none ${
                  isActive
                    ? 'bg-[#E7BA05] text-[#000000] shadow-sm font-black'
                    : 'hover:bg-[#E7BA05]/15 hover:text-[#E7BA05]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Cluster in Pure Brand Colors (Encapsulated with zero overflow) */}
        <div className="flex items-center gap-2.5 shrink-0 whitespace-nowrap">
          
          {/* Quick Copy Command Pill */}
          <button
            onClick={handleCopySetup}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#000000] border border-[#F6E3B8]/20 hover:border-[#E7BA05]/80 hover:bg-[#0a0a0a] text-xs font-mono text-[#F6E3B8] transition-all whitespace-nowrap group shrink-0 leading-none cursor-pointer"
            title="Click to copy npx setup command"
          >
            <span className="text-[#E7BA05] font-bold select-none">$</span>
            <span className="text-[#F6E3B8] font-medium whitespace-nowrap">npx deploymcp setup</span>
            {copied ? (
              <IconCheck className="w-3.5 h-3.5 text-[#6B9E5A] shrink-0" />
            ) : (
              <IconCopy className="w-3.5 h-3.5 text-[#F6E3B8]/50 group-hover:text-[#E7BA05] shrink-0" />
            )}
          </button>

          {/* GitHub CTA Pill */}
          <a
            href="https://github.com/Tusharjain-19/deploy-mcp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E7BA05] hover:bg-[#C79F04] text-[#000000] font-mono font-extrabold text-xs uppercase tracking-wider transition-all border border-[#000000] whitespace-nowrap shrink-0 leading-none shadow-sm active:scale-95 cursor-pointer"
            title="Star on GitHub"
          >
            <IconGithub className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">GITHUB</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#000000] border border-[#F6E3B8]/20 text-[#F6E3B8] hover:text-[#E7BA05] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <IconClose className="w-4 h-4" /> : <IconMenu className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Responsive Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-2xl bg-[#000000] border border-[#F6E3B8]/20 p-4 space-y-3 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#F6E3B8]">
            {navPages.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#E7BA05] text-[#000000] font-black'
                      : 'hover:bg-[#E7BA05]/15 hover:text-[#E7BA05]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#000000]" />}
                </button>
              );
            })}

            {/* Error Suite Explorer Link */}
            <button
              onClick={() => handleLinkClick('error')}
              className={`text-left px-3.5 py-2.5 rounded-xl transition-colors whitespace-nowrap cursor-pointer flex items-center justify-between ${
                currentPage === 'error'
                  ? 'bg-[#E7BA05] text-[#000000] font-black'
                  : 'hover:bg-[#E7BA05]/15 hover:text-[#E7BA05] text-[#F6E3B8]/80'
              }`}
            >
              <span className="flex items-center gap-2">
                <IconAlertTriangle className="w-3.5 h-3.5 text-[#906342]" />
                <span>ERROR SUITE (404, 403, 506)</span>
              </span>
            </button>

            {/* Direct Contact Link */}
            <a
              href="https://tusharjain.in/contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-left px-3.5 py-2.5 rounded-xl transition-colors whitespace-nowrap text-[#F6E3B8]/80 hover:bg-[#E7BA05]/15 hover:text-[#E7BA05] flex items-center justify-between"
            >
              <span>CONTACT ARCHITECT</span>
              <IconExternalLink className="w-3.5 h-3.5 text-[#E7BA05]" />
            </a>
          </div>

          {/* Quick Copy Command in Mobile Menu */}
          <div className="pt-2 border-t border-[#F6E3B8]/15 space-y-2">
            <button
              onClick={handleCopySetup}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#0a0a0a] border border-[#F6E3B8]/15 text-xs font-mono text-[#F6E3B8] cursor-pointer hover:border-[#E7BA05]/60 transition-colors"
            >
              <span className="truncate">$ npx deploymcp setup</span>
              {copied ? <IconCheck className="w-3.5 h-3.5 text-[#6B9E5A]" /> : <IconCopy className="w-3.5 h-3.5 text-[#F6E3B8]/60" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
