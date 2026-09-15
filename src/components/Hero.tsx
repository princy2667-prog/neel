import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, HeartPulse, ShieldCheck, Clock, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Subtle Background Glow Circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200/60 mb-6 shadow-sm">
              <Sparkles className="w-4 h-4 text-cyan-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-brand-800 tracking-wide">
                24/7 Home Nursing & Care Services
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-900 leading-[1.12] tracking-tight mb-6">
              Professional Care.<br />
              <span className="text-gradient">Right At Your Doorstep.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              24/7 professional home nursing and caregiving services designed to provide compassionate, reliable and personalized care for your loved ones in Surat and Ahmedabad.
            </p>

            {/* Quick Benefits Pills */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xl mb-10">
              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Male & Female Nurses</span>
              </div>

              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>24/7 Care Takers</span>
              </div>

              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>ICU Care at Home</span>
              </div>

              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-white/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-200/60 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Doctor Home Visits</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-700 to-brand-600 text-white font-bold text-base hover:shadow-xl hover:shadow-brand-700/25 hover:-translate-y-0.5 transition-all"
              >
                <HeartPulse className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>Book Home Care</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-white border-2 border-brand-700 text-brand-700 font-bold text-base hover:bg-brand-50 hover:shadow-md transition-all"
              >
                <Phone className="w-5 h-5 text-cyan-600" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Main Rounded Nurse Image Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-brand-100 to-cyan-50">
              <img
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                alt="Professional Indian Home Nurse Caring for Patient"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-3 py-1 bg-cyan-500/90 text-xs font-bold rounded-full mb-2 backdrop-blur-md">
                  Surat & Ahmedabad
                </span>
                <p className="text-sm font-semibold text-white/90">
                  Certified Male & Female Caregivers
                </p>
              </div>
            </div>

            {/* Floating Medical Card 1: 24/7 Care */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 z-20"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6 text-brand-700" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Availability</p>
                <p className="text-base font-extrabold text-brand-900">24/7 Home Care</p>
              </div>
            </motion.div>

            {/* Floating Medical Card 2: Professional Nurses */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 z-20"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Certified Staff</p>
                <p className="text-base font-extrabold text-slate-900">Professional Nurses</p>
              </div>
            </motion.div>

            {/* Floating Medical Card 3: Personalized Support */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-brand-800 text-white p-4 rounded-2xl shadow-2xl border border-white/20 flex items-center space-x-3 z-20 w-[85%]"
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-cyan-300 font-semibold">Verified Quality</p>
                <p className="text-sm font-bold text-white">Personalized Medical Support</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
