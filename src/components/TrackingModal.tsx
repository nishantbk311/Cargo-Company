import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, CheckCircle, Clock, Plane, Navigation, Shield, PackageCheck } from 'lucide-react';
import { ShipmentDetails } from '../types';

interface TrackingModalProps {
  isOpen: boolean;
  initialTrackingNumber?: string;
  onClose: () => void;
}

const mockShipments: Record<string, ShipmentDetails> = {
  'NX-8842': {
    trackingNumber: 'NX-8842',
    origin: 'Frankfurt (FRA)',
    destination: 'London (LHR)',
    carrier: 'NexCargo Air Express B777F',
    serviceType: 'Priority Air Freight',
    status: 'In Transit',
    eta: 'Today, 2h 34m remaining',
    progressPercent: 42,
    weight: '1,240 kg',
    pieces: 4,
    events: [
      { time: '08:30 AM', location: 'Frankfurt Hub (FRA)', description: 'Shipment received and weighed at origin facility', completed: true },
      { time: '10:15 AM', location: 'Frankfurt Hub (FRA)', description: 'Customs declaration cleared and air waybill assigned', completed: true },
      { time: '11:45 AM', location: 'Frankfurt Int Airport', description: 'Loaded onto flight NX-8842 aircraft', completed: true },
      { time: '12:20 PM', location: 'Cruising Airspace', description: 'In flight to London Heathrow (Altitude: 34,000 ft)', completed: true, current: true },
      { time: '02:15 PM', location: 'London Heathrow (LHR)', description: 'Expected arrival and priority unloading', completed: false },
      { time: '03:00 PM', location: 'London City Center', description: 'Final door-to-door courier dispatch', completed: false },
    ],
  },
  'NX-9210': {
    trackingNumber: 'NX-9210',
    origin: 'Singapore (SIN)',
    destination: 'Los Angeles (LAX)',
    carrier: 'NexCargo Ocean Logistics',
    serviceType: 'Ocean Freight FCL',
    status: 'In Transit',
    eta: 'July 28, 2026',
    progressPercent: 68,
    weight: '14,800 kg',
    pieces: 1,
    events: [
      { time: 'July 15', location: 'Port of Singapore', description: '40ft High Cube Container loaded on vessel', completed: true },
      { time: 'July 20', location: 'Pacific Transit Zone', description: 'Vessel maintaining 19.5 knots on direct route', completed: true, current: true },
      { time: 'July 27', location: 'Port of Los Angeles', description: 'Scheduled berth and terminal clearance', completed: false },
    ],
  },
};

export const TrackingModal: React.FC<TrackingModalProps> = ({
  isOpen,
  initialTrackingNumber = 'NX-8842',
  onClose,
}) => {
  const [searchInput, setSearchInput] = useState(initialTrackingNumber);
  const [currentShipment, setCurrentShipment] = useState<ShipmentDetails>(
    mockShipments[initialTrackingNumber] || mockShipments['NX-8842']
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanQuery = searchInput.trim().toUpperCase();
    if (mockShipments[cleanQuery]) {
      setCurrentShipment(mockShipments[cleanQuery]);
    } else {
      // Create custom dynamically found shipment
      setCurrentShipment({
        trackingNumber: cleanQuery || 'NX-CUSTOM',
        origin: 'Tokyo Narita (NRT)',
        destination: 'New York (JFK)',
        carrier: 'NexCargo Transpacific Express',
        serviceType: 'Standard Air Cargo',
        status: 'In Transit',
        eta: '1 Day 4 Hours',
        progressPercent: 55,
        weight: '620 kg',
        pieces: 2,
        events: [
          { time: '06:00 AM', location: 'Tokyo Logistics Hub', description: 'Package scanned into warehouse', completed: true },
          { time: '10:00 AM', location: 'Tokyo Narita Airport', description: 'Departed origin facility', completed: true, current: true },
          { time: '02:00 PM', location: 'JFK Airport NY', description: 'Expected arrival at import gate', completed: false },
        ],
      });
    }
  };

  if (!isOpen) return null;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-[#0d2a50] border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 text-white max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Real-Time Cargo Tracker</h3>
                <p className="text-xs sm:text-sm text-slate-300">Live telematics and flight progress monitor</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Enter Shipment # e.g. NX-8842, NX-9210"
                className="w-full bg-slate-900/80 border border-white/15 rounded-2xl pl-12 pr-28 py-3 text-white placeholder-slate-400 font-mono text-sm sm:text-base focus:outline-none focus:border-amber-400"
              />
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <button
                type="submit"
                className="absolute right-2 bg-[#f5821f] hover:bg-[#e07212] text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer"
              >
                Track
              </button>
            </div>
          </form>

          {/* Current Shipment Overview */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-mono font-bold text-amber-400">{currentShipment.trackingNumber}</span>
                  <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs px-2.5 py-0.5 rounded-full font-semibold">
                    {currentShipment.status}
                  </span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Carrier: {currentShipment.carrier} • {currentShipment.serviceType}
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Estimated Arrival</div>
                <div className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 justify-end">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {currentShipment.eta}
                </div>
              </div>
            </div>

            {/* Route & Progress Bar */}
            <div className="pt-4">
              <div className="flex justify-between items-center text-sm font-semibold text-white mb-2">
                <span>{currentShipment.origin}</span>
                <span className="text-xs text-amber-300 font-mono">{currentShipment.progressPercent}% Completed</span>
                <span>{currentShipment.destination}</span>
              </div>
              <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden border border-white/10 relative">
                <div
                  className="bg-gradient-to-r from-amber-500 via-orange-400 to-amber-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${currentShipment.progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Event Checkpoints Timeline */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Shipment Milestones</h4>
            <div className="relative pl-6 border-l-2 border-white/15 space-y-6">
              {currentShipment.events.map((evt, idx) => (
                <div key={idx} className="relative group">
                  {/* Circle Marker */}
                  <div className={`absolute -left-[31px] top-1 w-5 h-5 rounded-full flex items-center justify-center border ${
                    evt.completed
                      ? evt.current
                        ? 'bg-amber-500 border-amber-300 text-slate-950 ring-4 ring-amber-500/30 animate-pulse'
                        : 'bg-emerald-500 border-emerald-300 text-slate-950'
                      : 'bg-slate-800 border-white/20 text-transparent'
                  }`}>
                    {evt.completed && <CheckCircle className="w-3.5 h-3.5" />}
                  </div>

                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-sm font-bold text-white">{evt.location}</span>
                    <span className="text-xs font-mono text-slate-400">{evt.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{evt.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 text-center">
            <button
              onClick={onClose}
              className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Close Tracker
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
