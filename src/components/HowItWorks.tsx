import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, UserCheck, Home, ArrowRight, ListOrdered } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/medicareData';
import SectionHeading from './SectionHeading';

const stepIcons = [PhoneCall, ClipboardCheck, UserCheck, Home];
const stepAccents = ['bg-sig-sky', 'bg-sig-cyan', 'bg-sig-azure', 'bg-sig-white'];

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section className="py-20 lg:py-28 bg-surface border-b-[3px] border-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          icon={ListOrdered}
          eyebrow="Simple 4-step process"
          title="How to Book a Home Nurse"
          highlight="in Surat"
          subtitle="Getting professional healthcare at home is quick, seamless, and tailored to your family's needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const IconComponent = stepIcons[idx] || Home;

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: [0.7, 0, 0.2, 1] }}
                className="relative brut-card brut-card-hover flex flex-col"
              >
                <div className="bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase px-4 py-2 flex justify-between">
                  <span>Step {idx + 1} / 4</span>
                  <span>▶</span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="text-7xl font-bold leading-none text-transparent"
                      style={{ WebkitTextStroke: '3px var(--ink)' }}
                    >
                      {item.step}
                    </span>
                    <span className={`${stepAccents[idx]} grid place-items-center w-12 h-12 border-[3px] border-ink text-sig-navy`}>
                      <IconComponent className="w-6 h-6" strokeWidth={2.5} />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase leading-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/75 leading-relaxed">{item.description}</p>

                  {idx === 0 && (
                    <button onClick={onOpenBooking} className="brut-btn brut-btn--azure mt-6 !py-2.5 !text-xs self-start">
                      Start inquiry <ArrowRight className="w-4 h-4" strokeWidth={3} />
                    </button>
                  )}
                </div>

                {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:grid absolute top-1/2 -right-6 z-10 -translate-y-1/2 w-6 h-10 place-items-center bg-sig-azure border-y-[3px] border-r-[3px] border-sig-navy text-sig-navy font-bold"
                  >
                    ›
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
