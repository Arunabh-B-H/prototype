import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Bot, Send, X, MessageCircle, ExternalLink, RefreshCw, CheckCircle2, User, Calendar, Clock, MapPin } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function AIChatbot({ onOpenBookingModal }) {
  const ownerPhoneNumber = "916282269244"; // Easily editable salon owner's WhatsApp number

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  // Interactive Lead Capture State
  const [bookingStep, setBookingStep] = useState(0); // 0: Idle, 1: Service, 2: Date, 3: Contact, 4: Complete
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    name: '',
    phone: ''
  });

  const chatEndRef = useRef(null);

  // Initial welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          sender: 'bot',
          text: "Namaskaram! ✨ Welcome to Aura Luxe Bridal Studio, Kowdiar. I am your AI Concierge. How can I assist you with your makeover or bridal booking today?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          options: [
            "🌸 View Bridal Packages & Pricing",
            "📅 Reserve Appointment",
            "💄 Skincare & Hair Botox Info",
            "📍 Studio Address & Timings"
          ]
        }
      ]);
    }
  }, []);

  // Auto scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (userText) => {
    const textToSend = userText || input;
    if (!textToSend.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Append user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      timestamp
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate 1-second AI Thinking / Typing delay
    setTimeout(() => {
      processAIResponse(textToSend);
      setIsTyping(false);
    }, 1000);
  };

  // Conversational AI logic engine
  const processAIResponse = (text) => {
    const lower = text.toLowerCase();
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Handle lead capture flow steps if currently in booking mode
    if (bookingStep === 1) {
      setBookingData((prev) => ({ ...prev, service: text }));
      setBookingStep(2);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: `Selected Service: *${text}*. Great choice! What is your preferred date and time slot for your appointment at our Kowdiar studio?`,
          timestamp,
          options: ["Tomorrow 10:30 AM", "Tomorrow 03:00 PM", "This Saturday 11:00 AM"]
        }
      ]);
      return;
    }

    if (bookingStep === 2) {
      setBookingData((prev) => ({ ...prev, date: text }));
      setBookingStep(3);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: `Date & Time noted: *${text}*. Lastly, please share your *Full Name & WhatsApp Phone Number* so our concierge can confirm your reservation.`,
          timestamp
        }
      ]);
      return;
    }

    if (bookingStep === 3) {
      setBookingData((prev) => ({ ...prev, name: text, phone: text }));
      setBookingStep(4);
      
      const finalService = bookingData.service || "Royal HD Airbrush Bridal Package";
      const finalDate = bookingData.date || "Tomorrow 10:30 AM";

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: `Awesome! I have compiled your consultation details. Click below to send your booking directly to our Salon Owner's WhatsApp!`,
          timestamp,
          summaryCard: {
            service: finalService,
            date: finalDate,
            contact: text
          }
        }
      ]);
      return;
    }

    // Intent recognition for normal questions
    if (lower.includes('price') || lower.includes('package') || lower.includes('cost') || lower.includes('bridal') || lower.includes('view bridal')) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "Here are our signature makeover packages in Indian Rupees (₹):\n\n• *Royal HD Airbrush Kerala Bridal*: ₹18,500\n• *Velvet Luxury Engagement Makeover*: ₹9,500\n• *Reception Couture & Nikkah Glam*: ₹12,500\n• *Keratin Hair Botox Therapy*: ₹6,500\n• *24K Gold Collagen Facial*: ₹3,800\n\nAll bridal packages include Kasavu saree draping, temple jewelry setting, and jasmine flower styling!",
          timestamp,
          options: ["📅 Reserve Appointment", "💬 Speak to Owner on WhatsApp"]
        }
      ]);
    } else if (lower.includes('address') || lower.includes('location') || lower.includes('timing') || lower.includes('where')) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "📍 *Studio Location*:\nAura Luxe Bridal Studio, Kowdiar Palace Road, Kowdiar, Thiruvananthapuram, Kerala 695003.\n\n⏰ *Hours*: Mon - Sun: 9:30 AM - 8:00 PM (Early morning Muhurtham sessions from 4:00 AM upon reservation).",
          timestamp,
          options: ["📅 Reserve Appointment", "📍 Get Map Directions"]
        }
      ]);
    } else if (lower.includes('reserve') || lower.includes('book') || lower.includes('appointment') || lower.includes('consultation')) {
      setBookingStep(1);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "Let's reserve your makeover spot! Which service or package would you like to book?",
          timestamp,
          options: [
            "Royal HD Airbrush Bridal (₹18,500)",
            "Engagement Makeover (₹9,500)",
            "Hair Botox Therapy (₹6,500)",
            "24K Gold Facial (₹3,800)"
          ]
        }
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: "I am trained to help you with Kerala bridal makeovers, HD skin treatments, hair botox, and studio bookings. Would you like to start a booking request or send us a WhatsApp message?",
          timestamp,
          options: ["📅 Start Booking Flow", "💬 Direct WhatsApp Chat"]
        }
      ]);
    }
  };

  // Direct Handoff to Salon Owner WhatsApp
  const handleDirectWhatsAppHandoff = (cardData) => {
    const serviceName = cardData?.service || bookingData.service || "General Bridal Enquiry";
    const bookingSchedule = cardData?.date || bookingData.date || "Preferred Date";
    const clientDetails = cardData?.contact || bookingData.name || "Client";

    const message = `*AI Concierge Lead - AURA Luxe Studio Kowdiar!*%0A%0A` +
                    `*Service:* ${serviceName}%0A` +
                    `*Schedule:* ${bookingSchedule}%0A` +
                    `*Client Details:* ${clientDetails}%0A%0A` +
                    `_Sent via Aura AI Concierge Chatbot_`;

    window.open(`https://wa.me/${ownerPhoneNumber}?text=${message}`, '_blank');
  };

  const handleResetChat = () => {
    setBookingStep(0);
    setBookingData({ service: '', date: '', name: '', phone: '' });
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Chat reset! ✨ How can I help you with your makeover booking today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        options: [
          "🌸 View Bridal Packages & Pricing",
          "📅 Reserve Appointment",
          "📍 Studio Address & Timings"
        ]
      }
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <div className="fixed bottom-6 right-6 z-40 group">
        
        {/* Tooltip on Hover */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center px-3.5 py-2 rounded-xl bg-slate-900 border border-rose-500/40 text-xs font-semibold text-rose-200 shadow-xl whitespace-nowrap animate-in fade-in slide-in-from-right-2 duration-200 pointer-events-none">
            <Sparkles className="w-3.5 h-3.5 text-rose-400 mr-1.5" />
            <span>Chat with Aura AI</span>
            <div className="w-2 h-2 bg-slate-900 border-t border-r border-rose-500/40 transform rotate-45 -mr-4 ml-1"></div>
          </div>
        )}

        {/* Pulse Glow Ring */}
        {!isOpen && (
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-rose-500 to-amber-300 opacity-60 animate-ping pointer-events-none"></div>
        )}

        {/* Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_25px_rgba(251,113,133,0.5)] hover:shadow-[0_0_35px_rgba(251,113,133,0.8)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer min-w-[56px] min-h-[56px] ${
            isOpen 
              ? 'bg-slate-900 text-rose-400 border border-rose-500/50' 
              : 'bg-gradient-to-tr from-rose-500 via-rose-400 to-amber-300 text-slate-950 font-bold'
          }`}
          aria-label="Toggle AI Concierge Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <Bot className="w-7 h-7 text-slate-950" />
              <Sparkles className="w-3.5 h-3.5 text-amber-900 absolute -top-1 -right-1" />
            </div>
          )}
        </button>
      </div>

      {/* Interactive Chat Window / Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 sm:bottom-24 sm:right-6 sm:inset-auto z-50 w-full sm:w-[400px] h-[85vh] sm:h-[550px] max-h-[85vh] bg-slate-950 border-t sm:border border-rose-500/30 rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-slate-900/95 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="w-12 h-1 rounded-full bg-slate-700 mx-auto -mt-1 mb-1 sm:hidden"></div>
            
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-rose-500 via-rose-400 to-amber-300 p-0.5 shadow-md">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-rose-400" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 ring-1 ring-slate-950"></span>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-white font-serif-luxury flex items-center gap-1.5">
                    Aura Luxe AI Concierge
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span className="text-emerald-400 font-semibold">● Online</span>
                    <span>•</span>
                    <span>Kowdiar Studio</span>
                  </div>
                </div>
              </div>

              {/* Header Right Action Icons (WhatsApp & Instagram & Close) */}
              <div className="flex items-center gap-1.5">
                <a
                  href="https://wa.me/916282269244"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-emerald-400 rounded-lg hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                  title="View Instagram Portfolio"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
                  title="Close Chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-sans">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-rose-500 to-rose-400 text-white rounded-br-none shadow-md font-medium'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>

                {/* Summary Card with Direct-to-WhatsApp Button */}
                {msg.summaryCard && (
                  <div className="mt-3 w-full p-4 rounded-2xl bg-slate-900 border border-emerald-500/40 space-y-3 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Booking Summary Ready
                      </span>
                      <span className="text-[10px] text-slate-400">Kowdiar Desk</span>
                    </div>

                    <div className="space-y-1 text-slate-200 text-xs">
                      <p><span className="text-slate-400">Service:</span> <strong className="text-rose-300">{msg.summaryCard.service}</strong></p>
                      <p><span className="text-slate-400">Schedule:</span> <strong className="text-amber-300">{msg.summaryCard.date}</strong></p>
                      <p><span className="text-slate-400">Client:</span> <strong>{msg.summaryCard.contact}</strong></p>
                    </div>

                    <button
                      onClick={() => handleDirectWhatsAppHandoff(msg.summaryCard)}
                      className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                    >
                      <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                      <span>Send Booking to Salon WhatsApp</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                    </button>
                  </div>
                )}

                {/* Quick Option Pills */}
                {msg.options && (
                  <div className="flex flex-wrap gap-2 mt-2.5 max-w-[95%]">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(opt)}
                        className="px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-rose-500/40 text-rose-300 hover:text-white transition-all cursor-pointer text-left min-h-[44px] flex items-center active:scale-[0.97]"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Animated Typing State */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 w-24">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-amber-300 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Footer Form */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about bridal packages or booking..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-500 focus:border-rose-400 focus:outline-none transition-colors min-h-[40px]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-rose-400 to-amber-200 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 transition-all min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
              >
                <Send className="w-4 h-4 text-slate-950" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}
