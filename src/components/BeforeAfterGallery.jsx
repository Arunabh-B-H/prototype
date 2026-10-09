import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRightLeft, CheckCircle, Maximize2, X } from 'lucide-react';

export default function BeforeAfterGallery({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewModes, setViewModes] = useState({}); // item id -> 'after' | 'before'
  const [modalItem, setModalItem] = useState(null);

  const filters = [
    { id: 'all', label: 'All Makeovers' },
    { id: 'bridal', label: 'Kerala Bridal Transformations' },
    { id: 'hair', label: 'Hair Botox & Styling' },
    { id: 'skincare', label: 'Skin Renewal' },
  ];

  const galleryItems = [
    {
      id: 'g1',
      category: 'bridal',
      title: "Ananya's Kasavu & HD Airbrush Bridal Look",
      service: "Royal HD Airbrush Kerala Package",
      beforeImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80",
      afterImg: "/images/bridal_makeover.jpg",
      details: "Traditional Kerala Kasavu saree pleating, temple jewelry placement, jasmine flower hair updos, and 100% sweatproof HD airbrush makeup for Kowdiar wedding.",
      artist: "Elena Vance (Lead Bridal Stylist - Kowdiar)"
    },
    {
      id: 'g2',
      category: 'hair',
      title: "Fathima's Hair Botox & Silk Crown Waves",
      service: "Hair Botox & Caramel Balayage",
      beforeImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop&q=80",
      details: "Restored frizzy, climate-damaged tresses into glossy, mirror-shine silk curls with Olaplex bond rebuilding.",
      artist: "Marcus Sterling (Master Hair Artist)"
    },
    {
      id: 'g3',
      category: 'skincare',
      title: "Parvathy's 24K Gold Pre-Bridal Cellular Glow",
      service: "24K Gold Collagen Infusion",
      beforeImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80",
      afterImg: "/images/skincare_facial.jpg",
      details: "Transformed tired, dehydrated skin into radiant, plumper complexion with 24K gold foil and lymphatic drainage massage.",
      artist: "Dr. Ananya Ray (Dermo-Aesthetician)"
    },
    {
      id: 'g4',
      category: 'bridal',
      title: "Sneha's Engagement Nikkah Glam",
      service: "Velvet Engagement Makeover",
      beforeImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=80",
      afterImg: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80",
      details: "Enhanced eyes with bronze smoky eye art, sculpted cheekbones, and mink lash extensions for evening reception lights in Kochi.",
      artist: "Elena Vance (Lead Bridal Stylist)"
    }
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const toggleViewMode = (id) => {
    setViewModes((prev) => ({
      ...prev,
      [id]: prev[id] === 'before' ? 'after' : 'before'
    }));
  };

  return (
    <section id="transformations" className="py-20 bg-slate-950 relative overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300">
            <Eye className="w-3.5 h-3.5 text-rose-400" />
            <span>Real Kerala Brides & Clients</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight">
            Before & After Transformations
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-light">
            Toggle between <span className="text-rose-400 font-semibold">BEFORE</span> and <span className="text-amber-300 font-semibold">AFTER</span> to witness our signature Kerala bridal artistry.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 shrink-0 cursor-pointer border min-h-[44px] ${
                activeFilter === f.id
                  ? 'bg-slate-100 text-slate-950 font-bold border-white shadow-lg'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-rose-500/30'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => {
            const isBefore = viewModes[item.id] === 'before';
            const currentImg = isBefore ? item.beforeImg : item.afterImg;

            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-rose-500/40 overflow-hidden shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container with Toggle Controls */}
                <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-950">
                  <img
                    src={currentImg}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Before / After Tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-lg ${
                        isBefore
                          ? 'bg-slate-800 text-slate-200 border border-slate-600'
                          : 'bg-gradient-to-r from-rose-500 to-amber-300 text-slate-950 shadow-[0_0_15px_rgba(251,113,133,0.4)]'
                      }`}
                    >
                      {isBefore ? 'Before Makeover' : '✨ After Makeover'}
                    </span>
                  </div>

                  {/* Expand Image Button */}
                  <button
                    onClick={() => setModalItem(item)}
                    className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
                    title="View Fullscreen Comparison"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  {/* Interactive Toggle Pill on Image */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-2xl glass-panel border border-white/10">
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">{item.service}</p>
                      <p className="text-[11px] text-slate-300">{item.artist}</p>
                    </div>

                    <button
                      onClick={() => toggleViewMode(item.id)}
                      className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-300 hover:bg-amber-200 rounded-xl transition-all flex items-center gap-1.5 shadow-md cursor-pointer min-h-[44px]"
                    >
                      <ArrowRightLeft className="w-3.5 h-3.5" />
                      <span>{isBefore ? 'Show AFTER' : 'Show BEFORE'}</span>
                    </button>
                  </div>
                </div>

                {/* Description Footer */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-serif-luxury font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">{item.details}</p>

                  <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-rose-300">
                      <CheckCircle className="w-3.5 h-3.5 text-rose-400" />
                      Verified Makeover
                    </span>
                    <button
                      onClick={() => onOpenBooking(item.service)}
                      className="font-bold text-rose-400 hover:text-rose-300 underline underline-offset-4 cursor-pointer"
                    >
                      Get This Look →
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Comparison Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-rose-500/30 rounded-3xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold font-serif-luxury text-white">{modalItem.title}</h3>
                <p className="text-xs text-rose-300">{modalItem.service}</p>
              </div>
              <button
                onClick={() => setModalItem(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Side by side comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2 text-center">
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-bold uppercase">Before</span>
                <div className="h-72 rounded-2xl overflow-hidden border border-slate-800">
                  <img src={modalItem.beforeImg} alt="Before" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-2 text-center">
                <span className="px-3 py-1 bg-gradient-to-r from-rose-500 to-amber-300 text-slate-950 rounded-full text-xs font-bold uppercase">After</span>
                <div className="h-72 rounded-2xl overflow-hidden border border-rose-500/40">
                  <img src={modalItem.afterImg} alt="After" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => {
                  const serviceName = modalItem.service;
                  setModalItem(null);
                  onOpenBooking(serviceName);
                }}
                className="px-8 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-rose-400 to-amber-200 rounded-full shadow-lg hover:scale-105 transition-all cursor-pointer min-h-[44px]"
              >
                Book {modalItem.service} Now
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
