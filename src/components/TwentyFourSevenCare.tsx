import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Moon } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

interface TwentyFourSevenProps {
  onOpenBooking: () => void;
}

export default function TwentyFourSevenCare({ onOpenBooking }: TwentyFourSevenProps) {
  return (
    <section id="care-24-7" className="on-dark halftone py-20 lg:py-28 border-b-[3px] border-sig-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Giant 24/7 block */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-5 w-full max-w-md mx-auto"
          >
            <div className="bg-sig-sky text-sig-navy border-[3px] border-sig-white shadow-[5px_5px_0_0_#3b82f6] p-5 sm:p-6">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-widest">
                <span>Non-stop assistance</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-sig-azure animate-blink" /> Live
                </span>
              </div>

              <div className="text-[6.5rem] sm:text-[8.5rem] font-bold leading-[0.9] tracking-tighter text-center my-4">
                24/7
              </div>

              <div className="border-t-[3px] border-sig-navy pt-3 flex items-center justify-between gap-2">
                <span className="font-mono text-lg font-bold uppercase">Hours care</span>
                <span className="bg-sig-navy text-sig-cyan font-mono text-[11px] font-bold uppercase px-2.5 py-1.5">
                  ● Surat &amp; Ahmedabad
                </span>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-7"
          >
            <span className="brut-tag mb-6">
              <Moon className="w-3.5 h-3.5" /> Round-the-clock nursing
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sig-white mb-6">
              24 Hour Nurse &amp; Caretaker in Surat — <span className="text-gradient">Care Never Stops.</span>
            </h2>

            <p className="border-l-[6px] border-sig-azure pl-4 text-base sm:text-lg text-sig-white/80 leading-relaxed mb-8 max-w-2xl">
              Round-the-clock nursing and caretaker services whenever your family needs professional support.
              Whether it's night-shift vitals tracking or 24-hour live-in patient support in Surat, HealthMitra Medicare
              is by your side.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {[
                ['12h & 24h shifts', 'Flexible shift options suited to short-term recovery or continuous care.'],
                ['Emergency escalation', '24/7 supervisor support and immediate back-up staff deployment.'],
              ].map(([title, text]) => (
                <div key={title} className="border-[3px] border-sig-white bg-sig-white/5 p-4">
                  <h4 className="font-mono text-sm font-bold uppercase text-sig-sky mb-1">{title}</h4>
                  <p className="text-sm text-sig-white/75">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={onOpenBooking} className="brut-btn !py-4 !px-7 !text-sm">
                Request 24/7 staff deployment
              </button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="brut-btn brut-btn--paper !py-4 !px-7 !text-sm">
                <PhoneCall className="w-5 h-5" /> Call +91 {COMPANY_INFO.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
