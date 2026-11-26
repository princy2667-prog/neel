import React from 'react';
import { Phone, Mail, MapPin, Sun, Moon, ArrowUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, SURAT_AREAS } from '../data/medicareData';
import { useTheme } from '../context/ThemeContext';
import Wordmark from './Wordmark';

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

const linkClass = 'text-sm text-muted hover:text-ink inline-block transition-all duration-300 hover:translate-x-1';
const headingClass = 'text-xs font-medium uppercase tracking-wider text-muted mb-5';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="band relative pb-24 lg:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="inline-block" aria-label="HealthMitra Medicare – back to top">
              <Wordmark />
            </a>
            <p className="font-serif italic text-2xl leading-snug text-ink/90 max-w-xs">
              "Service at your doorstep. Extraordinary people… Extraordinary care…!"
            </p>
            <div className="text-sm text-muted space-y-1">
              <div><span className="text-ink font-medium">Managing Director:</span> {COMPANY_INFO.managingDirector}</div>
              <div><span className="text-ink font-medium">Chief Accountant:</span> {COMPANY_INFO.accountant}</div>
            </div>
            <button onClick={toggleTheme} className="btn btn-outline !py-2 !px-4 !text-[13px]">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              {theme === 'dark' ? 'Light theme' : 'Dark theme'}
            </button>
          </div>

          <div className="lg:col-span-2">
            <h4 className={headingClass}>Quick links</h4>
            <ul className="space-y-3">
              {quickLinks.map(([label, href]) => (
                <li key={href}><a href={href} className={linkClass}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className={headingClass}>Services</h4>
            <ul className="space-y-3">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}><a href="#services" className={linkClass}>{service.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className={headingClass}>Contact</h4>
            <div className="space-y-4 text-sm">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4 text-muted shrink-0" /> +91 {COMPANY_INFO.phone}
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity break-all">
                <Mail className="w-4 h-4 text-muted shrink-0" /> {COMPANY_INFO.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted shrink-0 mt-0.5" /> Surat | Ahmedabad, Gujarat, India
              </div>
            </div>
          </div>
        </div>

        {/* Surat coverage */}
        <div className="border-t border-line pt-8 mb-10">
          <h4 className={headingClass}>Best home nursing &amp; caretaker service in Surat — areas we serve</h4>
          <ul className="flex flex-wrap gap-2">
            {SURAT_AREAS.map((area) => (
              <li key={area}>
                <a
                  href="#areas"
                  className="inline-block px-3 py-1.5 rounded-full border border-line text-xs text-muted hover:bg-ink hover:text-paper hover:border-ink transition-colors duration-300"
                >
                  Home nursing {area}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Giant outlined wordmark */}
        <div
          aria-hidden="true"
          className="text-outline select-none text-center font-semibold tracking-tighter leading-[0.85] text-[clamp(3rem,13.5vw,12rem)] -mb-2 sm:-mb-4"
        >
          HealthMitra
        </div>

        <div className="border-t border-line pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-muted">
          <div>
            © {new Date().getFullYear()} HealthMitra Medicare – Home nursing service in Surat &amp; Ahmedabad. All rights reserved.
          </div>
          <a href="#home" className="btn btn-outline !py-2 !px-4 !text-xs sm:mr-20">
            <ArrowUp className="w-3.5 h-3.5" /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
