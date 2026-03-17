import React, { useState } from 'react';
import { Bell, TrendingUp, DollarSign, Home, Key, FileText, Users, Building, BarChart3, ArrowRight, Check, MapPin, Target, Briefcase, GraduationCap, Heart, Globe, Landmark } from 'lucide-react';

export default function BellringProperty() {
  const [ring, setRing] = useState(false);
  const [activeSegment, setActiveSegment] = useState(null);

  const playDingDong = () => {
    setRing(true);
    setTimeout(() => setRing(false), 600);
    
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o1 = ctx.createOscillator();
      const g1 = ctx.createGain();
      o1.connect(g1);
      g1.connect(ctx.destination);
      o1.frequency.value = 659.25;
      g1.gain.setValueAtTime(0.3, ctx.currentTime);
      g1.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
      o1.start();
      o1.stop(ctx.currentTime + 0.6);
      
      const o2 = ctx.createOscillator();
      const g2 = ctx.createGain();
      o2.connect(g2);
      g2.connect(ctx.destination);
      o2.frequency.value = 523.25;
      g2.gain.setValueAtTime(0, ctx.currentTime);
      g2.gain.setValueAtTime(0.3, ctx.currentTime + 0.3);
      g2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.2);
      o2.start(ctx.currentTime + 0.3);
      o2.stop(ctx.currentTime + 1.2);
    } catch (e) {}
  };

  const services = [
    { icon: TrendingUp, title: "Property Investment", description: "Strategic investment opportunities with 15-20% projected returns", color: "from-blue-400 to-blue-600" },
    { icon: DollarSign, title: "Property Valuation", description: "Accurate market valuations from certified professionals", color: "from-green-400 to-green-600" },
    { icon: Home, title: "Property Management", description: "Full-service management with 98% occupancy rates", color: "from-purple-400 to-purple-600" },
    { icon: Key, title: "Property Agency", description: "Buy, sell, and rent properties with expert guidance", color: "from-orange-400 to-orange-600" },
    { icon: FileText, title: "Legal & Documentation", description: "Complete legal support for all property transactions", color: "from-red-400 to-red-600" },
    { icon: Users, title: "Tenant Services", description: "Premium tenant screening and relationship management", color: "from-pink-400 to-pink-600" }
  ];

  // ── TARGET MARKET SEGMENTS ──
  const targetMarkets = [
    {
      id: 'investors',
      icon: Briefcase,
      label: 'Private Investors',
      emoji: '💼',
      color: 'from-yellow-400 to-orange-500',
      border: 'border-yellow-400',
      glow: 'shadow-yellow-400/30',
      size: 'large',
      income: 'R500K+ capital',
      age: '35–60',
      goal: 'Passive income & portfolio growth',
      needs: ['High-yield rental assets', 'Off-plan opportunities', 'Quarterly reporting'],
      share: '38%',
    },
    {
      id: 'firsthome',
      icon: Home,
      label: 'First-Time Buyers',
      emoji: '🏠',
      color: 'from-green-400 to-emerald-600',
      border: 'border-green-400',
      glow: 'shadow-green-400/30',
      size: 'medium',
      income: 'R25K–R60K/month',
      age: '25–38',
      goal: 'Affordable entry into homeownership',
      needs: ['Bond assistance', 'Neighbourhood guides', 'Inspection support'],
      share: '24%',
    },
    {
      id: 'corporate',
      icon: Landmark,
      label: 'Corporate & Institutional',
      emoji: '🏦',
      color: 'from-blue-400 to-indigo-600',
      border: 'border-blue-400',
      glow: 'shadow-blue-400/30',
      size: 'large',
      income: 'R5M+ portfolio',
      age: 'Institutional',
      goal: 'Commercial & mixed-use acquisitions',
      needs: ['Bulk acquisition deals', 'Due diligence support', 'Asset management'],
      share: '21%',
    },
    {
      id: 'diaspora',
      icon: Globe,
      label: 'SA Diaspora',
      emoji: '✈️',
      color: 'from-purple-400 to-violet-600',
      border: 'border-purple-400',
      glow: 'shadow-purple-400/30',
      size: 'medium',
      income: 'Foreign currency income',
      age: '30–55',
      goal: 'Invest back home remotely',
      needs: ['Remote management', 'FX-friendly payments', 'Legal compliance'],
      share: '11%',
    },
    {
      id: 'professionals',
      icon: GraduationCap,
      label: 'Young Professionals',
      emoji: '🎓',
      color: 'from-pink-400 to-rose-600',
      border: 'border-pink-400',
      glow: 'shadow-pink-400/30',
      size: 'small',
      income: 'R20K–R45K/month',
      age: '24–35',
      goal: 'Build equity early',
      needs: ['Sectional title units', 'Cape Town CBD access', 'Flexible leases'],
      share: '6%',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Nav */}
      <nav className="bg-slate-800 border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={playDingDong} className={`bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition ${ring ? 'animate-bounce' : ''}`}>
              <Bell size={24} className="text-slate-900" strokeWidth={2.5} />
            </button>
            <span className="text-3xl font-bold text-yellow-400">Bellring</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-slate-300 hover:text-yellow-400">Services</a>
            <a href="#markets" className="text-slate-300 hover:text-yellow-400">Markets</a>
            <a href="#about" className="text-slate-300 hover:text-yellow-400">About</a>
            <button className="bg-yellow-400 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300">Contact Us</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex items-center justify-center gap-6 mb-6">
                <button onClick={playDingDong} className={`bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl hover:scale-110 transition ${ring ? 'animate-bounce' : ''}`}>
                  <Bell size={70} className="text-slate-900" strokeWidth={2.5} />
                </button>
                <h1 className="text-8xl font-bold text-yellow-400">Bellring</h1>
              </div>
              <p className="text-3xl text-yellow-300 italic" style={{ fontFamily: 'cursive' }}>
                ! come on in, how can we help you !
              </p>
            </div>
            <p className="text-4xl text-white font-bold mb-6">Premium Property Services</p>
            <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
              Your trusted partner in property investment, management, and real estate solutions across Cape Town
            </p>
            <button className="bg-yellow-400 text-slate-900 px-10 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center gap-2 mx-auto">
              Explore Our Services <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-300">Comprehensive property solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-900 rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 border border-slate-700 hover:border-yellow-400">
                <div className={`bg-gradient-to-br ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <service.icon className="text-white" size={40} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-purple-900/30 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[['47','Properties Managed'],['98%','Occupancy Rate'],['R23.5M','Portfolio Value'],['15+','Years Experience']].map(([val, label]) => (
              <div key={label}>
                <div className="text-6xl font-bold text-yellow-400 mb-2">{val}</div>
                <div className="text-slate-300 text-lg">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TARGET MARKET GRID  (new section)
      ═══════════════════════════════════════════════ */}
      <section id="markets" className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-2 mb-6">
              <Target size={18} className="text-yellow-400" />
              <span className="text-yellow-400 text-sm font-semibold tracking-widest uppercase">Target Market</span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-4">Who We Serve</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Click any segment to explore needs, goals & market share
            </p>
          </div>

          {/* Grid — asymmetric bento layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mb-10">

            {/* Private Investors — large, spans 5 cols */}
            {targetMarkets.filter(m => m.id === 'investors').map(m => (
              <button
                key={m.id}
                onClick={() => setActiveSegment(activeSegment === m.id ? null : m.id)}
                className={`md:col-span-5 text-left rounded-3xl p-8 border-2 transition-all duration-300 bg-slate-900 hover:scale-[1.02] shadow-xl ${activeSegment === m.id ? `${m.border} ${m.glow} shadow-2xl` : 'border-slate-700 hover:border-yellow-400/50'}`}
              >
                <div className={`bg-gradient-to-br ${m.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <m.icon size={32} className="text-slate-900" strokeWidth={2.5} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{m.emoji} {m.label}</h3>
                  <span className={`bg-gradient-to-br ${m.color} text-slate-900 font-black text-2xl px-4 py-1 rounded-xl`}>{m.share}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">Age: <span className="text-slate-200">{m.age}</span> &nbsp;·&nbsp; Income: <span className="text-slate-200">{m.income}</span></p>
                <p className="text-slate-300 mt-3 leading-relaxed">{m.goal}</p>
                {activeSegment === m.id && (
                  <ul className="mt-5 space-y-2">
                    {m.needs.map(n => (
                      <li key={n} className="flex items-center gap-3 text-slate-200">
                        <Check size={16} className="text-yellow-400 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}

            {/* Corporate — spans 7 cols */}
            {targetMarkets.filter(m => m.id === 'corporate').map(m => (
              <button
                key={m.id}
                onClick={() => setActiveSegment(activeSegment === m.id ? null : m.id)}
                className={`md:col-span-7 text-left rounded-3xl p-8 border-2 transition-all duration-300 bg-slate-900 hover:scale-[1.02] shadow-xl ${activeSegment === m.id ? `${m.border} ${m.glow} shadow-2xl` : 'border-slate-700 hover:border-blue-400/50'}`}
              >
                <div className={`bg-gradient-to-br ${m.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <m.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">{m.emoji} {m.label}</h3>
                  <span className={`bg-gradient-to-br ${m.color} text-white font-black text-2xl px-4 py-1 rounded-xl`}>{m.share}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">Segment: <span className="text-slate-200">{m.age}</span> &nbsp;·&nbsp; Portfolio: <span className="text-slate-200">{m.income}</span></p>
                <p className="text-slate-300 mt-3 leading-relaxed">{m.goal}</p>
                {activeSegment === m.id && (
                  <ul className="mt-5 space-y-2">
                    {m.needs.map(n => (
                      <li key={n} className="flex items-center gap-3 text-slate-200">
                        <Check size={16} className="text-blue-400 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}

            {/* First-Time Buyers — spans 4 */}
            {targetMarkets.filter(m => m.id === 'firsthome').map(m => (
              <button
                key={m.id}
                onClick={() => setActiveSegment(activeSegment === m.id ? null : m.id)}
                className={`md:col-span-4 text-left rounded-3xl p-8 border-2 transition-all duration-300 bg-slate-900 hover:scale-[1.02] shadow-xl ${activeSegment === m.id ? `${m.border} ${m.glow} shadow-2xl` : 'border-slate-700 hover:border-green-400/50'}`}
              >
                <div className={`bg-gradient-to-br ${m.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <m.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{m.emoji} {m.label}</h3>
                  <span className={`bg-gradient-to-br ${m.color} text-white font-black text-xl px-3 py-1 rounded-xl`}>{m.share}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">Age: <span className="text-slate-200">{m.age}</span></p>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">{m.goal}</p>
                {activeSegment === m.id && (
                  <ul className="mt-4 space-y-2">
                    {m.needs.map(n => (
                      <li key={n} className="flex items-center gap-2 text-slate-200 text-sm">
                        <Check size={14} className="text-green-400 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}

            {/* SA Diaspora — spans 4 */}
            {targetMarkets.filter(m => m.id === 'diaspora').map(m => (
              <button
                key={m.id}
                onClick={() => setActiveSegment(activeSegment === m.id ? null : m.id)}
                className={`md:col-span-4 text-left rounded-3xl p-8 border-2 transition-all duration-300 bg-slate-900 hover:scale-[1.02] shadow-xl ${activeSegment === m.id ? `${m.border} ${m.glow} shadow-2xl` : 'border-slate-700 hover:border-purple-400/50'}`}
              >
                <div className={`bg-gradient-to-br ${m.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <m.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{m.emoji} {m.label}</h3>
                  <span className={`bg-gradient-to-br ${m.color} text-white font-black text-xl px-3 py-1 rounded-xl`}>{m.share}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">Age: <span className="text-slate-200">{m.age}</span></p>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">{m.goal}</p>
                {activeSegment === m.id && (
                  <ul className="mt-4 space-y-2">
                    {m.needs.map(n => (
                      <li key={n} className="flex items-center gap-2 text-slate-200 text-sm">
                        <Check size={14} className="text-purple-400 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}

            {/* Young Professionals — spans 4 */}
            {targetMarkets.filter(m => m.id === 'professionals').map(m => (
              <button
                key={m.id}
                onClick={() => setActiveSegment(activeSegment === m.id ? null : m.id)}
                className={`md:col-span-4 text-left rounded-3xl p-8 border-2 transition-all duration-300 bg-slate-900 hover:scale-[1.02] shadow-xl ${activeSegment === m.id ? `${m.border} ${m.glow} shadow-2xl` : 'border-slate-700 hover:border-pink-400/50'}`}
              >
                <div className={`bg-gradient-to-br ${m.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <m.icon size={32} className="text-white" strokeWidth={2.5} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white">{m.emoji} {m.label}</h3>
                  <span className={`bg-gradient-to-br ${m.color} text-white font-black text-xl px-3 py-1 rounded-xl`}>{m.share}</span>
                </div>
                <p className="text-slate-400 text-sm mb-1">Age: <span className="text-slate-200">{m.age}</span></p>
                <p className="text-slate-300 mt-2 text-sm leading-relaxed">{m.goal}</p>
                {activeSegment === m.id && (
                  <ul className="mt-4 space-y-2">
                    {m.needs.map(n => (
                      <li key={n} className="flex items-center gap-2 text-slate-200 text-sm">
                        <Check size={14} className="text-pink-400 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            ))}

          </div>

          {/* Market share bar */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-4">Market Share Distribution</p>
            <div className="flex rounded-full overflow-hidden h-6">
              {targetMarkets.map(m => (
                <div
                  key={m.id}
                  className={`bg-gradient-to-r ${m.color} transition-all duration-300 ${activeSegment === m.id ? 'opacity-100 scale-y-110' : 'opacity-70'}`}
                  style={{ width: m.share }}
                  title={`${m.label}: ${m.share}`}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              {targetMarkets.map(m => (
                <div key={m.id} className="flex items-center gap-2 text-sm">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${m.color}`} />
                  <span className="text-slate-400">{m.label}</span>
                  <span className="text-slate-200 font-bold">{m.share}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-12 text-slate-900">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold mb-6">Current Investment Opportunity</h2>
                <h3 className="text-3xl font-bold mb-4">The Bell Tower Residences</h3>
                <p className="text-xl mb-6">123 Long Street, Cape Town CBD</p>
                <ul className="space-y-3 mb-8">
                  {[['15-20% Projected Returns'],['R15M Total Investment'],['24 Luxury Apartments'],['Prime CBD Location']].map(([item]) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={24} strokeWidth={3} />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-800 transition">
                  View Investment Details
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[[Building,'24','Residential Units'],[MapPin,'CBD','Prime Location'],[BarChart3,'18%','3-Year ROI'],[TrendingUp,'R500K','Min. Investment']].map(([Icon, val, label]) => (
                  <div key={label} className="bg-slate-900/30 backdrop-blur rounded-2xl p-6 text-center">
                    <Icon className="mx-auto mb-3" size={48} />
                    <div className="text-3xl font-bold mb-1">{val}</div>
                    <div className="text-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-white text-center mb-16">Why Choose Bellring?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              ['Proven Track Record','Over 15 years of successful property investments across South Africa, with zero defaults and consistent above-market returns. Our portfolio speaks for itself.'],
              ['Expert Team','Our leadership brings together expertise in real estate development, finance, architecture, and property management to deliver exceptional results.'],
              ['Local Knowledge','Deep understanding of Cape Town\'s property market, zoning regulations, and neighborhood dynamics gives us a competitive edge.'],
              ['Investor-First','We invest our own capital alongside our investors, ensuring complete alignment of interests and transparent quarterly reporting.'],
            ].map(([title, text]) => (
              <div key={title} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">{title}</h3>
                <p className="text-slate-300 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Ring in Success?</h2>
          <p className="text-xl text-slate-300 mb-8">Let's discuss how we can help you achieve your property goals</p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-yellow-400 text-slate-900 px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-300 transition">
              Schedule Consultation
            </button>
            <button className="border-2 border-yellow-400 text-yellow-400 px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-400 hover:text-slate-900 transition">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <button onClick={playDingDong} className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full w-10 h-10 flex items-center justify-center">
                <Bell size={20} className="text-slate-900" strokeWidth={2.5} />
              </button>
              <span className="text-2xl font-bold text-yellow-400">Bellring</span>
            </div>
            <div className="text-slate-400">
              <p className="mb-2">📍 Waterfront Office Park, Cape Town</p>
              <p className="mb-2">📞 +27 21 555 0123</p>
              <p>📧 invest@bellring.co.za</p>
            </div>
            <p className="text-slate-500">© 2026 Bellring Property Group</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
