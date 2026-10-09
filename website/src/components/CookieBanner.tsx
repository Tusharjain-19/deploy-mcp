import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface CookieBannerProps {
  onOpenCookiePolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiePolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('deploymcp_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (choice: 'all' | 'essential') => {
    playClickSound();
    localStorage.setItem('deploymcp_cookie_consent', choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[90] animate-fadeIn">
      <div className="p-4 rounded-2xl bg-[#141414]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-3 font-sans text-xs">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#D5380C] shrink-0 mt-0.5">
            <Cookie className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="font-syne font-bold text-xs text-[#FAF6EE]">DEVELOPER COOKIE PREFERENCES</h4>
            <p className="text-[#E6D5BD]/75 text-[11px] leading-relaxed">
              We only store functional preferences (terminal framework, audio settings). No advertising trackers or secret tokens are ever persisted.{' '}
              <button
                onClick={() => { playClickSound(); onOpenCookiePolicy(); }}
                className="text-[#D5380C] hover:underline font-semibold"
              >
                Cookie Policy
              </button>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10 font-mono text-[11px]">
          <button
            onClick={() => handleAccept('essential')}
            className="px-3 py-1.5 rounded-lg bg-[#1a1a1a] hover:bg-[#222222] text-[#E6D5BD] transition-colors"
          >
            ESSENTIAL ONLY
          </button>
          <button
            onClick={() => handleAccept('all')}
            className="px-3.5 py-1.5 rounded-lg bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-bold transition-all shadow-sm"
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
};
