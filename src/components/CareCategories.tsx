import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Layers } from 'lucide-react';
import { CARE_CATEGORIES_DATA } from '../data/medicareData';
import SectionHeading from './SectionHeading';

interface CareCategoriesProps {
  onOpenBooking: () => void;
}

export default function CareCategories({ onOpenBooking }: CareCategoriesProps) {
  return (
    <section className="on-dark py-20 lg:py-28 border-b-[3px] border-sig-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          index="06"
          icon={Layers}
          eyebrow="Specialized pathways"
          title="Specialized Care Categories"
          highlight="in Surat"
          subtitle="Explore dedicated care streams tailored to specific medical, surgical, and age-related needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_CATEGORIES_DATA.map((cat, idx) => (
            <motion.button
              key={cat.id}
              type="button"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 4) * 0.07, ease: [0.7, 0, 0.2, 1] }}
              onClick={onOpenBooking}
              aria-label={`${cat.title} – book care`}
              className="group relative text-left h-80 overflow-hidden border-[3px] border-sig-white shadow-[6px_6px_0_0_#93c5fd] hover:shadow-[10px_10px_0_0_#3b82f6] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-150"
            >
              <img
                src={cat.imageUrl}
                alt={`${cat.title} at home in Surat`}
                loading="lazy"
                width={800}
                height={600}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sig-navy via-sig-navy/50 to-transparent" />

              <span className="absolute top-3 left-3 bg-sig-sky text-sig-navy border-2 border-sig-navy px-2 py-0.5 font-mono text-[10px] font-bold uppercase -rotate-2">
                {cat.badge}
              </span>
              <span className="absolute top-3 right-3 grid place-items-center w-9 h-9 bg-sig-white text-sig-navy border-2 border-sig-navy opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" strokeWidth={3} />
              </span>

              <div className="absolute bottom-0 inset-x-0 p-5 text-sig-white">
                <span className="font-mono text-xs font-bold text-sig-cyan">{String(idx + 1).padStart(2, '0')} —</span>
                <h3 className="text-xl font-bold uppercase leading-tight mb-1.5">{cat.title}</h3>
                <p className="text-xs leading-relaxed text-sig-white/85 line-clamp-2 group-hover:line-clamp-none">{cat.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
