import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PROCEDURES_DATA } from '../data/medicareData';
import { ContactFormData } from '../types';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Home Nursing Service',
    city: 'Surat',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ''))) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Form frontend state ready for backend endpoint integration
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-paper border-b-[3px] border-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          index="08"
          icon={Mail}
          eyebrow="Get In Touch"
          title="Contact Your Home Nursing Team"
          highlight="in Surat"
          subtitle="Reach out directly or send us an inquiry. Our Surat care coordinators respond promptly."
        />

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Helpline Card */}
            <div className="bg-sig-navy text-sig-white border-[3px] border-ink shadow-brut-lg p-6 sm:p-8">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-sig-navy bg-sig-sky px-3 py-1 inline-block mb-4">
                Direct Hotline
              </span>

              <h3 className="text-2xl font-bold mb-6">Contact Riya Medicare</h3>

              <div className="space-y-6 text-slate-200">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-sig-sky hover:text-sig-navy transition-colors border-2 border-sig-white/40"
                >
                  <div className="w-12 h-12 bg-sig-cyan text-sig-navy border-2 border-sig-navy flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 uppercase font-semibold">Phone Number</div>
                    <div className="text-xl font-extrabold text-white">+91 {COMPANY_INFO.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center space-x-4 p-4 bg-white/5 hover:bg-sig-sky hover:text-sig-navy transition-colors border-2 border-sig-white/40"
                >
                  <div className="w-12 h-12 bg-sig-sky text-sig-navy border-2 border-sig-navy flex items-center justify-center font-bold flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 uppercase font-semibold">Email Address</div>
                    <div className="text-base font-bold text-white">{COMPANY_INFO.email}</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white/5 border-2 border-sig-white/40">
                  <div className="w-12 h-12 bg-sig-azure text-sig-navy border-2 border-sig-navy flex items-center justify-center font-bold flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-300 uppercase font-semibold">Service Areas</div>
                    <div className="text-base font-bold text-white">{COMPANY_INFO.cities.join(' | ')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Contact Note */}
            <div className="bg-surface p-6 border-[3px] border-ink shadow-brut-sm font-mono text-xs space-y-2">
              <div className="font-bold text-brand-900 text-sm">Leadership Contact Oversight</div>
              <div>• <strong>Managing Director:</strong> {COMPANY_INFO.managingDirector}</div>
              <div>• <strong>Chief Accountant:</strong> {COMPANY_INFO.accountant}</div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-surface p-6 sm:p-10 border-[3px] border-ink shadow-brut-lg">
            {submitStatus === 'success' ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-sig-cyan text-sig-navy border-[3px] border-sig-navy flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-2">Care Request Submitted!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our care team has received your request for <strong>{formData.service}</strong> in <strong>{formData.city}</strong> and will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="brut-btn"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-900 mb-1">Send A Care Request</h3>
                  <p className="text-xs text-slate-500 mb-6">Fill out the form below to receive a call back from our nursing team.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Shah"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200 focus:border-brand-700'
                      } outline-none text-sm font-medium transition-colors`}
                    />
                    {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="10-digit mobile number"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-200 focus:border-brand-700'
                      } outline-none text-sm font-medium transition-colors`}
                    />
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium transition-colors"
                    />
                    {errors.email && <p className="text-rose-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* City */}
                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                      City *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium bg-white"
                    >
                      {COMPANY_INFO.cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium bg-white"
                  >
                    <optgroup label="Core Care Services">
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Clinical Procedures">
                      {PROCEDURES_DATA.map((p) => (
                        <option key={p.id} value={`Procedure: ${p.title}`}>Procedure - {p.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-2">
                    Message / Patient Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe patient age, condition, or shift duration required (12h / 24h)..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="brut-btn brut-btn--azure w-full !py-4 !text-sm disabled:opacity-60"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Request Care'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
