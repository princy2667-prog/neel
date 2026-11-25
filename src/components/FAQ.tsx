import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_DATA, COMPANY_INFO } from '../data/medicareData';
import SectionHeading from './SectionHeading';

interface FAQProps {
  onOpenBooking: () => void;
}

export default function FAQ({ onOpenBooking }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface border-b-[3px] border-ink relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQPage structured data — generated from the same list shown below */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQS_DATA.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            }),
          }}
        />

        <SectionHeading
          index="09"
          icon={HelpCircle}
          eyebrow="Got questions?"
          title="Home Nursing in Surat –"
          highlight="Your Questions Answered"
          subtitle="Everything you need to know about booking a home nurse or caretaker for your loved ones in Surat."
        />

        <div className="grid gap-4">
          {FAQS_DATA.map((faq, i) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: Math.min(i, 5) * 0.04 }}
                className={`border-[3px] border-ink transition-colors ${isOpen ? 'bg-sig-sky text-sig-navy shadow-brut' : 'bg-paper shadow-brut-sm'}`}
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${faq.id}-panel`}
                  className="w-full p-4 sm:p-5 text-left flex items-center gap-4"
                >
                  <span className="font-mono text-sm font-bold opacity-60 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1 text-base sm:text-lg font-bold leading-snug">{faq.question}</span>
                  <span
                    className={`grid place-items-center w-9 h-9 shrink-0 border-[3px] border-ink ${
                      isOpen ? 'bg-sig-navy text-sig-sky' : 'bg-sig-sky text-sig-navy'
                    }`}
                  >
                    {isOpen ? <Minus className="w-5 h-5" strokeWidth={4} /> : <Plus className="w-5 h-5" strokeWidth={4} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${faq.id}-panel`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="mx-4 sm:mx-5 mb-5 pt-4 border-t-[3px] border-sig-navy text-sm sm:text-base leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="on-dark mt-14 border-[3px] border-ink shadow-[8px_8px_0_0_#3b82f6] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold uppercase leading-none mb-2">Still have custom questions?</h3>
            <p className="font-mono text-sm text-sig-white/75">Speak directly with Neel Rathod or our senior nurse coordinator.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a href={`tel:${COMPANY_INFO.phone}`} className="brut-btn">
              <PhoneCall className="w-4 h-4" strokeWidth={3} /> Call +91 {COMPANY_INFO.phone}
            </a>
            <button onClick={onOpenBooking} className="brut-btn brut-btn--paper">
              Book care
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
