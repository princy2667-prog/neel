import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Clock, UserCheck, Heart, Stethoscope, 
  MapPin, Award, CheckCircle2, Building2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

export default function WhyChooseUs() {
  const benefits = [
    { title: "Professional Caregivers", desc: "Background-verified and clinically trained staff.", icon: ShieldCheck },
    { title: "24/7 Availability", desc: "Round-the-clock shift support across day and night.", icon: Clock },
    { title: "Personalized Care Plans", desc: "Tailored daily protocols aligned with your doctor.", icon: UserCheck },
    { title: "Experienced Nursing Support", desc: "Certified GNM/B.Sc nurses with ICU background.", icon: Stethoscope },
    { title: "Home-Based Medical Care", desc: "Hospital quality treatment in comfortable surroundings.", icon: Heart },
    { title: "Compassionate Service", desc: "Empathic care that respects patient dignity.", icon: Award },
    { title: "Reliable Assistance", desc: "On-time nurse attendance and supervisor oversight.", icon: CheckCircle2 },
    { title: "Convenient Home Visits", desc: "Procedure visits without tiring hospital trips.", icon: MapPin },
  ];

  const stats = [
    { value: "24/7", label: "Care Availability", subtext: "Round-the-clock staff" },
    { value: "9+", label: "Care Services", subtext: "Clinical & caretaker options" },
    { value: "100%", label: "Patient-Centered", subtext: "Personalized care protocols" },
    { value: "2", label: "Major Cities", subtext: "Surat & Ahmedabad" },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-cyan-600" />
            <span>Excellence & Reliability</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
            Why Families Choose Riya Medicare
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            We combine clinical competence with genuine human empathy to support your loved ones at home.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-base font-bold text-brand-900 mb-1.5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Animated Statistics Row */}
        <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`text-center ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}
              >
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-300">
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
