import React from 'react';
import { motion } from 'framer-motion';
import {
  Wind, Activity, Droplets, BedSingle, Cylinder, Gauge, ArrowRight, BriefcaseMedical,
} from 'lucide-react';
import { EQUIPMENT_DATA } from '../data/medicareData';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Wind,
  Activity,
  Droplets,
  BedSingle,
  Cylinder,
  Gauge,
};

interface EquipmentProps {
  onOpenBookingWithEquipment: (equipmentTitle: string) => void;
}

export default function Equipment({ onOpenBookingWithEquipment }: EquipmentProps) {
  return (
    <section id="equipment" className="py-20 lg:py-28 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          icon={BriefcaseMedical}
          eyebrow="Equipment for home care"
          title="Medical Equipment"
          highlight="in Surat"
          subtitle="Ventilator, cardiac monitor, infusion pump, ICU bed, oxygen machine and BP monitoring for patients being cared for at home."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {EQUIPMENT_DATA.map((item, index) => {
            const IconComp = iconMap[item.iconName] || Activity;
            return (
              <motion.button
                type="button"
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onOpenBookingWithEquipment(item.title)}
                aria-label={`Enquire about ${item.title}`}
                className="group card card-hover cursor-pointer flex flex-col items-start text-left p-6 sm:p-7"
              >
                <span className="icon-chip w-12 h-12 mb-6">
                  <IconComp className="w-5 h-5" strokeWidth={1.75} />
                </span>
                <h3 className="text-xl font-semibold leading-tight mb-2.5">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted mb-6">{item.desc}</p>
                <span className="mt-auto flex items-center gap-2 text-sm font-medium">
                  Enquire now
                  <span className="grid place-items-center w-8 h-8 rounded-full border border-line transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:border-ink">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
