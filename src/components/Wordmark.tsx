import React from 'react';

/** HealthMitra Medicare logo: rounded cross mark + name. Follows the surrounding text colour. */
export default function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 text-ink ${className}`}>
      <svg viewBox="0 0 40 40" className="w-10 h-10 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="11" fill="currentColor" />
        <path d="M16 8H24V16H32V24H24V32H16V24H8V16H16Z" className="fill-paper" />
      </svg>
      <span className="leading-none text-left">
        <span className="block text-[1.15rem] font-semibold tracking-tight">HealthMitra</span>
        <span className="block mt-1 text-[9px] font-medium uppercase tracking-[0.34em] text-muted">Medicare</span>
      </span>
    </span>
  );
}
