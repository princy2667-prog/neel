import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, UserCheck, Activity, Baby, Brain, Stethoscope, 
  Accessibility, ShieldAlert, ArrowRight, CheckCircle2, X, Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/medicareData';
import { ServiceItem } from '../types';

const iconMap: Record<string, React.ElementType> = {
  HeartPulse,
  UserCheck,
  Activity,
  Baby,
  Brain,
  Stethoscope,
  Accessibility,
  ShieldAlert
};

interface ServicesProps {
  onOpenBookingWithService: (serviceId: string) => void;
}

export default function Services({ onOpenBookingWithService }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
            <span>Comprehensive Healthcare</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
            Care That Comes To You
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Professional healthcare and caregiving support tailored to every stage of recovery and daily living.
          </p>
        </div>

        {/* 8 Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service) => {
            const IconComponent = iconMap[service.iconName] || HeartPulse;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                onClick={() => setSelectedService(service)}
                className="group relative bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-cyan-400/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-700 group-hover:bg-gradient-to-br group-hover:from-brand-700 group-hover:to-cyan-500 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <IconComponent className="w-7 h-7 transition-transform group-hover:scale-110" />
                    </div>

                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-900 group-hover:text-brand-700 transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-sm font-bold text-brand-700 group-hover:text-cyan-600">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Expandable Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[2000] bg-brand-900/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-700 text-white flex items-center justify-center">
                  {React.createElement(iconMap[selectedService.iconName] || HeartPulse, { className: "w-6 h-6" })}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-600">{selectedService.badge}</span>
                  <h3 className="text-2xl font-bold text-brand-900">{selectedService.title}</h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <h4 className="text-sm font-bold text-brand-900 uppercase tracking-wider mb-3">Service Features & Deliverables:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {selectedService.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-2 text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end space-x-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-600 font-semibold text-sm hover:bg-slate-50"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const serviceId = selectedService.id;
                  setSelectedService(null);
                  onOpenBookingWithService(serviceId);
                }}
                className="px-6 py-2.5 rounded-full bg-brand-700 text-white font-bold text-sm hover:bg-brand-800 transition-colors"
              >
                Request This Service
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </section>
  );
}
