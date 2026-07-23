import React, { useState } from 'react';
import { motion } from 'motion/react';

interface StepItem {
  number: number;
  label: string;
  title: string;
  description: string;
}

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: StepItem[] = [
    {
      number: 1,
      label: 'Step 1',
      title: 'Request Quote',
      description: 'Tell us about your shipment needs and receive a competitive quote within minutes.',
    },
    {
      number: 2,
      label: 'Step 2',
      title: 'Book Shipment',
      description: 'Confirm your booking and schedule pickup. We handle all documentation and customs.',
    },
    {
      number: 3,
      label: 'Step 3',
      title: 'Real-Time Tracking',
      description: 'Track your cargo in real-time as it moves across our global network.',
    },
    {
      number: 4,
      label: 'Step 4',
      title: 'Delivered',
      description: 'Your cargo arrives safely at its destination with proof of delivery.',
    },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24 border-b border-slate-200">
      <div className="w-full max-w-4xl mx-auto px-6 sm:px-12">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2340] tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
            A streamlined process designed to get your cargo moving with minimal friction.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-16">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[23px] sm:left-[51px] top-6 bottom-12 w-[2px] bg-slate-200" />

          {/* Steps List */}
          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === step.number;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  onClick={() => setActiveStep(step.number)}
                  className="relative flex items-start gap-6 sm:gap-10 group cursor-pointer"
                >
                  {/* Number Circle Node */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[59px] top-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg transition-all duration-300 z-10 shrink-0 ${
                      isSelected
                        ? 'bg-[#0a2f5c] text-white ring-4 ring-blue-900/10 shadow-lg scale-105'
                        : 'bg-white border-2 border-[#1e40af]/30 text-[#1e40af] hover:border-[#1e40af]'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Card Content Box */}
                  <div
                    className={`w-full p-6 sm:p-8 rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#f8fafc] border-2 border-[#f5821f]/60 shadow-md'
                        : 'bg-[#f8fafc] border border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-extrabold text-[#f5821f] uppercase tracking-wider mb-2">
                      {step.label}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0c2340] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
