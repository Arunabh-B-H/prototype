import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, ExternalLink } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, initialService = '' }) {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const servicesList = [
    'Royal HD Airbrush Kerala Bridal Package (₹18,500)',
    'Velvet Luxury Engagement Makeover (₹9,500)',
    'Reception Couture & Nikkah Glam Look (₹12,500)',
    'Keratin Smooth & Hair Botox Therapy (₹6,500)',
    'Balayage & Ombre Color Artistry (₹8,500)',
    'Royal Moroccan Argan Oil Hair Spa (₹2,800)',
    '24K Pure Gold Collagen Infusion Facial (₹3,800)',
    'Hydrafacial MD Deep Pore Detox (₹4,500)',
    'Diamond Microdermabrasion Polishing (₹3,200)',
    'Swarovski Gel Extensions & Couture Art (₹2,800)',
    'Royal Spa Pedicure & Reflexology Soak (₹2,200)',
    'General Kerala Bridal & Beauty Consultation'
  ];

  const timeSlots = [
    '09:30 AM', '10:30 AM', '11:45 AM',
    '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
  ];

  useEffect(() => {
    if (initialService) {
      // Find matching service name
      const found = servicesList.find(s => s.toLowerCase().includes(initialService.toLowerCase()));
      setSelectedService(found || initialService);
    } else if (!selectedService) {
      setSelectedService(servicesList[0]);
    }
    
    // Default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  // Serverless Direct-to-WhatsApp Booking Handler
  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    const ref = `AURA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);

    const ownerPhoneNumber = "916282269244"; // Easily editable salon owner's WhatsApp number
    const message = `*New Booking Request - AURA Luxe Studio!*%0A%0A` +
                    `*Ref ID:* ${ref}%0A` +
                    `*Service:* ${selectedService}%0A` +
                    `*Name:* ${fullName}%0A` +
                    `*Phone:* ${phoneNumber}%0A` +
                    `*Date:* ${selectedDate}%0A` +
                    `*Time:* ${selectedTime}%0A` +
                    `*Notes:* ${notes || 'None'}`;

    // Directly open WhatsApp window
    window.open(`https://wa.me/${ownerPhoneNumber}?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  const triggerWhatsAppAgain = () => {
    const ownerPhoneNumber = "916282269244";
    const message = `*Booking Request Follow-up - AURA Luxe Studio!*%0A%0A` +
                    `*Ref ID:* ${bookingRef}%0A` +
                    `*Service:* ${selectedService}%0A` +
                    `*Name:* ${fullName}%0A` +
                    `*Phone:* ${phoneNumber}%0A` +
                    `*Date:* ${selectedDate}%0A` +
                    `*Time:* ${selectedTime}`;
    window.open(`https://wa.me/${ownerPhoneNumber}?text=${message}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-xl bg-slate-900 border border-rose-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-auto animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-950 border border-slate-800 transition-colors cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Modal Header */}
            <div className="space-y-2 pr-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <MessageCircle className="w-3.5 h-3.5 fill-emerald-400 text-slate-900" />
                <span>Direct WhatsApp Consultation Booking</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury font-bold text-white">
                Reserve Your Session
              </h3>
              <p className="text-xs text-slate-300">
                Select your preferred treatment & date. Submitting opens a direct WhatsApp chat window with our Kowdiar studio concierge instantly.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleWhatsAppBooking} className="space-y-4 pt-2">
              
              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  Select Treatment / Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:border-rose-400 focus:outline-none transition-colors min-h-[44px]"
                  required
                >
                  {servicesList.map((srv, idx) => (
                    <option key={idx} value={srv} className="bg-slate-900 text-white">
                      {srv}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Date Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-rose-400" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:border-rose-400 focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                {/* Time Slot Picker */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    Preferred Time Slot
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 focus:border-rose-400 focus:outline-none transition-colors min-h-[44px]"
                    required
                  >
                    {timeSlots.map((time, idx) => (
                      <option key={idx} value={time} className="bg-slate-900 text-white">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-rose-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ananya Suresh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:border-rose-400 focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-rose-400" />
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 98460 12345"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder:text-slate-600 focus:border-rose-400 focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Wedding / Function Details or Special Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention function venue, saree draping preferences, or skin sensitivity details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:border-rose-400 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 px-6 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 rounded-2xl shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Book & Open WhatsApp Chat</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Opens WhatsApp directly with pre-formatted message details</span>
              </div>

            </form>
          </>
        ) : (
          /* Success State Confirmation */
          <div className="py-6 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
            
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 p-0.5 mx-auto shadow-[0_0_30px_rgba(16,185,129,0.5)]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>
            </div>

            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                Booking Reference: #{bookingRef}
              </span>
              <h3 className="text-2xl font-serif-luxury font-bold text-white pt-1">
                WhatsApp Chat Opened!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you <span className="text-emerald-300 font-bold">{fullName}</span>! Your booking request details have been dispatched to our Kowdiar studio WhatsApp desk.
              </p>
            </div>

            {/* Appointment Summary Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-left text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-900 pb-2">
                <span className="text-slate-400">Selected Treatment:</span>
                <span className="font-bold text-rose-300 truncate max-w-[220px]">{selectedService}</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-2">
                <span className="text-slate-400">Requested Schedule:</span>
                <span className="font-bold text-amber-300">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-2">
                <span className="text-slate-400">Client Contact:</span>
                <span className="font-semibold text-slate-200">{phoneNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Studio Location:</span>
                <span className="font-semibold text-emerald-300">Kowdiar Palace Road, Trivandrum</span>
              </div>
            </div>

            {/* Re-trigger WhatsApp button */}
            <div className="space-y-2 pt-2">
              <button
                onClick={triggerWhatsAppAgain}
                className="w-full py-3.5 px-4 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                <span>Re-open WhatsApp Chat Window</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </button>

              <button
                onClick={handleReset}
                className="w-full py-3 px-4 text-xs font-bold text-slate-300 hover:text-white bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer min-h-[44px]"
              >
                Done & Return to Studio
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
