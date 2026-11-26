import React from 'react';
import type { LucideIcon } from 'lucide-react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Rendered in the italic serif accent face. */
  highlight?: string;
  subtitle?: string;
  icon?: LucideIcon;
  /** Section number, e.g. "01". */
  index?: string;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  icon: Icon,
  index,
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`mb-12 lg:mb-16 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        {index && <span className="text-xs font-medium tabular-nums text-muted">{index}</span>}
        {index && <span className="h-px w-8 bg-line" aria-hidden="true" />}
        <span className="eyebrow">
          {Icon && <Icon className="w-3.5 h-3.5" strokeWidth={2} />}
          {eyebrow}
        </span>
      </div>

      <h2 className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-[3.5rem] font-semibold max-w-4xl text-balance">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="font-serif italic font-normal">{highlight}</span>
          </>
        )}
      </h2>

      {subtitle && <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-muted">{subtitle}</p>}
    </Reveal>
  );
}
