import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Part of the title rendered on a sky-blue highlighter strip. */
  highlight?: string;
  subtitle?: string;
  icon?: LucideIcon;
  /** Section number shown as "[01]" in the mono index tag. */
  index?: string;
  /** `dark` is for sections that sit on a black background. */
  tone?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  icon: Icon,
  index,
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const dark = tone === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, x: -36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: [0.7, 0, 0.2, 1] }}
      className={`mb-12 lg:mb-16 ${className}`}
    >
      <div className="flex items-center gap-3 mb-6">
        {index && (
          <span
            className={`font-mono text-xs font-bold px-2.5 py-1.5 border-2 ${
              dark ? 'bg-sig-sky text-sig-navy border-sig-white' : 'bg-sig-navy text-sig-sky border-ink'
            }`}
          >
            [{index}]
          </span>
        )}
        <span className="brut-tag">
          {Icon && <Icon className="w-3.5 h-3.5" />}
          {eyebrow}
        </span>
        <span className={`hidden sm:block h-[3px] flex-1 ${dark ? 'bg-sig-white' : 'bg-ink'}`} />
      </div>

      <h2
        className={`text-4xl sm:text-5xl lg:text-7xl font-bold max-w-5xl ${
          dark ? 'text-sig-white' : 'text-ink'
        }`}
      >
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-gradient">{highlight}</span>
          </>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl border-l-[6px] border-sig-azure pl-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-sig-white/80' : 'text-ink/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
