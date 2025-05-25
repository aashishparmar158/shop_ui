import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const trendingItems = [
  { id: 1, name: 'Galactic Watch', price: '$199', image: '../src/assets/images/galacticWatch.avif' },
  { id: 2, name: 'Nebula Sneakers', price: '$120', image: '../src/assets/images/nebulaSneakers.jpg' },
  { id: 3, name: 'Solar Flare Jacket', price: '$250', image: '../src/assets/images/jacketOriginal.jpg' },
  { id: 4, name: 'Lunar Backpack', price: '$80', image: '../src/assets/images/whiteBackpack.jpg' },
  { id: 5, name: 'Stellar Headphones', price: '$150', image: '../src/assets/images/headphones.jpg' },
  { id: 6, name: 'Cosmic T-shirt', price: '$30', image: '../src/assets/images/tshirt.jpg' },
  { id: 7, name: 'Galaxy Lamp', price: '$50', image: '../src/assets/images/galaxyLamp.jpg' },
  { id: 8, name: 'Orbit Mug', price: '$20', image: '../src/assets/images/mug.jpg' },
];

const TrendingItemsSection = () => {

  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <section className="relative mt-2 py-20 bg-black text-black bg-gradient-to-b from-white to-black">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-normal mb-10 text-black">Trending Now</h2>
                {/* First Grid of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {trendingItems.slice(0, 4).map((item) => (
            <motion.div
              key={item.id}
              className="bg-[#f7f7f7] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="aspect-[3/2] object-contain rounded-md mb-4 cursor-pointer mix-blend-multiply"
              />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-lg text-gray-600">{item.price}</p>
              <button
                onClick={()=>handleViewDetails(products.id)} 
                className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingItemsSection;
