import React from 'react';
import { X, Shield, Lock, CheckCircle2, Server, Key, EyeOff } from 'lucide-react';

interface SecurityPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SecurityPolicyModal: React.FC<SecurityPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#000000] border border-[#F6E3B8]/20 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-[#E7BA05]/10">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#F6E3B8]/15 bg-[#000000] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E7BA05] border border-[#E7BA05] flex items-center justify-center text-[#000000]">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-[#F6E3B8] tracking-tight uppercase">Deploy MCP Security Policy</h2>
              <p className="text-xs text-[#F6E3B8]/70 font-mono">Zero-Trust Isolation & Local Security Architecture</p>
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
              <h3 className="font-black text-[#6B9E5A] text-sm uppercase">Core Guarantee: 100% Secret Isolation</h3>
              <p className="text-xs text-[#F6E3B8]/90 mt-1">
                Your environment variables, API secret tokens, and cloud access credentials never touch third-party AI models or LLM prompt context windows.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#E7BA05]" />
              1. Local Machine Boundary
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Deploy MCP runs entirely as a local process on your computer (`localhost`). All operations (framework detection, local dry-run build validation, secret parsing) execute locally.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-[#E7BA05]" />
              2. Key-Only Parsing Algorithm
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              When syncing environment variables (`.env`), Deploy MCP extracts key names (e.g. `DATABASE_URL`) to report status to the AI assistant. Actual values are held in memory and posted directly to Vercel via TLS-encrypted REST endpoints.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Key className="w-4 h-4 text-[#E7BA05]" />
              3. Secure Token Storage & Permissions
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Your Vercel Personal Access Token is saved locally at <code className="text-[#F6E3B8] font-mono bg-[#000000] px-2 py-0.5 rounded border border-[#F6E3B8]/20">~/.deploy-mcp/config.json</code> with strict filesystem permissions.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Server className="w-4 h-4 text-[#E7BA05]" />
              4. Direct Vercel Communication
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              Deploy MCP communicates directly with official Vercel REST API endpoints (`https://api.vercel.com`). No intermediary proxy servers or telemetry relay servers are involved.
            </p>

            <h4 className="text-base font-black text-[#F6E3B8] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#6B9E5A]" />
              5. Responsible Disclosure
            </h4>
            <p className="text-xs text-[#F6E3B8]/70">
              To report any security vulnerability or audit finding, contact the maintainer directly at{' '}
              <a href="https://tusharjain.in/contact" target="_blank" rel="noopener noreferrer" className="text-[#E7BA05] hover:underline font-bold">
                tusharjain.in/contact
              </a>.
            </p>
          </div>

          <div className="pt-4 border-t border-[#F6E3B8]/15 text-xs text-[#F6E3B8]/50 text-center font-mono">
            LAST UPDATED: 2026 • DEPLOY MCP ZERO-TRUST RUNTIME
          </div>

        </div>

      </div>
    </div>
  );
};
