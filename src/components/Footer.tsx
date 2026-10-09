import React from 'react';
import { Phone, Mail, MapPin, Heart, Sparkles, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/medicareData';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="relative bg-brand-900 text-slate-100 dark:bg-brand-950 dark:text-slate-200 pt-16 pb-24 lg:pb-12 border-t border-brand-800/80 dark:border-slate-800 transition-colors duration-300">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-brand-500 to-emerald-400" />

      {/* Decorative Subtle Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Branding */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="inline-block group">
              <div className="bg-white/95 p-2 rounded-xl inline-block shadow-md backdrop-blur-sm border border-white/20 transition-transform group-hover:scale-105">
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="RIYA MEDICARE"
                  className="h-11 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = COMPANY_INFO.symbolUrl;
                  }}
                />
              </div>
            </a>

            <p className="text-sm text-slate-300 dark:text-slate-400 max-w-sm leading-relaxed italic">
              "Service at your doorstep. Extraordinary people.... Extraordinary Care....!"
            </p>

            <div className="text-xs text-slate-300 dark:text-slate-400 space-y-1.5 pt-1">
              <div><strong className="text-white dark:text-slate-200 font-semibold">Managing Director:</strong> {COMPANY_INFO.managingDirector}</div>
              <div><strong className="text-white dark:text-slate-200 font-semibold">Chief Accountant:</strong> {COMPANY_INFO.accountant}</div>
              <div className="text-cyan-400 font-semibold pt-1 flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>Serving Surat & Ahmedabad @ 24 Hours</span>
              </div>
            </div>

            {/* Quick Theme Switcher Pill in Footer */}
            <div className="pt-2">
              <button
                onClick={toggleTheme}
                className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-brand-800/80 dark:bg-slate-800/80 border border-brand-700/60 dark:border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Switch to Light Theme</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Switch to Dark Theme</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-brand-700/70 dark:border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>Home</span></a></li>
              <li><a href="#services" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>Services</span></a></li>
              <li><a href="#procedures" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>Procedures</span></a></li>
              <li><a href="#about" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>About Us</span></a></li>
              <li><a href="#why-us" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>Why Choose Us</span></a></li>
              <li><a href="#faq" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>FAQ</span></a></li>
              <li><a href="#contact" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors inline-flex items-center space-x-1"><span>Contact</span></a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-brand-700/70 dark:border-slate-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-slate-300 dark:text-slate-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-brand-700/70 dark:border-slate-800 pb-2">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-2.5 text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                </div>
                <span>+91 {COMPANY_INFO.phone}</span>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-2.5 text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="p-1.5 rounded-lg bg-amber-500/10 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                </div>
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start space-x-2.5 text-slate-300">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                </div>
                <span>Surat | Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-800/80 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © 2026 Riya Medicare. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-1.5 text-slate-300 dark:text-slate-400">
            <span>Delivered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
            <span>for families across Gujarat</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
