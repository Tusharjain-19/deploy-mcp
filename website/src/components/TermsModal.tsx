import React from 'react';
import { X, FileText, CheckCircle2, Scale, Code } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#141414] border-2 border-[#E6D5BD]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#D5360C]/20">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6D5BD]/15 bg-[#101010] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#D5360C] border border-[#E6D5BD]/40 flex items-center justify-center text-[#E6D5BD]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#E6D5BD] tracking-tight uppercase">Deploy MCP Terms of Service</h2>
              <p className="text-xs text-[#E6D5BD]/70 font-mono">Open-Source MIT License & Terms of Use</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#181818] hover:bg-[#D5360C] border border-[#E6D5BD]/20 text-[#E6D5BD] flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-sans text-[#E6D5BD] text-sm leading-relaxed space-y-6 bg-[#141414]">
          
          <div className="p-5 rounded-2xl bg-[#D5360C] text-[#E6D5BD] border border-[#E6D5BD]/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#E6D5BD] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-[#E6D5BD] text-sm uppercase">MIT Open-Source License</h3>
              <p className="text-xs text-[#E6D5BD]/90 mt-1">
                Deploy MCP is free open-source software provided under the MIT License. You are free to use, modify, distribute, and integrate it into commercial or non-commercial projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Code className="w-4 h-4 text-[#D5360C]" />
              1. Software Usage Rights
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#D5360C]" />
              2. Disclaimer of Warranty
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            </p>

            <h4 className="text-base font-black text-[#E6D5BD] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#D5360C]" />
              3. Limitation of Liability
            </h4>
            <p className="text-xs text-[#E6D5BD]/70">
              IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE.
            </p>
          </div>

          <div className="pt-4 border-t border-[#E6D5BD]/10 text-xs text-[#E6D5BD]/50 text-center font-mono">
            COPYRIGHT © {new Date().getFullYear()} TUSHAR JAIN • LICENSED UNDER MIT
          </div>

        </div>

      </div>
    </div>
  );
};
