import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

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

// ===== LAYOUT (navbar + footer) =====
function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 px-4 py-3">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-700">🌾 AgriAgent</Link>
          <div className="flex gap-4 text-sm md:text-base">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
            <Link to="/playstore" className="hover:text-green-600">Play Store</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="playstore" element={<PlayStore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-4 px-4 border-t">
        <p>© 2026 AgriAgent. Made with ❤️ for farmers</p>
        <p className="text-xs mt-1">📞 +91 8897350151 | siddhikreddy440@gmail.com</p>
      </footer>
    </div>
  );
}

// ===== HOME PAGE (same as before) =====
function Home() {
  // ... (all your existing Home component code from previous message)
  // Copy the entire Home function from the previous App.jsx
  // Including: hero, features, tools, languages, security, disclaimer, CTA
  return (
    <div>
      <section className="pt-16 pb-12 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Farming Made <span className="text-green-600">Smarter</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Connect with labourers, rent equipment, sell produce, and solve farming problems — all in one app.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <span>📲 Get it on <strong>Google Play</strong></span>
              </a>
              <a href="#features" className="border border-gray-300 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition text-center">
                Learn More ↓
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-green-100 rounded-3xl flex items-center justify-center text-8xl shadow-xl">
              🌾
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-green-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div><div className="text-2xl font-bold">10K+</div><div className="text-sm opacity-80">Farmers</div></div>
          <div><div className="text-2xl font-bold">500+</div><div className="text-sm opacity-80">Equipment</div></div>
          <div><div className="text-2xl font-bold">50+</div><div className="text-sm opacity-80">Shops</div></div>
          <div><div className="text-2xl font-bold">⭐4.5</div><div className="text-sm opacity-80">Rating</div></div>
        </div>
      </section>

      {/* Features - truncated for brevity, copy from previous */}
      <section id="features" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Everything You Need, <span className="text-green-600">One App</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '👷', title: 'Find Farm Labour', desc: 'GPS-based search for workers near your farm.' },
              { icon: '👔', title: 'Hire Contractors', desc: 'View verified contractor profiles with team size.' },
              { icon: '🚜', title: 'Rent Equipment', desc: 'Tractors, harvesters, sprayers. Compare rates.' },
              { icon: '🥕', title: 'Sell Crops Direct', desc: 'No middlemen. Set your price, connect with buyers.' },
              { icon: '💡', title: 'Community Solutions', desc: 'Post crop problems, get solutions from experts.' },
              { icon: '📊', title: 'Farm Tools', desc: 'Income calculator, land measurement, shop locator.' },
            ].map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold text-gray-800">{f.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-green-700 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="mt-2 opacity-90">Download AgriAgent today and transform your farming experience.</p>
        <a href="https://play.google.com/store/apps/details?id=com.agriagent.app" target="_blank" rel="noopener noreferrer" className="inline-block mt-6 bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition">
          📲 Download Now
        </a>
      </section>
    </div>
  );
}

// ===== CONTACT PAGE =====
function Contact() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📞 Contact Us</h1>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-gray-700">📱 Phone</h3>
            <p className="text-gray-600"><a href="tel:+918897350151" className="text-blue-600 hover:underline">+91 8897350151</a></p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700">✉️ Email</h3>
            <p className="text-gray-600"><a href="mailto:siddhikreddy440@gmail.com" className="text-blue-600 hover:underline">siddhikreddy440@gmail.com</a></p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700">📍 Developer</h3>
            <p className="text-gray-600">SIDDHIK REDDY ERAMMA<br />India</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-700">🌐 Languages</h3>
            <div className="flex gap-2 mt-1">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">తెలుగు</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">हिन्दी</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">English</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== PLAYSTORE PAGE =====
function PlayStore() {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.open('https://play.google.com/store/apps/details?id=com.agriagent.app', '_blank');
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-7xl mb-4">📱</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Download AgriAgent</h1>
        <p className="text-gray-600 mb-6">Get the app on Google Play Store</p>
        
        <button 
          onClick={handleDownload}
          className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition flex items-center gap-3 mx-auto"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z" />
          </svg>
          <span>Get it on <strong>Google Play</strong></span>
        </button>

        <div className="mt-6 text-left text-sm text-gray-500 bg-gray-50 p-4 rounded-xl">
          <p className="font-semibold text-gray-700">📋 App Details</p>
          <p className="mt-1">• Package: <code className="bg-gray-200 px-1 rounded">com.agriagent.app</code></p>
          <p>• Developer: SIDDHIK REDDY ERAMMA</p>
          <p>• Updated: July 2026</p>
          <p>• Size: ~25 MB</p>
        </div>

        <div className="mt-6 text-sm">
          <Link to="/" className="text-blue-600 hover:underline">← Back to Home</Link>
        </div>
      </div>
    </section>
  );
}

// ===== 404 NOT FOUND =====
function NotFound() {
  return (
    <section className="py-20 px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-xl text-gray-600 mt-2">Oops! Page not found.</p>
      <Link to="/" className="mt-4 inline-block text-green-600 hover:underline">← Go Home</Link>
    </section>
  );
}

export default App;
