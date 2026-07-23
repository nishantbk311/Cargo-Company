import { MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import heroAirplaneImg from '../assets/images/nexcargo_hero_airplane_1784785017066.jpg';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onOpenTracking: (trackingNum?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuote,
  onOpenTracking,
}) => {
  return (
    <section className="relative w-full max-w-8xl mx-auto px-6 md:px-12 lg:px-16 pt-6 md:pt-10 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      {/* Left Column: Headline & Hero Content */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-6 flex flex-col justify-center pr-0 lg:pr-4"
      >
        {/* Trusted Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#104b2b]/40 border border-[#22c55e]/40 text-[#4ade80] text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase mb-7 w-fit backdrop-blur-sm shadow-inner">
          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse"></span>
          TRUSTED BY 5,000+ COMPANIES WORLDWIDE
        </div>

        {/* Main Heading with Stylized Orange Swoosh */}
        <div className="relative mb-6">
          <h1 className="text-5xl sm:text-6xl xl:text-[72px] font-extrabold text-white tracking-tight leading-[1.08]">
            Move Cargo <br />
            Smarter, Faster, <br />
            Further
          </h1>
          {/* Custom Stylized Yellow/Orange Swoosh Line */}
          <div className="mt-2 w-full max-w-[460px]">
            <svg 
              viewBox="0 0 460 22" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full text-amber-500 overflow-visible"
            >
              <path 
                d="M3 15C110 5 240 22 457 7" 
                stroke="#f5821f" 
                strokeWidth="7" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
        </div>

        {/* Paragraph Description */}
        <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-9">
          Experience global logistics with precision. NexCargo connects you to 150+ countries with advanced tracking and proprietary technology.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <button
            onClick={onOpenQuote}
            className="bg-[#f5821f] hover:bg-[#e07212] active:bg-[#c9630c] text-white text-base font-bold px-8 py-3.5 rounded-xl shadow-xl shadow-orange-600/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            Request a Quote
          </button>
          
          <button
            onClick={() => onOpenTracking('NX-8842')}
            className="border-2 border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 active:bg-white/15 text-white text-base font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 cursor-pointer backdrop-blur-sm"
          >
            Track Shipment
          </button>
        </div>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-white/10 mb-8" />

        {/* Bottom Statistics */}
        <div className="grid grid-cols-3 gap-6 sm:gap-10">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              150+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Countries
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              50K+
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              Deliveries/Month
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              99.8%
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
              On-Time Rate
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Column: Hero Airplane Visual & Floating Glass Widgets */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="lg:col-span-6 relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.5] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl shadow-slate-950/80 border border-white/15 group"
      >
        {/* Airplane Image */}
        <img
          src={heroAirplaneImg}
          alt="NexCargo Jet flying over golden glowing city grid at sunset dusk"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Subtle Gradient Overlays for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none" />

        {/* Floating Glass Widget 1: Live Tracking (Middle Left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          onClick={() => onOpenTracking('NX-8842')}
          className="absolute top-[28%] left-[5%] sm:left-[8%] bg-slate-900/65 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl w-[220px] sm:w-[250px] cursor-pointer hover:bg-slate-900/80 transition-all hover:scale-105 duration-300 group/widget"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-[#f5821f]/20 p-2.5 rounded-xl border border-[#f5821f]/40 text-[#f5821f] flex items-center justify-center">
              <MapPin className="w-5 h-5 fill-[#f5821f]/30" />
            </div>
            <div>
              <div className="text-sm font-bold text-white group-hover/widget:text-amber-400 transition-colors">
                Live Tracking
              </div>
              <div className="text-xs text-slate-300 font-medium">
                Shipment #NX-8842
              </div>
            </div>
          </div>
          {/* Progress bar */}
          <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden border border-white/10">
            <div className="bg-gradient-to-r from-amber-500 to-orange-400 h-full w-[42%] rounded-full shadow-lg shadow-orange-500/50" />
          </div>
        </motion.div>

        {/* Floating Glass Widget 2: Next Delivery (Bottom Right) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={() => onOpenTracking('NX-8842')}
          className="absolute bottom-[6%] right-[5%] sm:right-[8%] bg-slate-900/65 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl w-[210px] sm:w-[240px] cursor-pointer hover:bg-slate-900/80 transition-all hover:scale-105 duration-300 group/widget"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-white group-hover/widget:text-amber-400 transition-colors">
              Next Delivery
            </span>
            <span className="bg-[#f5821f]/30 border border-[#f5821f]/50 text-amber-300 text-[11px] font-bold px-2.5 py-0.5 rounded-md uppercase tracking-wider">
              Express
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
            2h 34m
          </div>
          <div className="text-xs text-slate-300 font-medium">
            Frankfurt → London
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
