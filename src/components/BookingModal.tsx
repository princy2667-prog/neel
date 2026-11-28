import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquareHeart, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, PROCEDURES_DATA, EQUIPMENT_DATA } from '../data/medicareData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialProcedureTitle?: string;
  initialEquipmentTitle?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialServiceId,
  initialProcedureTitle,
  initialEquipmentTitle
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
      setFormData(prev => ({ ...prev, service: `Procedure: ${initialProcedureTitle}`, shiftDuration: 'Per Visit Procedure' }));
    } else if (initialEquipmentTitle) {
      setFormData(prev => ({ ...prev, service: `Equipment: ${initialEquipmentTitle}` }));
    }
  }, [initialServiceId, initialProcedureTitle, initialEquipmentTitle]);

  // Staff gender and shift length don't apply to an equipment enquiry
  const isEquipment = formData.service.startsWith('Equipment: ');

  // Every time the modal is reopened, start from the form again
  useEffect(() => {
    if (isOpen) setIsSubmitted(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Must run directly inside the submit event, or the browser blocks the new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const staffLines = isEquipment
    ? ''
    : `👩‍⚕️ *Staff Gender Preference:* ${formData.genderPref}
⏱️ *Shift Duration:* ${formData.shiftDuration}
`;

  const whatsappMessage = `*NEW HOME CARE REQUEST - HEALTHMITRA MEDICARE*
----------------------------------------
👤 *Patient:* ${formData.patientName || 'Not specified'}
📞 *Phone:* ${formData.phone}
📍 *City:* ${formData.city}
🩺 *Service/Procedure:* ${formData.service}
${staffLines}📝 *Notes:* ${formData.notes || 'N/A'}`;

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="booking-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[2000] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book home nursing"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card text-ink max-w-lg w-full border border-line rounded-3xl shadow-lift overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 pb-5 flex justify-between items-start flex-shrink-0 border-b border-line">
              <div>
                <span className="pill mb-3">24/7 home care booking</span>
                <h3 className="text-xl sm:text-2xl font-semibold leading-tight">
                  {isSubmitted ? 'One more step' :isEquipment ? 'Medical equipment enquiry' : 'Book home nursing / caregiver'}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="grid place-items-center w-9 h-9 rounded-full border border-line hover:bg-ink/5 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 overflow-y-auto">
              {isSubmitted ? (
                <div className="text-center py-4">
                  <div className="w-16 h-16 rounded-full bg-ink text-paper flex items-center justify-center mx-auto mb-5">
                    <MessageSquareHeart className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  <h4 className="text-2xl font-semibold mb-2">Press send in WhatsApp</h4>
                  <p className="text-muted text-sm mb-7 leading-relaxed">
                    Your request for <strong className="text-ink">{formData.service}</strong> in{' '}
                    <strong className="text-ink">{formData.city}</strong> reaches our team only after you send the
                    message in WhatsApp.
                  </p>

                  <div className="space-y-3">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                      <MessageSquareHeart className="w-4 h-4" />
                      <span>WhatsApp didn't open? Tap here</span>
                    </a>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline w-full">
                      <Phone className="w-4 h-4" />
                      <span>Call urgent helpline: {COMPANY_INFO.phone}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="b-name" className="field-label">Patient name *</label>
                    <input
                      id="b-name"
                      type="text"
                      required
                      placeholder="Full name of patient"
                      value={formData.patientName}
                      onChange={e => setFormData({ ...formData, patientName: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <label htmlFor="b-phone" className="field-label">Contact phone number *</label>
                    <input
                      id="b-phone"
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <span className="field-label">City location *</span>
                    <div className="grid grid-cols-2 gap-3">
                      {COMPANY_INFO.cities.map(c => (
                        <button
                          type="button"
                          key={c}
                          onClick={() => setFormData({ ...formData, city: c })}
                          aria-pressed={formData.city === c}
                          className={`py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1.5 ${
                            formData.city === c
                              ? 'bg-ink text-paper border-ink'
                              : 'bg-paper text-ink border-line hover:border-ink/40'
                          }`}
                        >
                          <MapPin className="w-4 h-4" />
                          <span>{c}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="b-service" className="field-label">Required service / procedure</label>
                    <select
                      id="b-service"
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="field"
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
                      <optgroup label="Medical Equipment">
                        {EQUIPMENT_DATA.map((e) => (
                          <option key={e.id} value={`Equipment: ${e.title}`}>{e.title}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {!isEquipment && (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="b-gender" className="field-label">Staff gender</label>
                        <select
                          id="b-gender"
                          value={formData.genderPref}
                          onChange={e => setFormData({ ...formData, genderPref: e.target.value })}
                          className="field !px-3 !text-[13px]"
                        >
                          <option value="Female Nurse">Female Nurse (F)</option>
                          <option value="Male Nurse">Male Nurse (M)</option>
                          <option value="Any Qualified Staff">Any Qualified Staff</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="b-shift" className="field-label">Shift duration</label>
                        <select
                          id="b-shift"
                          value={formData.shiftDuration}
                          onChange={e => setFormData({ ...formData, shiftDuration: e.target.value })}
                          className="field !px-3 !text-[13px]"
                        >
                          <option value="24 Hours Shift">24 Hours (Full Time)</option>
                          <option value="12 Hours Day Shift">12 Hours (Day)</option>
                          <option value="12 Hours Night Shift">12 Hours (Night)</option>
                          <option value="Per Visit Procedure">Per Visit (Procedure)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div>
                    <label htmlFor="b-notes" className="field-label">Medical condition / address notes</label>
                    <textarea
                      id="b-notes"
                      rows={2}
                      placeholder="Patient age, condition, or address details..."
                      value={formData.notes}
                      onChange={e => setFormData({ ...formData, notes: e.target.value })}
                      className="field resize-none"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-full !py-4">
                    Send request on WhatsApp
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
