import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// ============================================================
// ANIMATION VARIANTS
// ============================================================
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const float = {
  y: [0, -12, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
};

// ============================================================
// MAIN APP
// ============================================================
function App() {
  return (
    <BrowserRouter>
      <Routes>
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

// ============================================================
// LAYOUT
// ============================================================
function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-2xl shadow-2xl shadow-black/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.span 
                whileHover={{ rotate: 20, scale: 1.1 }}
                className="text-3xl"
              >
                🌾
              </motion.span>
              <span className="text-2xl font-extrabold tracking-tight">
                <span className="text-gray-800">Agri</span>
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Agent</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-green-600 transition relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-600 hover:text-green-600 transition relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
              </Link>
              <Link to="/playstore" className="text-sm font-medium text-gray-600 hover:text-green-600 transition relative group">
                Play Store
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full" />
              </Link>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.agriagent.app"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden group px-6 py-2.5 rounded-full font-semibold text-sm text-white"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-500 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10 flex items-center gap-2">📲 Download</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-2xl p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {mobileMenu ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-2xl border-t"
            >
              <div className="px-4 py-4 space-y-3">
                <Link to="/" className="block text-gray-600 hover:text-green-600 transition font-medium" onClick={() => setMobileMenu(false)}>
                  Home
                </Link>
                <Link to="/contact" className="block text-gray-600 hover:text-green-600 transition font-medium" onClick={() => setMobileMenu(false)}>
                  Contact
                </Link>
                <Link to="/playstore" className="block text-gray-600 hover:text-green-600 transition font-medium" onClick={() => setMobileMenu(false)}>
                  Play Store
                </Link>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.agriagent.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-2.5 rounded-full font-semibold"
                  onClick={() => setMobileMenu(false)}
                >
                  📲 Download
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="playstore" element={<PlayStore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white/60 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                <span>🌾</span>
                <span>AgriAgent</span>
              </div>
              <p className="text-sm">Smart farming solutions for Indian farmers.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link to="/" className="block hover:text-white transition">Home</Link>
                <Link to="/contact" className="block hover:text-white transition">Contact</Link>
                <Link to="/playstore" className="block hover:text-white transition">Play Store</Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-sm">
                <p>📞 +91 8897350151</p>
                <p>✉️ siddhikreddy440@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">తెలుగు</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">हिन्दी</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs">English</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs">
            <p>© 2026 AgriAgent. Made with ❤️ for farmers. Independent app — not affiliated with any government agency.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================
// HOME PAGE
// ============================================================
function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const features = [
    { icon: '👷', title: 'Find Farm Labour', desc: 'GPS-based search for workers near your farm.', color: 'from-blue-500 to-cyan-400' },
    { icon: '👔', title: 'Hire Contractors', desc: 'View verified contractor profiles with team size.', color: 'from-purple-500 to-pink-400' },
    { icon: '🚜', title: 'Rent Equipment', desc: 'Tractors, harvesters, sprayers. Compare rates.', color: 'from-orange-500 to-yellow-400' },
    { icon: '🥕', title: 'Sell Crops Direct', desc: 'No middlemen. Set your price, connect with buyers.', color: 'from-green-500 to-emerald-400' },
    { icon: '💡', title: 'Community Solutions', desc: 'Post crop problems, get expert solutions.', color: 'from-indigo-500 to-blue-400' },
    { icon: '📊', title: 'Smart Farm Tools', desc: 'Income calculator, land measurement, shop locator.', color: 'from-red-500 to-rose-400' },
  ];

  const stats = [
    { number: '10K+', label: 'Farmers', icon: '👨‍🌾' },
    { number: '500+', label: 'Equipment', icon: '🚜' },
    { number: '50+', label: 'Shops', icon: '🏪' },
    { number: '⭐4.5', label: 'Rating', icon: '⭐' },
  ];

  return (
    <div>
      {/* Hero */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-emerald-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-8">
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  Available Now
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
                Farming Made{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Smarter</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Connect with labourers, rent equipment, sell produce, and solve farming problems — all in one powerful app.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:shadow-xl transition flex items-center gap-3 text-lg">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z"/>
                  </svg>
                  Download Now
                </a>
                <a href="#features" className="px-8 py-4 rounded-2xl font-semibold text-gray-700 border-2 border-gray-200 hover:border-green-500 hover:text-green-600 transition">
                  Explore ↓
                </a>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-8 text-sm text-gray-500">
                <span>🌐 Telugu • Hindi • English</span>
                <span>⭐ 4.5 Rating</span>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex justify-center lg:justify-end">
              <div className="relative">
                <motion.div animate={float} className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-[3rem] flex items-center justify-center text-9xl shadow-2xl shadow-green-500/30">
                  🌾
                </motion.div>
                <div className="absolute -top-4 -right-4 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-white/30">
                  <span className="font-bold text-gray-800">🚀 10K+</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-xl px-5 py-2.5 rounded-2xl shadow-lg border border-white/30">
                  <span className="font-bold text-gray-800">⭐ 4.5/5</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Stats */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-green-700 to-emerald-600 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05 }} className="space-y-1">
                <div className="text-4xl mb-1">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-extrabold">{stat.number}</div>
                <div className="text-sm opacity-80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">✨ Features</span>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Everything You Need,{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">One App</span>
            </h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -12, boxShadow: '0 30px 60px rgba(0,0,0,0.12)' }} className="group relative bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 border border-gray-100/80">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${f.color} rounded-t-3xl`} />
                <div className="relative inline-block mb-4 p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
                  <span className="text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">🛠️ Tools</span>
            <h2 className="text-4xl font-extrabold">Smart Farm Tools</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Income Calculator', desc: 'Estimate crop income based on current market prices' },
              { icon: '📏', title: 'Land Area Calculator', desc: 'Measure your farm area using GPS technology' },
              { icon: '🏪', title: 'Shop Locator', desc: 'Find nearby fertilizer and pesticide shops' },
            ].map((tool, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.03 }} className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl text-center shadow-xl border border-white/50">
                <div className="text-5xl mb-4">{tool.icon}</div>
                <h4 className="text-xl font-bold text-gray-800">{tool.title}</h4>
                <p className="text-gray-600 text-sm mt-2">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-green-700 to-emerald-600 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center text-white relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">Ready to Transform Your Farming?</h2>
          <p className="text-xl mt-4 opacity-90 max-w-2xl mx-auto">Join 10,000+ farmers already using AgriAgent to grow smarter.</p>
          <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 mt-8 bg-white text-green-700 px-10 py-5 rounded-2xl text-xl font-extrabold shadow-2xl hover:shadow-3xl transition">
            📲 Download Now — It's Free!
          </a>
          <p className="text-sm opacity-75 mt-4">Available on Google Play Store</p>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// CONTACT PAGE
// ============================================================
function Contact() {
  return (
    <section className="min-h-[80vh] flex items-center py-24 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto w-full">
        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">📞 Get in Touch</h1>
          <p className="text-gray-600 mb-8">We're here to help! Reach out to us anytime.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur rounded-2xl border border-gray-100/50">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="font-bold text-gray-700 text-sm">Phone</h3>
                <a href="tel:+918897350151" className="text-green-600 hover:underline font-medium">+91 8897350151</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur rounded-2xl border border-gray-100/50">
              <span className="text-3xl">✉️</span>
              <div>
                <h3 className="font-bold text-gray-700 text-sm">Email</h3>
                <a href="mailto:siddhikreddy440@gmail.com" className="text-green-600 hover:underline font-medium">siddhikreddy440@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-white/60 backdrop-blur rounded-2xl border border-gray-100/50">
              <span className="text-3xl">👨‍💻</span>
              <div>
                <h3 className="font-bold text-gray-700 text-sm">Developer</h3>
                <p className="text-gray-600 font-medium">SIDDHIK REDDY ERAMMA</p>
              </div>
            </div>
          </div>
          <Link to="/" className="inline-block mt-8 text-green-600 hover:underline font-medium">← Back to Home</Link>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================
// PLAYSTORE PAGE
// ============================================================
function PlayStore() {
  return (
    <section className="min-h-[80vh] flex items-center py-24 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto w-full">
        <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30 text-center">
          <div className="text-8xl mb-6">📱</div>
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">Download AgriAgent</h1>
          <p className="text-gray-600 mb-8">Get the app on Google Play Store</p>
          <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-800 transition shadow-xl">
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z"/>
            </svg>
            Get it on Google Play
          </a>
          <div className="mt-8 text-left bg-gray-50/80 backdrop-blur p-5 rounded-2xl border border-gray-100">
            <p className="font-semibold text-gray-700 mb-2">📋 App Details</p>
            <div className="space-y-1.5 text-sm text-gray-600">
              <p><span className="text-gray-400">Package:</span> <code className="bg-white px-2 py-0.5 rounded text-xs font-mono">com.agriagent.app</code></p>
              <p><span className="text-gray-400">Developer:</span> SIDDHIK REDDY ERAMMA</p>
              <p><span className="text-gray-400">Updated:</span> July 2026</p>
            </div>
          </div>
          <Link to="/" className="inline-block mt-6 text-green-600 hover:underline font-medium">← Back to Home</Link>
        </div>
      </motion.div>
    </section>
  );
}

// ============================================================
// 404 NOT FOUND
// ============================================================
function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-24 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="text-center">
        <div className="text-8xl mb-4">🌾</div>
        <h1 className="text-7xl font-extrabold text-gray-300">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
        <Link to="/" className="inline-block mt-6 text-green-600 hover:underline font-medium text-lg">← Go Home</Link>
      </div>
    </section>
  );
}

export default App;
