import { Star } from 'lucide-react';
import React from 'react';

import davidImg from '../assets/images/avatar_david_vance_1784786741189.jpg';
import elenaImg from '../assets/images/avatar_elena_rostova_1784786759941.jpg';
import emmaImg from '../assets/images/avatar_emma_williams_1784786349147.jpg';
import michaelImg from '../assets/images/avatar_michael_chen_1784786337452.jpg';
import sarahImg from '../assets/images/avatar_sarah_johnson_1784786325324.jpg';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      stars: 5,
      quote:
        '"NexCargo transformed our supply chain. Their real-time tracking and customer service are unmatched in the industry."',
      name: 'Sarah Johnson',
      role: 'VP Operations, TechCorp',
      image: sarahImg,
    },
    {
      stars: 5,
      quote:
        '"We\'ve reduced our shipping costs by 30% since partnering with NexCargo. Highly recommended for global logistics."',
      name: 'Michael Chen',
      role: 'CEO, GlobalRetail Inc',
      image: michaelImg,
    },
    {
      stars: 5,
      quote:
        '"The customs clearance process was seamless. NexCargo handled everything while keeping us informed every step of the way."',
      name: 'Emma Williams',
      role: 'Logistics Manager, MedSupply',
      image: emmaImg,
    },
    {
      stars: 5,
      quote:
        '"Outstanding air freight turnaround times! They delivered our critical cargo ahead of schedule across two continents."',
      name: 'David Vance',
      role: 'Supply Chain Director, Apex Dynamics',
      image: davidImg,
    },
    {
      stars: 5,
      quote:
        '"Their warehousing and inventory management platform gave us complete visibility over our European distribution hubs."',
      name: 'Elena Rostova',
      role: 'Global Operations Lead, SolarTech',
      image: elenaImg,
    },
  ];

  // Duplicate list to create seamless infinite scrolling marquee
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-[#f0f5fb] py-16 sm:py-20 lg:py-24 border-b border-slate-200/80 text-slate-900 overflow-hidden">
      <style>{`
        @keyframes testimonials-marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .marquee-track {
          animation: testimonials-marquee 35s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="w-full max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 mb-12 sm:mb-14">
        {/* Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0c2340] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
            Trusted by thousands of businesses worldwide for their logistics needs.
          </p>
        </div>
      </div>

      {/* Infinite Smooth Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-6">
        {/* Left & Right Soft Fade Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#f0f5fb] via-[#f0f5fb]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#f0f5fb] via-[#f0f5fb]/80 to-transparent z-20" />

        {/* Animated Flex Track */}
        <div className="marquee-track flex gap-6 sm:gap-8 w-max px-4">
          {marqueeItems.map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] shrink-0 bg-white rounded-3xl p-7 sm:p-8 shadow-md hover:shadow-2xl border border-slate-100 hover:border-[#f5821f]/50 hover:scale-105 hover:-translate-y-2 hover:z-30 flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer relative group"
            >
              <div>
                {/* 5 Stars Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed mb-6 group-hover:text-slate-800 transition-colors">
                  {t.quote}
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <img
                  src={t.image}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover shadow-sm border border-slate-200 shrink-0 group-hover:scale-105 transition-transform"
                />
                <div>
                  <h3 className="font-bold text-[#0c2340] text-sm sm:text-base leading-snug">
                    {t.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

