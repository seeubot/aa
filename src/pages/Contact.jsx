import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Contact() {
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
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-3xl">📱</span>
              <div>
                <h3 className="font-bold text-gray-700">Phone</h3>
                <a href="tel:+918897350151" className="text-green-600 hover:underline">+91 8897350151</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-3xl">✉️</span>
              <div>
                <h3 className="font-bold text-gray-700">Email</h3>
                <a href="mailto:siddhikreddy440@gmail.com" className="text-green-600 hover:underline">siddhikreddy440@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-3xl">👨‍💻</span>
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
