import { motion } from 'framer-motion';

const features = [
  { icon: '👷', title: 'Find Farm Labour', desc: 'GPS-based search for workers near your farm.' },
  { icon: '👔', title: 'Hire Contractors', desc: 'View verified contractor profiles with team size.' },
  { icon: '🚜', title: 'Rent Equipment', desc: 'Tractors, harvesters, sprayers. Compare rates.' },
  { icon: '🥕', title: 'Sell Crops Direct', desc: 'No middlemen. Set your price, connect with buyers.' },
  { icon: '💡', title: 'Community Solutions', desc: 'Post crop problems, get expert solutions.' },
  { icon: '📊', title: 'Smart Farm Tools', desc: 'Income calculator, land measurement, shop locator.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            Features
          </span>
          <h2 className="text-4xl font-bold">
            Everything You Need, <span className="gradient-text">One App</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition border border-gray-100"
            >
              <div className="text-5xl mb-3">{f.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
