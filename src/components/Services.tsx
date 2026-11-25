import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HeartPulse, UserCheck, Activity, Baby, Brain, Stethoscope,
  Accessibility, ShieldAlert, ArrowUpRight, Check, X, ClipboardList,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/medicareData';
import { ServiceItem } from '../types';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  UserCheck,
  Activity,
  Baby,
  Brain,
  Stethoscope,
  Accessibility,
  ShieldAlert,
};

const accents = ['bg-sig-sky', 'bg-sig-cyan', 'bg-sig-azure', 'bg-sig-white'];
const pad = (n: number) => String(n).padStart(2, '0');

interface ServicesProps {
  onOpenBookingWithService: (serviceId: string) => void;
}

export default function Services({ onOpenBookingWithService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (!selectedService) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelectedService(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedService]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.7, 0, 0.2, 1] as const } },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-paper border-b-[3px] border-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          icon={ClipboardList}
          eyebrow="Comprehensive healthcare in Surat"
          title="Best Home Nursing & Care Services"
          highlight="in Surat"
          subtitle="Professional healthcare and caregiving support at your doorstep — tailored to every stage of recovery and daily living."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || HeartPulse;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onClick={() => setSelectedService(service)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedService(service);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${service.title} – open details`}
                className="group brut-card brut-card-hover cursor-pointer flex flex-col"
              >
                <div className="flex items-stretch border-b-[3px] border-ink">
                  <div className={`${accents[idx % accents.length]} w-16 grid place-items-center border-r-[3px] border-ink text-sig-navy transition-transform group-hover:-rotate-6`}>
                    <IconComponent className="w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 px-3 py-2 font-mono text-[11px] font-bold uppercase leading-tight flex items-center justify-between gap-2">
                    <span>Chart {pad(idx + 1)}/{pad(SERVICES_DATA.length)}</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={3} />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <span className="self-start mb-3 -rotate-2 bg-sig-sky text-sig-navy border-2 border-sig-navy px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                    {service.badge}
                  </span>
                  <h3 className="text-xl font-bold uppercase leading-tight mb-2">{service.title}</h3>
                  <p className="text-sm text-ink/75 leading-relaxed mb-5">{service.shortDesc}</p>

                  <div className="mt-auto pt-3 border-t-2 border-dashed border-ink font-mono text-xs font-bold uppercase">
                    Open file →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            key="service-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] bg-sig-navy/70 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedService.title}
              initial={{ opacity: 0, y: 40, rotate: -1 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.25, ease: [0.7, 0, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface text-ink border-[3px] border-ink shadow-brut-lg max-w-xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-stretch border-b-[3px] border-ink bg-sig-navy text-sig-sky">
                <div className="flex-1 px-5 py-3 font-mono text-xs font-bold uppercase flex items-center">
                  {selectedService.badge} // file open
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  aria-label="Close"
                  className="w-12 grid place-items-center bg-sig-azure text-sig-navy border-l-[3px] border-sig-navy hover:bg-sig-sky"
                >
                  <X className="w-5 h-5" strokeWidth={4} />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 grid place-items-center bg-sig-sky text-sig-navy border-[3px] border-ink shrink-0">
                    {React.createElement(iconMap[selectedService.iconName] || HeartPulse, { className: 'w-7 h-7', strokeWidth: 2.5 })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase leading-none">{selectedService.title}</h3>
                </div>

                <p className="text-base leading-relaxed mb-6 text-ink/80">{selectedService.fullDesc}</p>

                <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-3">Included in this service:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 border-2 border-ink p-2.5 text-sm font-bold">
                      <span className="grid place-items-center w-5 h-5 bg-sig-cyan text-sig-navy border-2 border-sig-navy shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={4} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                  <button onClick={() => setSelectedService(null)} className="brut-btn brut-btn--paper">
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const serviceId = selectedService.id;
                      setSelectedService(null);
                      onOpenBookingWithService(serviceId);
                    }}
                    className="brut-btn brut-btn--azure"
                  >
                    Request this service
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
