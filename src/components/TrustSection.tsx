import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

const trustPoints = [
  'Professional Nursing Support',
  'Home-Based Convenience',
  'Personalized Attention',
  'Available Around The Clock',
];

export default function TrustSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-surface border-b-[3px] border-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
          {/* Photo + management sticker */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute inset-0 translate-x-4 translate-y-4 bg-sig-sky border-[3px] border-ink" />
            <div className="relative border-[3px] border-ink bg-paper aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                alt="HealthMitra Medicare professional nursing team – home healthcare in Surat"
                loading="lazy"
                width={800}
                height={600}
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
            </div>

            <div className="absolute -bottom-8 right-2 sm:right-6 z-10 rotate-2 bg-sig-white text-sig-navy border-[3px] border-sig-navy shadow-[3px_3px_0_0_#3b82f6] p-4 flex items-center gap-4">
              <span className="grid place-items-center w-12 h-12 bg-sig-cyan border-[3px] border-sig-navy">
                <ShieldCheck className="w-7 h-7" strokeWidth={2.5} />
              </span>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider opacity-70">Management oversight</p>
                <p className="text-base font-bold uppercase leading-tight">{COMPANY_INFO.managingDirector}</p>
                <p className="font-mono text-[11px] font-bold">Accountant: {COMPANY_INFO.accountant}</p>
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-6 mt-8 lg:mt-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-bold px-2.5 py-1.5 border-2 border-ink bg-sig-navy text-sig-sky">[07]</span>
              <span className="brut-tag">
                <Heart className="w-3.5 h-3.5 text-sig-azure fill-sig-azure" /> Compassionate excellence
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Your Family Deserves Professional Care <span className="text-gradient">in Surat.</span>
            </h2>

            <p className="border-l-[6px] border-sig-azure pl-4 text-base sm:text-lg text-ink/80 leading-relaxed mb-8">
              HealthMitra Medicare combines professional nursing expertise with compassionate human care — helping patients
              recover at home and families feel supported across Surat and Ahmedabad.
            </p>

            <ul className="grid gap-3">
              {trustPoints.map((point, index) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="flex items-center gap-4 border-[3px] border-ink bg-paper p-3.5 font-bold uppercase text-sm sm:text-base shadow-brut-sm hover:bg-sig-sky hover:text-sig-navy transition-colors"
                >
                  <span className="grid place-items-center w-7 h-7 bg-sig-cyan text-sig-navy border-2 border-sig-navy shrink-0">
                    <Check className="w-4 h-4" strokeWidth={4} />
                  </span>
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
