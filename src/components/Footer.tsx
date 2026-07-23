import {
    Check,
    ChevronDown,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Plane,
    Twitter,
} from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  onOpenQuote?: () => void;
  onOpenTracking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  // const [language, setLanguage] = useState('English');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Careers', path: '/careers' },
    { label: 'Blog & News', path: '/blog' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  const serviceLinks = [
    { label: 'Air Cargo Express', path: '/services/air-freight' },
    { label: 'Ocean Freight (FCL/LCL)', path: '/services/ocean-freight' },
    { label: 'Road Transport', path: '/services/road-rail-freight' },
    { label: 'Smart Warehousing', path: '/services/smart-warehousing' },
    { label: 'Customs Clearance', path: '/services/customs-compliance' },
  ];

  const resourceLinks = [
    { label: 'Live Tracking', path: '/tracking' },
    { label: 'Freight Pricing', path: '/pricing' },
    { label: 'FAQs & Support', path: '/pricing' },
    { label: 'Careers at NexCargo', path: '/careers' },
    { label: 'Industry Insights', path: '/blog' },
  ];

  return (
    <footer className="w-full bg-[#030d1b] text-white pt-16 sm:pt-20 pb-10 border-t border-slate-800/80">
      <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Top Section: Stay Updated Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
              Stay Updated
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Subscribe to our newsletter for the latest logistics insights and company news.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
          >
            <div className="relative min-w-[280px] sm:min-w-[340px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-[#08182d] border border-slate-700/60 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#f5821f] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="bg-[#f5821f] hover:bg-[#e07212] active:scale-95 text-white font-bold text-sm px-7 py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              {subscribed ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-slate-800/80 mb-12 sm:mb-16" />

        {/* Middle Main Grid (5 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 rounded-lg bg-[#f5821f]/10 text-[#f5821f]">
                <Plane className="w-6 h-6 rotate-45" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                NexCargo
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6 max-w-xs">
              Reliable, efficient, and innovative logistics solutions for a connected world.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#facebook"
                onClick={(e) => { e.preventDefault(); if (onOpenQuote) onOpenQuote(); }}
                className="w-9 h-9 rounded-xl bg-[#08182d] border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0e2748] hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => { e.preventDefault(); if (onOpenQuote) onOpenQuote(); }}
                className="w-9 h-9 rounded-xl bg-[#08182d] border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0e2748] hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => { e.preventDefault(); if (onOpenQuote) onOpenQuote(); }}
                className="w-9 h-9 rounded-xl bg-[#08182d] border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0e2748] hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => { e.preventDefault(); if (onOpenQuote) onOpenQuote(); }}
                className="w-9 h-9 rounded-xl bg-[#08182d] border border-slate-800 text-slate-400 hover:text-white hover:bg-[#0e2748] hover:border-slate-700 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-4 sm:mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-4 sm:mb-5">
              Resources
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h3 className="font-bold text-white text-sm sm:text-base mb-4 sm:mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#f5821f] shrink-0 mt-0.5" />
                <span>Bhairahawa, Nepal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#f5821f] shrink-0" />
                <span>+977-9810000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#f5821f] shrink-0" />
                <span>info@nexcargo.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="w-full h-[1px] bg-slate-800/80 mb-8" />

        {/* Bottom Bar: Copyright & Language Selector */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <div>© 2026 NexCargo Logistics Inc. All rights reserved.</div>

          {/* Language Selector Dropdown */}
          {/* <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-slate-300 font-medium py-1"
            >
              <span>Language:</span>
              <span className="font-bold text-white">{language}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-36 bg-[#08182d] border border-slate-700 rounded-xl shadow-xl py-1.5 z-30">
                {['English', 'Spanish', 'German', 'French', 'Mandarin'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-1.5 text-xs font-medium hover:bg-slate-800 transition-colors ${
                      language === lang ? 'text-[#f5821f] font-bold' : 'text-slate-300'
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </div>
    </footer>
  );
};
