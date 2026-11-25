import React from 'react';

/** The HealthMitra Medicare logo: cross mark + stacked name (matches public/assets/healthmitra-logo.svg). */
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 40" className="w-10 h-10 sm:w-11 sm:h-11 shrink-0" aria-hidden="true">
        <rect width="40" height="40" fill="#3b82f6" />
        <path d="M17 9H27V17H35V27H27V35H17V27H9V17H17Z" fill="#eaf2ff" />
        <path d="M15 7H25V15H33V25H25V33H15V25H7V15H15Z" fill="#0a1f5c" />
        <rect x="1.5" y="1.5" width="37" height="37" fill="none" stroke="#0a1f5c" strokeWidth="3" />
      </svg>
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
