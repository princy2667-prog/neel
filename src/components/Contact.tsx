import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquareHeart } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PROCEDURES_DATA, EQUIPMENT_DATA } from '../data/medicareData';
import { ContactFormData } from '../types';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const errorText = 'text-red-600 dark:text-red-400 text-xs mt-1.5';

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
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const whatsappMessage = `*NEW CARE REQUEST - HEALTHMITRA MEDICARE*
----------------------------------------
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
✉️ *Email:* ${formData.email.trim() || 'N/A'}
📍 *City:* ${formData.city}
🩺 *Service:* ${formData.service}
📝 *Message:* ${formData.message.trim() || 'N/A'}`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    // Must run directly inside the submit event, or the browser blocks the new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const contactRows = [
    { icon: Phone, label: 'Phone number', value: `+91 ${COMPANY_INFO.phone}`, href: `tel:${COMPANY_INFO.phone}` },
    { icon: Mail, label: 'Email address', value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
    { icon: MapPin, label: 'Service areas', value: COMPANY_INFO.cities.join(' | ') },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          index="09"
          icon={Mail}
          eyebrow="Get in touch"
          title="Contact Your Home Nursing Team"
          highlight="in Surat"
          subtitle="Reach out directly or send us an inquiry. Our Surat care coordinators respond promptly."
        />

        <div className="grid lg:grid-cols-12 gap-5 items-start">
          {/* Left: direct contact */}
          <Reveal className="lg:col-span-5 space-y-5">
            <div className="band rounded-3xl p-6 sm:p-8">
              <span className="pill mb-5">Direct hotline</span>
              <h3 className="text-2xl font-semibold mb-6">Contact HealthMitra Medicare</h3>

              <div className="space-y-3">
                {contactRows.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <span className="grid place-items-center w-11 h-11 rounded-full border border-line shrink-0 transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:border-ink">
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-muted">{label}</span>
                        <span className="block text-base font-medium break-words">{value}</span>
                      </span>
                    </>
                  );
                  const cls = 'group flex items-center gap-4 rounded-2xl border border-line p-4 transition-colors duration-300';
                  return href ? (
                    <a key={label} href={href} className={`${cls} hover:bg-card`}>
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className={cls}>
                      {inner}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="card p-6 text-sm space-y-2">
              <div className="font-semibold">Leadership contact oversight</div>
              <div className="text-muted">
                <span className="text-ink font-medium">Managing Director:</span> {COMPANY_INFO.managingDirector}
              </div>
              <div className="text-muted">
                <span className="text-ink font-medium">Chief Accountant:</span> {COMPANY_INFO.accountant}
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="card p-6 sm:p-10">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center mx-auto mb-6">
                    <MessageSquareHeart className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">Press send in WhatsApp</h3>
                  <p className="text-muted text-sm max-w-md mx-auto mb-7 leading-relaxed">
                    Your request for <strong className="text-ink">{formData.service}</strong> in{' '}
                    <strong className="text-ink">{formData.city}</strong> reaches our team only after you send the message
                    in WhatsApp.
                  </p>
                  <div className="grid gap-3 max-w-xs mx-auto">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <MessageSquareHeart className="w-4 h-4" />
                      <span>WhatsApp didn't open? Tap here</span>
                    </a>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline">
                      <Phone className="w-4 h-4" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </a>
                    <button onClick={() => setIsSubmitted(false)} className="btn btn-outline">
                      Back to the form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="mb-2">
                    <h3 className="text-2xl font-semibold mb-1">Send a care request</h3>
                    <p className="text-sm text-muted">Fill out the form below and send it to our nursing team on WhatsApp.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-name" className="field-label">Full name *</label>
                      <input
                        id="c-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Shah"
                        aria-invalid={!!errors.name}
                        className={`field ${errors.name ? '!border-red-500' : ''}`}
                      />
                      {errors.name && <p className={errorText}>{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="c-phone" className="field-label">Phone number *</label>
                      <input
                        id="c-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="10-digit mobile number"
                        aria-invalid={!!errors.phone}
                        className={`field ${errors.phone ? '!border-red-500' : ''}`}
                      />
                      {errors.phone && <p className={errorText}>{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="c-email" className="field-label">Email address (optional)</label>
                      <input
                        id="c-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        aria-invalid={!!errors.email}
                        className={`field ${errors.email ? '!border-red-500' : ''}`}
                      />
                      {errors.email && <p className={errorText}>{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="c-city" className="field-label">City *</label>
                      <select
                        id="c-city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="field"
                      >
                        {COMPANY_INFO.cities.map((city) => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="c-service" className="field-label">Service required *</label>
                    <select
                      id="c-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="field"
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
                      <optgroup label="Medical Equipment">
                        {EQUIPMENT_DATA.map((e) => (
                          <option key={e.id} value={`Equipment: ${e.title}`}>{e.title}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="c-message" className="field-label">Message / patient details</label>
                    <textarea
                      id="c-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe patient age, condition, or shift duration required (12h / 24h)..."
                      className="field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-full !py-4"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send request on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
