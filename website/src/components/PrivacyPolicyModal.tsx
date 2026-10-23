import React from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Eye, Database, Globe } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#000000] border border-[#F6E3B8]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#E7BA05]/10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F6E3B8]/15 bg-[#000000] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E7BA05] border border-[#E7BA05] flex items-center justify-center text-[#000000]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#F6E3B8] tracking-tight uppercase">Deploy MCP Privacy Policy</h2>
              <p className="text-xs text-[#F6E3B8]/70 font-mono">Zero Telemetry & 100% Client-Side Privacy Guarantee</p>
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
              <h3 className="font-black text-[#6B9E5A] text-sm uppercase">Zero Telemetry Promise</h3>
              <p className="text-xs text-[#F6E3B8]/90 mt-1">
                Deploy MCP collects ZERO personal data, ZERO usage analytics, and ZERO telemetry tracking. Everything runs 100% locally on your machine.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Eye className="w-4 h-4 text-[#E7BA05]" />
              1. What Information Is Processed?
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Deploy MCP only processes data necessary to execute build validation and Vercel deployments: project directory files, framework signatures (`package.json`), and environment variable keys.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Database className="w-4 h-4 text-[#E7BA05]" />
              2. Where Is Your Data Stored?
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              All configuration parameters are stored locally on your machine under <code className="text-[#F6E3B8] font-mono bg-[#000000] px-2 py-0.5 rounded border border-[#F6E3B8]/20">~/.deploy-mcp/config.json</code>. No data is ever transmitted to or stored on external servers.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#E7BA05]" />
              3. Third-Party Services
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              The only external service Deploy MCP connects with is official Vercel REST API endpoints (`api.vercel.com`) using your own personal access token.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#E7BA05]" />
              4. Open Source Auditability
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Deploy MCP is 100% free open-source software licensed under the MIT License. Anyone can inspect, audit, or verify the source code on GitHub at any time.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#6B9E5A]" />
              5. Contact & Privacy Inquiries
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              For any questions regarding privacy or architecture, contact the developer directly at{' '}
              <a href="https://tusharjain.in/contact" target="_blank" rel="noopener noreferrer" className="text-[#E7BA05] hover:underline font-bold">
                tusharjain.in/contact
              </a>.
            </p>
          </div>

          <div className="pt-4 border-t border-[#F6E3B8]/15 text-xs text-[#F6E3B8]/50 text-center font-mono">
            LAST UPDATED: 2026 • DEPLOY MCP ZERO TELEMETRY RUNTIME
          </div>

        </div>

      </div>
    </div>
  );
};
