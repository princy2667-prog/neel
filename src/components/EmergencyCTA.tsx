import React from 'react';
import { Phone, MessageSquareHeart, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';
import Reveal from './Reveal';

export default function EmergencyCTA() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hello HealthMitra Medicare, I need 24/7 Home Nursing / Caretaker assistance in Surat.')}`;

  return (
    <section className="bg-paper pb-20 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="band relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="dot-grid absolute inset-0 opacity-70 pointer-events-none" aria-hidden="true" />
            <div
              className="absolute -right-32 -bottom-32 w-[420px] h-[420px] rounded-full border border-line pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -right-12 -bottom-12 w-[220px] h-[220px] rounded-full border border-line pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <span className="eyebrow !bg-transparent mb-6">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-ink animate-pulse-ring" />
                    <span className="relative w-2 h-2 rounded-full bg-ink" />
                  </span>
                  Helpline · open 24 hours
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.05] text-balance">
                  Need professional care <span className="font-serif italic font-normal">at home?</span>
                </h2>
                <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
                  Our team is ready to understand your needs and help you find the right home nursing or caretaker
                  solution in Surat &amp; Ahmedabad.
                </p>
              </div>

              <div className="lg:col-span-4 grid gap-3">
                <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-primary !py-4 !text-base">
                  <Phone className="w-5 h-5 animate-beat" />
                  Call now: {COMPANY_INFO.phone}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline !py-4 !text-base">
                  <MessageSquareHeart className="w-5 h-5" />
                  WhatsApp us
                </a>
                <div className="flex items-center gap-2 text-xs text-muted pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  Home nursing in Surat &amp; Ahmedabad
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
