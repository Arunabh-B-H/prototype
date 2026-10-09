import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Star, Flame } from 'lucide-react';

export default function ServicesCatalog({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('bridal');

  const categories = [
    { id: 'bridal', label: 'Kerala Bridal Packages', icon: '✨' },
    { id: 'hair', label: 'Hair Styling & Botox', icon: '💇‍♀️' },
    { id: 'skincare', label: 'Skincare & Facials', icon: '🌿' },
    { id: 'nails', label: 'Nail Art & Spa', icon: '💅' },
  ];

  const servicesData = {
    bridal: [
      {
        id: 'b1',
        title: 'Royal HD Airbrush Kerala Bridal Package',
        popular: true,
        tag: 'Kowdiar Signature',
        image: '/images/bridal_makeover.jpg',
        price: '₹18,500',
        originalPrice: '₹22,000',
        duration: '4.5 Hours',
        rating: '4.9',
        description: 'Complete humidity-resistant 100% waterproof HD airbrush makeup, traditional Kasavu saree or gown draping, temple jewelry setting, and jasmine hair styling.',
        features: [
          'Sweatproof & Waterproof HD Airbrush Base',
          'Kasavu / Silk Saree Pleating & Pleat Draping',
          'Jasmine Flower Styling & Extension Setting',
          'Includes Free Pre-Wedding Trial Session'
        ]
      },
      {
        id: 'b2',
        title: 'Velvet Luxury Engagement Makeover',
        popular: false,
        tag: 'Best Seller',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80',
        price: '₹9,500',
        originalPrice: '₹12,000',
        duration: '3 Hours',
        rating: '4.8',
        description: 'Soft glam radiance for ring ceremonies and betrothals. Includes luminous long-wear base, precision eye art, and voluminous hair curls or bun.',
        features: [
          'Luminous Dewy Base Finish',
          'Precision Eye & Brow Sculpting',
          'Saree / Lehenga Draping & Dupatta Pinning',
          'Touch-up Care Kit Included'
        ]
      },
      {
        id: 'b3',
        title: 'Reception Couture & Nikkah Glam Look',
        popular: false,
        tag: 'Red Carpet',
        image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
        price: '₹12,500',
        originalPrice: '₹15,000',
        duration: '3.5 Hours',
        rating: '4.9',
        description: 'Sophisticated evening glam look with sculpted contouring, bold eyes, long-lasting lip shade, and Hollywood waves or textured updo styling.',
        features: [
          'HD Sculpted Contour & Highlighting',
          'Hollywood Waves or Sleek Chignon Updo',
          'Long-wear Matte / Glossy Lip Artistry',
          'Jewelry & Outfit Styling Assistance'
        ]
      }
    ],
    hair: [
      {
        id: 'h1',
        title: 'Keratin Smooth & Hair Botox Therapy',
        popular: true,
        tag: 'Intense Shine',
        image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&auto=format&fit=crop&q=80',
        price: '₹6,500',
        originalPrice: '₹8,500',
        duration: '2.5 Hours',
        rating: '4.9',
        description: 'Deep restorative protein therapy designed for Kerala humidity. Eliminates frizz, repairs heat damage, and locks in mirror shine for up to 4 months.',
        features: [
          'Formaldehyde-Free Protein Formula',
          'Humidity Shield & Frizz Elimination',
          'Mirror-Smooth Silk Polish',
          'Includes Sulfate-Free Aftercare Advice'
        ]
      },
      {
        id: 'h2',
        title: 'Balayage & Ombre Color Artistry',
        popular: false,
        tag: 'Trendsetter',
        image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=600&auto=format&fit=crop&q=80',
        price: '₹8,500',
        originalPrice: '₹11,000',
        duration: '3.5 Hours',
        rating: '4.8',
        description: 'Hand-painted dimensional caramel or chestnut highlighting tailored to Indian skin tones, fortified with Olaplex bond protection.',
        features: [
          'Custom Tonal Color Formulation',
          'Olaplex Bond Protection Therapy',
          'Toning & Glossing Treatment',
          'Blowout & Waves Styling'
        ]
      },
      {
        id: 'h3',
        title: 'Royal Moroccan Argan Oil Hair Spa',
        popular: false,
        tag: 'Scalp Detox',
        image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&auto=format&fit=crop&q=80',
        price: '₹2,800',
        originalPrice: '₹3,500',
        duration: '1.5 Hours',
        rating: '4.9',
        description: 'Revitalizing scalp detox and deep moisture infusion paired with pressure-point neck massage and micro-steam infusion.',
        features: [
          'Pure Cold-Pressed Argan Oil Elixir',
          'Micro-steam Moisture Infusion',
          'Aromatherapy Scalp & Neck Massage',
          'Blowdry Finish'
        ]
      }
    ],
    skincare: [
      {
        id: 's1',
        title: '24K Pure Gold Collagen Infusion Facial',
        popular: true,
        tag: 'Bridal Glow',
        image: '/images/skincare_facial.jpg',
        price: '₹3,800',
        originalPrice: '₹4,800',
        duration: '90 Mins',
        rating: '5.0',
        description: 'Luxurious cellular renewal therapy using authentic 24K gold foil flakes and collagen peptides to boost elasticity and instant wedding glow.',
        features: [
          'Authentic 24K Gold Foil Mask',
          'Lymphatic Drainage Massage',
          'Collagen & Hyaluronic Acid Serum',
          'Instant Wrinkle & Tan Reduction'
        ]
      },
      {
        id: 's2',
        title: 'Hydrafacial MD Deep Pore Detox',
        popular: false,
        tag: 'Clinical Glow',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80',
        price: '₹4,500',
        originalPrice: '₹5,500',
        duration: '60 Mins',
        rating: '4.9',
        description: 'Non-invasive 3-step vortex extraction, deep exfoliation, and hydration serum infusion for flawless crystal-clear skin.',
        features: [
          'Vortex Extraction of Blackheads',
          'Gentle Salicylic & Glycolic Peel',
          'Antioxidant & Peptide Hydration',
          'LED Light Therapy Included'
        ]
      },
      {
        id: 's3',
        title: 'Diamond Microdermabrasion Polishing',
        popular: false,
        tag: 'Skin Renewal',
        image: 'https://images.unsplash.com/photo-1512290900673-7002ffffff00?w=600&auto=format&fit=crop&q=80',
        price: '₹3,200',
        originalPrice: '₹4,000',
        duration: '75 Mins',
        rating: '4.8',
        description: 'Diamond-tip exfoliation to resurface uneven texture, erase hyperpigmentation, and stimulate fresh collagen production.',
        features: [
          'Precision Diamond Resurfacing',
          'Oxygenation & Hydrating Cooling Mask',
          'Targeted Dark Spot Treatment',
          'Sun Defense Barrier Application'
        ]
      }
    ],
    nails: [
      {
        id: 'n1',
        title: 'Haute Couture Gel Extensions & Swarovski Art',
        popular: true,
        tag: 'Trending Art',
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
        price: '₹2,800',
        originalPrice: '₹3,500',
        duration: '90 Mins',
        rating: '4.9',
        description: 'Custom sculpted builder gel extensions with hand-painted art, chrome powders, or genuine Swarovski crystal accents.',
        features: [
          'Non-damaging Builder Gel Sculpting',
          'Hand-Painted Nail Art or Chrome',
          'Cuticle Nourishing Oils',
          '3-Week Chip-Free Guarantee'
        ]
      },
      {
        id: 'n2',
        title: 'Royal Spa Pedicure & Reflexology Soak',
        popular: false,
        tag: 'Foot Reflexology',
        image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=600&auto=format&fit=crop&q=80',
        price: '₹2,200',
        originalPrice: '₹2,800',
        duration: '60 Mins',
        rating: '4.8',
        description: 'Pampering rose-water foot soak, dead sea salt exfoliation, warm paraffin wax dip, and relaxing foot reflexology.',
        features: [
          'Botanical Rose & Essential Oil Soak',
          'Dead Sea Salt Exfoliation Scrub',
          'Deep Hydrating Paraffin Mask',
          '20-Min Foot & Calves Massage'
        ]
      },
      {
        id: 'n3',
        title: 'Ombre French Gel Manicure',
        popular: false,
        tag: 'Classic Luxe',
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80',
        price: '₹1,800',
        originalPrice: '₹2,200',
        duration: '45 Mins',
        rating: '4.9',
        description: 'Elegant soft gradient French gel manicure crafted with precision detail brush, finished with high-gloss UV shield.',
        features: [
          'Precision Cuticle Care & Shaping',
          'Soft Ombre Gradient Finish',
          'High-Gloss UV Topcoat',
          'Hydrating Shea Butter Hand Cream'
        ]
      }
    ]
  };

  return (
    <section id="services" className="py-20 bg-slate-900/60 relative overflow-hidden">
      
      {/* Subtle Divider Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-semibold text-rose-300">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Regional Pricing & Offerings</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white tracking-tight">
            Services & Transparent Pricing
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base font-light">
            Customized for Kerala brides and clients using dermatologically tested international products and master artistry in Kowdiar, Trivandrum.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar touch-pan-x px-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer border min-h-[44px] active:scale-[0.97] ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 text-slate-950 font-bold border-rose-300 shadow-[0_0_20px_rgba(251,113,133,0.3)] scale-[1.02]'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-rose-500/30 hover:text-white'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData[activeCategory].map((service) => (
            <div
              key={service.id}
              className="group relative rounded-3xl bg-slate-950/80 border border-slate-800/90 hover:border-rose-500/40 overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(251,113,133,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                
                {/* Image Showcase */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  {/* Popular / Tag Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    {service.popular && (
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-rose-500 text-white shadow-lg flex items-center gap-1">
                        <Flame className="w-3 h-3 fill-white" />
                        Most Popular
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md border border-slate-700 text-rose-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-[11px] font-bold text-amber-300 flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>{service.rating}</span>
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-800 text-xs text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4">
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-serif-luxury font-bold text-white group-hover:text-rose-200 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-rose-300">{service.price}</span>
                    <span className="text-xs text-slate-500 line-through">{service.originalPrice}</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-amber-300 bg-amber-400/10 px-2 py-0.5 rounded">
                      Special Rate
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                </div>

              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-slate-100 hover:bg-gradient-to-r hover:from-rose-400 hover:to-amber-200 rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(251,113,133,0.35)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <span>Book This Service</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel-glow text-center sm:flex sm:items-center sm:justify-between gap-6">
          <div className="text-left space-y-1 mb-4 sm:mb-0">
            <h4 className="text-lg font-bold text-white">Destination Wedding or Outstation Bridal Query?</h4>
            <p className="text-xs text-slate-300">We offer specialized outstation artist teams across Trivandrum, Kollam, Alleppey, and Kochi.</p>
          </div>
          <button
            onClick={() => onOpenBooking('Outstation Kerala Bridal Package')}
            className="px-6 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-rose-300 to-amber-200 hover:from-rose-200 hover:to-amber-100 rounded-full shadow-lg transition-all shrink-0 cursor-pointer min-h-[44px]"
          >
            Request Outstation Quote
          </button>
        </div>

      </div>
    </section>
  );
}
