import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/medicareData';

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Branding */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="RIYA MEDICARE"
                className="h-12 w-auto object-contain bg-white/90 p-1.5 rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = COMPANY_INFO.symbolUrl;
                }}
              />
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "Service at your doorstep. Extraordinary people.... Extraordinary Care....!"
            </p>

            <div className="text-xs text-slate-400 space-y-1 pt-2">
              <div><strong>Managing Director:</strong> {COMPANY_INFO.managingDirector}</div>
              <div><strong>Chief Accountant:</strong> {COMPANY_INFO.accountant}</div>
              <div className="text-cyan-400 font-semibold pt-1">Serving Surat & Ahmedabad @ 24 Hours</div>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-brand-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#procedures" className="hover:text-cyan-400 transition-colors">Procedures</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-cyan-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-brand-800 pb-2">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-cyan-400 transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-white font-bold text-base mb-4 border-b border-brand-800 pb-2">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>+91 {COMPANY_INFO.phone}</span>
              </a>

              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start space-x-2 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Surat | Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © 2026 Riya Medicare. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-1">
            <span>Delivered with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for families across Gujarat</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
