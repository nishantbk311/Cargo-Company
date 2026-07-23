import { Check, Globe, Package, Star } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

export const PoweringGlobalTrade: React.FC = () => {
  const stats = [
    {
      icon: Globe,
      iconBg: 'bg-blue-50 text-blue-600',
      number: '150+',
      label: 'Countries Served',
    },
    {
      icon: Package,
      iconBg: 'bg-amber-50 text-amber-600',
      number: '50,000+',
      label: 'Monthly Shipments',
    },
    {
      icon: Check,
      iconBg: 'bg-emerald-50 text-emerald-600',
      number: '99.8%',
      label: 'On-Time Delivery',
    },
    {
      icon: Star,
      iconBg: 'bg-amber-50 text-amber-500 fill-amber-500',
      number: '25+',
      label: 'Years of Excellence',
    },
  ];

  const clientLogos = [
    { name: 'Samsung', logoText: 'SAMSUNG' },
    { name: 'Nike', logoText: 'NIKE' },
    { name: 'Amazon', logoText: 'amazon' },
    { name: 'Rolex', logoText: 'ROLEX' },
    { name: 'BMW', logoText: 'BMW' },
    { name: 'Lufthansa', logoText: 'Lufthansa' },
  ];

  return (
    <section className="w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-24  shadow-inner border-y border-slate-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16"
      >
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2340] tracking-tight mb-4">
            Powering Global Trade
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
            Two decades of excellence connecting businesses across continents with reliable, scalable logistics.
          </p>
        </div>

        {/* 4 Stats Grid with Orange Accent Line */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative pt-6 flex flex-col items-center text-center group">
                {/* Orange Top Accent Border Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#f5821f] rounded-full" />

                {/* Circular Icon Container */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 mt-4 ${item.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 stroke-[2.5]" />
                </div>

                {/* Metric Number */}
                <div className="text-4xl sm:text-4xl xl:text-5xl font-black text-[#0c2340] tracking-tight mb-2">
                  {item.number}
                </div>

                {/* Label */}
                <div className="text-slate-500 text-sm font-semibold tracking-wide">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-slate-100 my-10" />

        {/* Client Logos Section */}
        <div className="text-center">
          <p className="text-[12px] sm:text-[13px] font-extrabold uppercase tracking-widest text-slate-400 mb-8">
            TRUSTED BY INDUSTRY LEADERS WORLDWIDE
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {clientLogos.map((brand, i) => (
              <div
                key={i}
                className="text-slate-700 font-extrabold text-xl sm:text-2xl tracking-tighter uppercase hover:text-[#f5821f] transition-colors cursor-pointer select-none font-sans"
              >
                {brand.logoText}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
