import React from 'react';
import { SURAT_SEARCH_PHRASES } from '../data/medicareData';

/** Black "caution tape" ribbon of what Riya Medicare offers in Surat. */
export default function ServiceMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {SURAT_SEARCH_PHRASES.map((phrase) => (
        <li key={phrase} className="flex items-center whitespace-nowrap">
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-sig-sky px-6">
            {phrase}
          </span>
          <span className="text-sig-azure text-2xl font-bold leading-none" aria-hidden="true">✚</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Home healthcare services available in Surat" className="bg-sig-navy border-b-[3px] border-sig-navy">
      <div className="hazard !border-x-0" />
      <div className="overflow-hidden py-3.5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
      <div className="hazard !border-x-0" />
    </section>
  );
}
