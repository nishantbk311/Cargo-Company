import {
    Car,
    Check,
    ChevronRight,
    FileCheck2,
    Laptop,
    MapPin,
    Pill,
    Plus,
    Quote,
    Shield,
    Shirt,
    ShoppingBag,
    Thermometer,
    Truck,
    Utensils,
    Warehouse,
    X,
    Zap
} from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import warehouseImg from '../assets/images/warehouse_service_1784785561840.jpg';

interface WarehousingPageProps {
  onOpenQuote: () => void;
  onOpenTracking?: (trackingNum?: string) => void;
}

export const WarehousingPage: React.FC<WarehousingPageProps> = ({
  onOpenQuote,
  onOpenTracking,
}) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const robotImg = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200';

  const faqData = [
    {
      question: 'What types of inventory storage options do you offer?',
      answer:
        'We provide high-density ambient pallet racking, climate-controlled cold storage (-20°C to +25°C), high-security vaults for high-value tech, bonded storage facilities, and dedicated cross-docking staging areas.',
    },
    {
      question: 'Can your warehouse management system (WMS) integrate with my online store?',
      answer:
        'Yes! Our cloud WMS features turn-key API connectors for major e-commerce platforms (Shopify, WooCommerce, Amazon, Magento) and custom enterprise ERPs (SAP, Oracle) for real-time inventory and auto order syncing.',
    },
    {
      question: 'What is your fulfillment speed and order accuracy SLA?',
      answer:
        'We guarantee same-day pick & pack fulfillment for orders placed before 2:00 PM local time, backed by an industry-leading 99.9% inventory picking accuracy rate powered by RFID barcode scanning.',
    },
    {
      question: 'Where are NexCargo strategic warehousing hubs located?',
      answer:
        'We operate 120+ fulfillment centers situated within 30 minutes of major air hubs, deep-water ocean ports, and primary rail terminals across North America, Europe, Asia-Pacific, and the Middle East.',
    },
    {
      question: 'How do you ensure cargo security inside the warehouse?',
      answer:
        'All facilities feature 24/7 CCTV surveillance, biometric access gates, RFID perimeter tracking, motion sensors, and climate-grade fire suppression systems with round-the-clock security staffing.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#07192f] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background Image with Sunset & Gradient Overlay */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src={warehouseImg}
            alt="Smart Warehousing & Fulfillment Hub"
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
            <span className="text-white font-bold">Smart Warehousing</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-[#f5821f] text-white font-extrabold text-xs uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/25 mb-6">
              <Warehouse className="w-4 h-4 fill-white text-white" />
              <span>SMART WAREHOUSING & FULFILLMENT</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              AI-Monitored Storage <br />
              & Global Fulfillment Hubs
            </h1>

            {/* Description */}
            <p className="text-slate-200 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mb-10">
              Next-generation climate-controlled warehousing with real-time RFID inventory tracking, automated pick & pack, and cross-docking in 120+ strategic trade hubs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07212] active:bg-[#c9630c] text-white font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base text-center"
              >
                Get Warehousing Quote
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
                Access Portal
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
              Smart Storage Infrastructure <br />
              Engineered for High-Volume <br />
              Global Fulfillment
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-slate-500 text-base sm:text-lg leading-relaxed mb-10">
              <p>
                NexCargo operates over 500,000 square feet of high-tech distribution space situated near major deep-water ports and international cargo airports. Our automated inventory management systems connect directly to your sales channels.
              </p>
              <p>
                From climate-controlled pharmaceutical vaults and e-commerce pick-and-pack to rapid cross-docking and customs-bonded storage, we scale your order fulfillment seamlessly with 99.9% accuracy guarantees.
              </p>
            </div>

            {/* Divider */}
            <div className="pt-8 border-t border-slate-200/80">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    500k+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Sq. Ft. Storage Hubs
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    120+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Global Locations
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#023f99] tracking-tight">
                    99.9%
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    Fulfillment SLA
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
                  src={warehouseImg}
                  alt="High-bay warehouse interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] bg-slate-100 shadow-sm border border-slate-200/60">
                <img
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
                  alt="Automated fulfillment center picking"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bottom Wide Image */}
            <div className="rounded-[20px] overflow-hidden aspect-[16/8] bg-slate-100 shadow-sm border border-slate-200/60">
              <img
                src={robotImg}
                alt="Smart warehouse logistics racks"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flexible Warehousing Solutions Section */}
      <section className="bg-[#022863] text-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 border-t border-blue-900/40">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="max-w-3xl mb-12 lg:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              SERVICE OPTIONS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Flexible Warehousing Solutions <br className="hidden sm:block" />
              for Every Requirement
            </h2>
          </div>

          {/* Grid Layout: Cards on Left, Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: 4 Solution Cards */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {/* Card 1: Smart Storage & Inventory */}
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
                      <Warehouse className="w-5 h-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Smart Storage & RFID
                    </h3>
                  </div>
                  <span className="bg-[#f5821f] text-white font-extrabold text-xs px-3 py-1 rounded-md uppercase tracking-wider shrink-0 shadow-sm">
                    Real-Time Telemetry
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  High-density pallet racking with automated RFID item tracking and instant stock visibility across all global hubs.
                </p>
              </motion.div>

              {/* Card 2: E-Commerce Pick & Pack */}
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
                      <ShoppingBag className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      E-Commerce Pick & Pack
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Same-Day Dispatch
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Automated order processing, custom branded unboxing, kitting, and same-day carrier dispatch worldwide.
                </p>
              </motion.div>

              {/* Card 3: Cold Storage & Climate Control */}
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
                      Cold Storage & Temp Control
                    </h3>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    -20°C to +25°C
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Precision temperature-monitored zones for pharmaceuticals, fresh produce, cosmetics, and sensitive chemicals.
                </p>
              </motion.div>

              {/* Card 4: Cross-Docking & Distribution */}
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
                      <Truck className="w-5 h-5 text-blue-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      Cross-Docking & Distribution
                    </h3>
                  </div>
                  <span className="bg-blue-400/20 text-blue-200 border border-blue-300/30 font-bold text-xs px-3 py-1 rounded-md shrink-0">
                    Zero Delay
                  </span>
                </div>
                <p className="text-blue-100/80 text-sm sm:text-base leading-relaxed font-normal">
                  Direct transfer of inbound cargo shipments straight to outbound delivery vehicles with zero long-term storage fees.
                </p>
              </motion.div>
            </div>

            {/* Right Column: High-Res Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6"
            >
              <div className="rounded-[28px] overflow-hidden aspect-[4/3] lg:aspect-[1/1] xl:aspect-[5/4] shadow-2xl border border-white/15 bg-blue-950 relative">
                <img
                  src={warehouseImg}
                  alt="High bay warehouse racking system"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Warehousing for Critical Industries Section */}
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
              Smart Warehousing for <br className="hidden sm:block" />
              Critical Industries
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
              Providing specialized storage conditions, strict biometric security, and rapid fulfillment for key global sectors.
            </p>

            {/* 2-Column Grid of 6 Industry Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'E-Commerce & Retail', icon: ShoppingBag },
                { title: 'Pharmaceuticals & Health', icon: Pill },
                { title: 'Electronics & Tech', icon: Laptop },
                { title: 'Fashion & Apparel', icon: Shirt },
                { title: 'Automotive Spare Parts', icon: Car },
                { title: 'Perishable Consumer Goods', icon: Utensils },
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
                src={warehouseImg}
                alt="Warehouse racks background"
                className="w-full h-full object-cover"
              />

              {/* Layer 2: Slanted cut panel overlay top-right */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 25% 100%)' }}
              >
                <img
                  src={robotImg}
                  alt="Automated logistics sorting"
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
              WHY CHOOSE OUR WAREHOUSES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Benefits That Set Us Apart
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal">
              Real-time API inventory visibility, 24/7 security guarding, and same-day pick & pack.
            </p>
          </div>

          {/* 6 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Laptop,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Real-Time API Inventory',
                description:
                  'Instant cloud synchronization with your storefront or ERP for live stock levels and automated replenishment.',
              },
              {
                icon: Shield,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: '24/7 Biometric Security',
                description:
                  'Biometric access controls, 24/7 CCTV surveillance, and climate sensor monitoring protect high-value stock.',
              },
              {
                icon: Zap,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: 'Same-Day Order Fulfillment',
                description:
                  'Orders synced before cutoff are picked, custom-packed, and dispatched on express carriers same day.',
              },
              {
                icon: Thermometer,
                iconBg: 'bg-amber-50 text-amber-600',
                title: 'Precision Climate Control',
                description:
                  'Calibrated storage zones spanning freeze (-20°C) to ambient (+25°C) for pharma and perishables.',
              },
              {
                icon: FileCheck2,
                iconBg: 'bg-emerald-50 text-emerald-600',
                title: 'Bonded Warehouse Facilities',
                description:
                  'Deconstruct containers in customs-bonded zones to defer duty payments until commercial release.',
              },
              {
                icon: MapPin,
                iconBg: 'bg-blue-50 text-[#023f99]',
                title: '120+ Strategic Locations',
                description:
                  'Hubs situated next to top cargo airports and deep-water ocean ports worldwide for fast distribution.',
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
              Smart Warehousing — Step by Step
            </h2>
          </div>

          {/* Steps Timeline */}
          <div className="relative">
            {/* Horizontal Line behind icons for desktop */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {[
                {
                  title: 'Inbound Receiving',
                  desc: 'Cargo arrives, barcode/RFID scanned, and quality inspected.',
                  icon: Truck,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Smart Placement',
                  desc: 'Stock assigned to optimal climate zone & high-density bin.',
                  icon: Warehouse,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'API Sync',
                  desc: 'Orders auto-sync from your store or ERP straight to WMS.',
                  icon: Laptop,
                  bg: 'bg-[#f5821f] text-white shadow-orange-500/30',
                },
                {
                  title: 'Pick & Pack',
                  desc: 'Items picked, custom packed, and shipping labels attached.',
                  icon: Quote,
                  bg: 'bg-[#023f99] text-white shadow-blue-900/20',
                },
                {
                  title: 'Outbound Dispatch',
                  desc: 'Handed off to express air or road carrier with tracking.',
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

      {/* Ready to Scale Warehousing CTA Section */}
      <section className="relative py-24 sm:py-28 px-6 text-center text-white overflow-hidden bg-slate-950">
        {/* Background Image with Light Orange Warm Sunset Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={warehouseImg}
            alt="Smart warehouse logistics background"
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
            Ready to Scale Your Warehousing?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Get a customized warehousing and fulfillment proposal from our logistics experts. Response within 2 hours — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07316] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all cursor-pointer text-sm sm:text-base"
            >
              Request Warehousing Quote
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/20 transition-all text-sm sm:text-base inline-flex items-center justify-center backdrop-blur-xs"
            >
              Talk to Warehousing Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
