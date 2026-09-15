import React from 'react';
import { Phone, MessageSquareHeart } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

export default function FloatingActions() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Riya Medicare, I need 24/7 Home Nursing / Caregiver details.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col space-y-3 items-end pointer-events-auto">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Riya Medicare on WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 hover:scale-110 transition-all duration-300"
      >
        <MessageSquareHeart className="w-6 h-6 sm:w-7 sm:h-7" />
        
        {/* Tooltip on Hover */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          WhatsApp Support 24/7
        </span>
      </a>

      {/* Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        aria-label="Call Riya Medicare Helpline"
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-700 text-white shadow-xl shadow-brand-700/40 hover:bg-brand-800 hover:scale-110 transition-all duration-300"
      >
        <Phone className="w-6 h-6 sm:w-7 sm:h-7" />

        {/* Tooltip on Hover */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
          Call Helpline: {COMPANY_INFO.phone}
        </span>
      </a>
    </div>
  );
}
