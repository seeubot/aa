import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-700 to-emerald-600">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center text-white"
      >
        <h2 className="text-4xl font-bold">Ready to Transform Your Farming?</h2>
        <p className="text-xl mt-4 opacity-90">Join 10,000+ farmers already using AgriAgent.</p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.agriagent.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-white text-green-700 px-10 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl transition"
        >
          📲 Download Now — It's Free!
        </a>
        <p className="text-sm opacity-75 mt-4">Available on Google Play Store</p>
      </motion.div>
    </section>
  );
}
