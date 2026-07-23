import { Anchor, ArrowRight, Plane, Truck, Warehouse } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
import { Link } from 'react-router-dom';

import airFreightImg from '../assets/images/air_freight_service_1784785526346.jpg';
import roadTransportImg from '../assets/images/road_transport_service_1784785551273.jpg';
import seaFreightImg from '../assets/images/sea_freight_service_1784785539758.jpg';
import warehouseImg from '../assets/images/warehouse_service_1784785561840.jpg';

interface CoreServicesProps {
  onOpenQuote?: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const CoreServices: React.FC<CoreServicesProps> = () => {
  const services = [
    {
      id: 'air',
      title: 'Air Freight',
      icon: Plane,
      image: airFreightImg,
      path: '/services/air-freight',
      description:
        'Fast and reliable air cargo services connecting major hubs worldwide with express and standard options.',
    },
    {
      id: 'sea',
      title: 'Sea Freight',
      icon: Anchor,
      image: seaFreightImg,
      path: '/services/ocean-freight',
      description:
        'Cost-effective ocean freight solutions for large volumes, FCL and LCL services across all major trade lanes.',
    },
    {
      id: 'road',
      title: 'Road Transport',
      icon: Truck,
      image: roadTransportImg,
      path: '/services/road-rail-freight',
      description:
        'Door-to-door ground transportation with a vast fleet ensuring seamless last-mile delivery.',
    },
    {
      id: 'warehouse',
      title: 'Warehousing',
      icon: Warehouse,
      image: warehouseImg,
      path: '/services/smart-warehousing',
      description:
        'Secure storage facilities with inventory management and distribution services across strategic locations.',
    },
  ];

  return (
    <section className="w-full bg-[#f6f9fc] py-16 sm:py-20 lg:py-24 border-b border-slate-200 text-slate-900">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2340] tracking-tight mb-4">
            Our Core Services
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
            Comprehensive logistics solutions tailored to meet the demands of modern global trade.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 flex flex-col sm:flex-row group transition-all duration-300"
              >
                {/* Image Left Side */}
                <div className="w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto relative overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content Right Side */}
                <div className="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    {/* Light Blue Icon Box */}
                    <div className="w-12 h-12 bg-[#e0f2fe] text-[#0284c7] rounded-2xl flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0c2340] mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <Link
                    to={service.path}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#f5821f] hover:text-[#e07212] transition-colors w-fit group/btn cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Services Center Button */}
        <div className="flex justify-center">
          <Link
            to="/services"
            className="px-7 py-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-[#0c2340] font-bold text-sm shadow-sm hover:shadow transition-all hover:border-slate-300 cursor-pointer inline-flex items-center gap-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-slate-600" />
          </Link>
        </div>
      </div>
    </section>
  );
};
