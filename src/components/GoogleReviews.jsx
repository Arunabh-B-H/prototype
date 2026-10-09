import React, { useState } from 'react';
import { Star, CheckCircle, ShieldCheck, Quote, ThumbsUp, ExternalLink } from 'lucide-react';

export default function GoogleReviews() {
  const [activeTab, setActiveTab] = useState('all');

  const reviews = [
    {
      id: 'r1',
      name: 'Ananya Suresh',
      role: 'Verified Kerala Bride - Kowdiar',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      date: '2 weeks ago',
      category: 'bridal',
      service: 'Royal HD Airbrush Kerala Bridal Package',
      review: 'AURA Luxe in Kowdiar made my wedding day an absolute dream! Elena and her team executed the traditional Kasavu saree draping and temple jewelry setting with extreme perfection. The HD airbrush makeup stayed 100% sweatproof through 12+ hours of humid outdoor ceremony and rituals!',
      verified: true
    },
    {
      id: 'r2',
      name: 'Fathima Mehnaz',
      role: 'Verified Bride - Edappally, Kochi',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      date: '1 month ago',
      category: 'bridal',
      service: 'Reception Couture & Nikkah Glam',
      review: 'I traveled from Kochi to book AURA Luxe for my Nikkah & Reception. Their HD base was super lightweight, glowing, and did not crack or crease at all. The private bridal suite hospitality with espresso and champagne made me feel like royalty.',
      verified: true
    },
    {
      id: 'r3',
      name: 'Parvathy R.',
      role: 'Verified Google Client - Trivandrum',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      date: '3 weeks ago',
      category: 'hair',
      service: 'Keratin Smooth & Hair Botox Therapy',
      review: 'Marcus at AURA Luxe completely eliminated the humid coastal frizz from my hair. The Botox treatment restored softness and mirror shine that lasts even during monsoon weather. Kowdiar studio hygiene is 10/10!',
      verified: true
    },
    {
      id: 'r4',
      name: 'Sneha Kurien',
      role: 'Verified Google Client - Kowdiar',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      date: '3 days ago',
      category: 'skincare',
      service: '24K Gold Collagen Infusion Facial',
      review: 'The 24K Gold facial gave me an unbelievable glass skin glow right before my engagement. Lymphatic drainage massage was so relaxing. Hands down the finest luxury spa in Thiruvananthapuram!',
      verified: true
    }
  ];

  const filteredReviews = reviews.filter(
    (r) => activeTab === 'all' || r.category === activeTab
  );

  return (
    <section id="reviews" className="py-20 bg-slate-900/40 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Prominent Google Badge Header Element */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 mb-14 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Google Colors Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Left: Google Logo & Rating Stats */}
            <div className="flex items-center gap-4 text-center sm:text-left">
              {/* Google G Icon Styling */}
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold text-white font-serif-luxury">4.9</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                  <span className="font-bold text-white">Verified Google Reviews</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-rose-400 font-semibold">520+ 5-Star Ratings in Kerala</span>
                </div>
              </div>
            </div>

            {/* Right: External Link CTA */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-200 hover:text-white bg-slate-900 border border-slate-700 hover:border-rose-400 transition-all flex items-center gap-2 cursor-pointer min-h-[44px]"
            >
              <span>Write a Review on Google</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
            Loved by Kerala Brides & Clients
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light">
            Read authentic stories from our guests across Thiruvananthapuram and Kochi.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 hover:border-rose-500/30 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Review Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-rose-500/30"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.name}
                        <ShieldCheck className="w-4 h-4 text-emerald-400" title="Verified User" />
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400">
                        <span className="text-rose-300 font-medium">{rev.role}</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-3 py-1 rounded-lg bg-slate-900 text-[11px] font-semibold text-rose-300 border border-rose-500/20">
                  Service: {rev.service}
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light italic relative">
                  <Quote className="w-5 h-5 text-rose-500/20 absolute -top-2 -left-2 -z-10" />
                  "{rev.review}"
                </p>

              </div>

              {/* Bottom Verified Tag */}
              <div className="pt-3 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-slate-300 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  Verified Google Review
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ThumbsUp className="w-3 h-3 text-rose-400" /> Helpful (32)
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
