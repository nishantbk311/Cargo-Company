import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { QuoteModal } from './components/QuoteModal';
import { TrackingModal } from './components/TrackingModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { AirFreightPage } from './pages/AirFreightPage';
import { OceanFreightPage } from './pages/OceanFreightPage';
import { RoadFreightPage } from './pages/RoadFreightPage';
import { CustomsPage } from './pages/CustomsPage';
import { WarehousingPage } from './pages/WarehousingPage';
import { TrackingPage } from './pages/TrackingPage';
import { PricingPage } from './pages/PricingPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [selectedTrackingNum, setSelectedTrackingNum] = useState<string>('NX-8842');

  const handleOpenTrackingModal = (num: string = 'NX-8842') => {
    setSelectedTrackingNum(num);
    setIsTrackingOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#082a54] bg-radial from-[#0c396d] via-[#082a54] to-[#041a38] text-white flex flex-col justify-between selection:bg-amber-500 selection:text-white relative">
        {/* Background Decorative Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex-1 flex flex-col">
          {/* Main Navigation Bar */}
          <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

          {/* Page View Routes */}
          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutPage onOpenQuote={() => setIsQuoteOpen(true)} />}
              />
              <Route
                path="/services"
                element={<ServicesPage onOpenQuote={() => setIsQuoteOpen(true)} />}
              />
              <Route
                path="/services/air-freight"
                element={
                  <AirFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/air"
                element={
                  <AirFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/ocean-freight"
                element={
                  <OceanFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/ocean"
                element={
                  <OceanFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/road-rail-freight"
                element={
                  <RoadFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/road-rail"
                element={
                  <RoadFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/road"
                element={
                  <RoadFreightPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/customs-compliance"
                element={
                  <CustomsPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/customs"
                element={
                  <CustomsPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/smart-warehousing"
                element={
                  <WarehousingPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route
                path="/services/warehousing"
                element={
                  <WarehousingPage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
              <Route path="/tracking" element={<TrackingPage />} />
              <Route
                path="/pricing"
                element={<PricingPage onOpenQuote={() => setIsQuoteOpen(true)} />}
              />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route
                path="*"
                element={
                  <HomePage
                    onOpenQuote={() => setIsQuoteOpen(true)}
                    onOpenTracking={(num) => handleOpenTrackingModal(num)}
                  />
                }
              />
            </Routes>
          </div>
        </div>

        {/* Global Footer */}
        <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Modals */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
        />

        <TrackingModal
          isOpen={isTrackingOpen}
          initialTrackingNumber={selectedTrackingNum}
          onClose={() => setIsTrackingOpen(false)}
        />
      </div>
    </Router>
  );
}
