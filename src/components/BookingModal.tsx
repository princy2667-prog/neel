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

  const whatsappMessage = `*NEW HOME CARE REQUEST - RIYA MEDICARE*
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
        className="fixed inset-0 z-[2000] bg-brand-950/75 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="bg-gradient-to-r from-brand-900 to-brand-700 text-white p-6 flex justify-between items-center flex-shrink-0">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-300 bg-white/10 px-2.5 py-0.5 rounded-full inline-flex items-center space-x-1 mb-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>24/7 Home Care Booking</span>
              </span>
              <h3 className="text-xl font-bold text-white">
                {isSubmitted ? 'Request Confirmed!' : 'Book Home Nursing / Caregiver'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto">
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <h4 className="text-2xl font-bold text-brand-900 mb-2">
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
                    className="w-full py-3.5 rounded-full bg-emerald-500 text-white font-bold text-sm hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <MessageSquareHeart className="w-5 h-5" />
                    <span>Send Directly via WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="w-full py-3.5 rounded-full border border-brand-700 text-brand-700 font-bold text-sm hover:bg-brand-50 transition-colors flex items-center justify-center space-x-2"
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
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
                            ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200'
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
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
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
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
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
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
                  className="w-full py-3.5 rounded-full bg-gradient-to-r from-brand-700 to-brand-600 text-white font-extrabold text-sm hover:shadow-lg transition-all"
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
