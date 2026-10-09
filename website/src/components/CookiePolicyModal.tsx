import React from 'react';
import { X, Cookie, Shield, Check, Info } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface CookiePolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CookiePolicyModal: React.FC<CookiePolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto font-sans">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#D5380C]">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-syne font-black text-xl text-[#FAF6EE]">COOKIE & STORAGE POLICY</h3>
              <p className="text-xs text-[#E6D5BD]/60 font-mono">DEPLOY MCP PRIVACY & LOCAL PREFERENCES</p>
            </div>
          </div>
          <button
            onClick={() => { playClickSound(); onClose(); }}
            className="p-2 rounded-full hover:bg-[#202020] text-[#E6D5BD]/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs text-[#E6D5BD]/80 leading-relaxed">
          <section className="space-y-1.5">
            <h4 className="font-syne font-bold text-sm text-[#FAF6EE]">1. Zero Third-Party Advertising Trackers</h4>
            <p>
              Deploy MCP does not use tracking cookies, cross-site profiling beacons, or third-party advertising scripts. We believe in maximum developer privacy and clean, zero-surveillance tooling.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-syne font-bold text-sm text-[#FAF6EE]">2. Essential Local Storage Only</h4>
            <p>
              We only use browser <code>localStorage</code> for strictly functional developer preferences:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#FAF6EE]/90">
              <li>Terminal framework selection (Next.js, Vite, Astro, HTML)</li>
              <li>Sound effect preferences (Audio on/off toggle)</li>
              <li>Selected documentation and tool filtering states</li>
            </ul>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-syne font-bold text-sm text-[#FAF6EE]">3. Zero Credential Persistence in Cookies</h4>
            <p>
              Your Vercel access tokens and sensitive environment variable values are <strong>never</strong> written to cookies, web storage, or transmitted to any analytics server. Tokens reside solely in volatile process memory on your local machine during active execution.
            </p>
          </section>

          <section className="space-y-1.5">
            <h4 className="font-syne font-bold text-sm text-[#FAF6EE]">4. Managing Your Storage</h4>
            <p>
              You can clear your local storage preferences at any time through your browser's developer tools or settings without affecting CLI functionality.
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={() => { playClickSound(); onClose(); }}
            className="px-5 py-2.5 rounded-xl bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-syne font-black text-xs uppercase tracking-wider transition-all"
          >
            I UNDERSTAND
          </button>
        </div>

      </div>
    </div>
  );
};
