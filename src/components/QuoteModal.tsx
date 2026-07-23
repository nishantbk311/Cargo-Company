import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plane, Ship, Truck, ShieldCheck, ArrowRight, CheckCircle2, Calculator } from 'lucide-react';
import { FreightType } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [origin, setOrigin] = useState('Frankfurt (FRA)');
  const [destination, setDestination] = useState('London Heathrow (LHR)');
  const [weightKg, setWeightKg] = useState(450);
  const [volumeCbm, setVolumeCbm] = useState(2.5);
  const [freightType, setFreightType] = useState<FreightType>('air');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate live estimate
  const getEstimate = () => {
    let ratePerKg = 3.2;
    let basePrice = 250;
    let days = '1 - 2 Days';

    if (freightType === 'air') {
      ratePerKg = 4.8;
      basePrice = 300;
      days = '1 - 2 Days';
    } else if (freightType === 'ocean') {
      ratePerKg = 1.2;
      basePrice = 180;
      days = '12 - 18 Days';
    } else if (freightType === 'express') {
      ratePerKg = 7.5;
      basePrice = 400;
      days = 'Same Day / Next Day';
    } else if (freightType === 'customs') {
      ratePerKg = 0.8;
      basePrice = 150;
      days = 'Instant Duty Estimate';
    }

    const calculatedPrice = Math.round(basePrice + weightKg * ratePerKg + volumeCbm * 45);
    return { calculatedPrice, days };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  const estimate = getEstimate();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Dialog Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0d2a50] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Instant Cargo Quote</h3>
                <p className="text-xs sm:text-sm text-slate-300">Get an automated freight rate & timeline calculation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold">Quote Request Received!</h4>
              <p className="text-slate-300 max-w-md mx-auto text-sm">
                Our logistics coordinators have reserved your rate lock for <span className="font-bold text-amber-400">${estimate.calculatedPrice} USD</span> from {origin} to {destination}. Reference ID: <span className="font-mono text-white bg-slate-800 px-2 py-1 rounded">NX-Q{Math.floor(1000 + Math.random()*9000)}</span>
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="mt-4 bg-[#f5821f] hover:bg-[#e07212] text-white font-bold px-6 py-2.5 rounded-xl"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Freight Type Tabs */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Select Transportation Mode
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'air', label: 'Air Freight', icon: Plane },
                    { id: 'ocean', label: 'Ocean Express', icon: Ship },
                    { id: 'express', label: 'Priority Delivery', icon: Truck },
                    { id: 'customs', label: 'Customs Only', icon: ShieldCheck },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = freightType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFreightType(item.id as FreightType)}
                        className={`flex flex-col items-center justify-center p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-500 text-amber-300 shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5 mb-1.5" />
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Origin Port / City
                  </label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full bg-slate-900/60 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-400"
                    placeholder="e.g. Frankfurt (FRA)"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Destination Port / City
                  </label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-900/60 border border-white/15 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-amber-400"
                    placeholder="e.g. London Heathrow (LHR)"
                    required
                  />
                </div>
              </div>

              {/* Weight & Volume Sliders */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/40 border border-white/10 p-4 rounded-xl">
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Cargo Weight</span>
                    <span className="text-amber-400 font-bold">{weightKg} kg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>

                <div className="bg-slate-900/40 border border-white/10 p-4 rounded-xl">
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1">
                    <span>Total Volume</span>
                    <span className="text-amber-400 font-bold">{volumeCbm} CBM</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="50"
                    step="0.5"
                    value={volumeCbm}
                    onChange={(e) => setVolumeCbm(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Estimate Result Box */}
              <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <div className="text-xs text-amber-200 uppercase font-semibold">Calculated Estimate</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    ${estimate.calculatedPrice.toLocaleString()} <span className="text-xs font-normal text-slate-300">USD</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-0.5">Est. Transit: {estimate.days}</div>
                </div>
                <button
                  type="submit"
                  className="bg-[#f5821f] hover:bg-[#e07212] text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg shadow-orange-600/30 transition-all cursor-pointer"
                >
                  Confirm Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
