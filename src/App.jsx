import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// ===== MAIN APP =====
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout wraps all pages, child routes render inside the <Outlet /> */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="playstore" element={<PlayStore />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// ===== LAYOUT (navbar + footer) =====
function Layout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased">
      {/* Navbar with Modern Backdrop Blur */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-black tracking-tight text-emerald-700 flex items-center gap-2 hover:opacity-90 transition">
            <span>🌾</span> AgriAgent
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-slate-600">
            <Link to="/" className="hover:text-emerald-600 transition">Home</Link>
            <Link to="/contact" className="hover:text-emerald-600 transition">Contact</Link>
            <Link to="/playstore" className="bg-emerald-600 text-white px-4 py-1.5 rounded-full hover:bg-emerald-700 transition shadow-sm text-xs md:text-sm">Download</Link>
          </div>
        </div>
      </nav>

      {/* Page Content - Crucial fix: using Outlet instead of re-declaring <Routes> */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Clean, Modern Footer */}
      <footer className="bg-white text-slate-500 py-8 px-6 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto space-y-2">
          <p className="font-medium text-slate-700">© 2026 AgriAgent. Made with ❤️ for farmers</p>
          <p className="text-sm flex flex-col sm:flex-row justify-center gap-2 sm:gap-6 text-slate-400">
            <span>📞 +91 8897350151</span>
            <span className="hidden sm:inline">•</span>
            <span>✉️ siddhikreddy440@gmail.com</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

// ===== HOME PAGE =====
function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-6 bg-gradient-to-b from-emerald-50/60 to-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 translate-x-10 -translate-y-10" />
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-6">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
              Emporing Agriculture
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Farming Made <br /><span className="text-emerald-600 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Smarter & Faster</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Connect with local labourers, rent modern equipment, sell produce directly to buyers, and solve tricky farming issues together.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white font-medium px-8 py-4 rounded-2xl shadow-lg hover:bg-slate-800 transition flex items-center justify-center gap-3">
                <span className="text-xl">📲</span> Get it on Google Play
              </a>
              <a href="#features" className="bg-white border border-slate-200 shadow-sm font-medium px-8 py-4 rounded-2xl text-slate-700 hover:bg-slate-50 transition text-center">
                Explore Features ↓
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-emerald-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500" />
              <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-3xl flex items-center justify-center text-9xl shadow-2xl relative">
                🌾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Dashboard Style */}
      <section className="bg-white border-y border-slate-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: '10K+', label: 'Active Farmers' },
            { metric: '500+', label: 'Equipment Listings' },
            { metric: '50+ ', label: 'Partner Shops' },
            { metric: '⭐ 4.5', label: 'Play Store Rating' }
          ].map((stat, idx) => (
            <div key={idx} className="text-center space-y-1 border-r last:border-r-0 border-slate-100">
              <div className="text-3xl md:text-4xl font-black text-emerald-600">{stat.metric}</div>
              <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need, <span className="text-emerald-600">One Single App</span>
            </h2>
            <p className="text-slate-500">Built ground-up to streamline workflow, maximize crop yields, and cut down overhead costs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '👷', title: 'Find Farm Labour', desc: 'Instant GPS search for available, reliable workforce groups right around your vicinity.' },
              { icon: '👔', title: 'Hire Contractors', desc: 'Browse comprehensively verified contractor portfolios containing team counts and user history.' },
              { icon: '🚜', title: 'Rent Equipment', desc: 'Tractors, heavy harvesters, or field sprayers. Contrast rates side by side instantly.' },
              { icon: '🥕', title: 'Sell Crops Direct', desc: 'Bypass standard middleman fees entirely. Form your target price and connect directly with final buyers.' },
              { icon: '💡', title: 'Community Solutions', desc: 'Take photos of plant pests or field issues, upload them, and secure crowd-sourced expert advice.' },
              { icon: '📊', title: 'Farm Tool Suite', desc: 'Integrate tools like income micro-calculators, digital land area estimators, and local shop directories.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-2xl mb-5">{f.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Impact CTA */}
      <section className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Ready to Transform Your Farm?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">Download AgriAgent today and gain a modern, tech-driven edge on every acre.</p>
          <div className="pt-4">
            <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="inline-block bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-emerald-500 transition shadow-lg shadow-emerald-900/30">
              📲 Download Free for Android
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== CONTACT PAGE =====
function Contact() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Let's Stay Connected</h1>
        <p className="text-slate-500 mt-2">Have inquiries, technical feedback, or partnership options? Reach out immediately.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-xl">📱</div>
            <div>
              <h3 className="font-bold text-slate-800">Phone Support</h3>
              <p className="text-slate-600 mt-0.5"><a href="tel:+918897350151" className="text-emerald-600 font-medium hover:underline">+91 8897350151</a></p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-xl">✉️</div>
            <div>
              <h3 className="font-bold text-slate-800">Email Address</h3>
              <p className="text-slate-600 mt-0.5"><a href="mailto:siddhikreddy440@gmail.com" className="text-emerald-600 font-medium hover:underline">siddhikreddy440@gmail.com</a></p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-slate-50 rounded-xl text-xl">📍</div>
            <div>
              <h3 className="font-bold text-slate-800">Developer Agency</h3>
              <p className="text-slate-600 mt-0.5 font-medium text-sm">SIDDHIK REDDY ERAMMA<br /><span className="text-slate-400 font-normal">India</span></p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100/60 flex flex-col justify-center">
          <h3 className="font-bold text-emerald-900 mb-2 text-lg">🌐 Regional Language Support</h3>
          <p className="text-emerald-800 text-sm mb-4 leading-relaxed">Our service networks communicate fluently inside localized channels across multiple dialects:</p>
          <div className="flex flex-wrap gap-2">
            {['తెలుగు', 'हिन्दी', 'English'].map((lang, idx) => (
              <span key={idx} className="bg-white border border-emerald-200/60 px-3 py-1 text-emerald-800 font-semibold rounded-lg text-xs shadow-xs">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== PLAYSTORE PAGE =====
function PlayStore() {
  const handleDownload = () => {
    window.open('https://play.google.com/store/apps/details?id=com.agriagent.app', '_blank');
  };

  return (
    <section className="py-20 px-6 max-w-xl mx-auto text-center">
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-8">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center text-4xl mx-auto shadow-inner">
          🤖
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Get AgriAgent App</h1>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">Safe, encrypted deployment directly sourced from official Google channels.</p>
        </div>
        
        <button 
          onClick={handleDownload}
          className="bg-slate-950 text-white w-full py-4 rounded-2xl font-bold hover:bg-slate-900 transition flex items-center justify-center gap-3 shadow-md"
        >
          <span>📥 Install From Google Play</span>
        </button>

        <div className="text-left text-xs text-slate-500 bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
          <p className="font-bold text-slate-700 text-sm mb-1 flex items-center gap-1.5">📋 Technical Metrics</p>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-400">Package Identifier</span>
            <code className="bg-slate-200/70 px-1.5 py-0.5 rounded text-slate-700 font-mono">com.agriagent.app</code>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-400">Deployment Head</span>
            <span>SIDDHIK REDDY ERAMMA</span>
          </div>
          <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
            <span className="text-slate-400">Latest Revision</span>
            <span>July 2026</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Package Footprint</span>
            <span>~25 Megabytes</span>
          </div>
        </div>

        <div>
          <Link to="/" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition">
            ← Return back to Main Home
          </Link>
        </div>
      </div>
    </section>
  );
}

// ===== 404 NOT FOUND =====
function NotFound() {
  return (
    <section className="py-28 px-6 text-center max-w-md mx-auto space-y-4">
      <h1 className="text-7xl font-black text-slate-200 select-none">404</h1>
      <h2 className="text-2xl font-bold text-slate-800">Target location missing</h2>
      <p className="text-slate-500 text-sm">The digital link you requested doesn't exist or was removed.</p>
      <div className="pt-2">
        <Link to="/" className="inline-block bg-slate-900 text-white text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-slate-800 transition shadow-sm">
          ← Safely Return Home
        </Link>
      </div>
    </section>
  );
}
