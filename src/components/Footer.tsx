import React from 'react';
import { Phone, Mail, MapPin, Sun, Moon, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, SURAT_AREAS } from '../data/medicareData';
import { useTheme } from '../context/ThemeContext';

const quickLinks = [
  ['Home', '#home'],
  ['Services', '#services'],
  ['Procedures', '#procedures'],
  ['Surat Areas', '#areas'],
  ['About Us', '#about'],
  ['Why Choose Us', '#why-us'],
  ['FAQ', '#faq'],
  ['Contact', '#contact'],
];

const linkClass = 'font-mono text-sm uppercase text-sig-white/80 hover:text-sig-sky hover:translate-x-1 inline-block transition-all';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="on-dark halftone relative pb-24 lg:pb-12">
      <div className="hazard !border-x-0 !border-t-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14">
        {/* Giant wordmark */}
        <div className="border-b-[3px] border-sig-white pb-8 mb-10">
          <div className="font-mono text-xs font-bold uppercase text-sig-cyan mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-sig-white animate-blink" /> Home nursing service · Surat &amp; Ahmedabad
          </div>
          <div className="text-[clamp(2.75rem,11vw,9rem)] font-bold uppercase leading-[0.85] tracking-tighter text-sig-white">
            Riya <span className="text-sig-sky">Medi</span>care<span className="text-sig-cyan">✚</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="inline-block bg-sig-white border-[3px] border-sig-white p-2 shadow-[5px_5px_0_0_#93c5fd]">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Riya Medicare"
                className="h-11 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = COMPANY_INFO.symbolUrl;
                }}
              />
            </a>

            <p className="border-l-[6px] border-sig-azure pl-4 text-sm text-sig-white/80 leading-relaxed italic">
              "Service at your doorstep. Extraordinary people… Extraordinary care…!"
            </p>

            <div className="font-mono text-xs text-sig-white/80 space-y-1.5">
              <div><strong className="text-sig-sky">Managing Director:</strong> {COMPANY_INFO.managingDirector}</div>
              <div><strong className="text-sig-sky">Chief Accountant:</strong> {COMPANY_INFO.accountant}</div>
            </div>

            <button onClick={toggleTheme} className="brut-btn brut-btn--paper !py-2 !px-3 !text-[11px]">
              {theme === 'dark' ? <Sun className="w-4 h-4" strokeWidth={3} /> : <Moon className="w-4 h-4" strokeWidth={3} />}
              {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            </button>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold uppercase bg-sig-sky text-sig-navy inline-block px-2 py-1 mb-4">Quick links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map(([label, href]) => (
                <li key={href}><a href={href} className={linkClass}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase bg-sig-cyan text-sig-navy inline-block px-2 py-1 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}><a href="#services" className={linkClass}>{service.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold uppercase bg-sig-azure text-sig-navy inline-block px-2 py-1 mb-4">Contact</h4>
            <div className="space-y-3 font-mono text-sm">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 text-sig-white hover:text-sig-sky">
                <Phone className="w-5 h-5 text-sig-sky shrink-0" strokeWidth={3} /> +91 {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 text-sig-white hover:text-sig-sky break-all">
                <Mail className="w-5 h-5 text-sig-cyan shrink-0" strokeWidth={3} /> {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-3 text-sig-white">
                <MapPin className="w-5 h-5 text-sig-azure shrink-0" strokeWidth={3} /> Surat | Ahmedabad, Gujarat, India
              </div>
            </div>
          </div>
        </div>

        {/* Surat coverage */}
        <div className="border-t-[3px] border-sig-white pt-8 mb-10">
          <h4 className="font-mono text-xs font-bold uppercase text-sig-sky mb-4">
            Best home nursing &amp; caretaker service in Surat — areas we serve
          </h4>
          <ul className="flex flex-wrap gap-2">
            {SURAT_AREAS.map((area) => (
              <li key={area}>
                <a
                  href="#areas"
                  className="inline-block px-2.5 py-1 border-2 border-sig-white/40 font-mono text-[11px] uppercase text-sig-white/80 hover:bg-sig-sky hover:text-sig-navy hover:border-sig-sky transition-colors"
                >
                  Home nursing {area}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t-[3px] border-sig-white pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-[11px] uppercase text-sig-white/70">
          <div>
            © {new Date().getFullYear()} Riya Medicare – Home nursing service in Surat &amp; Ahmedabad. All rights reserved.
          </div>
          <a href="#home" className="brut-btn !py-2 !px-3 !text-[11px] sm:mr-20">
            <ArrowUp className="w-4 h-4" strokeWidth={3} /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
