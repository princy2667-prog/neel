import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, Map, Search } from 'lucide-react';
import { COMPANY_INFO, SURAT_AREAS, SURAT_SEARCH_PHRASES } from '../data/medicareData';
import SectionHeading from './SectionHeading';

interface SuratCoverageProps {
  onOpenBooking: () => void;
}

export default function SuratCoverage({ onOpenBooking }: SuratCoverageProps) {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-paper border-b-[3px] border-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          icon={Map}
          eyebrow="Surat service areas"
          title="Home Nursing & Healthcare Across"
          highlight="Every Corner of Surat"
          subtitle="Looking for the best home nursing service in Surat? HealthMitra Medicare brings qualified nurses and 24-hour caretakers to your doorstep, wherever you live in the city."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Areas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.7, 0, 0.2, 1] }}
            className="lg:col-span-7 brut-card"
          >
            <div className="bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase px-5 py-2.5 flex items-center justify-between">
              <span>Coverage map // Surat</span>
              <span>{SURAT_AREAS.length} zones</span>
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-bold uppercase leading-none mb-2">Areas we serve in Surat</h3>
              <p className="text-sm text-ink/70 mb-6">
                Nurse, caretaker and home healthcare services in these localities and nearby.
              </p>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.035 }}
                className="flex flex-wrap gap-2.5"
              >
                {SURAT_AREAS.map((area) => (
                  <motion.li
                    key={area}
                    variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                    whileHover={{ y: -3, x: -3 }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 border-2 border-ink bg-surface font-mono text-xs font-bold uppercase shadow-brut-sm hover:bg-sig-sky hover:text-sig-navy cursor-default transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5" strokeWidth={3} />
                    {area}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="mt-7 border-t-2 border-dashed border-ink pt-4 font-mono text-xs text-ink/70">
                Locality not listed? Call us — we will confirm availability for your area in Surat
                {COMPANY_INFO.cities.length > 1 ? ' or Ahmedabad' : ''}.
              </p>
            </div>
          </motion.div>

          {/* Popular searches + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.7, 0, 0.2, 1] }}
            className="on-signal lg:col-span-5 bg-sig-sky border-[3px] border-ink shadow-brut flex flex-col"
          >
            <div className="bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase px-5 py-2.5 flex items-center gap-2">
              <Search className="w-3.5 h-3.5" strokeWidth={3} /> Popular care in Surat
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col">
              <ul className="flex flex-wrap gap-2 mb-8">
                {SURAT_SEARCH_PHRASES.slice(0, 10).map((phrase) => (
                  <li key={phrase} className="px-2.5 py-1.5 bg-surface border-2 border-ink font-mono text-[11px] font-bold uppercase">
                    {phrase}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <button onClick={onOpenBooking} className="brut-btn brut-btn--ink">
                  Book care in Surat <ArrowRight className="w-4 h-4" strokeWidth={3} />
                </button>
                <a href={`tel:${COMPANY_INFO.phone}`} className="brut-btn brut-btn--paper">
                  <Phone className="w-4 h-4" /> {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
