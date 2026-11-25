import React from 'react';
import { motion } from 'framer-motion';
import {
  Bandage, Syringe, FileSpreadsheet, Clock, UserPlus,
  TestTube, Sparkles, Dumbbell, ArrowRight, FlaskConical,
} from 'lucide-react';
import { PROCEDURES_DATA } from '../data/medicareData';
import SectionHeading from './SectionHeading';

const iconMap: Record<string, React.ElementType> = {
  Bandage,
  Syringe,
  FileSpreadsheet,
  Clock,
  UserPlus,
  TestTube,
  Sparkles,
  Dumbbell,
};

interface ProceduresProps {
  onOpenBookingWithProcedure: (procedureTitle: string) => void;
}

const COLS = 'md:grid-cols-[5rem_minmax(0,2fr)_minmax(0,1fr)_9rem_10rem]';

export default function Procedures({ onOpenBookingWithProcedure }: ProceduresProps) {
  return (
    <section id="procedures" className="py-20 lg:py-28 bg-surface border-b-[3px] border-ink relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          icon={FlaskConical}
          eyebrow="Clinical nursing checklist"
          title="Professional Medical Support at Home"
          highlight="in Surat"
          subtitle="Injections, dressings, catheter care, blood tests and physiotherapy at home in Surat — performed safely by qualified nurses and visiting doctors."
        />

        {/* Lab-report style table */}
        <div className="border-[3px] border-ink shadow-brut-lg bg-surface">
          <div className={`hidden md:grid ${COLS} bg-sig-navy text-sig-sky font-mono text-[11px] font-bold uppercase tracking-wider`}>
            <div className="px-4 py-3">ID</div>
            <div className="px-4 py-3">Procedure</div>
            <div className="px-4 py-3">Category</div>
            <div className="px-4 py-3">Duration</div>
            <div className="px-4 py-3">Action</div>
          </div>

          {PROCEDURES_DATA.map((proc, index) => {
            const IconComp = iconMap[proc.iconName] || Syringe;

            return (
              <motion.div
                key={proc.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: index * 0.03, ease: [0.7, 0, 0.2, 1] }}
                onClick={() => onOpenBookingWithProcedure(proc.title)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenBookingWithProcedure(proc.title);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Book ${proc.title}`}
                className={`group grid grid-cols-1 ${COLS} items-center border-t-[3px] md:border-t-0 md:border-b-[3px] last:border-b-0 border-ink first:border-t-0 cursor-pointer hover:bg-sig-sky hover:text-sig-navy transition-colors`}
              >
                <div className="px-4 pt-4 md:py-5 font-mono text-sm font-bold md:border-r-2 border-ink md:h-full flex items-center">
                  P-{String(index + 1).padStart(2, '0')}
                </div>

                <div className="px-4 py-3 md:py-5 flex items-start gap-3 md:border-r-2 border-ink md:h-full">
                  <span className="grid place-items-center w-10 h-10 shrink-0 border-2 border-ink bg-sig-white text-sig-navy transition-transform group-hover:rotate-6">
                    <IconComp className="w-5 h-5" strokeWidth={2.5} />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold leading-tight">{proc.title}</h3>
                    <p className="text-xs sm:text-sm opacity-75 mt-1 leading-relaxed">{proc.desc}</p>
                  </div>
                </div>

                <div className="px-4 pb-1 md:py-5 md:border-r-2 border-ink md:h-full flex items-center">
                  <span className="border-2 border-current px-2 py-0.5 font-mono text-[11px] font-bold uppercase">{proc.category}</span>
                </div>

                <div className="px-4 py-1 md:py-5 md:border-r-2 border-ink md:h-full flex items-center gap-2 font-mono text-xs font-bold uppercase">
                  <Clock className="w-4 h-4" strokeWidth={3} />
                  {proc.time}
                </div>

                <div className="px-4 pb-4 pt-2 md:py-5 flex items-center gap-2 font-mono text-xs font-bold uppercase">
                  Book visit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" strokeWidth={3} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
