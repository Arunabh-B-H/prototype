import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesCatalog from './components/ServicesCatalog';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import GoogleReviews from './components/GoogleReviews';
import StudioLocation from './components/StudioLocation';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import NotificationToast from './components/NotificationToast';
import AIChatbot from './components/AIChatbot';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenBooking = (serviceName = '') => {
    setSelectedService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-rose-500/30 selection:text-rose-200 overflow-x-hidden">
      
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Categorized Services Catalog */}
        <ServicesCatalog onOpenBooking={handleOpenBooking} />

        {/* Before & After Transformation Gallery */}
        <BeforeAfterGallery onOpenBooking={handleOpenBooking} />

        {/* Verified Google Reviews */}
        <GoogleReviews />

        {/* Visit Our Studio & Map Section */}
        <StudioLocation onCopyToast={showToast} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Embedded AI Concierge Chatbot */}
      <AIChatbot onOpenBookingModal={handleOpenBooking} />

      {/* Interactive Booking Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />

      {/* Notification Toast */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage('')}
      />

    </div>
  );
}
