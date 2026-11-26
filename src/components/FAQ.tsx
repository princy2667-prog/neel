import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, HelpCircle, PhoneCall } from 'lucide-react';
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
    <section id="faq" className="py-20 lg:py-28 bg-paper relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky left column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <SectionHeading
              index="09"
              icon={HelpCircle}
              eyebrow="Got questions?"
              title="Home Nursing in Surat –"
              highlight="Your Questions Answered"
              subtitle="Everything you need to know about booking a home nurse or caretaker for your loved ones in Surat."
              className="!mb-8"
            />

            <div className="band rounded-3xl p-6 sm:p-7">
              <h3 className="text-xl font-semibold mb-1.5">Still have custom questions?</h3>
              <p className="text-sm text-muted mb-6">Speak directly with Neel Rathod or our senior nurse coordinator.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-primary">
                  <PhoneCall className="w-4 h-4" /> Call +91 {COMPANY_INFO.phone}
                </a>
                <button onClick={onOpenBooking} className="btn btn-outline">
                  Book care
                </button>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 border-t border-line">
            {FAQS_DATA.map((faq, i) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.6, delay: Math.min(i, 5) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-line"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    className="group w-full py-5 sm:py-6 text-left flex items-start gap-4 sm:gap-5"
                  >
                    <span className="text-xs font-medium tabular-nums text-muted pt-1.5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 text-base sm:text-lg font-medium leading-snug transition-colors ${
                        isOpen ? 'text-ink' : 'text-ink/80 group-hover:text-ink'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`grid place-items-center w-8 h-8 shrink-0 rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'bg-ink text-paper border-ink rotate-45'
                          : 'border-line text-ink group-hover:border-ink/40'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`${faq.id}-panel`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pl-8 sm:pl-10 pr-12 pb-6 text-sm sm:text-base leading-relaxed text-muted">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
