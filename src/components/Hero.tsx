import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Check, MapPin, HeartPulse, ShieldCheck, Droplets, Stethoscope } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PROCEDURES_DATA } from '../data/medicareData';
import CountUp from './CountUp';

interface HeroProps {
  onOpenBooking: () => void;
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const benefits = ['Male & Female Nurses', '24/7 Care Takers', 'ICU Care at Home', 'Doctor Home Visits'];

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      {/* Atmosphere: dot grid + a faint ring */}
      <div className="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -right-48 -top-48 w-[640px] h-[640px] rounded-full border border-line pointer-events-none hidden lg:block"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 w-[400px] h-[400px] rounded-full border border-line pointer-events-none hidden lg:block"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* ── Left: headline ── */}
          <motion.div variants={container} initial="hidden" animate="visible" className="lg:col-span-7">
            <motion.div variants={item} className="eyebrow mb-7">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-ink animate-pulse-ring" />
                <span className="relative w-2 h-2 rounded-full bg-ink" />
              </span>
              Now serving Surat · 24/7 home healthcare
            </motion.div>

            <motion.h1
              variants={item}
              className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-semibold mb-7 text-balance"
            >
              Best Home Nursing &amp; <span className="font-serif italic font-normal">Healthcare</span> Service in Surat
            </motion.h1>

            <motion.p variants={item} className="text-base sm:text-lg text-muted leading-relaxed max-w-xl mb-8">
              HealthMitra Medicare brings qualified nurses and 24-hour caretakers to your home in Surat — ICU setup at
              home, elderly care, baby care, post-operative recovery and physiotherapy. From Adajan and Vesu to
              Varachha and Katargam, compassionate care is a call away.
            </motion.p>

            <motion.ul variants={item} className="grid grid-cols-1 min-[440px]:grid-cols-2 gap-x-6 gap-y-3 max-w-lg mb-9">
              {benefits.map((text) => (
                <li key={text} className="flex items-center gap-3 text-sm font-medium">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-ink text-paper shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </span>
                  {text}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenBooking} className="btn btn-primary !py-3.5 !px-7">
                <HeartPulse className="w-4 h-4" />
                Book home care in Surat
                <ArrowRight className="btn-arrow w-4 h-4" />
              </button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline !py-3.5 !px-7">
                <Phone className="w-4 h-4" />
                Call {COMPANY_INFO.phone}
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: image + live care card ── */}
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative max-w-md w-full mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="group relative rounded-[2rem] overflow-hidden border border-line shadow-lift aspect-[4/5] bg-surface">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Professional home nurse caring for a patient at home in Surat"
                width={800}
                height={1000}
                fetchPriority="high"
                className="photo-mono w-full h-full object-cover object-top group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium text-black">
                <MapPin className="w-3.5 h-3.5" /> Surat &amp; Ahmedabad
              </span>
            </div>

            {/* On-duty chip */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -top-4 right-3 sm:-right-5 z-20"
            >
              <div className="animate-float-slow flex items-center gap-2.5 rounded-2xl bg-card border border-line shadow-float pl-3 pr-4 py-2.5">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-ink text-paper">
                  <Stethoscope className="w-4 h-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-xs font-semibold">Nurse on duty</div>
                  <div className="text-[11px] text-muted flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink animate-soft-pulse" /> Live · 24/7
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vitals card */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-3 sm:-left-8 z-20 w-[15.5rem]"
            >
              <div className="animate-float rounded-2xl bg-card border border-line shadow-float p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-medium text-muted">Care monitor · sample</span>
                  <ShieldCheck className="w-4 h-4 text-ink" />
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <HeartPulse className="w-4 h-4 animate-beat" />
                      <span className="text-2xl font-semibold leading-none tabular-nums">72</span>
                      <span className="text-[11px] text-muted">BPM</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2 text-[11px] text-muted">
                      <Droplets className="w-3.5 h-3.5" /> SpO₂ <span className="font-semibold text-ink">98%</span>
                    </div>
                  </div>
                  <svg viewBox="0 0 120 50" className="w-24 h-10 text-ink" aria-hidden="true">
                    <path
                      className="ecg-line"
                      pathLength={1}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M0 28 H30 L38 28 L44 10 L52 44 L60 6 L66 30 L72 28 H120"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Proof strip ── */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-28 grid grid-cols-2 lg:grid-cols-4 border-t border-line"
        >
          {[
            { v: <>24/7</>, l: 'Care availability' },
            { v: <CountUp to={SERVICES_DATA.length + PROCEDURES_DATA.length} suffix="+" />, l: 'Services & procedures' },
            { v: <>12h · 24h</>, l: 'Day, night & live-in shifts' },
            { v: <CountUp to={COMPANY_INFO.cities.length} />, l: 'Cities · Surat & Ahmedabad' },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`py-6 lg:py-9 pr-4 border-line ${i > 0 ? 'lg:border-l lg:pl-8' : ''} ${
                i % 2 === 1 ? 'border-l pl-6' : ''
              } ${i > 1 ? 'border-t lg:border-t-0' : ''}`}
            >
              <dd className="text-3xl sm:text-4xl font-semibold tracking-tight tabular-nums">{s.v}</dd>
              <dt className="mt-1.5 text-sm text-muted">{s.l}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
