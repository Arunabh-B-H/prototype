import React, { useState } from 'react';
import { MapPin, Clock, Phone, Navigation, Copy, Check, Car, Coffee, ShieldCheck, Sparkles, Compass, ExternalLink } from 'lucide-react';

export default function StudioLocation({ onCopyToast }) {
  const [copied, setCopied] = useState(false);
  const studioAddress = "Aura Luxe Bridal Studio, Kowdiar Palace Road, Kowdiar, Thiruvananthapuram, Kerala 695003";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(studioAddress);
    setCopied(true);
    if (onCopyToast) onCopyToast("Kowdiar studio address copied!");
    setTimeout(() => setCopied(false), 3000);
  };

  const amenities = [
    { icon: Car, label: 'Valet Parking' },
    { icon: Coffee, label: 'Espresso Bar' },
    { icon: ShieldCheck, label: 'Bridal Suites' },
    { icon: Sparkles, label: 'Welcome Drinks' },
  ];

  return (
    <section id="location" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Glow Ambient Effect */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-rose-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300">
            <Compass className="w-3.5 h-3.5 text-rose-400" />
            <span>Find Us in Kowdiar, Trivandrum</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight">
            Visit Our Luxe Sanctuary
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Situated on Kowdiar Palace Road with dedicated on-site valet parking, private bridal lounge suites, and world-class hospitality.
          </p>
        </div>

        {/* Compact Balanced Two-Card 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Studio Details */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/30 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
            
            <div className="space-y-6">
              
              {/* Studio Status Badge */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Open Today</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">9:30 AM - 8:00 PM</span>
              </div>

              {/* Address Box */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-wider">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Kowdiar Address</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-start justify-between gap-3">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {studioAddress}
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 min-w-[40px] min-h-[40px] flex items-center justify-center"
                    title="Copy Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  </button>
                </div>
              </div>

              {/* Operating Hours & Concierge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Hours */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300 uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    <span>Operating Hours</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <p className="font-bold text-white">Mon - Sun: 9:30 AM - 8:00 PM</p>
                    <p className="text-[11px] text-slate-400">Early Muhurtham sessions from 4 AM</p>
                  </div>
                </div>

                {/* Direct WhatsApp Call */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-300 uppercase tracking-wider">
                    <Phone className="w-3.5 h-3.5 text-rose-400" />
                    <span>Concierge Hotline</span>
                  </div>
                  <a
                    href="https://wa.me/916282269244?text=Hi%20Aura%20Luxe!%20I%20want%20to%20enquire%20about%20booking."
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-emerald-500/40 flex items-center justify-between text-xs font-bold text-white hover:text-emerald-300 transition-all min-h-[44px]"
                  >
                    <span>+91 62822 69244</span>
                    <span className="text-[10px] text-emerald-400 uppercase">WhatsApp →</span>
                  </a>
                </div>

              </div>

              {/* Compact Amenities Grid */}
              <div className="pt-1">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {amenities.map((item, i) => {
                    const IconComp = item.icon;
                    return (
                      <div key={i} className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] text-slate-300">
                        <IconComp className="w-3 h-3 text-rose-400 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* Right Card: Interactive Map Preview */}
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/30 overflow-hidden shadow-2xl relative min-h-[380px] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 h-full">
            
            {/* Interactive Map Visual Mockup */}
            <div className="relative w-full h-full flex-1 min-h-[300px] bg-slate-950 overflow-hidden group">
              
              {/* Map Dark Theme Texture Overlay */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Roads & Grid SVG Graphic */}
              <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 100 Q 200 80 400 150 T 800 200" stroke="#fb7185" strokeWidth="4" fill="none" />
                <path d="M 150 0 Q 180 200 300 400" stroke="#94a3b8" strokeWidth="3" fill="none" />
                <path d="M 0 300 L 800 100" stroke="#475569" strokeWidth="2" fill="none" />
              </svg>

              {/* Local Kerala Landmark Markers */}
              <div className="absolute top-8 left-6 p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
                👑 Kowdiar Palace (350m)
              </div>
              <div className="absolute bottom-16 right-6 p-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800 text-[11px] text-slate-300">
                ⛳ Trivandrum Golf Club (250m)
              </div>

              {/* Main Glowing Studio Pin Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group/pin cursor-pointer">
                
                {/* Glowing Pulse Ring */}
                <div className="w-14 h-14 rounded-full bg-rose-500/20 animate-ping absolute -top-2"></div>
                
                {/* Pin Box */}
                <div className="relative z-10 px-3.5 py-1.5 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 text-slate-950 font-bold text-xs shadow-[0_0_25px_rgba(251,113,133,0.6)] flex items-center gap-1.5 transform group-hover/pin:scale-110 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950 fill-slate-950" />
                  <span>AURA LUXE KOWDIAR</span>
                </div>
                
                {/* Pin Pointer Arrow */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-amber-300 -mt-0.5"></div>

                {/* Micro Popup Tooltip */}
                <div className="mt-2 p-2.5 rounded-xl glass-panel text-center max-w-xs space-y-0.5 border border-rose-500/30">
                  <p className="text-[11px] font-bold text-white">Kowdiar Palace Road</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">Valet Parking On-Site</p>
                </div>

              </div>

              {/* Map Control Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl glass-panel border border-slate-800">
                <div className="text-xs text-slate-300">
                  <span className="font-bold text-white block">Neighborhood Map Preview</span>
                  <span className="text-[10px] text-slate-400">Kowdiar, Thiruvananthapuram</span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(studioAddress)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-300 hover:bg-amber-200 transition-colors flex items-center gap-1.5 cursor-pointer min-h-[40px]"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
