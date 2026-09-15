import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Clock, Bandage, Syringe, FileSpreadsheet, 
  UserPlus, TestTube, Sparkles, Dumbbell, ArrowRight 
} from 'lucide-react';
import { PROCEDURES_DATA } from '../data/medicareData';

const iconMap: Record<string, React.ElementType> = {
  Bandage,
  Syringe,
  FileSpreadsheet,
  Clock,
  UserPlus,
  TestTube,
  Sparkles,
  Dumbbell
};

interface ProceduresProps {
  onOpenBookingWithProcedure: (procedureTitle: string) => void;
}

export default function Procedures({ onOpenBookingWithProcedure }: ProceduresProps) {
  return (
    <section id="procedures" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-200">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
            <span>Clinical Nursing Checklist</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-900 tracking-tight mb-4">
            Professional Medical Support At Home
          </h2>
          <p className="text-lg text-slate-600 font-normal">
            Certified procedures performed safely in your home environment by qualified nurses and visiting doctors.
          </p>
        </div>

        {/* Interactive Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCEDURES_DATA.map((proc, index) => {
            const IconComp = iconMap[proc.iconName] || Syringe;

            return (
              <motion.div
                key={proc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => onOpenBookingWithProcedure(proc.title)}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-brand-600 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                {/* Left Blue Accent Line on Hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-brand-50 text-brand-700 border border-slate-200 group-hover:border-brand-200 flex items-center justify-center transition-all shadow-sm">
                      <IconComp className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                    </div>

                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-amber-500" />
                      <span>{proc.time}</span>
                    </span>
                  </div>

                  <div className="flex items-start space-x-2 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                    <h3 className="text-lg font-bold text-brand-900 group-hover:text-brand-700 transition-colors">
                      {proc.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 mb-4 pl-7">
                    {proc.desc}
                  </p>
                </div>

                <div className="pl-7 flex items-center text-xs font-bold text-brand-700 group-hover:text-cyan-600 space-x-1 pt-2">
                  <span>Book Procedure Visit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
