import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const ownerPhoneNumber = "916282269244";
  const defaultText = encodeURIComponent("Hi Aura Luxe Studio! I would like to enquire about your Kerala bridal makeover and beauty services.");
  const whatsappUrl = `https://wa.me/${ownerPhoneNumber}?text=${defaultText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      
      {/* Tooltip on Hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:group-hover:flex items-center px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs font-semibold text-emerald-300 shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-200 pointer-events-none">
        <span>💬 Instant WhatsApp Chat</span>
        <div className="w-2 h-2 bg-slate-900 border-t border-r border-emerald-500/40 transform rotate-45 -mr-4 ml-1"></div>
      </div>

      {/* Outer Pulse Ring */}
      <div className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping pointer-events-none"></div>

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:shadow-[0_0_35px_rgba(16,185,129,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer min-w-[56px] min-h-[56px]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-600" />
      </a>

    </div>
  );
}
