import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Calendar, Menu, X, Clock, MapPin, ChevronRight, MessageCircle } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Kerala Transformations', href: '#transformations' },
    { name: 'Client Reviews', href: '#reviews' },
    { name: 'Find Us', href: '#location' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-2xl shadow-rose-950/20' 
            : 'bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 via-rose-400 to-amber-300 p-[1px] shadow-[0_0_15px_rgba(251,113,133,0.4)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-rose-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-rose-200 via-amber-100 to-white">
                  AURA LUXE
                </span>
                <span className="text-[10px] tracking-[0.2em] text-rose-400/90 uppercase font-semibold -mt-1">
                  Bridal Studio • Kowdiar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-rose-300 transition-colors relative py-1 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-rose-400 to-amber-300 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>

            {/* Social Icons & Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Instagram Icon Link */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/40 flex items-center justify-center text-slate-300 hover:text-rose-400 transition-all"
                title="View Instagram Portfolio"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/916282269244?text=Hi%20Aura%20Luxe!%20I%20want%20to%20enquire%20about%20bridal%20makeover%20packages."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-3.5 py-2.5 rounded-xl border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/30 transition-all min-h-[44px]"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400 text-emerald-950" />
                <span>+91 62822 69244</span>
              </a>

              {/* Consultation CTA */}
              <button
                onClick={() => onOpenBooking()}
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-slate-950 uppercase tracking-wider bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 rounded-full shadow-[0_0_20px_rgba(251,113,133,0.35)] hover:shadow-[0_0_30px_rgba(251,113,133,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer min-h-[44px]"
              >
                <Calendar className="w-4 h-4 mr-2 text-slate-950" />
                Book Consultation
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="px-3 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-rose-400 to-amber-200 rounded-full shadow-md active:scale-95 transition-all min-h-[44px] flex items-center"
              >
                Book Now
              </button>
              
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-300 hover:text-white rounded-lg bg-slate-900 border border-slate-800 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="relative z-10 w-full bg-slate-950 border-b border-rose-500/20 px-6 pt-6 pb-8 shadow-2xl flex flex-col space-y-6 animate-in slide-in-from-top duration-300">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-400" />
                <div>
                  <span className="font-serif-luxury text-lg font-bold text-white tracking-wider block">AURA LUXE</span>
                  <span className="text-[10px] text-rose-300">Kowdiar, Trivandrum</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-slate-200 hover:text-rose-300 py-3 px-4 rounded-xl hover:bg-slate-900/80 border border-transparent hover:border-rose-500/20 transition-all min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-800/80 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400 px-2">
                <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Mon - Sun: 9:30 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 px-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Kowdiar Palace Road, Trivandrum</span>
              </div>

              <a
                href="https://wa.me/916282269244?text=Hi%20Aura%20Luxe!%20I%20want%20to%20enquire%20about%20bridal%20booking."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 rounded-xl min-h-[44px] flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Us: +91 62822 69244
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 rounded-xl shadow-[0_0_20px_rgba(251,113,133,0.3)] min-h-[44px] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
