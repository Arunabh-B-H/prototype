import React from 'react';
import { Sparkles, Star, Calendar, ArrowRight, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-950">
      
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-rose-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-rose-500/30 text-xs font-semibold text-rose-200 shadow-[0_0_15px_rgba(251,113,133,0.15)] animate-pulse-glow">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="w-1 h-1 rounded-full bg-rose-400"></span>
              <span className="text-slate-200">4.9/5 Google Rating</span>
              <span className="text-rose-400 font-bold hidden sm:inline">• 500+ Kerala Brides</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif-luxury font-bold tracking-tight text-white leading-[1.15]">
              Redefine Your{' '}
              <span className="shimmer-text italic font-normal">
                Radiance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
              Kerala's top-rated makeover studio in Kowdiar, Trivandrum. Specializing in sweatproof HD airbrush bridal transformations, traditional Kasavu draping, temple jewelry setting, and luxury skincare.
            </p>

            {/* Quick Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg py-2">
              {[
                { text: 'Traditional & HD Bridal' },
                { text: 'Kasavu & Saree Draping' },
                { text: 'Private Bridal Lounge' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-center lg:justify-start gap-1.5 text-xs text-slate-300 bg-slate-900/50 border border-slate-800/80 py-2 px-3 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="truncate">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-950 uppercase tracking-wider bg-gradient-to-r from-rose-400 via-rose-300 to-amber-200 rounded-full shadow-[0_0_25px_rgba(251,113,133,0.4)] hover:shadow-[0_0_35px_rgba(251,113,133,0.6)] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 cursor-pointer min-h-[48px] flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>Book Your Session</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-rose-500/40 active:scale-[0.97] rounded-full transition-all duration-300 min-h-[48px] flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>Explore Packages</span>
                <Sparkles className="w-4 h-4 text-rose-400" />
              </a>
            </div>

            {/* Bottom Trust Quote */}
            <div className="flex items-center gap-3 pt-4 text-xs text-slate-400">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" alt="Kerala Bride" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80" alt="Kerala Bride" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80" alt="Kerala Bride" />
              </div>
              <div>
                <span className="font-semibold text-slate-200">Premier Studio in Kowdiar, Trivandrum</span>
                <p className="text-[11px] text-slate-400">Direct WhatsApp Confirmation in seconds</p>
              </div>
            </div>

          </div>

          {/* Right Column - Hero Visual Card Layout */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-rose-500 via-amber-300 to-rose-400 opacity-40 blur-xl group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
              
              {/* Main Card Container */}
              <div className="relative rounded-3xl bg-slate-900 border border-rose-500/20 overflow-hidden shadow-2xl">
                
                {/* Hero Image */}
                <div className="relative h-[380px] sm:h-[440px] w-full overflow-hidden">
                  <img
                    src="/images/hero_beauty_studio.jpg"
                    alt="AURA Luxe Studio Kowdiar"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Top Badge on Image */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-rose-400/40 text-xs font-semibold text-rose-300 shadow-lg">
                    <Award className="w-4 h-4 text-amber-300" />
                    <span>Best Bridal Studio Kerala 2026</span>
                  </div>

                  {/* Floating Pill Bottom Left */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-white/10 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-300 p-0.5">
                          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-rose-400" />
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-rose-200 uppercase tracking-wider">Kerala Signature Package</p>
                          <p className="text-sm font-bold text-white">Royal HD Airbrush Bridal (₹18,500)</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => onOpenBooking('Royal HD Airbrush Kerala Bridal Package')}
                        className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-rose-300 hover:bg-rose-200 rounded-lg transition-colors cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>

                </div>

                {/* Bottom Quick Feature Strip */}
                <div className="p-4 bg-slate-900/90 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-950/50">
                    <p className="text-base sm:text-lg font-bold text-rose-300">4.9 ★</p>
                    <p className="text-[11px] text-slate-400">Google Rating</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/50">
                    <p className="text-base sm:text-lg font-bold text-amber-200">₹18.5k</p>
                    <p className="text-[11px] text-slate-400">Bridal Starting</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-950/50">
                    <p className="text-base sm:text-lg font-bold text-rose-300">100%</p>
                    <p className="text-[11px] text-slate-400">Sweatproof HD</p>
                  </div>
                </div>

              </div>

              {/* Decorative Floating Micro Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-slate-900/95 border border-rose-500/30 shadow-2xl backdrop-blur-xl animate-float">
                <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-400">
                  <Heart className="w-4 h-4 fill-rose-400" />
                </div>
                <div className="pr-2">
                  <p className="text-xs font-bold text-white">Private Bridal Suite</p>
                  <p className="text-[10px] text-slate-400">Kowdiar Palace Road, Trivandrum</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
