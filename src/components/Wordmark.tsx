import React from 'react';

/** Text logo for HealthMitra Medicare: medical cross + stacked name. */
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid place-items-center w-9 h-9 sm:w-10 sm:h-10 bg-sig-azure border-2 border-sig-navy text-sig-navy shrink-0"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
          <path d="M9 2h6v7h7v6h-7v7H9v-7H2V9h7z" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none text-left">
        <span className="block text-lg sm:text-xl font-bold uppercase tracking-tight text-sig-navy">
          HealthMitra
        </span>
        <span className="block mt-1 font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-sig-navy/70">
          Medicare
        </span>
      </span>
    </span>
  );
}
