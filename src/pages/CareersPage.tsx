import {
    Baby,
    Brain,
    Briefcase,
    CheckCircle,
    Code2,
    Coins,
    FileCheck,
    Globe2,
    GraduationCap,
    Heart,
    Laptop,
    Leaf,
    MapPin,
    Plane,
    Send,
    TrendingUp,
    Umbrella,
    X
} from 'lucide-react';
import React, { useState } from 'react';
import careersTeamHero from '../assets/images/careers_team_hero_1784802902712.jpg';
import cultureCheers from '../assets/images/culture_cheers_1784803096191.jpg';
import cultureConference from '../assets/images/culture_conference_1784803123303.jpg';
import cultureWhiteboard from '../assets/images/culture_whiteboard_1784803109208.jpg';

export const CareersPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All Roles');
  const [applyingJob, setApplyingJob] = useState<string | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const filterTabs = [
    { label: 'All Roles (24)', key: 'All Roles' },
    { label: 'Operations (8)', key: 'Operations' },
    { label: 'Technology (7)', key: 'Technology' },
    { label: 'Sales (5)', key: 'Sales' },
    { label: 'Finance (4)', key: 'Finance' },
  ];

  const jobs = [
    {
      id: 'job-1',
      title: 'Senior Air Freight Manager',
      dept: 'Operations',
      location: 'Frankfurt, Germany',
      type: 'Full-time',
      salary: '€80–100K',
      badgeBg: 'bg-blue-50 text-blue-700',
      icon: Plane,
      iconBg: 'bg-blue-50 text-[#023f99]',
    },
    {
      id: 'job-2',
      title: 'Full Stack Engineer — NexTrack Platform',
      dept: 'Technology',
      location: 'Remote / Singapore',
      type: 'Full-time',
      salary: '$120–160K',
      badgeBg: 'bg-purple-50 text-purple-700',
      icon: Code2,
      iconBg: 'bg-blue-50/80 text-[#023f99]',
    },
    {
      id: 'job-3',
      title: 'Enterprise Sales Director — APAC',
      dept: 'Sales',
      location: 'Singapore',
      type: 'Full-time',
      salary: 'SGD 180–220K',
      badgeBg: 'bg-amber-50 text-amber-700',
      icon: TrendingUp,
      iconBg: 'bg-amber-50 text-amber-600',
    },
    {
      id: 'job-4',
      title: 'Customs Compliance Specialist',
      dept: 'Operations',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: 'AED 180–240K',
      badgeBg: 'bg-blue-50 text-blue-700',
      icon: FileCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
    },
    {
      id: 'job-5',
      title: 'AI/ML Engineer — Logistics Optimization',
      dept: 'Technology',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£95–130K',
      badgeBg: 'bg-purple-50 text-purple-700',
      icon: Brain,
      iconBg: 'bg-sky-50 text-sky-600',
    },
  ];

  const filteredJobs =
    selectedDept === 'All Roles'
      ? jobs
      : jobs.filter((j) => j.dept === selectedDept);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedSuccess(false);
      setApplyingJob(null);
    }, 3000);
  };

  return (
    <div className="w-full text-slate-900 bg-white min-h-screen">
      {/* 1. HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative w-full overflow-hidden bg-slate-900 min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center">
        {/* Background Image */}
        <img
          src={careersTeamHero}
          alt="NexCargo Global Team"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40 lg:to-slate-950/25" />

        <div className="relative z-10 max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-24 w-full">
          <div className="max-w-2xl">
            {/* WE'RE HIRING Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5821f] text-white font-extrabold text-xs uppercase tracking-wider mb-6 shadow-md">
              <Briefcase className="w-3.5 h-3.5 fill-white text-white" />
              <span>WE'RE HIRING</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Shape the Future<br />of Global Logistics
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-medium max-w-xl">
              Join 12,000+ passionate people across 48 offices who are redefining how the world moves cargo. Your next great chapter starts here.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#open-positions"
                className="px-6 py-3.5 rounded-xl bg-[#f5821f] hover:bg-[#e07316] text-white font-extrabold text-sm sm:text-base transition-all shadow-lg active:scale-95 cursor-pointer inline-flex items-center justify-center"
              >
                View Open Positions
              </a>
              <a
                href="#culture"
                className="px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-extrabold text-sm sm:text-base transition-all active:scale-95 cursor-pointer inline-flex items-center justify-center"
              >
                Our Culture
              </a>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-8 sm:gap-12 pt-6 border-t border-white/15">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">12K+</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Employees</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">48</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Countries</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">4.7★</div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">Glassdoor</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR CULTURE SECTION */}
      <section id="culture" className="bg-white text-slate-900 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 scroll-mt-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[#f5821f] font-black text-xs uppercase tracking-widest">
              OUR CULTURE
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#051329] tracking-tight leading-[1.15]">
              Where Great People<br className="hidden sm:inline" /> Do Great Work
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              <p>
                At NexCargo, culture isn't a ping-pong table. It's how we treat each other, how we solve problems, and how we celebrate success. We build careers, not just jobs.
              </p>
              <p>
                We operate with radical transparency, invest heavily in your professional development, and believe that a diverse team is an unstoppable one. Every voice matters. Every idea is heard.
              </p>
            </div>

            {/* PILL TAGS */}
            <div className="pt-4 flex flex-wrap gap-2.5">
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-extrabold text-xs sm:text-sm">
                Inclusive
              </span>
              <span className="px-4 py-2 rounded-full bg-amber-50 text-amber-800 font-extrabold text-xs sm:text-sm">
                Innovative
              </span>
              <span className="px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 font-extrabold text-xs sm:text-sm">
                Collaborative
              </span>
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-800 font-extrabold text-xs sm:text-sm">
                Transparent
              </span>
              <span className="px-4 py-2 rounded-full bg-amber-50 text-amber-800 font-extrabold text-xs sm:text-sm">
                Growth-Oriented
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: IMAGE COLLAGE */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {/* TOP ROW: TWO IMAGES */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100">
                <img
                  src={cultureCheers}
                  alt="NexCargo Team Celebrating"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[4/3] bg-slate-100">
                <img
                  src={cultureWhiteboard}
                  alt="NexCargo Strategy Session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* BOTTOM ROW: ONE WIDE IMAGE */}
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-md aspect-[21/9] sm:aspect-[16/7] bg-slate-100">
              <img
                src={cultureConference}
                alt="NexCargo Keynote Summit Conference"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 3. PERKS & BENEFITS SECTION */}
      <section className="bg-[#f8fafc] text-slate-900 py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-t border-slate-200/60">
        <div className="max-w-8xl mx-auto space-y-12 sm:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-[#f5821f] font-black text-xs uppercase tracking-widest">
              PERKS & BENEFITS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#051329] tracking-tight">
              We Take Care of Our People
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
              Competitive compensation plus benefits that actually matter to your life.
            </p>
          </div>

          {/* 8 Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-8xl mx-auto">
            {[
              {
                icon: Heart,
                title: 'Health & Wellness',
                desc: 'Premium medical, dental, vision for you and your family. Gym allowance included.',
              },
              {
                icon: GraduationCap,
                title: 'Learning & Growth',
                desc: '$3,000/year learning budget. Internal academies, conferences, and certifications.',
              },
              {
                icon: Globe2,
                title: 'Global Mobility',
                desc: 'International transfer opportunities. Work from one of 48 offices worldwide.',
              },
              {
                icon: Coins,
                title: 'Competitive Pay',
                desc: 'Top-quartile salaries, performance bonuses, and equity participation for all.',
              },
              {
                icon: Umbrella,
                title: 'Flexible PTO',
                desc: 'Unlimited PTO policy. Minimum 20 days mandated. Work-life balance is real here.',
              },
              {
                icon: Laptop,
                title: 'Remote Friendly',
                desc: 'Hybrid and remote options for most roles. Monthly home office stipend.',
              },
              {
                icon: Baby,
                title: 'Family Support',
                desc: '20 weeks parental leave, childcare support, and family emergency days.',
              },
              {
                icon: Leaf,
                title: 'Sustainability',
                desc: 'EV vehicle allowance and carbon offset programs for a greener commute.',
              },
            ].map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-[#022859] flex items-center justify-center mb-4 shrink-0">
                    <Icon className="w-5 h-5 text-[#022859] stroke-[2.2]" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. OPEN POSITIONS SECTION (MATCHING EXACTLY USER'S IMAGES) */}
      <section id="open-positions" className="bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-t border-slate-200/60 scroll-mt-20">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="text-[#f5821f] font-black text-xs uppercase tracking-widest">
              OPEN POSITIONS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#051329] tracking-tight">
              Find Your Role
            </h2>
            <p className="text-slate-500 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-xl mx-auto">
              We're growing fast. Find the position that matches your skills and ambitions.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedDept(tab.key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all cursor-pointer ${
                  selectedDept === tab.key
                    ? 'bg-[#023f99] text-white font-extrabold shadow-sm'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Job List Cards */}
          <div className="space-y-4 pt-2">
            {filteredJobs.map((job) => {
              const IconComponent = job.icon;
              return (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Left content: Icon + Title + Meta */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${job.iconBg} flex items-center justify-center shrink-0`}>
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs sm:text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                          {job.type}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-md font-extrabold text-xs ${job.badgeBg}`}>
                          {job.dept}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right content: Salary + Apply Button */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-0 border-slate-100">
                    <span className="font-extrabold text-[#f5821f] text-sm sm:text-base">
                      {job.salary}
                    </span>
                    <button
                      onClick={() => setApplyingJob(job.title)}
                      className="px-6 py-2.5 rounded-xl bg-[#023f99] hover:bg-[#022859] text-white font-black text-sm transition-all cursor-pointer shadow-xs active:scale-95"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Button */}
          <div className="text-center pt-6">
            <button
              onClick={() => setSelectedDept('All Roles')}
              className="px-8 py-3.5 rounded-xl border-2 border-[#023f99] text-[#023f99] font-black text-sm sm:text-base hover:bg-[#023f99] hover:text-white transition-all shadow-xs cursor-pointer inline-flex items-center justify-center"
            >
              View All 24 Open Positions
            </button>
          </div>

        </div>
      </section>

      {/* Application Modal */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#0d2a50] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-lg w-full text-white shadow-2xl relative">
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {appliedSuccess ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold">Application Received!</h3>
                <p className="text-xs text-slate-300 mt-2">
                  Thank you for applying for <span className="text-[#f5821f] font-bold">{applyingJob}</span>. Our HR team will reach out within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="mb-4">
                  <div className="text-xs text-[#f5821f] font-bold uppercase tracking-wider mb-1">Applying For</div>
                  <h3 className="text-xl font-bold text-white">{applyingJob}</h3>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5821f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5821f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">LinkedIn / Portfolio URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/janedoe"
                    className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5821f]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Cover Note / Brief Intro</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us why you are a great fit for NexCargo..."
                    className="w-full bg-[#04152c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f5821f]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#f5821f] hover:bg-[#e07316] text-white font-extrabold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send className="w-4 h-4" /> Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
