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
    <section className="py-20 lg:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          icon={Layers}
          eyebrow="Specialized pathways"
          title="Specialized Care Categories"
          highlight="in Surat"
          subtitle="Explore dedicated care streams tailored to specific medical, surgical, and age-related needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {CARE_CATEGORIES_DATA.map((cat, idx) => (
            <motion.button
              key={cat.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (idx % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={onOpenBooking}
              aria-label={`${cat.title} – book care`}
              className="group relative text-left aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-ink/5 hover:shadow-lift transition-shadow duration-500"
            >
              <img
                src={cat.imageUrl}
                alt={`${cat.title} at home in Surat`}
                loading="lazy"
                width={800}
                height={600}
                className="photo-mono absolute inset-0 w-full h-full object-cover group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[11px] font-medium text-black">
                {cat.badge}
              </span>
              <span className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full bg-white text-black opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </span>

              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <span className="text-xs font-medium tabular-nums text-white/60">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold leading-tight mt-1 mb-1.5">{cat.title}</h3>
                <p className="text-[13px] leading-relaxed text-white/75 line-clamp-2 group-hover:line-clamp-none">
                  {cat.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
