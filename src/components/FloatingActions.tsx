import React from 'react';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Riya Medicare, I need 24/7 home nursing / caretaker details in Surat.')}`;

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[999] pointer-events-auto flex flex-col items-end gap-3">
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        aria-label="Call Riya Medicare"
        className="group relative flex items-center justify-center w-14 h-14 bg-sig-sky text-sig-navy border-[3px] border-sig-navy shadow-[5px_5px_0_0_#0a1f5c] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a1f5c] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
      >
        <Phone className="w-6 h-6" strokeWidth={3} />
        <span className="absolute right-16 bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase px-3 py-1.5 border-2 border-sig-sky whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Call {COMPANY_INFO.phone}
        </span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Riya Medicare on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 border-[3px] border-sig-navy shadow-[5px_5px_0_0_#0a1f5c] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#0a1f5c] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* Official WhatsApp Icon SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 175.216 175.552"
          className="w-9 h-9"
        >
          <defs>
            <linearGradient id="wa-grad" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#57d163"/>
              <stop offset="1" stopColor="#23b33a"/>
            </linearGradient>
          </defs>
          <path
            fill="white"
            d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 8.158 30.582L25.5 149.544l33.618-8.318a61.09 61.09 0 0 0 29.197 7.433h.026c33.707 0 61.13-27.423 61.13-61.13 0-16.335-6.355-31.666-17.896-43.236S103.527 25.227 87.184 25.227z"
          />
          <path
            fill="#25D366"
            d="M87.184 32.229c-29.881 0-54.176 24.284-54.176 54.128a53.85 53.85 0 0 0 8.033 28.21l1.24 1.965-5.275 19.263 19.74-5.18 1.9 1.128a53.97 53.97 0 0 0 28.563 8.1h.023c29.87 0 54.164-24.284 54.164-54.128S117.054 32.23 87.184 32.23z"
          />
          <path
            fill="white"
            d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.524-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.67-13.677z"
          />
        </svg>

        {/* Pulse ring */}
        <span
          className="absolute inset-0 animate-ping opacity-20 pointer-events-none"
          style={{ backgroundColor: '#25D366' }}
        />

        {/* Tooltip — desktop only */}
        <span className="absolute right-16 bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase px-3 py-1.5 border-2 border-sig-sky whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          WhatsApp Support 24/7
        </span>
      </a>
    </div>
  );
}
