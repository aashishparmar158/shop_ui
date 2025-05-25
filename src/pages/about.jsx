// src/pages/About.tsx

import { motion } from "framer-motion";
import SpaceShopImage from "../assets/images/space-shop.png"; // adjust the path as needed

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-montserrat px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-normal">
         Shopping Elevated Beyond Earth
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Where premium design meets futuristic tech — the next-gen shopping experience.
        </p>
      </motion.div>

      {/* IMAGE + CONTENT TWO-COLUMN SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-24 grid md:grid-cols-2 gap-10 items-center"
      >
      
        <div className="relative">
            {/**the main lunar title  */}
          <div className="mb-4 text-3xl md:text-4xl font-normal tracking-wide text-center text-gray-400">
            lun<span className="font-normal text-gray-400">AR</span>
          </div>
         {/**the image in hte left of the page   */}
          <img
            src={SpaceShopImage}
            alt="Futuristic shopping experience"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At lunAR, we don’t just sell products — we sell experiences wrapped in the elegance of
            space-age design. We believe online shopping should feel like stepping into the future.
            <br /><br />
            Our vision is to become the benchmark of futuristic commerce. A platform where every scroll,
            every click, and every interaction feels seamless, intelligent, and inspired. We're here to
            spark curiosity, encourage exploration, and redefine what luxury means in the digital age.
            <br /><br />
            Imagine walking into a digital showroom orbiting Earth — a place where product discovery is
            intuitive, aesthetic, and genuinely enjoyable. That’s the vision driving lunAR.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The lunAR Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We’re building a platform that merges cutting-edge UI with seamless user experiences.
            Curated selections, elegant design, and next-gen tech — lunAR is your premium launchpad for
            everything stylish.
            <br /><br />
            Our mission is rooted in three core principles: simplicity, sophistication, and security.
            From the moment you land on our homepage to the final checkout click, every element is
            designed to feel frictionless and futuristic. No clutter. No noise. Just high-quality
            products, minimalistic design, and lightning-fast responsiveness,lunAR is your premium launchpad for
            everything stylish.
          </p>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mb-16 grid gap-8 md:grid-cols-2"
      >
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">🚀 Futuristic Design</h3>
          <p className="text-gray-700">Inspired by space and tech.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">🛒 Curated Collections</h3>
          <p className="text-gray-700">Only the best, no fluff.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">💡 Intuitive UX</h3>
          <p className="text-gray-700">Clean, fast, and beautiful.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">🔐 User Privacy First</h3>
          <p className="text-gray-700">We don’t track, we protect.</p>
        </div>
      </motion.section>

      {/* QUOTE */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mt-12"
      >
        <blockquote className="text-xl italic text-gray-600">
          “lunAR was born from a desire to build something truly different. We set out to break the mold — and we’re just getting started.”
        </blockquote>
        <p className="mt-4 text-gray-500">— Team lunAR</p>
      </motion.section>
    </div>
  );
};

export default About;
