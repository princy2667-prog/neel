import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowRight, Map, Search } from 'lucide-react';
import { COMPANY_INFO, SURAT_AREAS, SURAT_SEARCH_PHRASES } from '../data/medicareData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

interface SuratCoverageProps {
  onOpenBooking: () => void;
}

export default function SuratCoverage({ onOpenBooking }: SuratCoverageProps) {
  return (
    <section id="areas" className="py-20 lg:py-28 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          icon={Map}
          eyebrow="Surat service areas"
          title="Home Nursing & Healthcare Across"
          highlight="Every Corner of Surat"
          subtitle="Looking for the best home nursing service in Surat? HealthMitra Medicare brings qualified nurses and 24-hour caretakers to your doorstep, wherever you live in the city."
        />

        <div className="grid lg:grid-cols-12 gap-5 items-stretch">
          {/* Areas */}
          <Reveal className="lg:col-span-7">
            <div className="card h-full p-6 sm:p-9">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-semibold">Areas we serve in Surat</h3>
                <span className="pill">{SURAT_AREAS.length} localities</span>
              </div>
              <p className="text-sm text-muted mb-7">
                Nurse, caretaker and home healthcare services in these localities and nearby.
              </p>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.03 }}
                className="flex flex-wrap gap-2.5"
              >
                {SURAT_AREAS.map((area) => (
                  <motion.li
                    key={area}
                    variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-line bg-paper text-sm font-medium hover:bg-ink hover:text-paper hover:border-ink cursor-default transition-colors duration-300"
                  >
                    <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                    {area}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="mt-8 border-t border-line pt-5 text-sm text-muted">
                Locality not listed? Call us — we will confirm availability for your area in Surat
                {COMPANY_INFO.cities.length > 1 ? ' or Ahmedabad' : ''}.
              </p>
            </div>
          </Reveal>

          {/* Radar + popular searches */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="band card h-full !border-transparent overflow-hidden flex flex-col">
              {/* Radar */}
              <div className="relative h-44 border-b border-line">
                <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className="absolute rounded-full border border-ink/25 animate-pulse-ring"
                      style={{ width: `${n * 86}px`, height: `${n * 86}px`, animationDelay: `${n * 1.1}s` }}
                    />
                  ))}
                  <span className="relative grid place-items-center w-11 h-11 rounded-full bg-ink text-paper">
                    <MapPin className="w-5 h-5" />
                  </span>
                </div>
                <span className="absolute left-5 bottom-4 text-xs text-muted">Surat · Gujarat</span>
                <span className="absolute right-5 bottom-4 text-xs text-muted flex items-center gap-1.5">
                  <Search className="w-3 h-3" /> Popular care in Surat
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <ul className="flex flex-wrap gap-2 mb-8">
                  {SURAT_SEARCH_PHRASES.slice(0, 10).map((phrase) => (
                    <li key={phrase} className="px-3 py-1.5 rounded-full border border-line text-xs text-ink/85">
                      {phrase}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <button onClick={onOpenBooking} className="btn btn-primary">
                    Book care in Surat <ArrowRight className="btn-arrow w-4 h-4" />
                  </button>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline">
                    <Phone className="w-4 h-4" /> {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
