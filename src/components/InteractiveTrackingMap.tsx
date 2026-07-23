import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import { Plane, Navigation, LocateFixed, Eye, Layers, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export interface RouteCoordinate {
  lat: number;
  lng: number;
  name?: string;
}

export interface MapShipmentData {
  id: string;
  mode: 'air' | 'sea' | 'road';
  origin: {
    name: string;
    code: string;
    lat: number;
    lng: number;
    facility: string;
  };
  destination: {
    name: string;
    code: string;
    lat: number;
    lng: number;
    facility: string;
  };
  currentPos: {
    lat: number;
    lng: number;
    locationName: string;
    altitude?: string;
    speed?: string;
    heading?: number;
  };
  waypoints: { lat: number; lng: number }[];
}

interface InteractiveTrackingMapProps {
  shipmentId: string;
}

// Generate coordinate details based on shipment ID
const getShipmentMapConfig = (id: string): MapShipmentData => {
  if (id.includes('7731')) {
    // Ocean Freight - Singapore to Rotterdam
    return {
      id,
      mode: 'sea',
      origin: {
        name: 'Singapore Port',
        code: 'SGP',
        lat: 1.264,
        lng: 103.840,
        facility: 'PSA Singapore Gateway',
      },
      destination: {
        name: 'Rotterdam Port',
        code: 'RTM',
        lat: 51.885,
        lng: 4.285,
        facility: 'Maasvlakte II Hub',
      },
      currentPos: {
        lat: 27.80,
        lng: 34.30,
        locationName: 'Red Sea / Gulf of Suez Entry',
        speed: '19.4 knots',
        heading: 320,
      },
      waypoints: [
        { lat: 1.264, lng: 103.840 },
        { lat: 5.95, lng: 95.2 },
        { lat: 12.8, lng: 45.0 },
        { lat: 27.80, lng: 34.30 },
        { lat: 31.25, lng: 32.30 },
        { lat: 36.0, lng: -5.35 },
        { lat: 51.885, lng: 4.285 },
      ],
    };
  }

  if (id.includes('9001')) {
    // Air Freight - Hamburg to New York
    return {
      id,
      mode: 'air',
      origin: {
        name: 'Hamburg Airport',
        code: 'HAM',
        lat: 53.630,
        lng: 9.988,
        facility: 'Hamburg Air Cargo Hub',
      },
      destination: {
        name: 'New York JFK',
        code: 'JFK',
        lat: 40.641,
        lng: -73.778,
        facility: 'JFK Cargo Terminal 4',
      },
      currentPos: {
        lat: 51.2,
        lng: -35.4,
        locationName: 'Mid-North Atlantic Airspace',
        altitude: '38,000 ft',
        speed: '895 km/h',
        heading: 260,
      },
      waypoints: [
        { lat: 53.630, lng: 9.988 },
        { lat: 55.0, lng: -8.0 },
        { lat: 51.2, lng: -35.4 },
        { lat: 45.0, lng: -60.0 },
        { lat: 40.641, lng: -73.778 },
      ],
    };
  }

  // Default: Air Freight - Shanghai (PVG) to Frankfurt (FRA)
  return {
    id,
    mode: 'air',
    origin: {
      name: 'Shanghai Pudong',
      code: 'PVG',
      lat: 31.144,
      lng: 121.808,
      facility: 'PVG Freight Terminal 2',
    },
    destination: {
      name: 'Frankfurt Airport',
      code: 'FRA',
      lat: 50.037,
      lng: 8.562,
      facility: 'Frankfurt CargoCity South',
    },
    currentPos: {
      lat: 42.5,
      lng: 58.2,
      locationName: 'Over Caspian Sea / Central Asia',
      altitude: '36,000 ft',
      speed: '880 km/h',
      heading: 290,
    },
    waypoints: [
      { lat: 31.144, lng: 121.808 },
      { lat: 38.0, lng: 95.0 },
      { lat: 42.5, lng: 58.2 },
      { lat: 48.0, lng: 30.0 },
      { lat: 50.037, lng: 8.562 },
    ],
  };
};

export const InteractiveTrackingMap: React.FC<InteractiveTrackingMapProps> = ({ shipmentId }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const [activeLayer, setActiveLayer] = useState<'street' | 'satellite' | 'dark'>('street');
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  const config = getShipmentMapConfig(shipmentId);

  // Map Tile Source URLs
  const tileLayers = {
    street: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
  };

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Destroy existing map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet Map
    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
    });

    mapInstanceRef.current = map;

    // Add Initial Tile Layer
    const tileLayer = L.tileLayer(tileLayers[activeLayer], {
      maxZoom: 18,
      subdomains: 'abcd',
    }).addTo(map);

    tileLayerRef.current = tileLayer;

    // Coordinates setup
    const originCoords: [number, number] = [config.origin.lat, config.origin.lng];
    const destCoords: [number, number] = [config.destination.lat, config.destination.lng];
    const currentCoords: [number, number] = [config.currentPos.lat, config.currentPos.lng];

    // Create Custom Div Icons
    // 1. Origin Icon
    const originIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div style="
          background: #ffffff;
          border: 2px solid #023f99;
          border-radius: 12px;
          padding: 4px 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
          transform: translate(-50%, -100%);
        ">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #023f99;"></span>
          <div style="line-height: 1.1;">
            <div style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase;">Origin</div>
            <div style="font-size: 12px; font-weight: 800; color: #0f172a;">${config.origin.code}</div>
          </div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    // 2. Destination Icon
    const destIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div style="
          background: #ffffff;
          border: 2px solid #f5821f;
          border-radius: 12px;
          padding: 4px 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.18);
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
          transform: translate(-50%, -100%);
        ">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #f5821f;"></span>
          <div style="line-height: 1.1;">
            <div style="font-size: 10px; font-weight: 800; color: #64748b; text-transform: uppercase;">Destination</div>
            <div style="font-size: 12px; font-weight: 800; color: #0f172a;">${config.destination.code}</div>
          </div>
        </div>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    // 3. Live Animated Vehicle Icon
    const vehicleIcon = L.divIcon({
      className: 'custom-vehicle-marker',
      html: `
        <div style="position: relative; transform: translate(-50%, -50%);">
          <!-- Pulse Ring -->
          <div style="
            position: absolute;
            top: -10px;
            left: -10px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(245, 130, 31, 0.35);
            animation: pulse-ring 2s infinite;
          "></div>
          
          <!-- Center Badge -->
          <div style="
            position: relative;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #033b8a;
            border: 2px solid #ffffff;
            box-shadow: 0 4px 14px rgba(3, 59, 138, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
          ">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              ${
                config.mode === 'sea'
                  ? '<path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"/><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"/>'
                  : '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 5.2c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z"/>'
              }
            </svg>
          </div>
        </div>
        <style>
          @keyframes pulse-ring {
            0% { transform: scale(0.6); opacity: 1; }
            100% { transform: scale(1.6); opacity: 0; }
          }
        </style>
      `,
      iconSize: [0, 0],
      iconAnchor: [0, 0],
    });

    // Add Markers to Map
    const originMarker = L.marker(originCoords, { icon: originIcon }).addTo(map);
    originMarker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <strong style="font-size: 13px; color: #023f99;">${config.origin.name} (${config.origin.code})</strong>
        <div style="font-size: 11px; color: #475569; margin-top: 2px;">${config.origin.facility}</div>
        <div style="font-size: 10px; font-weight: 700; color: #16a34a; margin-top: 4px;">✔ Departed & Cleared</div>
      </div>
    `);

    const destMarker = L.marker(destCoords, { icon: destIcon }).addTo(map);
    destMarker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px;">
        <strong style="font-size: 13px; color: #f5821f;">${config.destination.name} (${config.destination.code})</strong>
        <div style="font-size: 11px; color: #475569; margin-top: 2px;">${config.destination.facility}</div>
        <div style="font-size: 10px; font-weight: 700; color: #023f99; margin-top: 4px;">📍 Final Destination</div>
      </div>
    `);

    const vehicleMarker = L.marker(currentCoords, { icon: vehicleIcon }).addTo(map);
    vehicleMarker.bindPopup(`
      <div style="font-family: 'Plus Jakarta Sans', sans-serif; padding: 4px; min-width: 160px;">
        <div style="display: flex; align-items: center; gap: 6px; font-weight: 800; font-size: 13px; color: #033b8a;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #f5821f;"></span>
          LIVE POSITION
        </div>
        <div style="font-size: 11px; font-weight: 700; color: #1e293b; margin-top: 4px;">${config.currentPos.locationName}</div>
        ${config.currentPos.speed ? `<div style="font-size: 11px; color: #64748b; margin-top: 2px;">Speed: <strong>${config.currentPos.speed}</strong></div>` : ''}
        ${config.currentPos.altitude ? `<div style="font-size: 11px; color: #64748b;">Altitude: <strong>${config.currentPos.altitude}</strong></div>` : ''}
      </div>
    `);

    // Draw Route Polyline
    const routePoints: [number, number][] = config.waypoints.map((wp) => [wp.lat, wp.lng]);

    // Dashed Background Route Line
    L.polyline(routePoints, {
      color: '#94a3b8',
      weight: 3,
      dashArray: '6, 8',
      opacity: 0.6,
    }).addTo(map);

    // Active Highlight Polyline (Origin to Current Position)
    const activeRoutePoints: [number, number][] = [
      routePoints[0],
      ...routePoints.filter((_, idx) => idx > 0 && idx <= Math.floor(routePoints.length / 2)),
      currentCoords,
    ];

    L.polyline(activeRoutePoints, {
      color: '#f5821f',
      weight: 4,
      opacity: 0.95,
    }).addTo(map);

    // Fit Bounds to show all points neatly
    const bounds = L.latLngBounds([originCoords, destCoords, currentCoords]);
    map.fitBounds(bounds, { padding: [50, 50] });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [shipmentId, activeLayer]);

  // Layer Switch Handler
  const handleTileChange = (type: 'street' | 'satellite' | 'dark') => {
    setActiveLayer(type);
  };

  // Zoom controls
  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      const currentCoords: [number, number] = [config.currentPos.lat, config.currentPos.lng];
      mapInstanceRef.current.flyTo(currentCoords, 6, { duration: 1.2 });
    }
  };

  const handleFitAll = () => {
    if (mapInstanceRef.current) {
      const bounds = L.latLngBounds([
        [config.origin.lat, config.origin.lng],
        [config.destination.lat, config.destination.lng],
        [config.currentPos.lat, config.currentPos.lng],
      ]);
      mapInstanceRef.current.fitBounds(bounds, { padding: [40, 40] });
    }
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-900 group">
      {/* Real Interactive Leaflet Container */}
      <div ref={mapContainerRef} className="w-full h-[320px] sm:h-[380px] lg:h-[420px] z-0" />

      {/* Top Floating Control Bar: View Switcher & Center */}
      <div className="absolute top-3 left-3 right-3 z-[400] flex items-center justify-between pointer-events-none gap-2">
        {/* Layer Switcher */}
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200/80 flex items-center gap-1 text-xs font-bold text-slate-700">
          <button
            onClick={() => handleTileChange('street')}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              activeLayer === 'street'
                ? 'bg-[#023f99] text-white shadow-xs'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            Street Map
          </button>
          <button
            onClick={() => handleTileChange('satellite')}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              activeLayer === 'satellite'
                ? 'bg-[#023f99] text-white shadow-xs'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            Satellite
          </button>
          <button
            onClick={() => handleTileChange('dark')}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              activeLayer === 'dark'
                ? 'bg-[#023f99] text-white shadow-xs'
                : 'hover:bg-slate-100 text-slate-600'
            }`}
          >
            Dark Radar
          </button>
        </div>

        {/* Recenter & Fit Controls */}
        <div className="pointer-events-auto flex items-center gap-1.5">
          <button
            onClick={handleRecenter}
            title="Focus on Cargo"
            className="px-3 py-1.5 bg-white/95 backdrop-blur-md hover:bg-slate-50 text-slate-800 font-bold text-xs rounded-xl shadow-md border border-slate-200/80 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <LocateFixed className="w-3.5 h-3.5 text-[#f5821f]" />
            <span className="hidden sm:inline">Track Position</span>
          </button>
          <button
            onClick={handleFitAll}
            title="Reset Full Route View"
            className="p-1.5 bg-white/95 backdrop-blur-md hover:bg-slate-50 text-slate-800 rounded-xl shadow-md border border-slate-200/80 transition-all cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right Side Zoom Controls */}
      <div className="absolute right-3 top-16 z-[400] flex flex-col gap-1 bg-white/95 backdrop-blur-md rounded-xl p-1 shadow-md border border-slate-200/80">
        <button
          onClick={handleZoomIn}
          title="Zoom In"
          className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-lg transition-colors cursor-pointer"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <div className="w-full h-[1px] bg-slate-200" />
        <button
          onClick={handleZoomOut}
          title="Zoom Out"
          className="p-1.5 hover:bg-slate-100 text-slate-700 rounded-lg transition-colors cursor-pointer"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Floating Live Telemetry Info Overlay */}
      <div className="absolute bottom-3 left-3 right-3 z-[400] bg-slate-900/90 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl border border-slate-700/80 shadow-xl flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f5821f] animate-ping shrink-0" />
          <div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              LIVE CARGO RADAR
            </div>
            <div className="font-extrabold text-white text-xs sm:text-sm">
              {config.currentPos.locationName}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-300 font-medium">
          {config.currentPos.speed && (
            <div>
              <span className="text-slate-400 text-[10px] block font-bold">SPEED</span>
              <span className="font-extrabold text-white">{config.currentPos.speed}</span>
            </div>
          )}
          {config.currentPos.altitude && (
            <div>
              <span className="text-slate-400 text-[10px] block font-bold">ALTITUDE</span>
              <span className="font-extrabold text-white">{config.currentPos.altitude}</span>
            </div>
          )}
          <div>
            <span className="text-slate-400 text-[10px] block font-bold">STATUS</span>
            <span className="font-bold text-emerald-400">In Transit — On Schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
};
