import React, { useState } from 'react';
import { LogoMark } from './LogoMark';
import { Copy, Check, Github, Menu, X } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/soundEffects';

export type NavPage = 'home' | 'terminal' | 'tools' | 'security' | 'docs';

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
    setTimeout(() => setCopied(false), 2000);
  };

  // Pure focused pages — zero clutter
  const navPages: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'OVERVIEW' },
    { id: 'terminal', label: 'TERMINAL' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'security', label: 'SECURITY' },
    { id: 'docs', label: 'DOCS' },
  ];

  const handleLinkClick = (pageId: NavPage) => {
    playClickSound();
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 px-3 sm:px-6 select-none">
      {/* Strict 1-Line Minimalist Capsule Bar in Pure Brand Colors */}
      <div className="max-w-5xl mx-auto rounded-full bg-[#121212]/95 backdrop-blur-2xl border border-white/10 px-3.5 sm:px-5 h-12 sm:h-13 flex items-center justify-between gap-3 shadow-2xl shadow-black/90">
        
        {/* Minimal Geometric Logo */}
        <button
          onClick={() => { playClickSound(); onNavigate?.('home'); }}
          className="group flex items-center shrink-0 cursor-pointer text-left whitespace-nowrap"
          title="Deploy MCP Home"
        >
          <LogoMark size="sm" showBadge={false} />
        </button>

        {/* 1-Line Desktop Navigation Links (Zero Wrap) */}
        <nav className="hidden md:flex items-center gap-1 text-[11px] font-mono font-bold tracking-wider text-[#E6D5B0]/75 whitespace-nowrap">
          {navPages.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`px-3.5 py-1.5 rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer leading-none ${
                  isActive
                    ? 'bg-[#D5380C] text-[#FAF6EE] shadow-sm font-black'
                    : 'hover:bg-[#1f1f1f] hover:text-[#FAF6EE]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* 1-Line Action Cluster in Pure Brand Colors */}
        <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
          
          {/* Quick Copy Command Pill (1-line, compact, brand orange dollar) */}
          <button
            onClick={handleCopySetup}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#181818] border border-white/10 hover:border-[#D5380C]/80 hover:bg-[#202020] text-[11px] font-mono text-[#E6D5B0] transition-all whitespace-nowrap group shrink-0 leading-none"
            title="Click to copy npx command"
          >
            <span className="text-[#D5380C] font-bold select-none">$</span>
            <span className="text-[#FAF6EE] font-medium whitespace-nowrap">npx deploymcp setup</span>
            {copied ? (
              <Check className="w-3 h-3 text-[#D5380C] shrink-0" />
            ) : (
              <Copy className="w-3 h-3 text-[#E6D5B0]/50 group-hover:text-[#FAF6EE] shrink-0" />
            )}
          </button>

          {/* GitHub CTA Pill */}
          <a
            href="https://github.com/Tusharjain-19/deploy-mcp"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClickSound}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-mono font-bold text-[11px] uppercase tracking-wider transition-all border border-[#FAF6EE]/20 whitespace-nowrap shrink-0 leading-none shadow-sm active:scale-95"
          >
            <Github className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap">GITHUB</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full bg-[#181818] border border-white/10 text-[#E6D5B0] hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto rounded-2xl bg-[#141414] border border-white/15 p-3 space-y-1 shadow-2xl">
          <div className="flex flex-col space-y-1 text-xs font-mono font-bold uppercase tracking-wider text-[#E6D5B0]">
            {navPages.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleLinkClick(item.id);
                  }}
                  className={`text-left px-3.5 py-2.5 rounded-xl transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-[#D5380C] text-[#FAF6EE]'
                      : 'hover:bg-[#202020] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10">
            <button
              onClick={handleCopySetup}
              className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#1a1a1a] text-xs font-mono text-[#FAF6EE]"
            >
              <span className="truncate">$ npx deploymcp setup</span>
              {copied ? <Check className="w-3.5 h-3.5 text-[#D5380C]" /> : <Copy className="w-3.5 h-3.5 text-[#E6D5B0]/60" />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
