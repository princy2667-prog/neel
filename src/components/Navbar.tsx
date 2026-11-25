import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenBooking: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Procedures', href: '#procedures', id: 'procedures' },
  { name: 'Surat Areas', href: '#areas', id: 'areas' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <header className="sticky top-0 z-[1000] w-full">
      {/* Main navigation */}
      <nav aria-label="Primary" className="bg-paper border-b-[3px] border-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center gap-4">
          <a
            href="#home"
            aria-label="Riya Medicare – home nursing in Surat"
            className="flex items-center bg-sig-white border-[3px] border-sig-navy shadow-brut-sm px-2 py-1 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform flex-shrink-0"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="Riya Medicare logo"
              className="h-9 sm:h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = COMPANY_INFO.symbolUrl;
              }}
            />
          </a>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-3.5 py-2 font-mono text-xs font-bold uppercase tracking-wider border-2 transition-colors ${
                    isActive
                      ? 'bg-sig-sky text-sig-navy border-ink shadow-brut-sm'
                      : 'border-transparent text-ink hover:bg-ink hover:text-paper'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              className="grid place-items-center w-10 h-10 border-[3px] border-ink bg-surface text-ink hover:bg-sig-sky hover:text-sig-navy transition-colors"
            >
              <ThemeIcon className="w-4 h-4" strokeWidth={3} />
            </button>

            <a href={`tel:${COMPANY_INFO.phone}`} className="hidden md:inline-flex brut-btn brut-btn--paper !py-2 !px-4">
              <Phone className="w-4 h-4" />
              Call now
            </a>

            <button onClick={onOpenBooking} className="brut-btn brut-btn--azure !py-2 !px-3 sm:!px-4 !text-[11px] sm:!text-xs">
              <span className="sm:hidden">Book</span>
              <span className="hidden sm:inline">Book home care</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="xl:hidden grid place-items-center w-10 h-10 border-[3px] border-ink bg-ink text-paper"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" strokeWidth={3} /> : <Menu className="w-5 h-5" strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden bg-paper border-t-[3px] border-ink overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="px-4 py-4 grid gap-2">
                {navLinks.map((link, i) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 border-[3px] border-ink font-mono text-sm font-bold uppercase ${
                      activeSection === link.id ? 'bg-sig-sky text-sig-navy shadow-brut-sm' : 'bg-surface text-ink'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="opacity-60">0{i + 1}</span>
                  </a>
                ))}
                <a href={`tel:${COMPANY_INFO.phone}`} className="brut-btn brut-btn--paper mt-2">
                  <Phone className="w-4 h-4" /> Call +91 {COMPANY_INFO.phone}
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="brut-btn brut-btn--azure"
                >
                  Book home care in Surat
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
