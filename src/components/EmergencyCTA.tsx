import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquareHeart, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

export default function EmergencyCTA() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Riya Medicare, I need 24/7 Home Nursing / Caretaker assistance.')}`;

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 text-white relative overflow-hidden">
      {/* Background Subtle Wave */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00a8ff_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          
          {/* Animated Call Pulse Icon */}
          <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-500 text-white mb-8 shadow-2xl shadow-cyan-500/40">
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-50" />
            <Phone className="w-9 h-9 relative z-10 animate-bounce" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Need Professional Care At Home?
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed mb-10">
            Our team is ready to understand your needs and help you find the right care solution in Surat & Ahmedabad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-4 rounded-full bg-white text-brand-900 font-extrabold text-lg hover:bg-slate-100 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Phone className="w-5 h-5 text-brand-700" />
              <span>Call Now: {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-9 py-4 rounded-full bg-emerald-500 text-white font-extrabold text-lg hover:bg-emerald-600 hover:shadow-2xl hover:scale-105 transition-all"
            >
              <MessageSquareHeart className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 text-xs font-semibold text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Serving Surat & Ahmedabad | 24 Hours Emergency Response</span>
          </div>

        </div>
      </div>
    </section>
  );
}
