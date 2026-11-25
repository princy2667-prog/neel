import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Check, MapPin, HeartPulse, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

interface HeroProps {
  onOpenBooking: () => void;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.7, 0, 0.2, 1] as const } },
};

const benefits = ['Male & Female Nurses', '24/7 Care Takers', 'ICU Care at Home', 'Doctor Home Visits'];

const chartRows = [
  ['Patient', 'Your loved one'],
  ['City', 'Surat · Ahmedabad'],
  ['Shift', '12h / 24h live-in'],
  ['Nurse', 'Male / Female'],
];

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="ecg-paper relative overflow-hidden border-b-[3px] border-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ── Left: headline ── */}
          <motion.div variants={container} initial="hidden" animate="visible" className="lg:col-span-7">
            <motion.div
              variants={item}
              className="inline-flex items-stretch border-[3px] border-ink bg-surface shadow-brut-sm font-mono text-[11px] sm:text-xs font-bold uppercase mb-6"
            >
              <span className="bg-sig-azure text-sig-navy px-3 py-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-sig-navy animate-blink" />
                On duty
              </span>
              <span className="px-3 py-2 text-ink">Surat · 24/7 home healthcare</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[2.6rem] leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-ink mb-7"
            >
              Best Home Nursing &amp;{' '}
              <span className="text-gradient">Healthcare Service in Surat</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="border-l-[6px] border-sig-azure pl-4 text-base sm:text-lg text-ink/80 leading-relaxed max-w-2xl mb-8"
            >
              HealthMitra Medicare brings qualified nurses and 24-hour caretakers to your home in Surat — ICU setup at
              home, elderly care, baby care, post-operative recovery and physiotherapy. From Adajan and Vesu to
              Varachha and Katargam, compassionate care is a call away.
            </motion.p>

            <motion.ul variants={item} className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-3 max-w-xl mb-9">
              {benefits.map((text) => (
                <li
                  key={text}
                  className="flex items-center gap-3 border-[3px] border-ink bg-surface px-3 py-2.5 text-sm font-bold text-ink shadow-brut-sm"
                >
                  <span className="grid place-items-center w-6 h-6 bg-sig-cyan border-2 border-sig-navy text-sig-navy shrink-0">
                    <Check className="w-4 h-4" strokeWidth={4} />
                  </span>
                  {text}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
              <button onClick={onOpenBooking} className="brut-btn brut-btn--azure !py-4 !px-7 !text-sm">
                <HeartPulse className="w-5 h-5" />
                Book home care in Surat
                <ArrowRight className="w-5 h-5" />
              </button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="brut-btn brut-btn--paper !py-4 !px-7 !text-sm">
                <Phone className="w-5 h-5" />
                Call {COMPANY_INFO.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: patient chart ── */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: 1.5 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-5 relative max-w-md w-full mx-auto lg:mx-0 lg:ml-auto"
          >
            {/* stickers */}
            <div className="absolute -top-6 -right-3 sm:-right-6 z-20 rotate-6 animate-wiggle bg-sig-azure text-sig-navy border-[3px] border-sig-navy shadow-[2px_2px_0_0_#0a1f5c] px-3 py-1.5 font-mono text-sm font-bold">
              24/7 ✚
            </div>
            <div className="absolute -bottom-5 -left-3 sm:-left-6 z-20 -rotate-3 bg-sig-cyan text-sig-navy border-[3px] border-sig-navy shadow-[2px_2px_0_0_#0a1f5c] px-3 py-1.5 font-mono text-xs font-bold uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> Background verified
            </div>

            <div className="brut-card overflow-hidden">
              <div className="bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase tracking-wider px-4 py-2.5 flex justify-between">
                <span>HealthMitra Medicare // Home care file</span>
                <span>No. RM-247</span>
              </div>

              <div className="relative border-b-[3px] border-ink">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                  alt="Professional home nurse caring for a patient at home in Surat"
                  width={800}
                  height={1067}
                  fetchPriority="high"
                  className="w-full h-56 sm:h-64 object-cover object-top grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                />
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 bg-sig-sky text-sig-navy border-[3px] border-sig-navy px-2.5 py-1 font-mono text-xs font-bold uppercase">
                  <MapPin className="w-3.5 h-3.5" /> Surat &amp; Ahmedabad
                </span>
              </div>

              <dl className="font-mono text-xs">
                {chartRows.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[5.5rem_1fr] border-b-2 border-ink last:border-b-0">
                    <dt className="px-3 py-2 font-bold uppercase bg-ink/10 border-r-2 border-ink">{k}</dt>
                    <dd className="px-3 py-2 font-bold text-ink">{v}</dd>
                  </div>
                ))}
              </dl>

              {/* sample vitals */}
              <div className="grid grid-cols-3 border-t-[3px] border-ink font-mono">
                <div className="p-3 border-r-2 border-ink text-center">
                  <HeartPulse className="w-5 h-5 mx-auto text-sig-azure animate-beat" strokeWidth={3} />
                  <div className="text-lg font-bold leading-none mt-1">72</div>
                  <div className="text-[10px] font-bold uppercase text-ink/60">BPM</div>
                </div>
                <div className="p-3 border-r-2 border-ink text-center">
                  <div className="text-[10px] font-bold uppercase text-ink/60">SpO₂</div>
                  <div className="text-lg font-bold leading-none mt-1">98%</div>
                  <div className="text-[10px] font-bold uppercase text-ink/60">Oxygen</div>
                </div>
                <div className="p-2 flex items-center">
                  <svg viewBox="0 0 120 50" className="w-full h-10 text-ink" aria-hidden="true">
                    <path
                      className="ecg-line"
                      pathLength={1}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinejoin="miter"
                      d="M0 28 H30 L38 28 L44 8 L52 46 L60 4 L66 30 L72 28 H120"
                    />
                  </svg>
                </div>
              </div>

              <div className="border-t-[3px] border-ink px-4 pt-3 pb-2">
                <div className="barcode" />
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60 mt-1 text-center">
                  Sample monitor · care plan set with your doctor
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
