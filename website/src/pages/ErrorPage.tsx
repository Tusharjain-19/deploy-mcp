import React from 'react';
import { LogoMark } from '../components/LogoMark';
import { Terminal, ArrowLeft, RefreshCw, BookOpen, AlertTriangle } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface ErrorPageProps {
  onBackToHome: () => void;
  onOpenDocs?: () => void;
  errorCode?: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  onBackToHome,
  onOpenDocs,
  errorCode = '404'
}) => {
  return (
    <div className="min-h-screen bg-[#101010] text-[#E6D5BD] flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans select-none">
      
      {/* Background Dot Grid */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="max-w-2xl w-full mx-auto text-center space-y-8 relative z-10">
        
        {/* Brand Logo Header */}
        <div className="flex justify-center mb-2">
          <LogoMark size="md" showBadge={false} />
        </div>

        {/* Big Geometric 404 Headline */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181212] border border-[#D5380C]/40 text-[#D5380C] text-xs font-mono font-bold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>HTTP STATUS {errorCode} // EDGE ENCLAVE FAULT</span>
          </div>
          <h1 className="font-syne font-black text-6xl sm:text-8xl text-[#FAF6EE] tracking-tight leading-none uppercase">
            {errorCode}
          </h1>
          <p className="font-syne font-bold text-lg sm:text-xl text-[#FAF6EE]">
            ROUTE NOT FOUND ON VERCEL EDGE RUNTIME
          </p>
          <p className="text-xs sm:text-sm text-[#E6D5BD]/70 max-w-md mx-auto leading-relaxed">
            The requested deployment path or resource is missing or has been relocated by an atomic rollback.
          </p>
        </div>

        {/* Interactive Terminal Diagnostic Card */}
        <div className="p-5 rounded-2xl bg-[#141414] border border-white/10 text-left font-mono text-xs space-y-3 shadow-2xl">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] text-white/50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D5380C]" />
              <span className="text-[#FAF6EE] font-bold">DEPLOY MCP SELF-HEALING DIAGNOSTIC</span>
            </div>
            <span>ERROR_CODE: ERR_EDGE_NOT_FOUND</span>
          </div>

          <div className="space-y-1 text-[#E6D5BD]/90">
            <p className="text-white/40">$ deploymcp doctor --analyze-route</p>
            <p className="text-[#D5380C] font-bold">[FAIL] Path resolution failure in local AST router.</p>
            <p className="text-[#FAF6EE]">[INFO] 20 governed MCP tools are operational on localhost.</p>
            <p className="text-[#F1B333]">[SUGG] Re-route to home or query available tools via CLI.</p>
          </div>
        </div>

        {/* Recovery Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs">
          <button
            onClick={() => { playClickSound(); onBackToHome(); }}
            className="px-5 py-3 rounded-xl bg-[#D5380C] hover:bg-[#B82D09] text-[#FAF6EE] font-syne font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO OVERVIEW</span>
          </button>

          {onOpenDocs && (
            <button
              onClick={() => { playClickSound(); onOpenDocs(); }}
              className="px-5 py-3 rounded-xl bg-[#1a1a1a] hover:bg-[#242424] text-[#FAF6EE] font-bold uppercase tracking-wider border border-white/10 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#D5380C]" />
              <span>VIEW DOCUMENTATION</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
