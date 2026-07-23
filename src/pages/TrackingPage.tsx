import {
  Check,
  CheckCircle2,
  Clock,
  Download,
  Info,
  ListFilter,
  Package,
  Plane,
  Radio,
  Scale,
  Search,
  Share2,
  Thermometer
} from 'lucide-react';
import { motion } from 'motion/react';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { InteractiveTrackingMap } from '../components/InteractiveTrackingMap';

export const TrackingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const trackingIdFromUrl = searchParams.get('id') || 'NX-8842-2024';

  const [inputVal, setInputVal] = useState(trackingIdFromUrl);
  const [activeTracking, setActiveTracking] = useState(trackingIdFromUrl);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (searchParams.get('id')) {
      setActiveTracking(searchParams.get('id')!);
      setInputVal(searchParams.get('id')!);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setActiveTracking(inputVal.trim().toUpperCase());
      setSearchParams({ id: inputVal.trim().toUpperCase() });
      setIsSearching(false);
    }, 400);
  };

  // Dynamic tracking database generator
  const getTrackingData = (id: string) => {
    const isExpress = id.includes('7731') || id.includes('9001');
    return {
      id: id,
      status: 'In Transit',
      statusType: 'in_transit',
      serviceType: isExpress ? 'Ocean Freight — FCL Express' : 'Air Freight',
      servicePriority: 'Express Priority',
      shipper: 'Nexus Electronics Ltd.',
      consignee: 'TechRetail GmbH, Frankfurt',
      incoterm: 'DAP Frankfurt',
      dimensions: '120×80×60 cm · 4 Cartons',
      declaredValue: 'USD 48,000',
      description: 'Consumer Electronics — Smartphones',
      specialHandling: 'Fragile — Handle with Care',
      origin: {
        city: 'Shanghai',
        code: 'PVG',
        facility: 'Shanghai Warehouse',
      },
      destination: {
        city: 'Frankfurt',
        code: 'FRA',
        facility: 'Frankfurt Airport · FRA',
      },
      etaHub: '2h 34m',
      weight: '128 kg',
      temp: '+4°C',
      currentStatus: {
        title: 'In Transit · Currently Flying',
        location: 'Midway over Pacific Ocean',
        etaText: 'ETA Frankfurt: Jan 15, 2024',
      },
      progressMilestones: [
        {
          title: 'Order Picked Up',
          location: 'Shanghai Warehouse',
          time: 'Jan 14, 2024 · 09:32 AM',
          status: 'completed',
        },
        {
          title: 'Customs Cleared',
          location: 'Shanghai Pudong Airport',
          time: 'Jan 14, 2024 · 02:15 PM',
          status: 'completed',
        },
        {
          title: 'Departed Origin',
          location: 'PVG — Flight NX8842',
          time: 'Jan 14, 2024 · 11:45 PM',
          status: 'completed',
        },
        {
          title: 'In Transit · Currently Flying',
          location: 'Midway over Pacific Ocean',
          time: 'ETA Frankfurt: Jan 15, 2024',
          status: 'active',
        },
        {
          title: 'Arrived at Hub',
          location: 'Frankfurt Airport · FRA',
          time: 'Expected: Jan 15, 2024',
          status: 'pending',
        },
        {
          title: 'Delivered',
          location: 'London, UK',
          time: 'Expected: Jan 16, 2024',
          status: 'pending',
        },
      ],
      historyTable: [
        {
          dateTime: 'Jan 14, 2024 · 23:45',
          location: 'Shanghai, China (PVG)',
          event: 'Departed on Flight NX8842',
          statusBadge: 'In Transit',
          badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
        },
        {
          dateTime: 'Jan 14, 2024 · 14:15',
          location: 'Shanghai, China (PVG)',
          event: 'Customs Export Cleared',
          statusBadge: 'Completed',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        },
        {
          dateTime: 'Jan 14, 2024 · 09:32',
          location: 'Shanghai, China',
          event: 'Shipment Picked Up',
          statusBadge: 'Completed',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        },
        {
          dateTime: 'Jan 13, 2024 · 16:00',
          location: 'Online',
          event: 'Booking Confirmed',
          statusBadge: 'Completed',
          badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        },
      ],
      deliveryInfo: {
        expectedDate: 'Jan 16, 2024',
        timeWindow: 'Between 09:00 — 17:00',
        addressCompany: 'TechRetail GmbH',
        addressStreet: 'Kaiserstrasse 10, Frankfurt',
        addressCity: 'Germany 60311',
        signatureRequired: 'Yes',
        contactPhone: '+49 69 123 4567',
      },
    };
  };

  const shipment = getTrackingData(activeTracking);

  return (
    <div className="w-full bg-[#f4f7fb] min-h-screen text-slate-900 font-sans">
      {/* 1. Hero Search Header Banner */}
      <section className="relative bg-[#023378] text-white py-16 lg:py-20 px-6 sm:px-12 text-center overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Live Shipment Tracking Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#002554] border border-blue-400/20 text-[#f5821f] font-bold text-xs uppercase tracking-wider mb-6">
            <Radio className="w-3.5 h-3.5 text-[#f5821f] animate-pulse" />
            <span>Live Shipment Tracking</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
            Track Your Shipment
          </h1>

          {/* Subtitle */}
          <p className="text-blue-100/90 text-base sm:text-lg font-normal max-w-xl mx-auto leading-relaxed mb-8">
            Enter your tracking number for real-time updates on your cargo's journey.
          </p>

          {/* Search Input Bar */}
          <form
            onSubmit={handleSearch}
            className="max-w-2xl mx-auto bg-white p-2 rounded-[20px] shadow-2xl flex items-center gap-2 mb-4"
          >
            <div className="pl-4 text-slate-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Enter tracking number..."
              className="w-full bg-transparent border-none text-slate-900 font-bold text-base sm:text-lg placeholder-slate-400 focus:outline-none px-2"
            />
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 sm:px-8 py-3.5 bg-[#033b8a] hover:bg-[#022c69] active:bg-[#011e4a] text-white font-bold text-sm sm:text-base rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0 cursor-pointer disabled:opacity-50"
            >
              <Search className="w-4 h-4" />
              <span>{isSearching ? 'Searching...' : 'Track'}</span>
            </button>
          </form>

          {/* Sample Tracking Numbers */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs sm:text-sm text-blue-200/80">
            <span className="font-medium">Try:</span>
            {['NX-8842-2024', 'NX-7731-2024', 'NX-9001-2024'].map((sampleCode) => (
              <button
                key={sampleCode}
                onClick={() => {
                  setInputVal(sampleCode);
                  setActiveTracking(sampleCode);
                  setSearchParams({ id: sampleCode });
                }}
                className="hover:text-white underline underline-offset-2 font-semibold transition-colors cursor-pointer px-1"
              >
                {sampleCode}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Tracking Result Content Section */}
      <section className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-12 py-10">
        {/* Top Header Card */}
        <motion.div
          key={activeTracking}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200/80 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
        >
          {/* Left Icon + Number + Status Badges */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#eef4ff] text-[#023f99] flex items-center justify-center shrink-0">
              <Plane className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                Tracking Number
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {shipment.id}
                </span>

                <div className="flex flex-wrap items-center gap-2">
                  {/* Status Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    {shipment.status}
                  </span>

                  {/* Service Type Badge */}
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
                    {shipment.serviceType}
                  </span>

                  {/* Service Priority Badge */}
                  <span className="px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200/80 text-xs font-medium">
                    {shipment.servicePriority}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Tracking link copied to clipboard!');
              }}
              className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Share2 className="w-4 h-4 text-slate-500" />
              <span>Share</span>
            </button>
            <button
              onClick={() => alert(`Downloading official PDF Waybill for ${shipment.id}`)}
              className="px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-slate-500" />
              <span>PDF</span>
            </button>
          </div>
        </motion.div>

        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Shipment Progress Timeline (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80">
            <h3 className="text-lg font-black text-slate-900 tracking-tight mb-6">
              Shipment Progress
            </h3>

            {/* Vertical Milestone Progress Bar */}
            <div className="relative pl-3 space-y-6">
              {shipment.progressMilestones.map((m, idx) => {
                const isCompleted = m.status === 'completed';
                const isActive = m.status === 'active';
                const isLast = idx === shipment.progressMilestones.length - 1;

                return (
                  <div key={idx} className="relative flex items-start gap-4">
                    {/* Vertical Line Connector */}
                    {!isLast && (
                      <div
                        className={`absolute left-[13px] top-7 bottom-0 w-[2px] ${
                          isCompleted ? 'bg-emerald-500' : 'bg-slate-200'
                        }`}
                      />
                    )}

                    {/* Milestone Circle Marker */}
                    <div className="relative z-10 shrink-0">
                      {isCompleted && (
                        <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                          <Check className="w-4 h-4 stroke-[3]" />
                        </div>
                      )}

                      {isActive && (
                        <div className="w-7 h-7 rounded-full bg-[#033b8a] text-white flex items-center justify-center shadow-sm ring-4 ring-blue-100">
                          <Plane className="w-3.5 h-3.5 fill-white text-white" />
                        </div>
                      )}

                      {m.status === 'pending' && (
                        <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-slate-200 text-slate-400 flex items-center justify-center" />
                      )}
                    </div>

                    {/* Content / Highlight Card */}
                    <div className="flex-1 pt-0.5">
                      {isActive ? (
                        /* Light Blue Highlighted Box for Active Event */
                        <div className="bg-blue-50/80 border border-blue-100 rounded-2xl p-4 text-left">
                          <div className="text-sm font-extrabold text-[#023f99] tracking-tight">
                            {m.title}
                          </div>
                          <div className="text-xs font-semibold text-blue-600 mt-1">
                            {m.location}
                          </div>
                          <div className="text-xs font-bold text-blue-400 mt-2">
                            {m.time}
                          </div>
                        </div>
                      ) : (
                        /* Standard Text Event */
                        <div>
                          <div
                            className={`text-sm font-bold tracking-tight ${
                              isCompleted ? 'text-slate-900' : 'text-slate-400'
                            }`}
                          >
                            {m.title}
                          </div>
                          <div className="text-xs text-slate-500 mt-0.5">
                            {m.location}
                          </div>
                          <div className="text-[11px] font-semibold text-slate-400 mt-1">
                            {m.time}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Map + Metrics + Details + History + Delivery Info (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* 1. Real Interactive Tracking Map */}
            <InteractiveTrackingMap shipmentId={shipment.id} />

            {/* 2. Three Metric Stats Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* ETA Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#023f99] flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {shipment.etaHub}
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  ETA to Hub
                </div>
              </div>

              {/* Weight Card (Dark Blue Filled) */}
              <div className="bg-[#033b8a] text-white rounded-2xl p-5 shadow-md flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-[#f5821f] flex items-center justify-center mb-2">
                  <Scale className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {shipment.weight}
                </div>
                <div className="text-xs font-medium text-blue-200 mt-0.5">
                  Shipment Weight
                </div>
              </div>

              {/* Cargo Temp Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200/80 flex flex-col items-center justify-center text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2">
                  <Thermometer className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {shipment.temp}
                </div>
                <div className="text-xs font-semibold text-slate-500 mt-0.5">
                  Cargo Temp
                </div>
              </div>
            </div>

            {/* 3. Shipment Details Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-slate-100">
                <Package className="w-5 h-5 text-[#023f99]" />
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Shipment Details
                </h3>
              </div>

              {/* Details 2-Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-sm">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    SHIPPER
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.shipper}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    CONSIGNEE
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.consignee}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    SERVICE TYPE
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.serviceType} — {shipment.servicePriority}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    INCOTERM
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.incoterm}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    DIMENSIONS
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.dimensions}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    DECLARED VALUE
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.declaredValue}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    DESCRIPTION
                  </div>
                  <div className="font-bold text-slate-900">
                    {shipment.description}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    SPECIAL HANDLING
                  </div>
                  <div className="font-bold text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-600 text-white" />
                    <span>{shipment.specialHandling}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Tracking History Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/80">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <ListFilter className="w-5 h-5 text-[#023f99]" />
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">
                    Tracking History
                  </h3>
                </div>
                <button
                  onClick={() => alert('Showing all historical events')}
                  className="text-xs font-bold text-[#023f99] hover:text-[#012a68] transition-colors cursor-pointer"
                >
                  View All Events
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="text-slate-400 uppercase tracking-wider text-[11px] font-bold border-b border-slate-100">
                      <th className="pb-3 font-bold">DATE & TIME</th>
                      <th className="pb-3 font-bold">LOCATION</th>
                      <th className="pb-3 font-bold">EVENT</th>
                      <th className="pb-3 font-bold text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {shipment.historyTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 font-semibold text-slate-600">
                          {row.dateTime}
                        </td>
                        <td className="py-3.5 font-semibold text-slate-800">
                          {row.location}
                        </td>
                        <td className="py-3.5 font-bold text-slate-900">
                          {row.event}
                        </td>
                        <td className="py-3.5 text-right">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${row.badgeColor}`}
                          >
                            {row.statusBadge}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. Delivery Information Dark Card */}
            <div className="bg-[#03152d] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800">
              <div className="flex items-center gap-2.5 mb-6">
                <Info className="w-5 h-5 text-[#f5821f]" />
                <h3 className="text-lg font-black text-white tracking-tight">
                  Delivery Information
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Expected Delivery */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    EXPECTED DELIVERY
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {shipment.deliveryInfo.expectedDate}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {shipment.deliveryInfo.timeWindow}
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    DELIVERY ADDRESS
                  </div>
                  <div className="text-sm font-bold text-white">
                    {shipment.deliveryInfo.addressCompany}
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {shipment.deliveryInfo.addressStreet}
                  </div>
                  <div className="text-xs text-slate-300">
                    {shipment.deliveryInfo.addressCity}
                  </div>
                </div>

                {/* Signature Required */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                    SIGNATURE REQUIRED
                  </div>
                  <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 fill-emerald-500 text-[#03152d]" />
                    <span>{shipment.deliveryInfo.signatureRequired}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    Contact: {shipment.deliveryInfo.contactPhone}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

