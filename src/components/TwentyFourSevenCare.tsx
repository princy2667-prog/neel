import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ShieldCheck, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

interface TwentyFourSevenProps {
  onOpenBooking: () => void;
}

export default function TwentyFourSevenCare({ onOpenBooking }: TwentyFourSevenProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Animated 24/7 Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-cyan-500 to-brand-600 p-1 flex items-center justify-center shadow-2xl shadow-cyan-500/20">
              {/* Outer Pulsing Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/40 animate-ping opacity-40" />

              {/* Inner Circle Content */}
              <div className="w-full h-full rounded-full bg-brand-900/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6 border border-white/20">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cyan-400 mb-1">
                  Non-Stop Assistance
                </span>
                
                <span className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 leading-none mb-1">
                  24/7
                </span>

                <span className="text-lg font-bold text-white tracking-wider">
                  HOURS CARE
                </span>

                <div className="mt-3 flex items-center space-x-1 text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Surat & Ahmedabad</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Round-The-Clock Nursing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Care Doesn't Stop When The Day Ends.
            </h2>

            <p className="text-lg text-slate-200 font-normal leading-relaxed mb-8 max-w-2xl">
              Round-the-clock nursing and caretaker services whenever your family needs professional support. Whether it's night-shift vitals tracking or 24-hour live-in patient support, Riya Medicare is by your side.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <h4 className="text-base font-bold text-white mb-1">12h & 24h Shifts</h4>
                <p className="text-xs text-slate-300">Flexible shift options suited to short-term recovery or continuous care.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                <h4 className="text-base font-bold text-white mb-1">Emergency Escalation</h4>
                <p className="text-xs text-slate-300">24/7 supervisor support and immediate back-up staff deployment.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 text-brand-950 font-extrabold text-base hover:shadow-xl hover:shadow-cyan-500/30 transition-all text-center"
              >
                Request 24/7 Staff Deployment
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="px-7 py-4 rounded-full border border-white/30 text-white font-bold text-base hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-5 h-5 text-cyan-400" />
                <span>Call +91 {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
