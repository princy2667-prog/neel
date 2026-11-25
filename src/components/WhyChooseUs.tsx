import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Clock, UserCheck, Heart, Stethoscope,
  MapPin, Award, CheckCircle2, Building2,
} from 'lucide-react';
import { SERVICES_DATA, PROCEDURES_DATA } from '../data/medicareData';
import SectionHeading from './SectionHeading';
import CountUp from './CountUp';

export default function WhyChooseUs() {
  const benefits = [
    { title: 'Professional Caregivers', desc: 'Background-verified and clinically trained staff.', icon: ShieldCheck },
    { title: '24/7 Availability', desc: 'Round-the-clock shift support across day and night.', icon: Clock },
    { title: 'Personalized Care Plans', desc: 'Tailored daily protocols aligned with your doctor.', icon: UserCheck },
    { title: 'Experienced Nursing Support', desc: 'Certified GNM/B.Sc nurses with ICU background.', icon: Stethoscope },
    { title: 'Home-Based Medical Care', desc: 'Hospital quality treatment in comfortable surroundings.', icon: Heart },
    { title: 'Compassionate Service', desc: 'Empathic care that respects patient dignity.', icon: Award },
    { title: 'Reliable Assistance', desc: 'On-time nurse attendance and supervisor oversight.', icon: CheckCircle2 },
    { title: 'Convenient Home Visits', desc: 'Procedure visits without tiring hospital trips.', icon: MapPin },
  ];

  const stats: { value: React.ReactNode; label: string; subtext: string; bg: string }[] = [
    { value: '24/7', label: 'Care availability', subtext: 'Round-the-clock staff', bg: 'bg-sig-sky' },
    {
      value: <CountUp to={SERVICES_DATA.length + PROCEDURES_DATA.length} suffix="+" />,
      label: 'Services & procedures',
      subtext: 'Clinical & caretaker options',
      bg: 'bg-sig-cyan',
    },
    {
      value: <><CountUp to={12} />/<CountUp to={24} /></>,
      label: 'Hour shifts',
      subtext: 'Day, night & live-in care',
      bg: 'bg-sig-azure',
    },
    { value: <CountUp to={2} />, label: 'Major cities', subtext: 'Surat & Ahmedabad', bg: 'bg-sig-white' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-paper border-b-[3px] border-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          icon={Building2}
          eyebrow="Excellence & reliability"
          title="Why Surat Families Choose"
          highlight="Riya Medicare"
          subtitle="We combine clinical competence with genuine human empathy to support your loved ones at home."
        />

        {/* Joined checklist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-[3px] border-l-[3px] border-ink shadow-brut-lg bg-surface">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (index % 4) * 0.06 }}
                className="group p-6 border-r-[3px] border-b-[3px] border-ink hover:bg-sig-sky hover:text-sig-navy transition-colors"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="grid place-items-center w-12 h-12 border-[3px] border-ink bg-sig-white text-sig-navy group-hover:bg-sig-navy group-hover:text-sig-sky transition-colors">
                    <Icon className="w-6 h-6" strokeWidth={2.5} />
                  </span>
                  <span className="font-mono text-2xl font-bold opacity-30 group-hover:opacity-100">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-lg font-bold uppercase leading-tight mb-2">{item.title}</h3>
                <p className="text-sm opacity-75 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stat blocks */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-[3px] border-ink shadow-brut-lg">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`${stat.bg} text-sig-navy p-5 sm:p-7 ${idx % 2 === 0 ? 'border-r-[3px]' : ''} ${
                idx < 2 ? 'border-b-[3px] lg:border-b-0' : ''
              } lg:border-r-[3px] lg:last:border-r-0 border-sig-navy`}
            >
              <div className="font-mono text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tighter leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base font-bold uppercase leading-tight">{stat.label}</div>
              <div className="font-mono text-[11px] font-bold uppercase opacity-70 mt-1">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
