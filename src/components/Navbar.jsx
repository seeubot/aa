import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 50));
    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
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
          href="https://play.google.com/store/apps/details?id=com.agriagent.app" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-green-500/30 transition"
        >
          📲 Download
        </motion.a>
      </div>
    </motion.nav>
  );
}
