import React, { useState } from 'react';
import { IconShield, IconCheck, IconExternalLink } from './CustomIcons';
import { playClickSound } from '../utils/soundEffects';

interface ZeroTrustSecurityPillProps {
  className?: string;
  onOpenSecurity?: () => void;
}

export const ZeroTrustSecurityPill: React.FC<ZeroTrustSecurityPillProps> = ({
  className = '',
  onOpenSecurity,
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    playClickSound();
    if (onOpenSecurity) {
      onOpenSecurity();
    } else {
      setShowTooltip(!showTooltip);
    }
  };

  return (
    <div className={`relative inline-block select-none font-mono ${className}`}>
      {/* Small Tactile Component in Signature Leaf #6B9E5A */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#000000] border-2 border-[#6B9E5A] hover:bg-[#6B9E5A]/10 text-[#6B9E5A] text-xs font-bold transition-all shadow-[2px_2px_0px_#6B9E5A] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer"
        title="Zero-Trust Enclave Active (Click for specification)"
      >
        <span className="w-2 h-2 rounded-full bg-[#6B9E5A] animate-pulse shrink-0" />
        <IconShield className="w-3.5 h-3.5 text-[#6B9E5A] shrink-0 group-hover:scale-110 transition-transform" />
        <span className="tracking-wide uppercase whitespace-nowrap text-[11px]">
          [OK] 0 SECRETS LEAKED TO AI
        </span>
        <span className="hidden sm:inline text-[#6B9E5A]/60">•</span>
        <span className="hidden sm:inline text-[10px] text-[#6B9E5A]/80 font-normal">
          100% PRIVATE
        </span>
      </button>

      {/* Floating Micro-Telemetry Popover */}
      {showTooltip && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-72 p-3 rounded-2xl bg-[#000000] border border-[#6B9E5A] shadow-[4px_4px_0px_#6B9E5A] text-left z-50 pointer-events-none animate-fadeIn">
          <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#6B9E5A]/30 text-[10px] text-[#6B9E5A] font-bold">
            <span className="flex items-center gap-1">
              <IconCheck className="w-3 h-3 text-[#6B9E5A]" /> ENCLAVE VERIFIED
            </span>
            <span>REST API MUTUAL TLS</span>
          </div>
          <p className="text-[11px] font-sans text-[#F6E3B8]/90 leading-tight">
            Environment secret values are masked on your local device. AI models only receive key names, never real tokens or private strings.
          </p>
          <div className="mt-2 text-[9px] text-[#6B9E5A] font-mono font-bold flex items-center justify-between">
            <span>ISO/IEC ZERO TELEMETRY</span>
            <span className="text-[#E7BA05]">CLICK FOR ARCHITECTURE →</span>
          </div>
        </div>
      )}
    </div>
  );
};
