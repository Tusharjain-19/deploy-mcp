import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'What is Deploy MCP?',
      answer: 'Deploy MCP is a free, open-source Model Context Protocol (MCP) server running on your computer. It allows AI coding assistants (like Cursor, VS Code with Claude, Antigravity, and Windsurf) to validate, build-check, secret-sync, and deploy your websites to Vercel in seconds.'
    },
    {
      question: 'Are my Vercel Access Tokens or .env secrets exposed to AI models?',
      answer: 'No! Deploy MCP is engineered with a Zero-Trust Security Boundary. Local environment scanning parses variable key names only. Values are transmitted strictly via secure local TLS calls to Vercel endpoints. AI models see key names and diff states, never actual secret values.'
    },
    {
      question: 'Which frameworks are supported?',
      answer: 'Deploy MCP automatically detects Next.js (Pages and App Router), React + Vite, Vue 3, Svelte, Remix, Astro, Static HTML/CSS/JS, and custom npm build scripts.'
    },
    {
      question: 'How do I run the setup command?',
      answer: 'Simply open your terminal (or your IDE terminal) and run: npx deploymcp setup (or npx deploy-mcp setup). The interactive wizard will guide you to get your free Vercel token, save it locally in ~/.deploy-mcp/config.json, and print your IDE JSON snippet.'
    },
    {
      question: 'Does Deploy MCP cost anything to run?',
      answer: 'Zero costs! Deploy MCP is 100% free and open-source software under the MIT License. It runs locally on your machine and deploys directly to your Vercel account.'
    },
    {
      question: 'What happens if a deployment fails on Vercel?',
      answer: 'Deploy MCP includes autonomous self-healing diagnosis. It automatically fetches the Vercel build log stream, pinpoints exact missing imports or syntax errors, and gives your AI model structured fix instructions to redeploy automatically.'
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 bg-[#000000] border-t border-[#F6E3B8]/15 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#000000] text-[#F6E3B8] text-xs font-bold mb-3 border border-[#E7BA05]/40">
            <HelpCircle className="w-3.5 h-3.5 text-[#E7BA05]" />
            <span className="font-mono text-[11px]">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#F6E3B8] tracking-tight">GOT QUESTIONS? WE HAVE ANSWERS.</h2>
        </div>

        {/* FAQ Accordion List in Signature Palette */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#000000] border border-[#F6E3B8]/20 overflow-hidden transition-all duration-200 hover:border-[#E7BA05] shadow-xl"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-black text-[#F6E3B8] text-sm sm:text-base hover:text-[#E7BA05] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#F6E3B8]/60 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#E7BA05]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#F6E3B8]/80 text-xs sm:text-sm leading-relaxed border-t border-[#F6E3B8]/10 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
