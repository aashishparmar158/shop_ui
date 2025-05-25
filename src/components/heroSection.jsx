import { motion } from 'framer-motion';
import TrendingItemsSection from './trendingItemsSection';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-b from-white to-white text-black pt-25">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-4xl  mb-4 font-normal ">
          Lunar Luxury : Where Every Purchase is a Step Towards Stardom.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl mb-6 font-normal ">
          Explore the Cosmos of Fashion 
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <button 
            onClick={()=>{navigate('/shop')}}
            className="bg-gradient-to-r from-blue-900 cursor-pointer to-black text-white py-3 px-6 rounded-md font-semibold text-lg hover:scale-105 transition-transform">
            Shop Now
          </button>
          <button
            onClick={()=>{navigate('/categories')}}
            className="bg-transparent cursor-pointer border-2 border-black text-black py-3 px-6 rounded-md font-semibold text-lg hover:scale-105 transition-transform">
            Explore
          </button>
        </div>
      </div>
      <TrendingItemsSection/>
    </section>
  );
};

export default HeroSection;
