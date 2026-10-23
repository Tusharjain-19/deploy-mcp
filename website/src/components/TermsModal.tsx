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
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#000000] border border-[#F6E3B8]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#E7BA05]/10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F6E3B8]/15 bg-[#000000] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E7BA05] border border-[#E7BA05] flex items-center justify-center text-[#000000]">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#F6E3B8] tracking-tight uppercase">Deploy MCP Terms of Service</h2>
              <p className="text-xs text-[#F6E3B8]/70 font-mono">Open-Source MIT License & Terms of Use</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#000000] hover:bg-[#E7BA05] hover:text-[#000000] border border-[#F6E3B8]/20 text-[#F6E3B8] flex items-center justify-center transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-sans text-[#F6E3B8] text-sm leading-relaxed space-y-6 bg-[#000000]">
          
          <div className="p-5 rounded-2xl bg-[#6B9E5A]/15 text-[#F6E3B8] border border-[#6B9E5A]/40 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#6B9E5A] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-black text-[#6B9E5A] text-sm uppercase">MIT Open-Source License</h3>
              <p className="text-xs text-[#F6E3B8]/90 mt-1">
                Deploy MCP is free open-source software provided under the MIT License. You are free to use, modify, distribute, and integrate it into commercial or non-commercial projects.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Code className="w-4 h-4 text-[#E7BA05]" />
              1. Software Usage Rights
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#E7BA05]" />
              2. Disclaimer of Warranty
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Scale className="w-4 h-4 text-[#E7BA05]" />
              3. Limitation of Liability
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Code className="w-4 h-4 text-[#6B9E5A]" />
              4. Inquiries & Contact
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Direct any licensing or usage questions to{' '}
              <a href="https://tusharjain.in/contact" target="_blank" rel="noopener noreferrer" className="text-[#E7BA05] hover:underline font-bold">
                tusharjain.in/contact
              </a>.
            </p>
          </div>

          <div className="pt-4 border-t border-[#F6E3B8]/15 text-xs text-[#F6E3B8]/50 text-center font-mono">
            COPYRIGHT © 2026 TUSHAR JAIN • LICENSED UNDER MIT
          </div>

        </div>

      </div>
    </div>
  );
};
