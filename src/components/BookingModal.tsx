import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, MessageSquareHeart, MapPin, User, Calendar, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO, SERVICES_DATA, PROCEDURES_DATA } from '../data/medicareData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialProcedureTitle?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialProcedureTitle
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    city: 'Surat',
    service: 'Home Nursing Service',
    genderPref: 'Female Nurse',
    shiftDuration: '24 Hours Shift',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES_DATA.find(s => s.id === initialServiceId);
      if (match) {
        setFormData(prev => ({ ...prev, service: match.title }));
      }
    } else if (initialProcedureTitle) {
      setFormData(prev => ({ ...prev, service: `Procedure: ${initialProcedureTitle}`, shiftDuration: 'Per Visit' }));
    }
  }, [initialServiceId, initialProcedureTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const whatsappMessage = `*NEW HOME CARE REQUEST - HEALTHMITRA MEDICARE*
----------------------------------------
👤 *Patient:* ${formData.patientName || 'Not specified'}
📞 *Phone:* ${formData.phone}
📍 *City:* ${formData.city}
🩺 *Service/Procedure:* ${formData.service}
👩‍⚕️ *Staff Gender Preference:* ${formData.genderPref}
⏱️ *Shift Duration:* ${formData.shiftDuration}
📝 *Notes:* ${formData.notes || 'N/A'}`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[2000] bg-sig-navy/75 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-surface text-ink max-w-lg w-full border-[3px] border-ink shadow-brut-lg overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="bg-sig-navy text-sig-white p-5 flex justify-between items-center flex-shrink-0 border-b-[3px] border-ink">
            <div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-sig-navy bg-sig-sky px-2.5 py-0.5 inline-flex items-center space-x-1 mb-2">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>24/7 Home Care Booking</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase leading-none text-sig-white">
                {isSubmitted ? 'Request Confirmed!' : 'Book Home Nursing / Caregiver'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-sig-azure text-sig-navy border-2 border-sig-white hover:bg-sig-sky transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 bg-sig-cyan text-sig-navy border-[3px] border-sig-navy flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h4 className="text-2xl font-bold uppercase mb-2">
                  Thank You, {formData.patientName || 'Valued Patient'}!
                </h4>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  Your request for <strong>{formData.service}</strong> in <strong>{formData.city}</strong> has been received. Our team will contact <strong>{formData.phone}</strong> shortly.
                </p>

                <div className="space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brut-btn brut-btn--cyan w-full"
                  >
                    <MessageSquareHeart className="w-5 h-5" />
                    <span>Send Directly via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="brut-btn brut-btn--paper w-full"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Urgent Helpline: {COMPANY_INFO.phone}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Patient Name */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name of patient"
                    value={formData.patientName}
                    onChange={e => setFormData({ ...formData, patientName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium"
                  />
                </div>

                {/* Contact Phone */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    City Location *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {COMPANY_INFO.cities.map(c => (
                      <button
                        type="button"
                        key={c}
                        onClick={() => setFormData({ ...formData, city: c })}
                        className={`py-2 rounded-xl border text-sm font-bold transition-all flex items-center justify-center space-x-1.5 ${
                          formData.city === c
                            ? 'bg-sig-sky text-sig-navy border-ink shadow-brut-sm'
                            : 'bg-surface text-ink border-ink'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{c}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Required Service / Procedure
                  </label>
                  <select
                    value={formData.service}
                    onChange={e => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-sm font-medium bg-white"
                  >
                    <optgroup label="Core Care Services">
                      {SERVICES_DATA.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Clinical Procedures">
                      {PROCEDURES_DATA.map(p => (
                        <option key={p.id} value={`Procedure: ${p.title}`}>Procedure - {p.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Gender & Duration */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1">
                      Staff Gender
                    </label>
                    <select
                      value={formData.genderPref}
                      onChange={e => setFormData({ ...formData, genderPref: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
                    >
                      <option value="Female Nurse">Female Nurse (F)</option>
                      <option value="Male Nurse">Male Nurse (M)</option>
                      <option value="Any Qualified Staff">Any Qualified Staff</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1">
                      Shift Duration
                    </label>
                    <select
                      value={formData.shiftDuration}
                      onChange={e => setFormData({ ...formData, shiftDuration: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
                    >
                      <option value="24 Hours Shift">24 Hours (Full Time)</option>
                      <option value="12 Hours Day Shift">12 Hours (Day)</option>
                      <option value="12 Hours Night Shift">12 Hours (Night)</option>
                      <option value="Per Visit Procedure">Per Visit (Procedure)</option>
                    </select>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-wider mb-1.5">
                    Medical Condition / Address Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Patient age, condition, or address details..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:border-brand-700 outline-none text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="brut-btn brut-btn--azure w-full !py-4"
                >
                  Submit Booking Request
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
