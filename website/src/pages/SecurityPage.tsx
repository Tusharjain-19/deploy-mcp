import React from 'react';
import { SecurityModel } from '../components/SecurityModel';
import { SelfHealingDemo } from '../components/SelfHealingDemo';
import { HaikeiContourBackground } from '../components/HaikeiDecorations';
import { FadeIn } from '../components/motion/MotionPrimitives';
import { Shield, ArrowLeft } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface SecurityPageProps {
  onBackToHome: () => void;
}

export const SecurityPage: React.FC<SecurityPageProps> = ({ onBackToHome }) => {
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
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OVERVIEW</span>
            </button>
            <div className="flex items-center gap-2 text-[#6B9E5A]">
              <span className="w-2 h-2 rounded-full bg-[#6B9E5A] animate-pulse" />
              <span>ZERO-TRUST SECURITY ARCHITECTURE // HARDWARE ISOLATED ENCLAVE</span>
            </div>
          </div>
        </FadeIn>

        {/* Security & 3D Solar System */}
        <SecurityModel />

        {/* Self-Healing Diagnostics Studio */}
        <div className="mt-16">
          <SelfHealingDemo />
        </div>

      </div>
    </div>
  );
};
