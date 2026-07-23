import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface CtaSectionProps {
  onGetStarted?: () => void;
  onTalkToExpert?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onGetStarted,
  onTalkToExpert,
}) => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-r from-[#033b82] via-[#09479e] to-[#f5821f] py-20 sm:py-24 lg:py-28 text-white">
      {/* Background Subtle Pattern Mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="cta-grid-pattern"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M 30 0 L 0 30 M 60 30 L 30 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5 leading-tight">
            Ready to Optimize Your Supply Chain?
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of companies that trust NexCargo for their global logistics needs. Get started today.
          </p>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Get Started Today Button */}
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/80 bg-white/10 hover:bg-white hover:text-[#0c2340] text-white font-bold text-base transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer backdrop-blur-sm"
            >
              Get Started Today
            </button>

            {/* Talk to an Expert Link */}
            <button
              onClick={onTalkToExpert || onGetStarted}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white hover:text-white/80 font-bold text-base transition-colors group cursor-pointer"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
