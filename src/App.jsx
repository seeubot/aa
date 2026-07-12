import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// ===== ANIMATION VARIANTS =====
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

// ===== MAIN APP =====
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

// ===== LAYOUT =====
function Layout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50));
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🌾</span>
            <span className="gradient-text">AgriAgent</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-green-600 transition">Home</Link>
            <Link to="/contact" className="hover:text-green-600 transition">Contact</Link>
            <Link to="/playstore" className="hover:text-green-600 transition">Play Store</Link>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://play.google.com/store/apps/details?id=com.agriagent.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/30 transition"
          >
            📲 Download
          </motion.a>
        </div>
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
      <footer className="bg-gray-900 text-white/70 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">© 2026 AgriAgent. Made with ❤️ for farmers</p>
          <p className="text-xs mt-2">📞 +91 8897350151 | siddhikreddy440@gmail.com</p>
          <div className="flex justify-center gap-4 mt-3 text-xs">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ===== HOME PAGE =====
function Home() {
  const features = [
    { icon: '👷', title: 'Find Farm Labour', desc: 'GPS-based search for workers near your farm. Filter by crop type.', color: 'from-blue-500 to-cyan-400' },
    { icon: '👔', title: 'Hire Contractors', desc: 'View verified contractor profiles with team size and experience.', color: 'from-purple-500 to-pink-400' },
    { icon: '🚜', title: 'Rent Equipment', desc: 'Tractors, harvesters, sprayers. Compare daily rates instantly.', color: 'from-orange-500 to-yellow-400' },
    { icon: '🥕', title: 'Sell Crops Direct', desc: 'No middlemen. Set your price and connect with buyers.', color: 'from-green-500 to-emerald-400' },
    { icon: '💡', title: 'Community Solutions', desc: 'Post crop problems, get expert solutions from experienced farmers.', color: 'from-indigo-500 to-blue-400' },
    { icon: '📊', title: 'Smart Farm Tools', desc: 'Income calculator, land measurement, fertilizer shop locator.', color: 'from-red-500 to-rose-400' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center gradient-bg pt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                🌱 Smart Farming App
              </span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold leading-tight">
              Farming Made <br />
              <span className="gradient-text">Smarter</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-lg">
              Connect with labourers, rent equipment, sell produce, and solve farming problems — all in one powerful app.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.agriagent.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z"/>
                </svg>
                Download Now
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#features"
                className="btn-secondary"
              >
                Learn More ↓
              </motion.a>
            </motion.div>
            <motion.div variants={fadeInUp} className="flex gap-6 text-sm text-gray-500 pt-4">
              <span>🌐 Telugu • Hindi • English</span>
              <span>⭐ 4.5 Rating</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div 
                animate={floatAnimation}
                className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center text-8xl shadow-2xl"
              >
                🌾
              </motion.div>
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                🚀 10K+ Farmers
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full text-sm font-semibold text-gray-700">
                ⭐ 4.5/5
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-green-700 to-emerald-600">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
        >
          {[
            { number: '10K+', label: 'Farmers' },
            { number: '500+', label: 'Equipment Listings' },
            { number: '50+', label: 'Fertilizer Shops' },
            { number: '⭐4.5', label: 'User Rating' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="space-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              Everything You Need, <br />
              <span className="gradient-text">One App</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              From finding labour to selling crops — AgriAgent has all the tools you need.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100/50"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${f.color} rounded-t-2xl`} />
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-green-500 text-xl">→</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Tools
            </span>
            <h2 className="text-4xl font-bold">🛠️ Smart Farm Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Practical tools to help you make better farming decisions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Income Calculator', desc: 'Estimate crop income based on current market prices', color: 'from-yellow-500 to-orange-400' },
              { icon: '📏', title: 'Land Area Calculator', desc: 'Measure your farm area using GPS technology', color: 'from-blue-500 to-cyan-400' },
              { icon: '🏪', title: 'Shop Locator', desc: 'Find nearby fertilizer and pesticide shops', color: 'from-purple-500 to-pink-400' },
            ].map((tool, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="glass p-6 rounded-2xl text-center"
              >
                <div className={`text-5xl mb-3 inline-block bg-gradient-to-r ${tool.color} p-4 rounded-2xl`}>
                  {tool.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-800">{tool.title}</h4>
                <p className="text-gray-600 text-sm mt-1">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Language & Trust */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-bold text-gray-800">🌐 Available in Your Language</h3>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full font-medium">తెలుగు</span>
              <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full font-medium">हिन्दी</span>
              <span className="px-5 py-2 bg-green-100 text-green-700 rounded-full font-medium">English</span>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <span>🔒 Encrypted & Secure</span>
              <span>📱 100% Independent App</span>
              <span>🗑️ Delete Account Anytime</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-emerald-600">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Ready to Transform Your Farming?</h2>
          <p className="text-xl mt-4 opacity-90">
            Join 10,000+ farmers already using AgriAgent.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://play.google.com/store/apps/details?id=com.agriagent.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-green-700 px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition"
          >
            📲 Download Now — It's Free!
          </motion.a>
          <p className="text-sm opacity-75 mt-4">Available on Google Play Store</p>
        </motion.div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-xs text-gray-500">
          <p className="font-semibold text-gray-700">⚠️ Important Disclaimer</p>
          <p className="mt-1">
            AgriAgent is an independent private app — not affiliated with any government agency. 
            Income calculator prices are reference prices based on public market information.
          </p>
        </div>
      </section>
    </div>
  );
}

// ===== CONTACT PAGE =====
function Contact() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-4 gradient-bg">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto w-full"
      >
        <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">📞 Get in Touch</h1>
          <p className="text-gray-600 mb-8">We're here to help! Reach out to us anytime.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl">📱</div>
              <div>
                <h3 className="font-bold text-gray-700">Phone</h3>
                <a href="tel:+918897350151" className="text-green-600 hover:underline">+91 8897350151</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl">✉️</div>
              <div>
                <h3 className="font-bold text-gray-700">Email</h3>
                <a href="mailto:siddhikreddy440@gmail.com" className="text-green-600 hover:underline">siddhikreddy440@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-3xl">👨‍💻</div>
              <div>
                <h3 className="font-bold text-gray-700">Developer</h3>
                <p className="text-gray-600">SIDDHIK REDDY ERAMMA</p>
              </div>
            </div>
          </div>

          <Link to="/" className="inline-block mt-8 text-green-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ===== PLAYSTORE PAGE =====
function PlayStore() {
  return (
    <section className="min-h-[80vh] flex items-center py-20 px-4 gradient-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto w-full"
      >
        <div className="bg-white/80 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 text-center">
          <div className="text-8xl mb-6">📱</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Download AgriAgent</h1>
          <p className="text-gray-600 mb-8">Get the app on Google Play Store</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://play.google.com/store/apps/details?id=com.agriagent.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition shadow-xl"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z"/>
            </svg>
            Get it on Google Play
          </motion.a>

          <div className="mt-8 text-left text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
            <p className="font-semibold text-gray-700">📋 App Details</p>
            <p className="mt-1">• Package: <code className="bg-gray-200 px-1 rounded">com.agriagent.app</code></p>
            <p>• Developer: SIDDHIK REDDY ERAMMA</p>
            <p>• Updated: July 2026</p>
          </div>

          <Link to="/" className="inline-block mt-6 text-green-600 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ===== 404 =====
function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20 px-4 gradient-bg">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-300">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
        <Link to="/" className="inline-block mt-6 text-green-600 hover:underline font-medium">
          ← Go Home
        </Link>
      </div>
    </section>
  );
}

export default App;
