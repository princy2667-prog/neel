import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, MapPin, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'services', 'procedures', 'about', 'why-us', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Procedures', href: '#procedures', id: 'procedures' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-[1000] w-full transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-brand-800 text-white text-xs py-2 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-cyan-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.business}</span>
            </span>
            <span className="flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Serving: <strong className="text-white">{COMPANY_INFO.cities.join(' | ')}</strong></span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-1.5 hover:text-cyan-400 transition-colors font-semibold">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 {COMPANY_INFO.phone}</span>
            </a>
            <span className="text-slate-400">{COMPANY_INFO.managingDirector}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100'
            : 'bg-white/80 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo Branding using Official Asset */}
          <a href="#home" className="flex items-center space-x-3 group">
            <motion.img
              src={COMPANY_INFO.logoUrl}
              alt="RIYA MEDICARE Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                // Fallback to symbol if logo path differs
                (e.target as HTMLImageElement).src = COMPANY_INFO.symbolUrl;
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                    isActive ? 'text-brand-700 font-bold' : 'text-slate-600 hover:text-brand-700'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-full border border-brand-700 text-brand-700 font-semibold text-sm hover:bg-brand-700 hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-700 to-brand-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-brand-700/20 hover:-translate-y-0.5 transition-all"
            >
              Book Home Care
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full bg-brand-700 text-white font-semibold text-xs"
            >
              Book Care
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-brand-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl font-medium text-base transition-colors ${
                      activeSection === link.id
                        ? 'bg-brand-50 text-brand-700 font-bold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border border-brand-700 text-brand-700 font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call +91 {COMPANY_INFO.phone}</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3 rounded-xl bg-brand-700 text-white font-semibold shadow-md"
                  >
                    Book Home Care
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
