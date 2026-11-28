import React, { useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Procedures from './components/Procedures';
import Equipment from './components/Equipment';
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
import ServiceMarquee from './components/ServiceMarquee';
import SuratCoverage from './components/SuratCoverage';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedProcedureTitle, setSelectedProcedureTitle] = useState<string | undefined>(undefined);

  const [selectedEquipmentTitle, setSelectedEquipmentTitle] = useState<string | undefined>(undefined);

  const handleOpenBooking = () => {
    setSelectedServiceId(undefined);
    setSelectedProcedureTitle(undefined);
    setSelectedEquipmentTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setSelectedProcedureTitle(undefined);
    setSelectedEquipmentTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithProcedure = (procedureTitle: string) => {
    setSelectedProcedureTitle(procedureTitle);
    setSelectedServiceId(undefined);
    setSelectedEquipmentTitle(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithEquipment = (equipmentTitle: string) => {
    setSelectedEquipmentTitle(equipmentTitle);
    setSelectedServiceId(undefined);
    setSelectedProcedureTitle(undefined);
    setBookingModalOpen(true);
  };

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper font-sans text-ink transition-colors duration-300">

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[3000] focus:px-4 focus:py-2 focus:rounded-full focus:bg-ink focus:text-paper focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main id="main">
        <Hero onOpenBooking={handleOpenBooking} />
        <ServiceMarquee />
        <Services onOpenBookingWithService={handleOpenBookingWithService} />
        <Procedures onOpenBookingWithProcedure={handleOpenBookingWithProcedure} />
        <Equipment onOpenBookingWithEquipment={handleOpenBookingWithEquipment} />
        <TwentyFourSevenCare onOpenBooking={handleOpenBooking} />
        <SuratCoverage onOpenBooking={handleOpenBooking} />
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
        initialEquipmentTitle={selectedEquipmentTitle}
      />
      </div>
      </MotionConfig>
    </ThemeProvider>
  );
}
