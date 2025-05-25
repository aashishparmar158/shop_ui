import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { X } from 'lucide-react';




function SignUpBanner({ onClose , onSwitch}) {

 
  return (
    <AnimatePresence>
      <motion.div
        className="flex items-start justify-center mt-50"
        initial={{ x:1500 , opacity: 0 }}
        animate={{ x:0 ,opacity: 1 }}
        transition={{ type: "tween", duration: 0.6, ease:easeInOut }}
        exit={{ x:1500,opacity: 0 }}
      >
        <motion.div
          className="rounded-2xl shadow-xl w-full max-w-4xl flex overflow-hidden bg-black"
          initial={{ scale: 0.9, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={ {scale: 0.9, opacity: 1 }}
        >
          {/* Left side */}
          <div className="w-160 h-full pl-10 pt-10 pb-10 text-white">
            <h2 className="text-3xl font-normal mb-6 text-center">lun<span className='text-blue-500 font-semibold'>AR</span></h2>
            <form className="space-y-4 text-white">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                type="submit"
              >
                Create Account
              </motion.button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              Already registered?{" "}
              <span
                onClick={onSwitch}
                className="text-blue-500 underline cursor-pointer"
              >
                Click here to login
              </span>
            </p>

          </div>

          {/* Right side */}
          <div className="relative w-max bg-gradient-to-r from-black to-blue-700 text-white flex flex-col items-center justify-center p-10">
          <X  onClick={onClose} className="w-6 h-6 cursor-pointer text-white absolute top-4 right-6"/>
            <h2 className="text-3xl font-normal mb-4">Hello, Friend!</h2>
            <p className="text-center text-sm">
              Welcome to lunAR — Your personal gateway to space-inspired digital luxury. Explore, shop, and discover the cosmos.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SignUpBanner;
