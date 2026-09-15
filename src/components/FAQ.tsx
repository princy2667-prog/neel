import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_DATA, COMPANY_INFO } from '../data/medicareData';

interface FAQProps {
  onOpenBooking: () => void;
}

export default function FAQ({ onOpenBooking }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-600" />
            <span>Got Questions?</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Everything you need to know about setting up home nursing and caretaker support for your loved ones.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-brand-900">
                    {faq.question}
                  </span>

                  <div className={`w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-brand-700 transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? 'rotate-180 bg-brand-700 text-white border-brand-700' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/40 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-gradient-to-r from-brand-900 to-brand-700 text-white rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold mb-1">Still Have Custom Questions?</h3>
            <p className="text-sm text-slate-300">Speak directly with Neel Rathod or our senior nurse coordinator.</p>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-6 py-3 rounded-full bg-cyan-400 text-brand-950 font-extrabold text-sm hover:bg-cyan-300 transition-colors flex items-center space-x-2 flex-shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call +91 {COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
