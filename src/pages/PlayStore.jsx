import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PlayStore() {
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
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.agriagent.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-800 transition shadow-xl"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.691 2.262L14.99 9.56l-2.878 2.878-8.42-10.176zm0 19.476l8.42-10.176 2.878 2.878L3.691 21.738zM16.91 10.44l2.878 2.878-2.878 2.878L14.03 13.32l2.878-2.878z"/>
            </svg>
            Get it on Google Play
          </a>

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
