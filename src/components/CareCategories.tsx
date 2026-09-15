import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CARE_CATEGORIES_DATA } from '../data/medicareData';

interface CareCategoriesProps {
  onOpenBooking: () => void;
}

export default function CareCategories({ onOpenBooking }: CareCategoriesProps) {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Pathways</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Care Categories
          </h2>
          <p className="text-lg text-slate-300 font-normal">
            Explore dedicated care streams tailored to specific medical, surgical, and age-related needs.
          </p>
        </div>

        {/* Categories Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARE_CATEGORIES_DATA.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={onOpenBooking}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg border border-white/10 cursor-pointer"
            >
              {/* Background Image with Zoom Effect */}
              <img
                src={cat.imageUrl}
                alt={cat.title}
                className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-brand-950/60 to-transparent group-hover:from-brand-950/95 transition-colors duration-500" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-cyan-300 border border-white/15">
                  {cat.badge}
                </span>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Card Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed opacity-90 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {cat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
