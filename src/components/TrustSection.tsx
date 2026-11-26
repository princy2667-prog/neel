import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';
import Reveal from './Reveal';

const trustPoints = [
  'Professional Nursing Support',
  'Home-Based Convenience',
  'Personalized Attention',
  'Available Around The Clock',
];

export default function TrustSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-16 items-center">
          {/* Photo + management card */}
          <Reveal className="lg:col-span-6 relative">
            <div className="group relative rounded-[2rem] overflow-hidden border border-line aspect-[4/3] bg-surface shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                alt="HealthMitra Medicare professional nursing team – home healthcare in Surat"
                loading="lazy"
                width={800}
                height={600}
                className="photo-mono w-full h-full object-cover group-hover:scale-[1.03]"
              />
            </div>

            <div className="absolute -bottom-8 right-3 sm:right-8 z-10 animate-float-slow">
              <div className="rounded-2xl bg-card border border-line shadow-float p-4 pr-6 flex items-center gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-ink text-paper">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[11px] font-medium text-muted">Management oversight</p>
                  <p className="text-base font-semibold leading-tight">{COMPANY_INFO.managingDirector}</p>
                  <p className="text-xs text-muted">Accountant: {COMPANY_INFO.accountant}</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1} className="lg:col-span-6 mt-6 lg:mt-0">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium tabular-nums text-muted">07</span>
              <span className="h-px w-8 bg-line" aria-hidden="true" />
              <span className="eyebrow">
                <Heart className="w-3.5 h-3.5" /> Compassionate excellence
              </span>
            </div>

            <h2 className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.2rem] font-semibold mb-6 text-balance">
              Your Family Deserves Professional Care <span className="font-serif italic font-normal">in Surat.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-9">
              HealthMitra Medicare combines professional nursing expertise with compassionate human care — helping patients
              recover at home and families feel supported across Surat and Ahmedabad.
            </p>

            <ul className="border-t border-line">
              {trustPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex items-center gap-4 py-4 border-b border-line text-base font-medium"
                >
                  <span className="grid place-items-center w-7 h-7 rounded-full border border-ink/30 text-ink shrink-0 transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:border-ink">
                    <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
