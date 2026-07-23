import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe2, ShieldCheck, Zap, Award, Users, FileText, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

interface InfoSectionModalProps {
  activeNav: NavItem;
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const InfoSectionModal: React.FC<InfoSectionModalProps> = ({
  activeNav,
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  if (!isOpen || activeNav === 'Home') return null;

  const getContent = () => {
    switch (activeNav) {
      case 'About':
        return {
          title: 'About NexCargo',
          subtitle: 'Architecting the next generation of global supply chain networks',
          icon: Globe2,
          body: (
            <div className="space-y-6">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Founded with a mission to eliminate friction from global commerce, NexCargo operates an integrated air, ocean, and ground fleet powered by real-time telematics and automated customs clearance protocols.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/10">
                  <Zap className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="font-bold text-white text-base">Autonomous Routing</div>
                  <div className="text-xs text-slate-300 mt-1">AI weather & flight path optimization for minimum fuel consumption and rapid transit.</div>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-amber-400 mb-2" />
                  <div className="font-bold text-white text-base">100% Guaranteed SLA</div>
                  <div className="text-xs text-slate-300 mt-1">End-to-end cargo insurance and temperature-controlled cold chain assurance.</div>
                </div>
              </div>
            </div>
          ),
        };

      case 'Services':
        return {
          title: 'Our Global Logistics Solutions',
          subtitle: 'End-to-end cargo freight, customs, and warehousing services',
          icon: Award,
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Air Freight Express', desc: 'Guaranteed space on daily cargo jets connecting 150+ international air hubs.' },
                { name: 'Ocean Logistics (FCL/LCL)', desc: 'Cost-optimized deep-sea container shipping for heavy industrial freight.' },
                { name: 'Automated Customs Brokerage', desc: 'Pre-cleared duty filing and tariff management with zero paperwork delays.' },
                { name: 'Smart Climate Warehousing', desc: '24/7 RFID-monitored distribution facilities across Europe, Asia, and Americas.' },
              ].map((s, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-white/10 p-5 rounded-2xl hover:border-amber-400/50 transition-colors">
                  <div className="font-bold text-white text-base mb-1 text-amber-300">{s.name}</div>
                  <div className="text-xs text-slate-300 leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          ),
        };

      case 'Pricing':
        return {
          title: 'Transparent Freight Rates',
          subtitle: 'No hidden surcharges. Predictable pricing for every cargo scale.',
          icon: Zap,
          body: (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { tier: 'Express Air', price: '$4.20/kg', desc: '1-2 Days • Guaranteed Capacity • Real-time GPS' },
                { tier: 'Standard Ocean', price: '$1.10/kg', desc: '10-15 Days • Bulk Container • Eco-friendly' },
                { tier: 'Customs & Clearance', price: '$150 Flat', desc: 'Automated Filing • Duty Estimator • Agent Support' },
              ].map((p, idx) => (
                <div key={idx} className="bg-slate-900/70 border border-white/15 p-5 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">{p.tier}</div>
                    <div className="text-2xl font-black text-white mt-2 mb-1">{p.price}</div>
                    <div className="text-xs text-slate-300 leading-relaxed">{p.desc}</div>
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenQuote();
                    }}
                    className="mt-4 w-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs py-2 rounded-xl border border-amber-500/30 transition-colors"
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          ),
        };

      case 'Careers':
        return {
          title: 'Join the NexCargo Team',
          subtitle: 'Shape the future of global commerce with technology and logistics leaders',
          icon: Users,
          body: (
            <div className="space-y-3">
              {[
                { title: 'Senior Cargo Operations Director', dept: 'Operations • Frankfurt, DE' },
                { title: 'Air Freight Logistics Coordinator', dept: 'Supply Chain • London, UK' },
                { title: 'Lead Telematics Systems Engineer', dept: 'Engineering • Remote' },
              ].map((job, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-white/10 p-4 rounded-2xl flex items-center justify-between hover:bg-slate-900/90 transition-colors">
                  <div>
                    <div className="font-bold text-white text-sm">{job.title}</div>
                    <div className="text-xs text-amber-400">{job.dept}</div>
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                    Apply
                  </button>
                </div>
              ))}
            </div>
          ),
        };

      case 'Blog':
        return {
          title: 'Supply Chain Insights & Updates',
          subtitle: 'Analysis and market intelligence from our logistics experts',
          icon: FileText,
          body: (
            <div className="space-y-4">
              {[
                { date: 'July 2026', title: 'Navigating Sustainable Aviation Fuel (SAF) Mandates in 2026 Cargo Routes' },
                { date: 'June 2026', title: 'How Automated Customs AI Shortened Port Clearance Times by 64%' },
                { date: 'May 2026', title: 'Transatlantic Air Freight Demand Surges for High-Tech Components' },
              ].map((article, idx) => (
                <div key={idx} className="bg-slate-900/60 border border-white/10 p-4 rounded-2xl hover:border-amber-400/40 transition-colors cursor-pointer group">
                  <div className="text-xs text-amber-400 font-mono mb-1">{article.date}</div>
                  <div className="font-bold text-white text-sm sm:text-base group-hover:text-amber-300 transition-colors flex items-center justify-between">
                    {article.title}
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          ),
        };

      default:
        return null;
    }
  };

  const content = getContent();
  if (!content) return null;

  const Icon = content.icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0d2a50] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white"
        >
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">{content.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300">{content.subtitle}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div>{content.body}</div>

          <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
            <button
              onClick={onOpenQuote}
              className="bg-[#f5821f] hover:bg-[#e07212] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition-colors"
            >
              Get a Quote
            </button>
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
