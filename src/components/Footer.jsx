import React from 'react';
import { Sparkles, Phone, MessageCircle, MapPin, Clock, Heart, ArrowUp } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative overflow-hidden">
      
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-rose-500 via-amber-300 to-rose-400"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-rose-500 to-amber-300 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-rose-400" />
                </div>
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold tracking-wider text-white block">
                  AURA LUXE
                </span>
                <span className="text-[10px] text-rose-300">Bridal Studio • Kowdiar, Trivandrum</span>
              </div>
            </a>

            <p className="text-slate-300 font-light leading-relaxed max-w-sm">
              Kerala's premier makeover sanctuary for traditional Kasavu bridal styling, sweatproof HD airbrush transformations, keratin hair botox, and 24K gold facial spa treatments.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-rose-500/40 flex items-center justify-center text-slate-300 hover:text-rose-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/916282269244?text=Hi%20Aura%20Luxe!%20I%20want%20to%20enquire%20about%20bridal%20booking."
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-rose-500/40 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 hover:border-rose-500/40 flex items-center justify-center text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif-luxury">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Services & Pricing', href: '#services' },
                { name: 'Kerala Transformations', href: '#transformations' },
                { name: 'Client Reviews', href: '#reviews' },
                { name: 'Trivandrum Studio', href: '#location' }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href}
                    className="hover:text-rose-300 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Signature Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif-luxury">Kerala Bridal Offerings</h4>
            <ul className="space-y-2">
              {[
                'Royal HD Airbrush Kerala Bridal (₹18,500)',
                'Velvet Engagement Makeover (₹9,500)',
                'Keratin Hair Botox Therapy (₹6,500)',
                '24K Gold Collagen Facial (₹3,800)'
              ].map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onOpenBooking(item)}
                    className="hover:text-rose-300 transition-colors text-left cursor-pointer"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Concierge */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-serif-luxury">Kowdiar Concierge</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">Kowdiar Palace Road, Thiruvananthapuram, Kerala 695003</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="https://wa.me/916282269244" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-emerald-400 font-semibold">+91 62822 69244</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="text-slate-300">Mon - Sun: 9:30 AM - 8:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-rose-300 to-amber-200 hover:from-rose-200 hover:to-amber-100 rounded-xl transition-all"
              >
                Book WhatsApp Consultation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-12 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} AURA Luxe Bridal Studio, Kowdiar, Trivandrum. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-rose-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
