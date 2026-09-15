import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Heart, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

export default function TrustSection() {
  const trustPoints = [
    "Professional Nursing Support",
    "Home-Based Convenience",
    "Personalized Attention",
    "Available Around The Clock"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with Organic Mask */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-brand-50 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
                alt="Riya Medicare Professional Nursing Team"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            </div>

            {/* Overlay Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase">Management Oversight</p>
                <p className="text-sm font-extrabold text-brand-900">{COMPANY_INFO.managingDirector}</p>
                <p className="text-xs text-slate-500">Accountant: {COMPANY_INFO.accountant}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text & Checkmarks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-6">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Compassionate Excellence</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 leading-tight mb-6">
              Your Family Deserves Professional Care.
            </h2>

            <p className="text-lg text-slate-600 font-normal leading-relaxed mb-8">
              We combine professional nursing expertise with compassionate human care to help patients recover and families feel supported across Surat and Ahmedabad.
            </p>

            {/* Checkmark List */}
            <div className="space-y-4 mb-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 text-base sm:text-lg font-bold text-brand-900 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70"
                >
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
