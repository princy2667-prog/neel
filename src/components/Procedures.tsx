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

const COLS = 'md:grid-cols-[3.5rem_minmax(0,2.2fr)_minmax(0,1fr)_9rem_8rem]';

export default function Procedures({ onOpenBookingWithProcedure }: ProceduresProps) {
  return (
    <section id="procedures" className="py-20 lg:py-28 bg-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          icon={FlaskConical}
          eyebrow="Clinical nursing checklist"
          title="Professional Medical Support at Home"
          highlight="in Surat"
          subtitle="Injections, dressings, catheter care, blood tests and physiotherapy at home in Surat — performed safely by qualified nurses and visiting doctors."
        />

        <div className="rounded-3xl border border-line bg-card overflow-hidden">
          <div className={`hidden md:grid ${COLS} gap-4 px-6 py-4 border-b border-line text-xs font-medium text-muted`}>
            <div>No.</div>
            <div>Procedure</div>
            <div>Category</div>
            <div>Duration</div>
            <div className="text-right">Action</div>
          </div>

          {PROCEDURES_DATA.map((proc, index) => {
            const IconComp = iconMap[proc.iconName] || Syringe;
            return (
              <motion.div
                key={proc.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: Math.min(index, 4) * 0.04, ease: [0.22, 1, 0.36, 1] }}
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
                className={`group grid grid-cols-1 ${COLS} gap-x-4 gap-y-2 items-center px-5 sm:px-6 py-5 border-b border-line last:border-b-0 cursor-pointer hover:bg-surface transition-colors duration-300`}
              >
                <div className="hidden md:block text-sm font-medium tabular-nums text-muted">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex items-start gap-4">
                  <span className="icon-chip w-11 h-11">
                    <IconComp className="w-5 h-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-[1.05rem] font-semibold leading-tight">{proc.title}</h3>
                    <p className="text-sm text-muted mt-1 leading-relaxed">{proc.desc}</p>
                  </div>
                </div>

                <div className="pl-[3.75rem] md:pl-0">
                  <span className="pill">{proc.category}</span>
                </div>

                <div className="pl-[3.75rem] md:pl-0 flex items-center gap-2 text-sm text-muted">
                  <Clock className="w-4 h-4" strokeWidth={1.75} />
                  {proc.time}
                </div>

                <div className="pl-[3.75rem] md:pl-0 flex md:justify-end items-center gap-2 text-sm font-medium">
                  Book visit
                  <span className="grid place-items-center w-8 h-8 rounded-full border border-line transition-all duration-300 group-hover:bg-ink group-hover:text-paper group-hover:border-ink">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
