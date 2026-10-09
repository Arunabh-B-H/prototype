import React, { useEffect } from 'react';
import { Sparkles, CheckCircle, X } from 'lucide-react';

export default function NotificationToast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-slate-900/95 border border-rose-500/40 text-slate-100 shadow-2xl backdrop-blur-xl">
        <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
        </div>
        <p className="text-xs font-semibold pr-2">{message}</p>
        <button
          onClick={onClose}
          className="p-1 text-slate-400 hover:text-white rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
