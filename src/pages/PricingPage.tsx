import { ArrowUpDown, Check, Headphones, Lock, RotateCcw, Star, Tag, X } from 'lucide-react';
import React, { useState } from 'react';

interface PricingPageProps {
  onOpenQuote: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenQuote }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="w-full min-h-screen">
      {/* SECTION 1: Transparent Pricing Header Hero Section (Dark Blue Background) */}
      <section className="bg-[#022859] text-white py-16 sm:py-20 px-6 sm:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Transparent Pricing Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#f5821f] font-extrabold text-xs uppercase tracking-wider mb-6 shadow-xs backdrop-blur-md">
            <Tag className="w-3.5 h-3.5 fill-[#f5821f]/20 text-[#f5821f]" />
            <span>TRANSPARENT PRICING</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Simple, Honest Pricing<br />No Hidden Fees
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            Choose the plan that fits your shipping volume. All plans include real-time tracking, dedicated support, and customs assistance.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-xl text-sm transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#022859] shadow-md font-extrabold'
                  : 'text-white hover:text-slate-200 font-bold'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-sm transition-all cursor-pointer flex items-center gap-2.5 ${
                billingCycle === 'annual'
                  ? 'bg-white text-[#022859] shadow-md font-extrabold'
                  : 'text-white hover:text-slate-200 font-bold'
              }`}
            >
              <span>Annual</span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#f5821f] text-white text-[11px] font-extrabold uppercase tracking-wide shadow-xs">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 & 3: Subscription Plans Cards & Feature Comparison (Light Background) */}
      <section className="bg-[#f4f7fc] py-16 sm:py-20 px-6 sm:px-12 lg:px-16 text-slate-900 border-t border-white/10">
        <div className="max-w-8xl mx-auto space-y-24">
          
          {/* SUBSCRIPTION PLAN CARDS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto pt-4">
            
            {/* 1. STARTER PLAN */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div className="text-slate-400 font-extrabold text-xs tracking-widest uppercase mb-3">
                  STARTER
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                    ${billingCycle === 'annual' ? '239' : '299'}
                  </span>
                  <span className="text-slate-500 font-bold text-sm">/month</span>
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-8 font-medium">
                  Ideal for small businesses shipping up to 500kg per month with straightforward requirements.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 rounded-xl border-2 border-[#022859] text-[#022859] hover:bg-[#022859] hover:text-white font-extrabold text-sm transition-all cursor-pointer shadow-xs"
                >
                  Get Started
                </button>

                <div className="mt-8 space-y-3.5 pt-6 border-t border-slate-100">
                  {[
                    { text: 'Up to 500 kg / month', included: true },
                    { text: 'Road & Sea Freight', included: true },
                    { text: 'Basic Real-Time Tracking', included: true },
                    { text: 'Standard Customs Support', included: true },
                    { text: 'Email Support (48h)', included: true },
                    { text: 'Air Freight Access', included: false },
                    { text: 'Dedicated Account Manager', included: false },
                    { text: 'API Integration', included: false },
                    { text: 'SLA Guarantee', included: false },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                      {f.included ? (
                        <Check className="w-4 h-4 text-emerald-500 stroke-[3] shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-slate-300 stroke-[2.5] shrink-0" />
                      )}
                      <span className={f.included ? 'text-slate-700' : 'text-slate-300 font-normal'}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. BUSINESS PLAN (MOST POPULAR) */}
            <div className="relative bg-[#023f99] rounded-3xl p-7 sm:p-8 border-4 border-[#f5821f] text-white shadow-2xl flex flex-col justify-between transform lg:-translate-y-3 my-2 lg:my-0">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f5821f] text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span>Most Popular</span>
              </div>

              <div>
                <div className="text-slate-200 font-extrabold text-xs tracking-widest uppercase mb-3 mt-1">
                  BUSINESS
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    ${billingCycle === 'annual' ? '719' : '899'}
                  </span>
                  <span className="text-slate-200 font-medium text-sm">/month</span>
                </div>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mb-8 font-medium">
                  For growing businesses with multi-modal freight needs and demanding delivery schedules.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#f5821f] hover:bg-[#e07316] text-white font-black text-sm transition-all cursor-pointer shadow-lg"
                >
                  Start Business Plan
                </button>

                <div className="mt-8 space-y-3.5 pt-6 border-t border-white/10">
                  {[
                    { text: 'Up to 5,000 kg / month', included: true },
                    { text: 'Air, Sea & Road Freight', included: true },
                    { text: 'Advanced Tracking Dashboard', included: true },
                    { text: 'Full Customs Management', included: true },
                    { text: 'Priority Support (4h response)', included: true },
                    { text: 'Air Freight Access', included: true },
                    { text: 'Dedicated Account Manager', included: true },
                    { text: 'API Integration', included: true },
                    { text: 'Custom SLA Guarantee', included: false },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                      {f.included ? (
                        <Check className="w-4 h-4 text-[#f5821f] stroke-[3] shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-blue-300/40 stroke-[2.5] shrink-0" />
                      )}
                      <span className={f.included ? 'text-white' : 'text-blue-200/50 font-normal'}>
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. ENTERPRISE PLAN */}
            <div className="bg-[#051329] rounded-3xl p-7 sm:p-8 border border-slate-800 text-white shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all">
              <div>
                <div className="text-slate-400 font-extrabold text-xs tracking-widest uppercase mb-3">
                  ENTERPRISE
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    Custom
                  </span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8 font-medium">
                  For large enterprises with complex, high-volume logistics operations requiring tailored solutions and dedicated teams.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3.5 px-4 rounded-xl border border-[#f5821f]/80 bg-white/5 hover:bg-[#f5821f] text-[#f5821f] hover:text-white font-extrabold text-sm transition-all cursor-pointer shadow-xs"
                >
                  Contact Sales
                </button>

                <div className="mt-8 space-y-3.5 pt-6 border-t border-slate-800">
                  {[
                    { text: 'Unlimited Volume', included: true },
                    { text: 'All Freight Modes + Charter', included: true },
                    { text: 'White-Label Tracking Portal', included: true },
                    { text: 'Full Customs + Compliance Team', included: true },
                    { text: '24/7 Dedicated Hotline', included: true },
                    { text: 'Priority Air Freight Allocation', included: true },
                    { text: 'Senior Account Director', included: true },
                    { text: 'Full API + ERP Integration', included: true },
                    { text: 'Custom SLA Guarantee', included: true },
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                      <Check className="w-4 h-4 text-[#f5821f] stroke-[3] shrink-0" />
                      <span className="text-slate-200">{f.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* DETAILED FEATURE COMPARISON TABLE */}
          <div className="space-y-6 pt-8">
            <div className="text-center space-y-2">
              <div className="text-[#f5821f] font-black text-xs uppercase tracking-widest">
                COMPARE PLANS
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#051329] tracking-tight">
                Detailed Feature Comparison
              </h2>
            </div>

            <div className="bg-white rounded-3xl p-4 sm:p-8 text-slate-900 shadow-xl border border-slate-200/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-slate-200/80">
                      <th className="py-4 px-6 font-bold text-slate-800 text-sm sm:text-base w-2/5 bg-slate-50/80 rounded-tl-2xl">
                        Feature
                      </th>
                      <th className="py-4 px-6 font-bold text-slate-500 text-sm sm:text-base text-center w-1/5 bg-slate-50/80">
                        Starter
                      </th>
                      <th className="py-4 px-6 font-bold text-white text-sm sm:text-base text-center w-1/5 bg-[#023f99] rounded-t-xl">
                        Business
                      </th>
                      <th className="py-4 px-6 font-bold text-slate-500 text-sm sm:text-base text-center w-1/5 bg-slate-50/80 rounded-tr-2xl">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                    {/* Row 1: Monthly Volume */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Monthly Volume</td>
                      <td className="py-4 px-6 text-center text-slate-500">500 kg</td>
                      <td className="py-4 px-6 text-center font-extrabold text-[#023f99] bg-[#eef5ff]">
                        5,000 kg
                      </td>
                      <td className="py-4 px-6 text-center text-slate-500">Unlimited</td>
                    </tr>

                    {/* Row 2: Air Freight */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Air Freight</td>
                      <td className="py-4 px-6 text-center">
                        <X className="w-4 h-4 text-slate-300 stroke-[2] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center bg-[#eef5ff]">
                        <Check className="w-5 h-5 text-[#023f99] stroke-[2.5] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="w-5 h-5 text-emerald-500 stroke-[2.5] mx-auto" />
                      </td>
                    </tr>

                    {/* Row 3: Sea Freight */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Sea Freight</td>
                      <td className="py-4 px-6 text-center">
                        <Check className="w-5 h-5 text-emerald-500 stroke-[2.5] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center bg-[#eef5ff]">
                        <Check className="w-5 h-5 text-[#023f99] stroke-[2.5] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="w-5 h-5 text-emerald-500 stroke-[2.5] mx-auto" />
                      </td>
                    </tr>

                    {/* Row 4: Real-Time Tracking */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Real-Time Tracking</td>
                      <td className="py-4 px-6 text-center text-slate-500">Basic</td>
                      <td className="py-4 px-6 text-center font-extrabold text-[#023f99] bg-[#eef5ff]">
                        Advanced
                      </td>
                      <td className="py-4 px-6 text-center text-slate-500">White-Label</td>
                    </tr>

                    {/* Row 5: Customs Management */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Customs Management</td>
                      <td className="py-4 px-6 text-center text-slate-500">Standard</td>
                      <td className="py-4 px-6 text-center font-extrabold text-[#023f99] bg-[#eef5ff]">
                        Full Service
                      </td>
                      <td className="py-4 px-6 text-center text-slate-500">Dedicated Team</td>
                    </tr>

                    {/* Row 6: Account Manager */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Account Manager</td>
                      <td className="py-4 px-6 text-center">
                        <X className="w-4 h-4 text-slate-300 stroke-[2] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center bg-[#eef5ff]">
                        <Check className="w-5 h-5 text-[#023f99] stroke-[2.5] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="w-5 h-5 text-emerald-500 stroke-[2.5] mx-auto" />
                      </td>
                    </tr>

                    {/* Row 7: Support Response Time */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">Support Response Time</td>
                      <td className="py-4 px-6 text-center text-slate-500">48 hours</td>
                      <td className="py-4 px-6 text-center font-extrabold text-[#023f99] bg-[#eef5ff]">
                        4 hours
                      </td>
                      <td className="py-4 px-6 text-center text-slate-500">24/7 Hotline</td>
                    </tr>

                    {/* Row 8: API Integration */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">API Integration</td>
                      <td className="py-4 px-6 text-center">
                        <X className="w-4 h-4 text-slate-300 stroke-[2] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center bg-[#eef5ff]">
                        <Check className="w-5 h-5 text-[#023f99] stroke-[2.5] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="w-5 h-5 text-emerald-500 stroke-[2.5] mx-auto" />
                      </td>
                    </tr>

                    {/* Row 9: SLA Guarantee */}
                    <tr className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-800">SLA Guarantee</td>
                      <td className="py-4 px-6 text-center">
                        <X className="w-4 h-4 text-slate-300 stroke-[2] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center bg-[#eef5ff] rounded-b-xl">
                        <X className="w-4 h-4 text-slate-300 stroke-[2] mx-auto" />
                      </td>
                      <td className="py-4 px-6 text-center">
                        <Check className="w-5 h-5 text-emerald-500 stroke-[2.5] mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* WHY BUSINESSES CHOOSE NEXCARGO PRICING SECTION */}
          <div className="pt-8 pb-4">
            <div className="text-center font-extrabold text-xs sm:text-sm text-slate-400 uppercase tracking-widest mb-12">
              WHY BUSINESSES CHOOSE NEXCARGO PRICING
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="text-center space-y-3 px-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#022859] flex items-center justify-center mx-auto shadow-xs">
                  <Lock className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  No Hidden Fees
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  What you see is what you pay. Fully transparent invoicing.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-3 px-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#022859] flex items-center justify-center mx-auto shadow-xs">
                  <RotateCcw className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Cancel Anytime
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  No long-term contracts. Monthly plans with easy cancellation.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-3 px-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#022859] flex items-center justify-center mx-auto shadow-xs">
                  <ArrowUpDown className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Scale Freely
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  Upgrade or downgrade your plan as your business evolves.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center space-y-3 px-2">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#022859] flex items-center justify-center mx-auto shadow-xs">
                  <Headphones className="w-6 h-6 stroke-[2.2]" />
                </div>
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg">
                  Expert Onboarding
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto font-medium">
                  Dedicated setup support to get you shipping within 24 hours.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: NOT SURE WHICH PLAN? (DARK BLUE CTA BANNER) */}
      <section className="bg-[#022859] py-16 sm:py-24 px-6 sm:px-12 text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Not Sure Which Plan?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Our logistics experts will analyze your shipping needs and recommend the perfect solution — free of charge.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#f5821f] hover:bg-[#e07316] text-white font-extrabold text-sm transition-all cursor-pointer shadow-lg shadow-amber-500/10 active:scale-95"
            >
              Talk to an Expert
            </button>
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-extrabold text-sm transition-all cursor-pointer active:scale-95"
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
