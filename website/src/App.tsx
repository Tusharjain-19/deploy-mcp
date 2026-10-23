import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Navbar, NavPage } from './components/Navbar';
import { PageLoadingBar } from './components/PageLoadingBar';
import { ScrollBackgroundGlow } from './components/motion/ScrollBackgroundGlow';
import { CosmicStarfield } from './components/CosmicStarfield';
import { ScrollTextMarquee } from './components/motion/ScrollTextMarquee';
import { CookieBanner } from './components/CookieBanner';
import { ToastContainer } from './components/ToastNotification';

// Main Landing Page Sections
import { Hero } from './components/Hero';
import { HorizontalShowcaseRunway } from './components/HorizontalShowcaseRunway';
import { TerminalSimulator } from './components/TerminalSimulator';
import { SelfHealingDemo } from './components/SelfHealingDemo';
import { IdeConfigWizard } from './components/IdeConfigWizard';
import { SecurityModel } from './components/SecurityModel';
import { ToolExplorer } from './components/ToolExplorer';
import { FeaturesGrid } from './components/FeaturesGrid';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

// Dedicated Standalone Pages
import { TerminalPage } from './pages/TerminalPage';
import { ToolsPage } from './pages/ToolsPage';
import { SecurityPage } from './pages/SecurityPage';
import { DocsPage } from './pages/DocsPage';
import { ErrorPage } from './pages/ErrorPage';

// Legal & Policy Modals
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { TermsModal } from './components/TermsModal';
import { SecurityPolicyModal } from './components/SecurityPolicyModal';
import { CookiePolicyModal } from './components/CookiePolicyModal';

export type ExtendedNavPage = NavPage | 'error';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<ExtendedNavPage>('home');
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);

  // Industry-Standard Studio Freight Lenis Smooth Momentum Scroll Engine (120Hz/144Hz Butter Physics)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Make lenis globally accessible for smooth programmatic jumps
    (window as any).__lenis = lenis;
    window.dispatchEvent(new CustomEvent('lenis-init', { detail: lenis }));

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  // Silky smooth multi-page transition with progress bar & scroll reset
  const handleNavigate = (page: ExtendedNavPage) => {
    const lenis = (window as any).__lenis;
    if (page === currentPage) {
      if (lenis) lenis.scrollTo(0, { duration: 0.6 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsLoading(true);
    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo({ top: 0 });
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    }, 260);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#F6E3B8] selection:bg-[#E7BA05] selection:text-[#000000] relative font-sans">
      
      {/* Dynamic Scroll-Reactive Background & Parallax Glow Layer */}
      <ScrollBackgroundGlow />

      {/* Persistent Deep-Space Cosmic Starfield Across Whole Page */}
      <CosmicStarfield />

      {/* Top Silk-Smooth Page Loading Progress Bar in Brand Palette */}
      <PageLoadingBar isLoading={isLoading} />

      {/* Strict 1-Line Minimalist Top Capsule Navbar */}
      <Navbar
        currentPage={currentPage as NavPage}
        onNavigate={handleNavigate}
      />

      {/* Smooth Animated Page Transitions */}
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative"
            style={{ transform: 'none' }}
          >
            {/* 1. Hero with 3D Galaxy & Parallax Depth */}
            <Hero />

            {/* 2. Kinetic Velocity Scroll Text Marquee (Dual-Band) */}
            <ScrollTextMarquee />

            {/* 3. Pinned Horizontal Showcase Runway */}
            <HorizontalShowcaseRunway
              onOpenDocs={() => handleNavigate('docs')}
              onOpenSecurity={() => handleNavigate('security')}
            />

            {/* 4. Interactive Terminal Simulator Playground */}
            <TerminalSimulator />

            {/* 6. Autonomous Self-Healing Diagnostics Studio */}
            <SelfHealingDemo />

            {/* 7. Multi-IDE & AI Agent Configuration Wizard */}
            <IdeConfigWizard />

            {/* 8. Zero-Trust Security Specification Matrix */}
            <SecurityModel />

            {/* 9. Full 20 MCP Governed Tools Suite */}
            <ToolExplorer />

            {/* 10. Global Edge Capabilities Matrix with 3D Earth Globe */}
            <FeaturesGrid />

            {/* 11. Frequently Asked Questions Accordion */}
            <FaqSection />
          </motion.main>
        )}

        {currentPage === 'terminal' && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <TerminalPage onBackToHome={() => handleNavigate('home')} />
          </motion.div>
        )}

        {currentPage === 'tools' && (
          <motion.div
            key="tools"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ToolsPage onBackToHome={() => handleNavigate('home')} />
          </motion.div>
        )}

        {currentPage === 'security' && (
          <motion.div
            key="security"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <SecurityPage onBackToHome={() => handleNavigate('home')} />
          </motion.div>
        )}

        {currentPage === 'docs' && (
          <motion.div
            key="docs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <DocsPage onBackToHome={() => handleNavigate('home')} />
          </motion.div>
        )}

        {currentPage === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <ErrorPage
              onBackToHome={() => handleNavigate('home')}
              onOpenDocs={() => handleNavigate('docs')}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Detailed Developer Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenSecurity={() => setIsSecurityOpen(true)}
        onOpenCookies={() => setIsCookieOpen(true)}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner onOpenCookiePolicy={() => setIsCookieOpen(true)} />

      {/* Legal & Governance Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
      <SecurityPolicyModal isOpen={isSecurityOpen} onClose={() => setIsSecurityOpen(false)} />
      <CookiePolicyModal isOpen={isCookieOpen} onClose={() => setIsCookieOpen(false)} />
      
      {/* Real-time Global Feedback Toasts */}
      <ToastContainer />
    </div>
  );
};

export default App;
