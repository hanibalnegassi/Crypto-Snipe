import { motion } from 'framer-motion';
import { keyFeatures } from '../../utils/constants';

const KeyFeatures = () => {

  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((feature) => (
            <motion.div
              key={feature.id}
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 "
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed font-light">
                  {feature.description}
                </p>
                <div className="mt-4">
                  <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-white rounded"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>      
      </div>
    </section>
  );
};

export default KeyFeatures;