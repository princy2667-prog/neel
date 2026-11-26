import React from 'react';
import { PhoneCall, Moon, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/medicareData';
import Reveal from './Reveal';

interface TwentyFourSevenProps {
  onOpenBooking: () => void;
}

const TICKS = Array.from({ length: 48 }, (_, i) => i);

export default function TwentyFourSevenCare({ onOpenBooking }: TwentyFourSevenProps) {
  return (
    <section id="care-24-7" className="band py-20 lg:py-28 relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Dial */}
          <Reveal className="lg:col-span-5 w-full max-w-md mx-auto">
            <div className="relative aspect-square">
              {/* Slow rotating tick ring */}
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow" aria-hidden="true">
                {TICKS.map((i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="6"
                    x2="100"
                    y2={i % 4 === 0 ? 17 : 12}
                    stroke="currentColor"
                    strokeOpacity={i % 4 === 0 ? 0.7 : 0.28}
                    strokeWidth={i % 4 === 0 ? 1.4 : 1}
                    transform={`rotate(${(i * 360) / TICKS.length} 100 100)`}
                  />
                ))}
              </svg>

              <div className="absolute inset-[11%] rounded-full border border-line" />
              <div className="absolute inset-[11%] rounded-full border border-ink/30 animate-pulse-ring" aria-hidden="true" />

              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-[5.5rem] sm:text-[7rem] font-semibold leading-none tracking-tighter">24/7</div>
                  <div className="mt-2 text-sm text-muted">Hours of care</div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-ink animate-soft-pulse" />
                    Surat &amp; Ahmedabad
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <span className="eyebrow !bg-transparent mb-6">
              <Moon className="w-3.5 h-3.5" /> Round-the-clock nursing
            </span>
            <h2 className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.4rem] font-semibold mb-6 text-balance">
              24 Hour Nurse &amp; Caretaker in Surat — <span className="font-serif italic font-normal">Care Never Stops.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-2xl">
              Round-the-clock nursing and caretaker services whenever your family needs professional support.
              Whether it's night-shift vitals tracking or 24-hour live-in patient support in Surat, HealthMitra Medicare
              is by your side.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-9">
              {[
                ['12h & 24h shifts', 'Flexible shift options suited to short-term recovery or continuous care.'],
                ['Emergency escalation', '24/7 supervisor support and immediate back-up staff deployment.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-line bg-card/60 p-5 transition-colors hover:bg-card">
                  <h4 className="text-sm font-semibold mb-1.5">{title}</h4>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={onOpenBooking} className="btn btn-primary !py-3.5 !px-7">
                Request 24/7 staff deployment
                <ArrowRight className="btn-arrow w-4 h-4" />
              </button>
              <a href={`tel:${COMPANY_INFO.phone}`} className="btn btn-outline !py-3.5 !px-7">
                <PhoneCall className="w-4 h-4" /> Call +91 {COMPANY_INFO.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
