import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X, Plane, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
  onOpenTracking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const servicesList = [
    { title: 'All Services', desc: 'Explore our complete global logistics portfolio', path: '/services' },
    { title: 'Air Cargo Express', desc: 'Time-critical global freight with guaranteed capacity', path: '/services/air-freight' },
    { title: 'Ocean Freight (FCL/LCL)', desc: 'Cost-efficient containerized sea logistics', path: '/services/ocean-freight' },
    { title: 'Road & Rail Freight', desc: 'Seamless overland distribution across continents', path: '/services/road-rail-freight' },
    { title: 'Customs & Compliance', desc: 'Fast automated customs clearance & duty management', path: '/services/customs-compliance' },
    { title: 'Smart Warehousing', desc: 'AI-monitored climate-controlled storage hubs', path: '/services/smart-warehousing' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Tracking', path: '/tracking' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 transition-all shadow-sm">
      <div className="py-4 px-6 md:px-12 lg:px-16 max-w-8xl mx-auto flex items-center justify-between">
      {/* Brand Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 text-2xl font-black tracking-tight cursor-pointer focus:outline-none group"
      >
        <div className="relative flex items-center justify-center bg-gradient-to-tr from-amber-500 to-orange-500 text-white p-2 rounded-lg transform group-hover:rotate-6 transition-transform duration-300 shadow-md shadow-orange-500/20">
          <Plane className="w-5 h-5 fill-white text-white" />
        </div>
        <span className="font-extrabold text-2xl tracking-tight text-slate-900">
          Nex<span className="text-[#f5821f]">Cargo</span>
        </span>
      </Link>

      {/* Desktop Navigation Links (Visible on lg: 1024px+) */}
      <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm xl:text-[15px] font-semibold text-slate-600">
        {navLinks.map((link) => {
          if (link.hasDropdown) {
            const isActive = location.pathname.startsWith('/services');
            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 py-1 cursor-pointer transition-colors whitespace-nowrap ${
                    isActive ? 'text-slate-900 font-bold' : 'hover:text-slate-900 text-slate-600'
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180 text-[#f5821f]' : 'text-slate-400'
                    }`}
                  />
                </Link>

                {/* Services Dropdown */}
                {servicesOpen && (
                  <div className="absolute top-[70%] left-0 mt-2 w-80 bg-white border border-slate-200/90 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="space-y-1">
                      {servicesList.map((srv, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setServicesOpen(false);
                            navigate(srv.path);
                          }}
                          className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 transition-colors group flex items-start justify-between cursor-pointer"
                        >
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-[#f5821f] transition-colors">
                              {srv.title}
                            </div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {srv.desc}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#f5821f] group-hover:translate-x-0.5 transition-all mt-1 opacity-0 group-hover:opacity-100" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-1 cursor-pointer transition-colors whitespace-nowrap ${
                  isActive ? 'text-slate-900 font-bold' : 'hover:text-slate-900 text-slate-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#f5821f] rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Action CTA & Mobile/Tablet Controls */}
      <div className="flex items-center gap-3">
        {/* CTA Button (Visible on sm and up) */}
        <button
          onClick={onOpenQuote}
          className="hidden sm:inline-flex items-center justify-center bg-[#f5821f] hover:bg-[#e07212] active:bg-[#c9630c] text-white text-sm xl:text-[15px] font-bold px-4 lg:px-6 py-2.5 rounded-xl shadow-md shadow-orange-500/20 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
        >
          Get a Quote
        </button>

        {/* Mobile & Tablet Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile & Tablet Slide Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mx-4 mt-2 bg-white/98 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-2xl z-50 lg:hidden flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {navLinks.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.name} className="flex flex-col">
                  <div className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-700 font-semibold text-base">
                    <NavLink
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive ? 'text-[#f5821f] font-bold' : 'text-slate-700'
                      }
                    >
                      {item.name}
                    </NavLink>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="p-1 rounded-md text-slate-500 hover:text-slate-900 focus:outline-none"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          servicesOpen ? 'rotate-180 text-[#f5821f]' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/80 rounded-xl my-1 border border-slate-100">
                      {servicesList.map((srv, idx) => (
                        <NavLink
                          key={idx}
                          to={srv.path}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setServicesOpen(false);
                          }}
                          className={({ isActive }) =>
                            `block py-2 px-3 text-sm font-medium rounded-lg transition-colors ${
                              isActive
                                ? 'text-[#f5821f] font-bold bg-orange-50/60'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                            }`
                          }
                        >
                          {srv.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left text-base font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                    isActive ? 'bg-orange-50 text-[#f5821f] font-bold' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuote();
            }}
            className="w-full sm:hidden bg-[#f5821f] hover:bg-[#e07212] text-white font-bold py-3 rounded-xl text-center shadow-md shadow-orange-500/20 mt-2 cursor-pointer"
          >
            Get a Quote
          </button>
        </div>
      )}
      </div>
    </header>
  );
};
