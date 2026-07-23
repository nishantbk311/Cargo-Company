import {
    Anchor,
    CalendarCheck,
    Car,
    Check,
    ChevronRight,
    Container,
    FileCheck2,
    Globe2,
    HardHat,
    MapPin,
    Pill,
    Plus,
    Quote,
    Shield,
    ShoppingBag,
    Thermometer,
    Truck,
    Utensils,
    X,
    Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import portImg from '../assets/images/port_cranes_dusk_1784786029907.jpg';
import seaImg from '../assets/images/sea_freight_service_1784785539758.jpg';

interface OceanFreightPageProps {
  onOpenQuote: () => void;
  onOpenTracking?: (trackingNum?: string) => void;
}

export const OceanFreightPage: React.FC<OceanFreightPageProps> = ({
  onOpenQuote,
  onOpenTracking,
}) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const faqData = [
    {
      question: 'What is the difference between FCL and LCL ocean freight?',
      answer:
        'FCL (Full Container Load) means your goods occupy an entire 20ft or 40ft container exclusively. LCL (Less than Container Load) allows you to share container space with other shippers, paying only for the volume your cargo occupies — ideal for smaller shipments.',
    },
    {
      question: 'How long does ocean freight take for international shipping?',
      answer:
        'Ocean freight transit times depend on trade lanes. Transpacific routes typically take 12–18 days, Asia to Europe takes 20–28 days, and Transatlantic routes take 10–14 days. Port clearance and origin drayage add 2–4 days.',
    },
    {
      question: 'Can you handle temperature-sensitive or reefer cargo by sea?',
      answer:
        'Yes, we operate advanced climate-controlled reefer containers with precise temperature monitoring (-30°C to +30°C), humidity control, and continuous telemetry for pharmaceuticals, fresh produce, and frozen food.',
    },
    {
      question: 'What documents are required for ocean freight clearance?',
      answer:
        'Key documents include the Commercial Invoice, Packing List, Bill of Lading (BOL or Sea Waybill), Customs Entry Manifest, and Shipper\'s Letter of Instruction (SLI). Certain items require Certificates of Origin.',
    },
    {
      question: 'Do you offer door-to-door ocean freight delivery?',
      answer:
        'Absolutely. We manage the entire multimodal chain: origin truck pickup, port handling, ocean transit, destination customs clearance, and final truck delivery directly to your warehouse or customer facility.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#07192f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background Image with Sunset & Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src={portImg}
            alt="Ocean Freight Vessel at Port"
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
            <span className="text-white font-bold">Ocean Freight</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f5821f] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/25 mb-6">
              <Anchor className="w-4 h-4 fill-white text-white" />
              <span>OCEAN FREIGHT SERVICES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Cost-Efficient Logistics <br />
              Across All Trade Lanes
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              High-volume FCL and LCL ocean freight solutions connecting 850+ major deep-water ports worldwide with full door-to-door visibility and carrier reliability.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07212] active:bg-[#c9630c] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base text-center"
              >
                Get Ocean Freight Quote
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
                Track Shipment
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
              Global Sea Cargo <br />
              Built for High Capacity <br />
              & Trade Efficiency
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                NexCargo ocean freight delivers predictable container routing across major maritime alliances. Whether you need full container load (FCL) or consolidated less-than-container load (LCL), our dedicated team manages port handling, customs, and onward distribution seamlessly.
              </p>
              <p>
                Our 24/7 ocean desk monitors vessel schedules, container milestones, and port congestion in real time, keeping your supply chain moving reliably with automated NexTrack alerts.
              </p>
            </div>

            {/* Divider */}
            <div className="pt-8 border-t border-slate-200/80">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    850+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Port Destinations
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    12-25d
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Avg Ocean Transit
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    40+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Carrier Alliances
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
                  src={seaImg}
                  alt="Container ship navigating ocean"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/60">
                <img
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
                  alt="Port crane loading shipping containers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Wide Image */}
            <div className="rounded-[20px] overflow-hidden aspect-[16/8] bg-slate-100 shadow-sm border border-slate-200/60">
              <img
                src={portImg}
                alt="Container port terminal sunset"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible Ocean Freight Solutions Section */}
      <section className="bg-[#022863] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-blue-900/40">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              SERVICE OPTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Flexible Ocean Freight Solutions <br className="hidden sm:block" />
              for Every Requirement
            </h2>
          </div>

          {/* Grid Layout: Cards on Left, Cargo Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 4 Solution Cards */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Card 1: Full Container Load (FCL) */}
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
                      <Container className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Full Container Load (FCL)
                    </h3>
                  </div>
                  <span className="bg-[#f5821f] text-white font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider shrink-0 shadow-sm">
                    Dedicated 20/40ft
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Dedicated 20ft, 40ft, or 40ft High Cube containers exclusively for your cargo with direct port routing.
                </p>
              </motion.div>

              {/* Card 2: Less Than Container Load (LCL) */}
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
                      <Anchor className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Less Than Container Load (LCL)
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Consolidated
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Cost-optimized consolidated container freight for smaller shipments without needing full container booking.
                </p>
              </motion.div>

              {/* Card 3: Reefer Ocean Freight */}
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
                      <Thermometer className="w-5 h-5 text-teal-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Reefer Ocean Freight
                    </h3>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Cold Chain
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Climate-controlled refrigerated container units for food, pharmaceuticals, and sensitive perishables.
                </p>
              </motion.div>

              {/* Card 4: RoRo & Breakbulk Freight */}
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
                      <Shield className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      RoRo & Breakbulk
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Specialized
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Specialized Roll-on/Roll-off and heavy-lift vessel transport for oversized machinery, vehicles, and industrial cargo.
                </p>
              </motion.div>
            </div>

            {/* Right Column: High-Res Cargo Vessel Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[1/1] xl:aspect-[5/4] shadow-2xl border border-white/15 bg-blue-950 relative">
                <img
                  src={seaImg}
                  alt="Large container vessel at ocean"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ocean Freight for Critical Industries Section */}
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
              Ocean Freight for Critical <br className="hidden sm:block" />
              Industries
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              NexCargo Ocean Freight powers global trade sectors where high volume, secure containerization, and cost efficiency are essential.
            </p>

            {/* 2-Column Grid of 6 Industry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Automotive & Vehicles', icon: Car },
                { title: 'Industrial Machinery', icon: HardHat },
                { title: 'Retail & Consumer Goods', icon: ShoppingBag },
                { title: 'Chemicals & Materials', icon: Pill },
                { title: 'Agricultural & Food', icon: Utensils },
                { title: 'Energy & Infrastructure', icon: Globe2 },
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
                src={seaImg}
                alt="Ocean vessel container stacks"
                className="w-full h-full object-cover"
              />

              {/* Layer 2: Slanted cut panel overlay top-right showing port cranes dusk */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 25% 100%)' }}
              >
                <img
                  src={portImg}
                  alt="Port cranes at dusk"
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
              WHY CHOOSE OCEAN FREIGHT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Benefits That Set Us Apart
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal">
              High capacity, competitive freight rates, and seamless port-to-door delivery.
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Maximum Cost Efficiency',
                description:
                  'Unbeatable per-ton rates for high-volume international trade across all primary ocean shipping corridors.',
              },
              {
                icon: Shield,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'High-Volume Capacity',
                description:
                  'Guaranteed space allotments with major carrier alliances even during peak global trade seasons.',
              },
              {
                icon: MapPin,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Real-Time Vessel Tracking',
                description:
                  'Monitor container position via GPS satellite tracking from port departure through customs clearance to final destination.',
              },
              {
                icon: Thermometer,
                iconBg: 'bg-amber-50 text-amber-600',
                title: 'Reefer Cold Chain',
                description:
                  'Precision temperature-monitored refrigerated containers for perishables, cosmetics, and medical goods.',
              },
              {
                icon: FileCheck2,
                iconBg: 'bg-emerald-50 text-emerald-600',
                title: 'Port Customs Management',
                description:
                  'In-house customs brokers file pre-arrival entries to eliminate port demurrage and expedite container release.',
              },
              {
                icon: Truck,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Door-to-Door Drayage',
                description:
                  'Integrated truck and rail intermodal transport delivering containers directly from sea ports to your warehouse door.',
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
              Ocean Freight — Step by Step
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Horizontal Line behind icons for desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  title: 'Request Quote',
                  desc: 'Fill our quick form. Get an ocean rate quote in under 2 hours.',
                  icon: Quote,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Book & Confirm',
                  desc: 'Select FCL or LCL. We reserve container space on vessel.',
                  icon: CalendarCheck,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Drayage & Loading',
                  desc: 'Container loaded at door and drayed to export port.',
                  icon: Truck,
                  bg: 'bg-[#f5821f] text-white shadow-orange-500/30',
                },
                {
                  title: 'Sail & Track',
                  desc: 'Vessel departs. Track in real-time on NexTrack.',
                  icon: Anchor,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Clear & Deliver',
                  desc: 'Import customs clearance and final door-to-door delivery.',
                  icon: Check,
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

      {/* Ready to Ship by Sea CTA Section */}
      <section className="relative py-24 sm:py-28 px-6 text-center text-white overflow-hidden bg-slate-950">
        {/* Background Image with Light Orange Warm Sunset Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={portImg}
            alt="Ocean freight port container background"
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
            Ready to Ship by Sea?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a competitive ocean freight quote from our maritime experts. Response within 2 hours — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07316] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer text-sm sm:text-base"
            >
              Request Ocean Freight Quote
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all text-sm sm:text-base inline-flex items-center justify-center backdrop-blur-xs"
            >
              Talk to Ocean Freight Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
