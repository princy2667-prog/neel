import React from 'react';
import { Plus } from 'lucide-react';
import { SURAT_SEARCH_PHRASES } from '../data/medicareData';

/** Slow, quiet ribbon of what HealthMitra Medicare offers in Surat. */
export default function ServiceMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {SURAT_SEARCH_PHRASES.map((phrase) => (
        <li key={phrase} className="flex items-center whitespace-nowrap">
          <span className="text-sm font-medium text-muted px-7">{phrase}</span>
          <Plus className="w-3.5 h-3.5 text-ink/40" strokeWidth={2} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Home healthcare services available in Surat" className="border-y border-line bg-paper">
      <div className="fade-x overflow-hidden py-4">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}
