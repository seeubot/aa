import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center gradient-bg pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
            🌱 Smart Farming App
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Farming Made <br />
            <span className="gradient-text">Smarter</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Connect with labourers, rent equipment, sell produce, and solve farming problems — all in one app.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://play.google.com/store/apps/details?id=com.agriagent.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z"/>
              </svg>
              Download Now
            </a>
            <a href="#features" className="border border-gray-300 px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition">
              Learn More ↓
            </a>
          </div>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>🌐 Telugu • Hindi • English</span>
            <span>⭐ 4.5 Rating</span>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl flex items-center justify-center text-8xl shadow-2xl">
              🌾
            </div>
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
  );
}
