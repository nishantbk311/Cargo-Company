import {
    Anchor,
    ArrowRight,
    Car,
    FileCheck2,
    HardHat,
    Laptop,
    Pill,
    Plane,
    Shirt,
    ShoppingBag,
    Truck,
    Utensils,
    Warehouse
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import airImg from '../assets/images/air_freight_service_1784785526346.jpg';
import roadImg from '../assets/images/road_transport_service_1784785551273.jpg';
import seaImg from '../assets/images/sea_freight_service_1784785539758.jpg';
import warehouseImg from '../assets/images/warehouse_service_1784785561840.jpg';

interface ServicesPageProps {
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<'all' | 'air' | 'sea' | 'road' | 'warehouse' | 'customs'>('all');

  const services = [
    {
      id: 'air',
      title: 'Air Freight Cargo',
      icon: Plane,
      image: airImg,
      subtitle: 'Express & Standard Air Cargo Solutions',
      transit: '1 - 3 Days Global Transit',
      description:
        'Guaranteed capacity on daily scheduled cargo flights and charter solutions connecting over 150+ international airport hubs.',
      features: [
        'Temperature-controlled cold chain for pharmaceuticals',
        'Express priority board with guaranteed flight allotment',
        'Hazardous & DG cargo certified handling',
        'Real-time flight GPS tracking and automated arrival alerts',
      ],
      specs: [
        { label: 'Max Payload', val: 'Up to 110 Tons / Flight' },
        { label: 'Transit Time', val: '24 - 72 Hours' },
        { label: 'Coverage', val: '150+ Air Hubs' },
      ],
    },
    {
      id: 'sea',
      title: 'Ocean & Sea Freight',
      icon: Anchor,
      image: seaImg,
      subtitle: 'FCL & LCL Ocean Freight Trade Lanes',
      transit: '10 - 25 Days Ocean Transit',
      description:
        'Cost-efficient, high-volume ocean container logistics across major maritime trade routes with flexible FCL and LCL options.',
      features: [
        'Full Container Load (FCL) & Less Than Container Load (LCL)',
        'Reefer container solutions for perishable goods',
        'Port-to-port and door-to-door multimodal freight',
        'Customs bonded storage at major deep-water ports',
      ],
      specs: [
        { label: 'Container Types', val: '20ft, 40ft, High Cube, Reefer' },
        { label: 'Transit Time', val: '10 - 25 Days' },
        { label: 'Trade Lanes', val: 'Transpacific, Transatlantic, Asia-EU' },
      ],
    },
    {
      id: 'road',
      title: 'Road & Rail Logistics',
      icon: Truck,
      image: roadImg,
      subtitle: 'Overland Fleet & Last-Mile Freight',
      transit: '24 - 48 Hours Regional',
      description:
        'Cross-border truckload (FTL) and less-than-truckload (LTL) ground transport with automated route optimization.',
      features: [
        'Dedicated modern fleet with air-ride suspension',
        'Cross-border regional trucking with rapid customs clearance',
        'Heavy-lift and oversized cargo transport solutions',
        'IoT electronic seal locks with real-time status telemetry',
      ],
      specs: [
        { label: 'Fleet Type', val: 'FTL, LTL, Climate-Controlled' },
        { label: 'Response Time', val: '< 2 Hours Dispatch' },
        { label: 'Coverage', val: 'Pan-Continental Road Networks' },
      ],
    },
    {
      id: 'warehouse',
      title: 'Smart Warehousing & Fulfillment',
      icon: Warehouse,
      image: warehouseImg,
      subtitle: 'AI-Monitored Storage & Distribution',
      transit: '24/7 Access & Fulfillment',
      description:
        'Strategic distribution hubs equipped with RFID inventory tracking, automated pick & pack, and cross-docking capabilities.',
      features: [
        'Bonded warehousing facilities near major trade ports',
        'Automated pick-and-pack fulfillment for global e-commerce',
        'Climate-monitored storage zones for high-value items',
        'Real-time inventory management system API integration',
      ],
      specs: [
        { label: 'Capacity', val: '500,000+ sq. ft. Hubs' },
        { label: 'Security', val: '24/7 RFID & Biometric Guarding' },
        { label: 'Fulfillment SLA', val: 'Same-Day Dispatch' },
      ],
    },
    {
      id: 'customs',
      title: 'Customs & Compliance Brokerage',
      icon: FileCheck2,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000',
      subtitle: 'Automated Tariff & Clearance Pre-Filing',
      transit: 'Instant Automated Clearance',
      description:
        'Experienced customs brokers ensuring frictionless compliance, duty drawback, and tariff classification across all borders.',
      features: [
        'Pre-filing electronic customs entries before vessel arrival',
        'Automated tariff estimation & duty calculations',
        'Comprehensive import/export compliance auditing',
        'Dedicated licensed customs specialists in 40+ countries',
      ],
      specs: [
        { label: 'Clearance Speed', val: '< 4 Hours Average' },
        { label: 'Countries Covered', val: '120+ Border Posts' },
        { label: 'Accuracy Rate', val: '99.8% First-Pass Clearance' },
      ],
    },
  ];

  const filteredServices =
    selectedService === 'all'
      ? services
      : services.filter((s) => s.id === selectedService);

  return (
    <div className="w-full text-white bg-[#041730] min-h-screen">
      {/* Hero Banner Section with Logistics Overlay */}
      <section className="relative min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] flex items-center px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
            alt="End-to-End Logistics Solutions"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* Deep Blue Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021f4a]/95 via-[#023378]/88 to-[#022a63]/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[#032a63]/50" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-8xl mx-auto w-full py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
              <span className="w-6 sm:w-8 h-[2px] bg-[#f5821f] inline-block" />
              <span>WHAT WE OFFER</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              End-to-End Logistics <br className="hidden sm:inline" />
              Solutions Worldwide
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-blue-100/90 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl">
              From a single parcel to an entire supply chain — NexCargo delivers tailored logistics services built for the demands of global trade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Complete Service Portfolio Section */}
      <section className="bg-[#f8fafc] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Our Complete Service Portfolio
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal">
              Every mode, every route, every industry — handled with precision and care.
            </p>
          </div>

          {/* Top Featured 2-Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* 1. Air Freight Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    src={airImg}
                    alt="Air Freight Cargo Airplane"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#f5821f] text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    MOST POPULAR
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0256cc] flex items-center justify-center shrink-0 shadow-sm">
                      <Plane className="w-6 h-6" />
                    </div>
                    <Link
                      to="/services/air-freight"
                      className="text-[#f5821f] hover:text-[#d96e0f] font-bold text-sm sm:text-base flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                    Air Freight
                  </h3>

                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                    The fastest way to move high-value or time-sensitive cargo across continents. Express, standard, and charter options covering 3,500+ airports worldwide with full door-to-door service.
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-[#edf4ff] text-[#0256cc] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full">
                      Express Delivery
                    </span>
                    <span className="bg-[#edf4ff] text-[#0256cc] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full">
                      Charter Flights
                    </span>
                    <span className="bg-[#edf4ff] text-[#0256cc] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full">
                      Door-to-Door
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 2. Sea Freight Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    src={seaImg}
                    alt="Sea Freight Container Ship"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#10b981] text-white font-extrabold text-[11px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    COST EFFICIENT
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#023f99] text-white flex items-center justify-center shrink-0 shadow-md">
                      <Anchor className="w-6 h-6" />
                    </div>
                    <Link
                      to="/services/ocean-freight"
                      className="text-[#f5821f] hover:text-[#d96e0f] font-bold text-sm sm:text-base flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
                    Sea Freight
                  </h3>

                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
                    Cost-effective ocean freight for large volumes. FCL, LCL, RoRo, and bulk shipping across all major trade lanes. Integrated port-to-port and door-to-door solutions.
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="bg-[#edf4ff] text-[#0256cc] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full">
                      FCL & LCL
                    </span>
                    <span className="bg-[#edf4ff] text-[#0256cc] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full">
                      Bulk Cargo
                    </span>
                    <span className="bg-[#edf4ff] text-[#0256cc] font-semibold text-xs sm:text-sm px-4 py-2 rounded-full">
                      RoRo Shipping
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom 3 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. Road & Rail Freight */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
                    alt="Road & Rail Freight"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0256cc] flex items-center justify-center mb-5">
                    <Truck className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Road & Rail Freight
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    FTL, LTL ground transportation and high-volume rail cargo connecting global trade corridors efficiently.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-7 sm:px-7">
                <Link
                  to="/services/road-rail-freight"
                  className="text-[#f5821f] hover:text-[#d96e0f] font-bold text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* 2. Customs Clearance */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                    alt="Customs Clearance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="w-11 h-11 rounded-2xl bg-[#023f99] text-white flex items-center justify-center mb-5 shadow-sm">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Customs & Compliance
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Expert customs brokerage navigating complex global regulations, tariffs, and pre-filing entries seamlessly.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-7 sm:px-7">
                <Link
                  to="/services/customs-compliance"
                  className="text-[#f5821f] hover:text-[#d96e0f] font-bold text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* 3. Smart Warehousing */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-[24px] overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
                    alt="Smart Warehousing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="w-11 h-11 rounded-2xl bg-[#023f99] text-white flex items-center justify-center mb-5 shadow-sm">
                    <Warehouse className="w-5 h-5" />
                  </div>
                  <h4 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                    Smart Warehousing
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    Climate-controlled storage at 120+ strategic global hubs with real-time RFID inventory tracking.
                  </p>
                </div>
              </div>
              <div className="px-6 pb-7 sm:px-7">
                <Link
                  to="/services/smart-warehousing"
                  className="text-[#f5821f] hover:text-[#d96e0f] font-bold text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Built for Every Industry Section */}
      <section className="bg-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900 border-t border-slate-100">
        <div className="max-w-8xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              INDUSTRIES
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Built for Every Industry
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-normal">
              Specialized logistics solutions for the unique demands of each sector.
            </p>
          </div>

          {/* 8 Industries Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Laptop,
                title: 'Technology',
                description: 'Secure handling of sensitive electronics and semiconductor components.',
              },
              {
                icon: Pill,
                title: 'Healthcare & Pharma',
                description: 'Cold-chain and temperature-controlled logistics for medical cargo.',
              },
              {
                icon: Shirt,
                title: 'Fashion & Retail',
                description: 'Fast-fashion and seasonal logistics with peak-season scalability.',
              },
              {
                icon: Car,
                title: 'Automotive',
                description: 'JIT delivery and RoRo shipping for vehicles and parts.',
              },
              {
                icon: Utensils,
                title: 'Food & Beverage',
                description: 'Fresh produce and perishables logistics with reefer containers.',
              },
              {
                icon: HardHat,
                title: 'Energy & Mining',
                description: 'Heavy lift, project cargo, and oversized shipment expertise.',
              },
              {
                icon: ShoppingBag,
                title: 'E-Commerce',
                description: 'Last-mile fulfillment and returns management at global scale.',
              },
              {
                icon: Plane,
                title: 'Aerospace & Defense',
                description: 'Classified cargo handling with top-tier security protocols.',
              },
            ].map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[20px] p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center text-[#023f99] mb-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
                      {ind.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-normal">
                      {ind.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ready to Ship with NexCargo CTA Section */}
      <section className="bg-[#022863] py-20 sm:py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Ship with NexCargo?
          </h2>
          <p className="text-blue-100/90 text-base sm:text-lg font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
            Tell us about your cargo and get a tailored solution from our experts within 2 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#f5821f] hover:bg-[#e07316] text-white font-bold rounded-xl shadow-lg shadow-orange-600/20 transition-all cursor-pointer text-sm sm:text-base"
            >
              Request a Quote
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/25 transition-all text-sm sm:text-base inline-flex items-center justify-center"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
