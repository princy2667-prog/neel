import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

export default function EmergencyCTA() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello Riya Medicare, I need 24/7 Home Nursing / Caretaker assistance in Surat.')}`;

  return (
    <section className="on-signal bg-sig-azure border-b-[3px] border-ink relative overflow-hidden">
      <div className="hazard !border-x-0 !border-t-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-8"
          >
            <span className="inline-flex items-center gap-2 bg-sig-navy text-sig-sky font-mono text-xs font-bold uppercase px-3 py-1.5 mb-6">
              <span className="w-2.5 h-2.5 bg-sig-azure animate-blink" /> Emergency line · 24 hours
            </span>

            <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 text-sig-navy">
              Need professional care at home?
            </h2>

            <p className="text-base sm:text-xl font-medium max-w-2xl leading-relaxed">
              Our team is ready to understand your needs and help you find the right home nursing or caretaker
              solution in Surat &amp; Ahmedabad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-4 grid gap-4"
          >
            <a href={`tel:${COMPANY_INFO.phone}`} className="brut-btn brut-btn--ink !py-5 !text-base">
              <Phone className="w-6 h-6 animate-beat" strokeWidth={3} />
              Call now: {COMPANY_INFO.phone}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="brut-btn brut-btn--cyan !py-5 !text-base">
              <MessageSquareHeart className="w-6 h-6" strokeWidth={3} />
              WhatsApp us
            </a>
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase">
              <ShieldCheck className="w-4 h-4" strokeWidth={3} />
              Home nursing in Surat &amp; Ahmedabad
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
