import {
    CalendarCheck,
    Car,
    Check,
    ChevronRight,
    Clock,
    FileCheck2,
    Gem,
    Globe2,
    Laptop,
    MapPin,
    Pill,
    Plus,
    Quote,
    Shield,
    ShieldCheck,
    Truck,
    Utensils,
    X,
    Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface CustomsPageProps {
  onOpenQuote: () => void;
  onOpenTracking?: (trackingNum?: string) => void;
}

export const CustomsPage: React.FC<CustomsPageProps> = ({
  onOpenQuote,
  onOpenTracking,
}) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const customsImg = 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200';
  const borderImg = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200';

  const faqData = [
    {
      question: 'What documents are essential for customs clearance?',
      answer:
        'The core documents required for international trade clearance are the Commercial Invoice, Packing List, Bill of Lading (BOL) or Air Waybill (AWB), Import/Export License (if applicable), and Certificate of Origin.',
    },
    {
      question: 'How long does customs clearance take with NexCargo?',
      answer:
        'Thanks to our pre-filing electronic customs manifest system, standard entry clearance takes less than 4 hours on average upon vessel or aircraft arrival, preventing expensive port storage or demurrage charges.',
    },
    {
      question: 'Can NexCargo help determine accurate HS tariff codes?',
      answer:
        'Yes, our licensed customs brokers conduct automated Harmonized System (HS) code audits to classify your goods accurately, ensuring full legal compliance while identifying duty minimization opportunities.',
    },
    {
      question: 'What is bonded warehousing and how does it benefit my business?',
      answer:
        'Bonded warehousing allows you to store imported cargo in secure facilities without paying duties or taxes until the goods are officially released into domestic commercial circulation or re-exported.',
    },
    {
      question: 'How do you handle customs holds or inspection requests?',
      answer:
        'Our local customs agents are physically present at major border posts and container terminals. In case of an inspection request, we liaise directly with border authorities to expedite physical checks.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#07192f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background Image with Sunset & Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src={customsImg}
            alt="Customs & Compliance Brokerage Desk"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Gradient Overlay: Dark navy on the left fading into a warm sunset glow on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07192f]/98 via-[#0b2447]/85 to-amber-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07192f] via-transparent to-black/30" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-8xl mx-auto w-full py-16 lg:py-24">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-white font-bold">Customs & Compliance</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f5821f] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/25 mb-6">
              <FileCheck2 className="w-4 h-4 fill-white text-white" />
              <span>CUSTOMS & COMPLIANCE BROKERAGE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Frictionless Customs Clearance <br />
              & Regulatory Compliance
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              Automated tariff classification, pre-filing entries, and licensed customs brokerage in 120+ countries to clear borders rapidly with zero demurrage risks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07212] active:bg-[#c9630c] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base text-center"
              >
                Get Customs Quote
              </button>
              <button
                onClick={() => {
                  if (onOpenTracking) {
                    onOpenTracking();
                  } else {
                    navigate('/tracking');
                  }
                }}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900/70 hover:bg-slate-900/90 text-white font-bold rounded-xl border border-white/20 transition-all cursor-pointer text-sm sm:text-base text-center"
              >
                Track Clearance Status
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              SERVICE OVERVIEW
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Automated Border Clearance <br />
              Engineered for Global Trade <br />
              & Duty Optimization
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                Navigating complex international customs regulations requires precision and speed. NexCargo customs brokers utilize electronic EDI pre-filing systems that submit manifest declarations before your ship or plane arrives at port.
              </p>
              <p>
                From HTS tariff audit and duty drawback recovery to bonded warehousing and export trade compliance, our specialists protect your supply chain from regulatory holds and unexpected fines.
              </p>
            </div>

            {/* Divider */}
            <div className="pt-8 border-t border-slate-200/80">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    120+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Countries Covered
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    &lt; 4 Hours
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Avg Clearance Speed
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    99.8%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    First-Pass Compliance
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 space-y-4 sm:space-y-5"
          >
            {/* Top 2 Images */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/60">
                <img
                  src={customsImg}
                  alt="Customs brokerage document verification"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/60">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
                  alt="Global compliance paperwork"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Wide Image */}
            <div className="rounded-[20px] overflow-hidden aspect-[16/8] bg-slate-100 shadow-sm border border-slate-200/60">
              <img
                src={borderImg}
                alt="Port border clearance hub"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible Customs Solutions Section */}
      <section className="bg-[#022863] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-blue-900/40">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              SERVICE OPTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Flexible Customs Solutions <br className="hidden sm:block" />
              for Every Requirement
            </h2>
          </div>

          {/* Grid Layout: Cards on Left, Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 4 Solution Cards */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Card 1: Import/Export Customs Brokerage */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-[#0a387e]/80 border border-blue-400/20 rounded-2xl p-6 sm:p-7 hover:bg-[#0d418f] hover:border-blue-400/40 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                      <FileCheck2 className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Import/Export Brokerage
                    </h3>
                  </div>
                  <span className="bg-[#f5821f] text-white font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider shrink-0 shadow-sm">
                    Instant Pre-Filing
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Electronic declaration pre-filing with customs authorities prior to cargo arrival to ensure instant border release.
                </p>
              </motion.div>

              {/* Card 2: HTS Tariff & Duty Optimization */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="bg-[#0a387e]/80 border border-blue-400/20 rounded-2xl p-6 sm:p-7 hover:bg-[#0d418f] hover:border-blue-400/40 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Tariff & Duty Optimization
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Smart Audit
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Precise Harmonized System classification and duty drawback recovery programs to legally minimize import tariffs.
                </p>
              </motion.div>

              {/* Card 3: Bonded Warehousing Clearance */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-[#0a387e]/80 border border-blue-400/20 rounded-2xl p-6 sm:p-7 hover:bg-[#0d418f] hover:border-blue-400/40 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <Shield className="w-5 h-5 text-teal-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Bonded Warehouse Clearance
                    </h3>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Duty Deferred
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Store imported goods in customs-bonded facilities to defer tax and duty payments until final market entry.
                </p>
              </motion.div>

              {/* Card 4: Trade Compliance Audits */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="bg-[#0a387e]/80 border border-blue-400/20 rounded-2xl p-6 sm:p-7 hover:bg-[#0d418f] hover:border-blue-400/40 transition-all shadow-lg"
              >
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Trade Compliance Auditing
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Advisory
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Comprehensive trade compliance reviews, sanctions screening, rules of origin verification, and risk auditing.
                </p>
              </motion.div>
            </div>

            {/* Right Column: High-Res Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[1/1] xl:aspect-[5/4] shadow-2xl border border-white/15 bg-blue-950 relative">
                <img
                  src={customsImg}
                  alt="Customs brokerage desk"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customs Clearance for Critical Industries Section */}
      <section className="bg-[#f8fafc] text-slate-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-slate-200/60">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & 2-Column Industry Cards */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            {/* Eyebrow */}
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              INDUSTRIES
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Customs Clearance for <br className="hidden sm:block" />
              Critical Industries
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              Ensuring strict regulatory compliance and expedited entry clearance for high-value and sensitive global trade sectors.
            </p>

            {/* 2-Column Grid of 6 Industry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Medical Devices & Pharma', icon: Pill },
                { title: 'Semiconductors & Tech', icon: Laptop },
                { title: 'Luxury & High Value', icon: Gem },
                { title: 'Automotive Parts', icon: Car },
                { title: 'Chemicals & Energy', icon: ShieldCheck },
                { title: 'Agri-Food & Perishables', icon: Utensils },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl px-5 py-4 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex items-center gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#023f99] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Stylized Industry Multi-Pane Visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-[32px] overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              {/* Layer 1: Base background image */}
              <img
                src={customsImg}
                alt="Customs brokerage paperwork"
                className="w-full h-full object-cover"
              />

              {/* Layer 2: Slanted cut panel overlay top-right */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 25% 100%)' }}
              >
                <img
                  src={borderImg}
                  alt="Port container clearance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20" />
              </div>

              {/* Layer 3: Dark overlay tint on bottom-left for contrast */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none"
                style={{ clipPath: 'polygon(0 0, 60% 0, 30% 100%, 0 100%)' }}
              />

              {/* Decorative Line */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)',
                  clipPath: 'polygon(54% 0, 56% 0, 26% 100%, 24% 100%)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits That Set Us Apart Section */}
      <section className="bg-[#f8fafc] text-slate-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-slate-200/60">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              WHY CHOOSE OUR BROKERAGE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Benefits That Set Us Apart
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal">
              Licensed customs brokers, electronic EDI pre-filing, and zero demurrage guarantees.
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Pre-Arrival Electronic Filing',
                description:
                  'We file entry declarations before your vessel or aircraft lands, ensuring immediate border release upon arrival.',
              },
              {
                icon: Shield,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Zero Demurrage Guarantee',
                description:
                  'Proactive document validation eliminates port storage charges, container detention, and custom holds.',
              },
              {
                icon: MapPin,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Real-Time Clearance Status',
                description:
                  'Track customs entry milestones, release timestamps, and duty payment confirmations live on NexTrack.',
              },
              {
                icon: FileCheck2,
                iconBg: 'bg-emerald-50 text-emerald-600',
                title: 'Duty & Tax Optimization',
                description:
                  'Licensed brokers identify duty drawback, trade agreement exemptions, and free trade zone benefits.',
              },
              {
                icon: Globe2,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Global Border Presence',
                description:
                  'Dedicated in-house customs brokers present at 120+ international air, ocean, and border border posts.',
              },
              {
                icon: Clock,
                iconBg: 'bg-[#f5821f]/10 text-[#f5821f]',
                title: '24/7 Regulatory Support',
                description:
                  'Round-the-clock customs desk ready to handle regulatory inquiries, agricultural holds, or emergency releases.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[24px] p-8 sm:p-10 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-slate-200/60">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Customs Clearance — Step by Step
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Horizontal Line behind icons for desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  title: 'Document Upload',
                  desc: 'Upload invoice, packing list, and BOL/AWB online.',
                  icon: Quote,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Tariff Audit',
                  desc: 'Broker verifies HS codes and calculates duties.',
                  icon: CalendarCheck,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Pre-Filing EDI',
                  desc: 'Electronic declaration submitted before arrival.',
                  icon: FileCheck2,
                  bg: 'bg-[#f5821f] text-white shadow-orange-500/30',
                },
                {
                  title: 'Border Release',
                  desc: 'Customs releases cargo instantly upon port arrival.',
                  icon: Check,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Final Delivery',
                  desc: 'Goods released to truck fleet for door delivery.',
                  icon: Truck,
                  bg: 'bg-[#00c88c] text-white shadow-emerald-500/30',
                },
              ].map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="flex flex-col items-center text-center group"
                  >
                    {/* Circle Icon Badge */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 rounded-full ${step.bg} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="w-8 h-8 stroke-[2.2]" />
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[220px]">
                      {step.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="bg-white text-slate-900 py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-slate-200/60">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#f3f6fa] border-blue-200/80 shadow-sm'
                      : 'bg-[#f8fafc] border-slate-200/80 hover:bg-[#f1f5f9]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer select-none transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight pr-4">
                      {faq.question}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/80 border border-slate-200 flex items-center justify-center shrink-0 text-[#023f99] shadow-xs">
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-5 pb-6 sm:px-6 sm:pb-7 pt-0 text-slate-500 text-sm sm:text-base leading-relaxed font-normal border-t border-slate-200/40 mt-1"
                    >
                      <p className="pt-3">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Clear Customs Fast CTA Section */}
      <section className="relative py-24 sm:py-28 px-6 text-center text-white overflow-hidden bg-slate-950">
        {/* Background Image with Light Orange Warm Sunset Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={borderImg}
            alt="Customs clearance border hub background"
            className="w-full h-full object-cover object-center opacity-40 scale-105"
          />
          {/* Base Dark Gradient */}
          <div className="absolute inset-0 bg-slate-950/70" />
          {/* Warm Light Orange & Sunset Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-amber-950/40 to-orange-600/30 mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/25 via-orange-900/20 to-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Ready to Clear Customs Fast?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Get expert customs brokerage support for your international shipments. Response within 2 hours — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07316] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer text-sm sm:text-base"
            >
              Request Customs Quote
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all text-sm sm:text-base inline-flex items-center justify-center backdrop-blur-xs"
            >
              Talk to Customs Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
