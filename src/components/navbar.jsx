import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';



const Navbar = ({ setShowLogin }) => {

  const cartCount = useSelector((state) => state.cart.cartItems.length);
 // const user = useSelector((state) => state.user.user); // adjust if you named it differently
 
 
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  const [showSearch, setShowSearch] = useState(false);

  

  return (
    <nav className="w-full font-montserrat sticky top-0 z-50 bg-white ">
      <div className="max-w-8xl mx-auto lg:px-40 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-normal tracking-wide">lun<span className="text-blue-800 font-semibold">AR</span></div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium pl-20">
           
             <Link to="/" className="group relative">
               <li className="text-black text-m transition-colors duration-200">Home
               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
               </li>             
             </Link> 
             <Link to="/shop" className="group relative">
               <li className="text-black text-m transition-colors duration-200">Shop
               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
               </li>             
             </Link> 

             <Link to="/categories" className="group relative">
               <li className="text-black text-m transition-colors duration-200">Categories
               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
               </li>             
             </Link>   
             <Link to="/contact" className="group relative">
               <li className="text-black text-m transition-colors duration-200">Contact
               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
               </li>             
             </Link> 
             <Link to="/about" className="group relative">
               <li className="text-black text-m transition-colors duration-200">About
               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
               </li>             
             </Link> 
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
             
                {/* Search with slide-in input */}
              <div
                className="relative flex items-center"
                onMouseEnter={() => setShowSearch(true)}
                onMouseLeave={() => setShowSearch(false)}
              >
                <Search className="w-5 h-5 cursor-pointer text-black" />
                <motion.input
                  type="text"
                  placeholder="Search..."
                  initial={{ width: 0, opacity: 0 }}
                  animate={showSearch ? { width: 250,height:40, opacity: 1 } : { width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-6 pl-2 text-sm text-white rounded-md border placeholder-gray-200  bg-gradient-to-r from-blue-900 to-black"
                  style={{ zIndex: 20 }}
                />
              </div>
          <div className="relative">
          <Link to="/cart">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
          </Link>
          <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
            {cartCount}
          </span>
          </div>
          <User className="w-5 h-5 cursor-pointer" />
          <button onClick={() => setShowLogin(true)} className="ml-2 px-4 py-1.5 text-white text-sm rounded-full  transition cursor-pointer bg-black">
            Login
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3"
        >
          {navLinks.map((link) => (
            <div key={link} className="text-sm font-medium">
              {link}
            </div>
          ))}
          <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
            <Search className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <User className="w-5 h-5 cursor-pointer" />
            <button className="ml-auto px-4 py-1.5 bg-black text-white text-sm rounded-full hover:bg-gray-900 transition">
              Login
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
