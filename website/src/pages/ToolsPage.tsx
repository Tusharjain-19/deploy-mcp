import React from 'react';
import { ToolExplorer } from '../components/ToolExplorer';
import { IdeConfigWizard } from '../components/IdeConfigWizard';
import { HaikeiContourBackground } from '../components/HaikeiDecorations';
import { FadeIn } from '../components/motion/MotionPrimitives';
import { Wrench, Terminal, ArrowLeft } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface ToolsPageProps {
  onBackToHome: () => void;
}

export const ToolsPage: React.FC<ToolsPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-[#101010] text-[#E6D5BD] pt-8 pb-20 relative overflow-hidden">
      <HaikeiContourBackground strokeColor="rgba(213, 56, 12, 0.05)" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation Breadcrumb */}
        <FadeIn direction="down">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#E6D5BD]/15 text-xs font-mono">
            <button
              onClick={() => { playClickSound(); onBackToHome(); }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#161616] border border-[#E6D5BD]/20 hover:border-[#D5380C] text-[#FAF6EE] transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO OVERVIEW</span>
            </button>
            <div className="flex items-center gap-2 text-[#D5380C]">
              <span className="w-2 h-2 rounded-full bg-[#D5380C] animate-pulse" />
              <span>TOOLS & ECOSYSTEM // 20 ATOMIC CAPABILITIES</span>
            </div>
          </div>
        </FadeIn>

        {/* 20 MCP Tools Suite */}
        <ToolExplorer />

        {/* Multi-IDE Setup Wizard */}
        <div className="mt-16">
          <IdeConfigWizard />
        </div>

      </div>
    </div>
  );
};
