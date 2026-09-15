import React, { useState } from 'react';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Procedures from './components/Procedures';
import TwentyFourSevenCare from './components/TwentyFourSevenCare';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import CareCategories from './components/CareCategories';
import TrustSection from './components/TrustSection';
import EmergencyCTA from './components/EmergencyCTA';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedProcedureTitle, setSelectedProcedureTitle] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedServiceId(undefined);
    setSelectedProcedureTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedProcedureTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithProcedure = (procedureTitle: string) => {
    setSelectedProcedureTitle(procedureTitle);
    setSelectedServiceId(undefined);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-700 selection:text-white">



      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <Services onOpenBookingWithService={handleOpenBookingWithService} />
        <Procedures onOpenBookingWithProcedure={handleOpenBookingWithProcedure} />
        <TwentyFourSevenCare onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <HowItWorks onOpenBooking={handleOpenBooking} />
        <CareCategories onOpenBooking={handleOpenBooking} />
        <TrustSection />
        <EmergencyCTA />
        <Contact />
        <FAQ onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Floating Action Buttons (Call & WhatsApp) */}
      <FloatingActions />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialProcedureTitle={selectedProcedureTitle}
      />
    </div>
  );
}
