import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ClipboardCheck, UserCheck, Home, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/medicareData';

const stepIcons = [PhoneCall, ClipboardCheck, UserCheck, Home];

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export default function HowItWorks({ onOpenBooking }: HowItWorksProps) {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
            <span>Simple 4-Step Process</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Getting professional healthcare at home is quick, seamless, and tailored to your family's needs.
          </p>
        </div>

        {/* 4 Steps Timeline Container */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-brand-700 via-cyan-400 to-emerald-400 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const IconComponent = stepIcons[idx] || Home;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-extrabold text-brand-700 tracking-tight">
                        {item.step}
                      </span>
                      
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center border border-brand-100">
                        <IconComponent className="w-6 h-6 text-brand-700" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-brand-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {idx === 0 && (
                    <button
                      onClick={onOpenBooking}
                      className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-600 hover:text-brand-700 pt-3 border-t border-slate-100"
                    >
                      <span>Start Inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
