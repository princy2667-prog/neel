import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';
import { useTheme } from '../context/ThemeContext';
import Wordmark from './Wordmark';

interface NavbarProps {
  onOpenBooking: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'Procedures', href: '#procedures', id: 'procedures' },
  { name: 'Equipment', href: '#equipment', id: 'equipment' },
  { name: 'Surat Areas', href: '#areas', id: 'areas' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
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
    <>
      <header
        className={`sticky top-0 z-[1000] w-full transition-all duration-300 ${
          scrolled
            ? 'bg-paper/80 backdrop-blur-xl border-b border-line shadow-[0_8px_30px_-20px_rgb(0_0_0/0.25)]'
            : 'bg-paper border-b border-transparent'
        }`}
      >
        <nav aria-label="Primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex justify-between items-center gap-4">
            <a
              href="#home"
              aria-label="HealthMitra Medicare – home nursing in Surat"
              className="flex items-center flex-shrink-0 transition-opacity hover:opacity-80"
            >
              <Wordmark />
            </a>

            {/* Desktop links */}
            <div className="hidden xl:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative px-3.5 py-2 whitespace-nowrap text-sm font-medium rounded-full transition-colors ${
                      isActive ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-ink/[0.06] border border-line"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                className="grid place-items-center w-10 h-10 rounded-full border border-line text-ink hover:bg-ink/5 hover:border-ink/30 transition-all duration-300"
              >
                <ThemeIcon className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                aria-label="Call now"
                className="hidden md:inline-flex btn btn-outline !py-2.5 !px-4"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden 2xl:inline">Call now</span>
              </a>

              <button onClick={onOpenBooking} className="btn btn-primary !py-2.5 !px-4 sm:!px-5">
                <span className="sm:hidden">Book</span>
                <span className="hidden sm:inline">Book home care</span>
                <ArrowRight className="btn-arrow w-4 h-4 hidden sm:block" />
              </button>

              <button
                onClick={() => setMobileMenuOpen((open) => !open)}
                className="xl:hidden grid place-items-center w-10 h-10 rounded-full border border-line text-ink hover:bg-ink/5 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="xl:hidden bg-paper border-t border-line overflow-hidden max-h-[calc(100vh-4.5rem)] overflow-y-auto"
              >
                <div className="px-4 py-3 grid">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.id}
                      href={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.3 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-4 border-b border-line text-lg font-medium ${
                        activeSection === link.id ? 'text-ink' : 'text-muted'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-xs tabular-nums text-muted">0{i + 1}</span>
                    </motion.a>
                  ))}
                  <div className="grid gap-3 pt-5 pb-3">
                    <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline">
                      <Phone className="w-4 h-4" /> Call +91 {COMPANY_INFO.phone}
                    </a>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenBooking();
                      }}
                      className="btn btn-primary"
                    >
                      Book home care in Surat
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
}
