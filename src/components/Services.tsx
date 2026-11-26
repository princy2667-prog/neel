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
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-paper relative">
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
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
        >
          {SERVICES_DATA.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || HeartPulse;
            const featured = idx === 0;

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
                className={`group card card-hover cursor-pointer flex flex-col p-6 sm:p-7 ${
                  featured ? 'band md:col-span-2 !border-transparent' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="icon-chip w-12 h-12">
                    <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-medium tabular-nums text-muted">
                      {pad(idx + 1)} / {pad(SERVICES_DATA.length)}
                    </span>
                    <span className="grid place-items-center w-9 h-9 rounded-full border border-line text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:border-ink">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </span>
                </div>

                <span className="pill self-start mb-3">{service.badge}</span>
                <h3 className={`font-semibold leading-tight mb-2.5 ${featured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed text-muted ${featured ? 'sm:text-base max-w-xl' : ''}`}>
                  {service.shortDesc}
                </p>

                {featured && (
                  <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink/90">
                        <Check className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
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
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedService.title}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card text-ink border border-line rounded-3xl shadow-lift max-w-xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 sm:px-8 pt-6">
                <span className="pill">{selectedService.badge}</span>
                <button
                  onClick={() => setSelectedService(null)}
                  aria-label="Close"
                  className="grid place-items-center w-9 h-9 rounded-full border border-line hover:bg-ink/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8 pt-5">
                <div className="flex items-center gap-4 mb-5">
                  <div className="icon-chip w-14 h-14">
                    {React.createElement(iconMap[selectedService.iconName] || HeartPulse, { className: 'w-6 h-6', strokeWidth: 1.75 })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">{selectedService.title}</h3>
                </div>

                <p className="text-base leading-relaxed mb-7 text-muted">{selectedService.fullDesc}</p>

                <h4 className="text-xs font-medium uppercase tracking-wider text-muted mb-3">Included in this service</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 rounded-xl border border-line p-3 text-sm font-medium">
                      <span className="grid place-items-center w-5 h-5 rounded-full bg-ink text-paper shrink-0 mt-0.5">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                  <button onClick={() => setSelectedService(null)} className="btn btn-outline">
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const serviceId = selectedService.id;
                      setSelectedService(null);
                      onOpenBookingWithService(serviceId);
                    }}
                    className="btn btn-primary"
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
