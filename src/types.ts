export type NavItem = 'Home' | 'About' | 'Services' | 'Tracking' | 'Pricing' | 'Careers' | 'Blog';

export type FreightType = 'air' | 'ocean' | 'express' | 'customs';

export interface TrackingEvent {
  time: string;
  location: string;
  description: string;
  completed: boolean;
  current?: boolean;
}

export interface ShipmentDetails {
  trackingNumber: string;
  origin: string;
  destination: string;
  carrier: string;
  serviceType: string;
  status: 'In Transit' | 'Out for Delivery' | 'Delivered' | 'Customs Clearance';
  eta: string;
  progressPercent: number;
  weight: string;
  pieces: number;
  events: TrackingEvent[];
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  weightKg: number;
  volumeCbm: number;
  freightType: FreightType;
  cargoType: string;
}

export interface QuoteEstimate {
  priceUsd: number;
  transitDaysMin: number;
  transitDaysMax: number;
  co2Kg: number;
}
