import React, { useState ,useEffect} from "react";
import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/heroSection.jsx";
import Footer from "./components/footer.jsx";
import SignUpBanner from "./components/signUpBanner.jsx";
import LoginBanner from "./components/loginBanner.jsx";
import Shop from "./pages/shop.jsx";
import Cart from "./pages/cart.jsx";
import ProductDetails from './pages/productDetails.jsx'
import Categories  from "./pages/categories.jsx";
import Contact  from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import AdminLogin from "./pages/adminLogin.jsx";
import AdminProtectedRoute from "./routes/adminProtectedRoute.jsx";
import AdminDashboard from "./pages/adminDashboard.jsx";
//import StatsOverview from "./pages/admin/StatsOverview";
import ProductManager from "./pages/admin/ProductManager";
import UserManager from "./pages/admin/UserManager";
import CategoryManager from "./pages/admin/CategoryManager";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Routes,Route } from "react-router-dom";
import { useLocation } from "react-router-dom";



function App() {
  const [showBanner, setShowBanner] = useState(true);  // always true for showing banner
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  //const [isSwitching, setIsSwitching] = useState(false);

  
  const handleBannerClose = () => {
    setShowBanner(false);
   
    // Optionally store it in localStorage if you want to track dismissals
   // localStorage.setItem("hasVisited", "true");
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  }

  useEffect(() => {
    if (showBanner || showLogin) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showBanner, showLogin]);

  useEffect(() => {
    // Close any open banners on route change
    setShowBanner(false);
    setShowLogin(false);
  }, [location]);

  return (
   
    <div className="font-montserrat-normal text-black relative">
      {/* Main UI with blur when banner is shown */}
         <div
           className={`${(showBanner || showLogin) ? "blur-md scale-[1.4] brightness-90" : ""} transition-all duration-500`} >
           <Navbar setShowLogin={setShowLogin} />
           <Routes>
            <Route path="/" element={<HeroSection />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* Admin Layout with nested routes */}
            
            <Route path="/admin/products" element={<ProductManager />} />
            <Route path="/admin/users" element={<UserManager />} />
            <Route path="/admin/categories" element={<CategoryManager />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>}/>
          </Routes>
           <Footer />
         </div>

      {/* Banner overlay on top */}
        
      <AnimatePresence>
        {showBanner && (
          <motion.div
            key="signup-banner"
            initial={{ opacity: 0, x:1500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 1500 }}
            transition={{ duration: 0.5}}
            className="fixed top-0 w-full h-full z-50  flex items-start justify-center mb-20"
          >
            <SignUpBanner
              onClose={handleBannerClose}
              onSwitch={() => {
                setShowLogin(true);
                setShowBanner(false);
                
              }}
            />
          </motion.div>
        )}
      
        {showLogin && (
          <motion.div
            key="login-banner"
            initial={{ opacity: 0, x: -1500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1500 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full h-full z-50  flex items-start justify-center mb-20"
          >
            <LoginBanner
              onClose={handleLoginClose}
              onSwitch={() => {
                setShowBanner(true);
                setShowLogin(false);
                
              }}
              
            />
          </motion.div>
        )}
      </AnimatePresence>
      
          
      
      </div>
    );
}

export default App;
