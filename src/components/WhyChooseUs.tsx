import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Clock, UserCheck, Heart, Stethoscope,
  MapPin, Award, CheckCircle2, Building2,
} from 'lucide-react';
import { SERVICES_DATA, PROCEDURES_DATA } from '../data/medicareData';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
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

  const stats: { value: React.ReactNode; label: string; subtext: string }[] = [
    { value: '24/7', label: 'Care availability', subtext: 'Round-the-clock staff' },
    {
      value: <CountUp to={SERVICES_DATA.length + PROCEDURES_DATA.length} suffix="+" />,
      label: 'Services & procedures',
      subtext: 'Clinical & caretaker options',
    },
    {
      value: <><CountUp to={12} />/<CountUp to={24} /></>,
      label: 'Hour shifts',
      subtext: 'Day, night & live-in care',
    },
    { value: <CountUp to={2} />, label: 'Major cities', subtext: 'Surat & Ahmedabad' },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          icon={Building2}
          eyebrow="Excellence & reliability"
          title="Why Surat Families Choose"
          highlight="HealthMitra Medicare"
          subtitle="We combine clinical competence with genuine human empathy to support your loved ones at home."
        />

        {/* Hairline grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line rounded-3xl overflow-hidden border border-line">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-card p-6 sm:p-7 hover:bg-paper transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="icon-chip w-11 h-11">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <span className="text-xs font-medium tabular-nums text-muted">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <Reveal className="mt-5">
          <div className="band rounded-3xl grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`p-6 sm:p-9 border-line ${idx % 2 === 1 ? 'border-l' : ''} ${idx > 1 ? 'border-t lg:border-t-0' : ''} ${
                  idx > 0 ? 'lg:border-l' : ''
                }`}
              >
                <div className="text-4xl sm:text-5xl font-semibold tracking-tight tabular-nums leading-none mb-4">
                  {stat.value}
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-muted mt-1">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
