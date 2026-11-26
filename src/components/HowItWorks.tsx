import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, UserCheck, Home, ArrowRight, ListOrdered } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/medicareData';
import SectionHeading from './SectionHeading';

const stepIcons = [PhoneCall, ClipboardCheck, UserCheck, Home];

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section className="py-20 lg:py-28 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          icon={ListOrdered}
          eyebrow="Simple 4-step process"
          title="How to Book a Home Nurse"
          highlight="in Surat"
          subtitle="Getting professional healthcare at home is quick, seamless, and tailored to your family's needs."
        />

        <div className="relative">
          {/* Connecting line draws itself in on desktop */}
          <div className="hidden lg:block absolute top-7 left-7 right-7 h-px bg-line overflow-hidden" aria-hidden="true">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left bg-ink"
            />
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const IconComponent = stepIcons[idx] || Home;
              return (
                <motion.li
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <div className="relative z-10 grid place-items-center w-14 h-14 rounded-full bg-paper border border-ink text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-paper mb-6">
                    <IconComponent className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  <div className="text-xs font-medium tabular-nums text-muted mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-semibold leading-tight mb-2.5">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed max-w-xs">{item.description}</p>
                  {idx === 0 && (
                    <button onClick={onOpenBooking} className="btn btn-outline mt-6 !py-2.5 !text-[13px]">
                      Start inquiry <ArrowRight className="btn-arrow w-4 h-4" />
                    </button>
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
