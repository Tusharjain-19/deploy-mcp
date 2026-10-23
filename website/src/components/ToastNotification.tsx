import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconCheckCircle, IconXCircle, IconInfo } from './CustomIcons';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

type Listener = (toast: ToastItem) => void;
const listeners = new Set<Listener>();

export const triggerToast = (message: string, type: ToastType = 'success') => {
  const item: ToastItem = {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    message,
    type,
  };
  listeners.forEach((listener) => listener(item));
};

export const ToastContainer: React.FC = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handleToast = (toast: ToastItem) => {
      setToasts((prev) => [...prev.slice(-3), toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 3200);
    };

    listeners.add(handleToast);
    return () => {
      listeners.delete(handleToast);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-2 pointer-events-none select-none max-w-sm w-full px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isError = toast.type === 'error';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`p-3.5 rounded-2xl bg-[#000000] border-2 shadow-2xl flex items-center gap-3 pointer-events-auto backdrop-blur-xl ${
                isSuccess
                  ? 'border-[#6B9E5A] text-[#F6E3B8]'
                  : isError
                  ? 'border-[#906342] text-[#F6E3B8]'
                  : 'border-[#E7BA05] text-[#F6E3B8]'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                  isSuccess
                    ? 'bg-[#6B9E5A] text-[#000000]'
                    : isError
                    ? 'bg-[#906342] text-[#F6E3B8]'
                    : 'bg-[#E7BA05] text-[#000000]'
                }`}
              >
                {isSuccess ? (
                  <IconCheckCircle className="w-4 h-4" strokeWidth={2.5} />
                ) : isError ? (
                  <IconXCircle className="w-4 h-4" strokeWidth={2.5} />
                ) : (
                  <IconInfo className="w-4 h-4" strokeWidth={2.5} />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-mono font-bold leading-tight truncate">
                  {toast.message}
                </p>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
