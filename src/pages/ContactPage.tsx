import {
    Building2,
    CheckCircle2,
    Clock,
    Globe2,
    Mail,
    MapPin,
    MessageSquare,
    Phone,
    Send,
} from 'lucide-react';
import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: 'General Inquiry',
        message: '',
      });
    }, 4000);
  };

  const offices = [
    {
      city: 'Frankfurt Hub (EU Headquarters)',
      address: 'Cargo City Süd, Geb. 501, 60549 Frankfurt am Main, Germany',
      phone: '+49 69 1234 5678',
      email: 'eu.ops@nexcargo.com',
      hours: '24/7 Air & Customs Ops',
    },
    {
      city: 'New York (Americas Headquarters)',
      address: '100 Cargo Way, Building 14, JFK Intl Airport, NY 11430, USA',
      phone: '+1 (800) 555-1234',
      email: 'us.ops@nexcargo.com',
      hours: 'Mon-Sun: 24 Hours',
    },
    {
      city: 'Singapore (Asia Pacific Hub)',
      address: '7 Changi South Street 2, Singapore 486351',
      phone: '+65 6789 0123',
      email: 'apac.ops@nexcargo.com',
      hours: '24/7 Regional Logistics',
    },
    {
      city: 'Dubai (Middle East & Africa Hub)',
      address: 'Dubai South Logistics District, Gate 4, UAE',
      phone: '+971 4 800 9000',
      email: 'mea.ops@nexcargo.com',
      hours: '24/7 Bonded Warehouse',
    },
  ];

  return (
    <div className="w-full text-white bg-[#061e3d] min-h-screen py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-8xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
            <MessageSquare className="w-4 h-4" /> 24/7 Global Dispatch & Support
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Get in Touch with Our Trade Experts
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have questions about a shipment, tariff classifications, or custom charter solutions? Our global team is standing by around the clock.
          </p>
        </div>

        {/* Contact Form & Contact Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Side (7 cols) */}
          <div className="lg:col-span-7 bg-[#082247] p-8 sm:p-10 rounded-3xl border border-white/15 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-2">Send Us a Direct Message</h2>
            <p className="text-xs sm:text-sm text-slate-300 mb-8">
              Fill out the form below and a dedicated freight manager will respond within 15 minutes.
            </p>

            {formSent ? (
              <div className="bg-emerald-500/20 border border-emerald-500/40 p-8 rounded-2xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-200">
                  Thank you, <span className="text-amber-400 font-bold">{formData.name || 'Valued Partner'}</span>. Your inquiry has been routed to our regional logistics operations desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Corporate Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Inquiry Topic</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="General Inquiry">General Logistics Inquiry</option>
                      <option value="Freight Rate Quote">Freight Rate Quote</option>
                      <option value="Customs Brokerage">Customs Brokerage & Clearance</option>
                      <option value="Tracking Assistance">Tracking & Cargo Location</option>
                      <option value="Partnership">Carrier / Fleet Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Message Details</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your cargo, route requirements, or specific questions..."
                    className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Direct Hotlines (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#082247] p-8 rounded-3xl border border-white/15 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-amber-400" /> Direct Hotline Directory
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-[#04152c] border border-white/10">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">24/7 Air Cargo Hotline</div>
                  <div className="text-lg font-mono font-bold text-white">+1 (800) 555-AIR-LOGS</div>
                  <div className="text-xs text-slate-400 mt-0.5">Instant booking & charter dispatch</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#04152c] border border-white/10">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">Customs Clearance Help Desk</div>
                  <div className="text-lg font-mono font-bold text-white">+1 (800) 555-CUSTOMS</div>
                  <div className="text-xs text-slate-400 mt-0.5">Tariff codes, duties & pre-filings</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#04152c] border border-white/10">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">General Customer Support</div>
                  <div className="text-lg font-mono font-bold text-white">support@nexcargo.com</div>
                  <div className="text-xs text-slate-400 mt-0.5">15-minute SLA response guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hubs Grid */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 flex items-center gap-2">
            <Building2 className="w-6 h-6 text-amber-400" /> Regional Operations Hubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-[#082247] p-6 rounded-3xl border border-white/10 space-y-3 hover:border-amber-400/40 transition-colors"
              >
                <div className="font-bold text-amber-300 text-base">{office.city}</div>
                <div className="text-xs text-slate-300 flex items-start gap-2 leading-relaxed">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="text-xs text-slate-300 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{office.email}</span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-2 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" /> {office.hours}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
