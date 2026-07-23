import {
    CalendarCheck,
    Car,
    Check,
    ChevronRight,
    FileCheck2,
    HardHat,
    Laptop,
    MapPin,
    Pill,
    Plus,
    Quote,
    Shield,
    Shirt,
    Thermometer,
    Train,
    Truck,
    Utensils,
    X,
    Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import roadImg from '../assets/images/road_transport_service_1784785551273.jpg';

interface RoadFreightPageProps {
  onOpenQuote: () => void;
  onOpenTracking?: (trackingNum?: string) => void;
}

export const RoadFreightPage: React.FC<RoadFreightPageProps> = ({
  onOpenQuote,
  onOpenTracking,
}) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const faqData = [
    {
      question: 'What is the difference between FTL and LTL road freight?',
      answer:
        'FTL (Full Truckload) assigns an entire truck trailer exclusively to your cargo for direct, point-to-point transit without intermediate stops. LTL (Less Than Truckload) consolidates multiple smaller shipments into one trailer, sharing transport costs efficiently.',
    },
    {
      question: 'What are the typical transit times for overland trucking?',
      answer:
        'Regional trucking typically delivers within 24 to 48 hours. Long-haul cross-country or cross-border routes generally take 3 to 5 days, depending on distance and border clearance protocols.',
    },
    {
      question: 'Do you offer temperature-controlled reefer trucking?',
      answer:
        'Yes, our fleet includes climate-controlled reefer trailers equipped with IoT temperature telemetry and multi-temp zone capability for food produce, frozen goods, cosmetics, and pharmaceuticals.',
    },
    {
      question: 'How do you handle cross-border road freight documentation?',
      answer:
        'Our in-house customs team handles all manifest filings, transit bonds, carnets, and border declarations electronically before driver arrival to ensure frictionless border crossings.',
    },
    {
      question: 'How is cargo secured and tracked during ground transport?',
      answer:
        'Every vehicle is equipped with air-ride suspension, IoT digital seal locks, and 24/7 real-time GPS telemetry so you can monitor driver location, speed, and door sensor logs live on NexTrack.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#07192f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background Image with Sunset & Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src={roadImg}
            alt="Road Transport Semi Truck Fleet"
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
            <span className="text-white font-bold">Road & Rail Freight</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f5821f] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/25 mb-6">
              <Truck className="w-4 h-4 fill-white text-white" />
              <span>ROAD & RAIL FREIGHT SERVICES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Seamless Overland Logistics <br />
              Across Continents
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              Door-to-door FTL, LTL, and intermodal rail freight connecting distribution centers, ports, and manufacturing hubs with live GPS tracking and guaranteed dispatch.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07212] active:bg-[#c9630c] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base text-center"
              >
                Get Road Freight Quote
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
              Ground Fleet Logistics <br />
              Engineered for Speed, <br />
              Flexibility & Security
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                NexCargo ground network operates over 12,000 modern trucks and intermodal rail corridors. We combine automated route optimization with real-time driver telemetry to deliver regional cargo within 24-48 hours.
              </p>
              <p>
                Whether moving single pallets or dedicated full truckloads, our 24/7 dispatch center monitors weather, traffic, and border status proactively to guarantee on-time delivery.
              </p>
            </div>

            {/* Divider */}
            <div className="pt-8 border-t border-slate-200/80">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    12,000+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Active Ground Fleet
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    24-48h
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Regional Transit
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    99.4%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    On-Time Delivery
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
                  src={roadImg}
                  alt="Semi truck driving on highway"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/60">
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
                  alt="Truck loading bay at warehouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Wide Image */}
            <div className="rounded-[20px] overflow-hidden aspect-[16/8] bg-slate-100 shadow-sm border border-slate-200/60">
              <img
                src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200"
                alt="Intermodal freight train"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible Road Freight Solutions Section */}
      <section className="bg-[#022863] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-blue-900/40">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              SERVICE OPTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Flexible Ground Solutions <br className="hidden sm:block" />
              for Every Requirement
            </h2>
          </div>

          {/* Grid Layout: Cards on Left, Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 4 Solution Cards */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Card 1: Full Truckload (FTL) */}
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
                      <Truck className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Full Truckload (FTL)
                    </h3>
                  </div>
                  <span className="bg-[#f5821f] text-white font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider shrink-0 shadow-sm">
                    Dedicated 24-48h
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Dedicated trailer exclusively for your high-volume cargo with direct point-to-point dispatch and non-stop delivery.
                </p>
              </motion.div>

              {/* Card 2: Less Than Truckload (LTL) */}
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
                      <Truck className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Less Than Truckload (LTL)
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Consolidated
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Cost-effective shared trailer space for small-to-midsize pallet shipments with automated route consolidation.
                </p>
              </motion.div>

              {/* Card 3: Refrigerated Trucking */}
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
                      Refrigerated Trucking
                    </h3>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Cold Chain
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Climate-controlled reefer trailers for food, pharmaceuticals, and temperature-sensitive commercial cargo.
                </p>
              </motion.div>

              {/* Card 4: Intermodal Rail Freight */}
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
                      <Train className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Intermodal Rail Freight
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Eco-Friendly
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Eco-friendly long-haul rail corridors combined with road drayage for maximum volume efficiency.
                </p>
              </motion.div>
            </div>

            {/* Right Column: High-Res Truck Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[1/1] xl:aspect-[5/4] shadow-2xl border border-white/15 bg-blue-950 relative">
                <img
                  src={roadImg}
                  alt="Modern semi truck on highway"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Road Freight for Critical Industries Section */}
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
              Road & Rail Freight for <br className="hidden sm:block" />
              Critical Industries
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              Powering supply chains that rely on precise delivery schedules, temperature stability, and direct facility access.
            </p>

            {/* 2-Column Grid of 6 Industry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Retail & Fast Fashion', icon: Shirt },
                { title: 'Automotive Manufacturing', icon: Car },
                { title: 'Consumer Electronics', icon: Laptop },
                { title: 'Pharmaceuticals', icon: Pill },
                { title: 'Perishable Produce', icon: Utensils },
                { title: 'Heavy Equipment', icon: HardHat },
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
                src={roadImg}
                alt="Truck logistics network highway"
                className="w-full h-full object-cover"
              />

              {/* Layer 2: Slanted cut panel overlay top-right */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 25% 100%)' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200"
                  alt="Truck loading bay sunset"
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
              WHY CHOOSE ROAD FREIGHT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Benefits That Set Us Apart
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal">
              Direct facility access, real-time GPS tracking, and flexible fleet scheduling.
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Truck,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Door-to-Door Direct Delivery',
                description:
                  'Direct transit from origin loading dock to destination doorstep without intermediate offloading.',
              },
              {
                icon: MapPin,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Live GPS Telemetry',
                description:
                  'Continuous real-time tracking of driver location, route speed, and estimated arrival updates.',
              },
              {
                icon: Shield,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Air-Ride Cargo Security',
                description:
                  'Air-suspension trailers and IoT electronic door seals protect sensitive freight from vibration or theft.',
              },
              {
                icon: Thermometer,
                iconBg: 'bg-amber-50 text-amber-600',
                title: 'Temperature Control',
                description:
                  'Multi-temp reefer trailers for perishable food, pharmaceuticals, and cosmetics with digital logs.',
              },
              {
                icon: FileCheck2,
                iconBg: 'bg-emerald-50 text-emerald-600',
                title: 'Cross-Border Pre-Clearance',
                description:
                  'Pre-filed electronic customs manifests ensure seamless, instant border crossings without driver delays.',
              },
              {
                icon: Zap,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Rapid 2-Hour Dispatch',
                description:
                  'Emergency truck dispatch guaranteed within 2 hours of booking across major continental corridors.',
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
              Road Freight — Step by Step
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
                  desc: 'Fill our quick form. Get a rate quote in under 2 hours.',
                  icon: Quote,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Dispatch & Pickup',
                  desc: 'Driver assigned for immediate or scheduled door pickup.',
                  icon: CalendarCheck,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Secure & Seal',
                  desc: 'Pallets strapped, sealed with IoT locks, and inspected.',
                  icon: Truck,
                  bg: 'bg-[#f5821f] text-white shadow-orange-500/30',
                },
                {
                  title: 'Transit & GPS',
                  desc: 'Truck departs. Track real-time driver location on NexTrack.',
                  icon: MapPin,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Doorstep Delivery',
                  desc: 'Unloading at destination facility with digital POD signoff.',
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

      {/* Ready to Ship Overland CTA Section */}
      <section className="relative py-24 sm:py-28 px-6 text-center text-white overflow-hidden bg-slate-950">
        {/* Background Image with Light Orange Warm Sunset Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={roadImg}
            alt="Road transport highway background"
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
            Ready to Ship Overland?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a competitive ground transport quote from our logistics team. Response within 2 hours — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07316] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer text-sm sm:text-base"
            >
              Request Road Freight Quote
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all text-sm sm:text-base inline-flex items-center justify-center backdrop-blur-xs"
            >
              Talk to Road Freight Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
