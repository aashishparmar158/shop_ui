import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { easeOut, motion } from 'framer-motion';

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row h-[90vh]">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0 , scale:1.1 }}
          animate={{ opacity: 1 , scale:1}}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2 h-1/2 md:h-full bg-cover bg-center bg-[url('/src/assets/images/shopbg1.jpg')]"
        ></motion.div>

        {/* Right: Animated Text */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center bg-white px-8 py-12 text-center md:text-left"
          variants={containerVariant}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.h1
              variants={fadeUpVariant}
              custom={0.1}
              className="text-9xl font-bold mb-6 text-black tracking-wide -mb-9"
            >
              ONLINE
            </motion.h1>
            <motion.h1
              variants={fadeUpVariant}
              custom={0.3}
              className="text-9xl font-bold mb-6 text-blue-900 tracking-wide -mt-9"
            >
              SHOPPING
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              custom={0.5}
              className="text-lg mb-6 text-gray-700"
            >
              Your journey to futuristic fashion and lifestyle begins right here. <br />
              We deliver a taste of what’s next.
            </motion.p>
            <motion.button className="bg-black text-white py-3 px-8 mb-10 rounded-lg hover:bg-gray-800 transition">
              Start Shopping
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Product Grid */}
      <div className="max-w-9xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-full bg-white p-4 rounded-lg shadow-lg cursor-pointer"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              custom={index * 0.2}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleViewDetails(product.id)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-black">₹{product.price}</span>
                <button
                  onClick={() => handleViewDetails(product.id)}
                  className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
