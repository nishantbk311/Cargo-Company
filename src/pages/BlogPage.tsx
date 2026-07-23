import { ArrowRight, Clock, FileText, Search, Tag, User, X } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [readingArticle, setReadingArticle] = useState<any | null>(null);

  const articles = [
    {
      id: 'art-1',
      title: 'Navigating Sustainable Aviation Fuel (SAF) Mandates in 2026 Air Cargo Routes',
      category: 'Aviation',
      date: 'July 2026',
      readTime: '6 min read',
      author: 'Marcus Vance, CEO',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'With European union SAF quotas taking full effect this quarter, global air freight carriers are adapting fuel blends to reduce carbon footprints while maintaining flight range.',
      content: `The global air cargo sector is witnessing its most significant energy transition in half a century. Mandatory Sustainable Aviation Fuel (SAF) blending targets across major airports in Frankfurt, Amsterdam, and London have spurred carriers to secure long-term SAF off-take agreements.

Key Operational Highlights:
• Fuel efficiency gains: SAF reduces life-cycle greenhouse gas emissions by up to 80% compared to conventional jet fuel.
• Tariff adjustments: Green cargo certificates now allow shippers to claim Scope 3 emissions reductions directly on carbon ledger audits.
• Route optimization: NexCargo's autonomous routing engines now incorporate SAF availability at regional hubs to optimize fueling stops.`,
    },
    {
      id: 'art-2',
      title: 'How Automated Customs AI Shortened Port Clearance Times by 64%',
      category: 'Technology',
      date: 'June 2026',
      readTime: '4 min read',
      author: 'Dr. Evelyn Reed, CTO',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'AI classification models pre-scan bills of lading and commercial invoices, auto-filing tariff codes prior to vessel arrival and preventing port congestion.',
      content: `Paperwork delays at deep-sea container terminals have historically accounted for over 30% of total transit friction. By deploying machine learning pre-clearance algorithms trained on multi-national harmonized code databases, NexCargo has automated customs entry validation.

Results from Port of Rotterdam and JFK Air Cargo Hubs:
• First-pass entry acceptance rate increased from 82% to 99.4%.
• Average dwell time for container inspection dropped from 18 hours to under 4 hours.
• Zero paperwork penalties across 40,000 processed shipments in Q2 2026.`,
    },
    {
      id: 'art-3',
      title: 'Transatlantic Air Freight Demand Surges for High-Tech Components',
      category: 'Market Trends',
      date: 'May 2026',
      readTime: '5 min read',
      author: 'Hans Sterling',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'Semiconductor manufacturing and medical device distribution are driving dedicated cargo flight charter demand across North American and European trade corridors.',
      content: `High-value electronics manufacturing requires guaranteed air capacity with strict climate and vibration monitoring. Transatlantic cargo routes have experienced a 18% YoY volume spike driven by pharmaceutical and tech supply chains.

Supply Chain Takeaways:
1. Guaranteed space allotments outweigh spot-market rate fluctuations for critical assembly components.
2. Cold-chain sensor telemetry is now standard for temperature-sensitive diagnostic equipment.`,
    },
    {
      id: 'art-4',
      title: 'Cold Chain Breakthroughs: Maintaining 2-8°C across Multi-Modal Routes',
      category: 'Supply Chain',
      date: 'April 2026',
      readTime: '7 min read',
      author: 'Logistics Research Team',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      excerpt:
        'New vacuum-insulated reefer containers and active thermal sensors ensure zero temperature excursions for pharmaceutical shipments across tropical land bridges.',
      content: `Maintaining tight temperature windows across air, road, and port transfers is critical for modern biotechnology. NexCargo’s cold-chain monitoring network provides continuous real-time alert logs to ground crew dispatchers.`,
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full text-white bg-[#061e3d] min-h-screen py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
      <div className="max-w-8xl mx-auto space-y-16">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4">
            <FileText className="w-4 h-4" /> Global Logistics Insights
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Industry Intelligence & Market Analysis
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stay informed with expert analysis on trade regulations, aviation fuel mandates, AI customs automation, and supply chain strategies.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#082247] p-4 rounded-2xl border border-white/10">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-[#04152c] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {['All', 'Aviation', 'Technology', 'Market Trends', 'Supply Chain'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-[#04152c] text-slate-300 hover:bg-slate-800 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setReadingArticle(art)}
              className="bg-[#082247] border border-white/10 hover:border-amber-400/50 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between group cursor-pointer transition-all"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-amber-400 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> {art.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mb-3">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-3">
                    {art.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-amber-400" /> {art.author}
                </span>
                <span className="font-bold text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read Full Report <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Article Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-[#0d2a50] border border-white/20 rounded-3xl p-6 sm:p-10 max-w-2xl w-full max-h-[90vh] overflow-y-auto text-white shadow-2xl relative">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-slate-300 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs text-amber-400 font-mono mb-3">
              <span>{readingArticle.category}</span>
              <span>•</span>
              <span>{readingArticle.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{readingArticle.title}</h2>

            <div className="flex items-center gap-2 text-xs text-slate-300 mb-6 pb-4 border-b border-white/10">
              <User className="w-4 h-4 text-amber-400" /> {readingArticle.author}
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-slate-200 text-sm sm:text-base leading-relaxed whitespace-pre-line space-y-4">
              {readingArticle.content}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-right">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
