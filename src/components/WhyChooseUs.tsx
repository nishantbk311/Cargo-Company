import { Cpu, Globe, Handshake, Headset, Radio, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import portCranesImg from '../assets/images/port_cranes_dusk_1784786029907.jpg';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Radio,
      title: 'Real-Time Tracking',
      description: 'Monitor your shipments 24/7 with our advanced GPS tracking system.',
    },
    {
      icon: ShieldCheck,
      title: 'Customs Expertise',
      description: 'Navigate complex regulations with our experienced customs brokerage team.',
    },
    {
      icon: Headset,
      title: '24/7 Support',
      description: 'Dedicated account managers available around the clock for any queries.',
    },
  ];

  return (
    <section className="w-full bg-[#062143] py-16 sm:py-20 lg:py-24 text-white">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
        {/* Left Column: Text & Feature List */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Why the World&apos;s <br className="hidden sm:block" />
            Leading Brands <br className="hidden sm:block" />
            Choose NexCargo
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-10 max-w-xl">
            We combine cutting-edge technology with human expertise to deliver logistics solutions that drive your business forward. Our global network ensures your cargo moves efficiently, securely, and sustainably.
          </p>

          {/* 3 Features */}
          <div className="space-y-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="p-3 rounded-2xl bg-[#0e3b72] border border-white/10 text-amber-400 shrink-0 group-hover:bg-[#13498b] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Image & Floating White Badge Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/15 aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3.5]"
        >
          {/* Port Cranes Dusk Image */}
          <img
            src={portCranesImg}
            alt="Port container cranes at dusk sunset"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />

          {/* Floating White Card Overlay at Bottom Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border border-slate-100 min-w-[210px] space-y-3.5 z-10"
          >
            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0c2340]">
              <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <Globe className="w-4 h-4" />
              </div>
              <span>Global Network</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0c2340]">
              <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <Cpu className="w-4 h-4" />
              </div>
              <span>Technology-Driven</span>
            </div>

            <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#0c2340]">
              <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
                <Handshake className="w-4 h-4" />
              </div>
              <span>Dedicated Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
