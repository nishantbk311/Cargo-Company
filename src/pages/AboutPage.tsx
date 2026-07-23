import { ChevronDown, Cpu, Eye, Leaf, Shield, Star, Target, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

interface AboutPageProps {
  onOpenQuote?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const stats = [
    { label: 'Global Trade Hubs', value: '150+' },
    { label: 'Annual Tonnage Handled', value: '2.4M Tons' },
    { label: 'On-Time Delivery SLA', value: '99.4%' },
    { label: 'Active Corporate Clients', value: '12,500+' },
  ];

  const leadership = [
    {
      name: 'Marcus Vance',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Supply Chain at DHL. 20+ years driving global trade transformation.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Dr. Evelyn Reed',
      role: 'Chief Technology Officer',
      bio: 'Ex-Google AI Architect. Specialist in real-time telematics and autonomous logistics networks.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Hans Sterling',
      role: 'Head of Global Customs & Compliance',
      bio: 'Veteran customs broker specializing in EU-Asia trade corridors and tariff optimization.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="w-full text-white bg-[#061e3d]">
      {/* Hero Header Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-between py-16 sm:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
        {/* Background Cargo Port Image with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000"
            alt="Cargo shipping port at night"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient & Dark Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031124]/95 via-[#061c38]/85 to-[#031124]/75" />
          <div className="absolute inset-0 bg-[#031124]/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-8xl mx-auto w-full my-auto pt-6 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Eyebrow Accent Line + OUR STORY */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#f5821f] inline-block" />
              <span className="text-[#f5821f] font-bold text-xs uppercase tracking-widest">
                OUR STORY
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-8">
              Moving the World,<br />
              One Shipment at a<br />
              Time
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-xl">
              For over 25 years, NexCargo has been the trusted backbone of global commerce — connecting manufacturers, retailers, and communities across 150+ countries.
            </p>
          </motion.div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-8 pb-2 text-slate-400 text-xs tracking-wider">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4 mt-1 text-slate-400 animate-bounce" />
        </div>
      </section>

      {/* Our Story / Company History Section */}
      <section className="bg-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900 overflow-hidden">
        <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text & Founder Signature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              EST. 1999
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
              From a Single Office to a Global Empire
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Founded in 1999 by logistics veteran James Harrington with just three employees and a leased warehouse in Hamburg, NexCargo was built on a single principle: your cargo deserves the same care as if it were our own.
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 font-normal">
              Today, NexCargo operates across six continents, with 12,000+ employees, 500+ logistics partners, and a proprietary technology platform that tracks over 50,000 shipments monthly — delivering for the world's most demanding brands.
            </p>

            {/* Founder Avatar & Name */}
            <div className="flex items-center gap-4 pt-2">
              <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-pink-500 via-amber-400 to-cyan-400 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200"
                  alt="James Harrington"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white"
                />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-base sm:text-lg">
                  James Harrington
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">
                  Founder & Chairman, NexCargo
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Portrait with Floating Stat Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative max-w-lg lg:max-w-none mx-auto w-full pt-4 pr-4 pb-4 pl-2 sm:pr-6 sm:pb-6"
          >
            {/* Founder Executive Portrait Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-slate-200 aspect-[4/3] sm:aspect-[1.1/1]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1200"
                alt="James Harrington, Founder of NexCargo"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Top-Right Floating Orange Badge: 150+ Countries */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -top-3 -right-2 sm:-top-5 sm:-right-4 bg-gradient-to-br from-amber-500 to-orange-500 text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl shadow-orange-500/30 flex flex-col items-start justify-center min-w-[125px] sm:min-w-[145px]"
            >
              <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none">
                150+
              </div>
              <div className="text-xs sm:text-sm font-semibold opacity-95 mt-1">
                Countries
              </div>
            </motion.div>

            {/* Bottom-Left Floating Dark Blue Badge: 25+ Years of Trust */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-4 bg-[#052b5e] text-white p-6 sm:p-7 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-800/40 flex flex-col items-start justify-center min-w-[150px] sm:min-w-[185px]"
            >
              <div className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-none">
                25+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1.5">
                Years of Trust
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Our Vision Section */}
      <section className="bg-[#f2f5f9] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900 overflow-hidden">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Our Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative bg-[#023f99] text-white rounded-[28px] p-8 sm:p-10 lg:p-12 overflow-hidden shadow-xl flex flex-col justify-between"
          >
            {/* Background Decorative Ambient Circles */}
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-13 h-13 rounded-2xl bg-[#082b68]/80 border border-white/15 flex items-center justify-center mb-8 shadow-inner">
                <Target className="w-6 h-6 text-[#f5821f]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
                Our Mission
              </h3>

              {/* Paragraph */}
              <p className="text-blue-100/90 text-base sm:text-lg leading-relaxed font-normal">
                To empower businesses of every size with logistics intelligence that is fast, transparent, and reliable — making global commerce accessible to all, powered by technology and human expertise.
              </p>
            </div>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative bg-[#051121] text-white rounded-[28px] p-8 sm:p-10 lg:p-12 overflow-hidden shadow-xl flex flex-col justify-between"
          >
            {/* Background Decorative Ambient Circles */}
            <div className="absolute -top-12 -right-12 w-56 h-56 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-blue-900/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-13 h-13 rounded-2xl bg-[#12233b]/90 border border-white/15 flex items-center justify-center mb-8 shadow-inner">
                <Eye className="w-6 h-6 text-[#f5821f]" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-5">
                Our Vision
              </h3>

              {/* Paragraph */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                To be the world's most trusted logistics partner — a name synonymous with precision, innovation, and sustainable global connectivity for the next century of commerce.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Journey / 25 Years of Milestones Section */}
      <section className="bg-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              OUR JOURNEY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              25 Years of Milestones
            </h2>
          </div>

          {/* Timeline Container */}
          <div className="relative pl-6 sm:pl-10">
            {/* Vertical Connecting Line */}
            <div className="absolute top-6 bottom-12 left-5 sm:left-8 w-[2px] bg-slate-200" />

            {/* Milestone List */}
            <div className="space-y-8 sm:space-y-10">
              {[
                {
                  badgeNum: '99',
                  badgeBg: 'bg-[#0b2d58] text-white',
                  meta: '1999 — Founded',
                  title: 'Hamburg, Germany',
                  desc: 'James Harrington opens the first NexCargo office with 3 employees and a vision to redefine logistics.',
                  isHighlighted: false,
                },
                {
                  badgeNum: '04',
                  badgeBg: 'bg-[#f5821f] text-white',
                  meta: '2004 — Expansion',
                  title: 'Pan-European Network',
                  desc: 'Opened 12 offices across Europe, establishing a robust road and rail freight network spanning 22 countries.',
                  isHighlighted: false,
                },
                {
                  badgeNum: '10',
                  badgeBg: 'bg-[#10b981] text-white',
                  meta: '2010 — Technology',
                  title: 'NexTrack Platform Launch',
                  desc: 'Launched proprietary real-time tracking platform, becoming one of the first logistics companies with AI-driven route optimization.',
                  isHighlighted: false,
                },
                {
                  badgeNum: '16',
                  badgeBg: 'bg-[#0b2d58] text-white',
                  meta: '2016 — Global Reach',
                  title: 'Asia-Pacific & Americas',
                  desc: 'Strategic acquisitions expanded NexCargo to 80+ countries across Asia-Pacific, Americas, and Middle East.',
                  isHighlighted: false,
                },
                {
                  badgeNum: '24',
                  badgeBg: 'bg-[#f5821f] text-white',
                  meta: '2024 — Today',
                  title: '150+ Countries, $2B Revenue',
                  desc: 'NexCargo serves 5,000+ enterprise clients across 150 countries, with $2B annual revenue and 12,000 employees worldwide.',
                  isHighlighted: true,
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex items-start gap-6 sm:gap-8 group"
                >
                  {/* Circle Badge positioned directly on the line */}
                  <div
                    className={`absolute -left-6 sm:-left-10 top-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full font-black text-sm sm:text-base flex items-center justify-center shrink-0 z-10 shadow-md ${item.badgeBg}`}
                  >
                    {item.badgeNum}
                  </div>

                  {/* Milestone Content Card */}
                  <div
                    className={`w-full ml-6 sm:ml-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl transition-all ${
                      item.isHighlighted
                        ? 'bg-[#023f99] text-white shadow-xl shadow-blue-900/20'
                        : 'bg-[#f8fafc] text-slate-900 border border-slate-100 hover:border-slate-200 hover:shadow-md'
                    }`}
                  >
                    <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
                      {item.meta}
                    </div>
                    <h3
                      className={`text-xl sm:text-2xl font-black mb-3 ${
                        item.isHighlighted ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed font-normal ${
                        item.isHighlighted ? 'text-blue-100/90' : 'text-slate-500'
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us - Our Core Values Section */}
      <section className="bg-[#f8fafc] py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900 overflow-hidden border-t border-slate-200/80">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              WHAT DRIVES US
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
              The principles that guide every decision, every shipment, every relationship.
            </p>
          </div>

          {/* 6 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Integrity',
                desc: 'We operate with complete transparency and honesty in every interaction — with clients, partners, and employees.',
                icon: Shield,
                iconBg: 'bg-blue-50 text-[#0256cc]',
              },
              {
                title: 'Speed',
                desc: 'Time is currency in logistics. We engineer every process to be faster — from quoting to customs clearance to last-mile.',
                icon: Zap,
                iconBg: 'bg-amber-50 text-[#f5821f]',
              },
              {
                title: 'Sustainability',
                desc: 'Carbon-neutral by 2030. We invest in green fleets, optimized routes, and responsible practices for a better planet.',
                icon: Leaf,
                iconBg: 'bg-emerald-50 text-emerald-600',
              },
              {
                title: 'Innovation',
                desc: 'We never stop building. AI, IoT, blockchain — we deploy emerging technology to solve real logistics challenges.',
                icon: Cpu,
                iconBg: 'bg-blue-50 text-[#0256cc]',
              },
              {
                title: 'Partnership',
                desc: 'We grow when our clients grow. Deep partnerships built on mutual success are at the core of everything we do.',
                icon: Users,
                iconBg: 'bg-amber-50 text-[#f5821f]',
              },
              {
                title: 'Excellence',
                desc: "99.8% on-time delivery isn't a target — it's our baseline. We pursue perfection in every single shipment.",
                icon: Star,
                iconBg: 'bg-blue-50 text-[#0256cc]',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-[24px] p-8 sm:p-9 shadow-sm hover:shadow-md border border-slate-100 transition-all flex flex-col justify-start"
                >
                  {/* Icon Box */}
                  <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* People Behind NexCargo - Leadership Team Section */}
      <section className="bg-white py-20 lg:py-28 px-6 sm:px-12 lg:px-16 text-slate-900 overflow-hidden border-t border-slate-100">
        <div className="max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              PEOPLE BEHIND NEXCARGO
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              Leadership Team
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
              Seasoned executives with decades of global logistics expertise leading our mission.
            </p>
          </div>

          {/* 4 Leadership Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: 'James Harrington',
                role: 'Founder & Chairman',
                bio: '25+ years shaping global logistics strategy.',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
              },
              {
                name: 'Amara Osei',
                role: 'Chief Executive Officer',
                bio: 'Former DHL VP with 20 years in global ops.',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
              },
              {
                name: 'Kenji Tanaka',
                role: 'Chief Technology Officer',
                bio: 'Built the NexTrack AI platform from scratch.',
                image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
              },
              {
                name: 'Sofia Reyes',
                role: 'Chief Operations Officer',
                bio: 'Leads 12,000 employees across 6 continents.',
                image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
              },
            ].map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group cursor-pointer rounded-[24px] overflow-hidden transition-all duration-300 bg-[#f4f7fb] hover:bg-[#023f99] border border-slate-100 hover:border-blue-800/50 shadow-sm hover:shadow-2xl hover:shadow-blue-900/40 flex flex-col justify-between"
              >
                {/* Photo Header */}
                <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:opacity-75 group-hover:mix-blend-multiply"
                  />
                  {/* Blue Tint & LinkedIn Badge Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#023f99]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#f5821f] text-slate-950 font-black text-xs flex items-center justify-center shadow-lg shadow-black/30 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      in
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl font-extrabold tracking-tight mb-1 text-slate-900 group-hover:text-white transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold mb-3 text-[#f5821f] group-hover:text-blue-200 transition-colors duration-300">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed font-normal text-slate-500 group-hover:text-blue-100/90 transition-colors duration-300">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Truly Global - Everywhere Business Happens Section */}
      <section className="relative bg-[#023a87] py-24 sm:py-28 px-6 sm:px-12 lg:px-16 text-white overflow-hidden">
        {/* World Map SVG Background Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
          <svg
            className="w-full h-full max-w-8xl object-cover"
            viewBox="0 0 1000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M150 120 C 180 100, 220 110, 250 140 C 280 170, 240 220, 200 240 C 160 260, 130 200, 150 120 Z
                 M 300 280 C 330 260, 380 290, 360 340 C 340 390, 290 420, 280 370 C 270 320, 280 300, 300 280 Z
                 M 480 100 C 520 80, 580 90, 600 130 C 620 170, 560 210, 520 200 C 470 190, 450 130, 480 100 Z
                 M 510 230 C 550 210, 620 230, 600 320 C 580 400, 520 420, 500 350 C 480 280, 480 250, 510 230 Z
                 M 650 110 C 720 90, 850 100, 880 160 C 910 220, 820 280, 750 260 C 680 240, 620 160, 650 110 Z
                 M 800 320 C 840 310, 890 330, 880 380 C 870 430, 810 440, 790 400 C 770 360, 780 330, 800 320 Z"
              fill="currentColor"
              className="text-blue-200"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-8xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-[#f5821f] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
              TRULY GLOBAL
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Everywhere Business Happens
            </h2>
            <p className="text-blue-100/90 text-base sm:text-lg font-normal">
              A borderless network built to serve enterprise logistics at any scale.
            </p>
          </div>

          {/* 4 Glassmorphic Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: '150+', label: 'Countries' },
              { number: '500+', label: 'Partner Carriers' },
              { number: '48', label: 'Office Locations' },
              { number: '12K+', label: 'Employees Worldwide' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl sm:rounded-3xl p-8 text-center shadow-lg hover:border-white/30 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5821f] tracking-tight mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-100 opacity-90">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
