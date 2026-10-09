import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageLoadingBarProps {
  isLoading: boolean;
}

export const PageLoadingBar: React.FC<PageLoadingBarProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-transparent pointer-events-none overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#D5380C] via-[#F1B333] to-[#FAF6EE] shadow-[0_0_12px_#D5380C]"
            initial={{ x: '-100%', opacity: 1 }}
            animate={{ x: ['-100%', '-20%', '0%'], opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};
