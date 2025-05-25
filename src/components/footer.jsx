import React from "react";
import { Instagram, Twitter, Linkedin, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 md:px-16">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Brand */}
        <div className="flex flex-col space-y-8 text-white justify-start items-center">
          <h2 className="text-2xl font-bold tracking-wide">lunAR</h2>
          <p className="text-sm max-w-xs text-center">
            Exploring the universe of fashion & tech. Where style meets the stars.
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="flex flex-col space-y-2 text-white justify-start items-center ">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <a href="/about" className="text-sm transition">About Us</a>
          <a href="/contact" className="text-sm transition">Contact</a>
          <a href="/categories" className="text-sm transition">Categories</a>
          <a href="/shop" className="text-sm transition">Products</a>
        </div>

        {/* Right: Socials */}
        <div className="flex flex-col space-y-4 text-white justify-start items-center">
          <h3 className="font-semibold">Connect with us</h3>
          <div className="flex space-x-4">
            <a href="#"><Instagram className="h-5 w-5" /></a>
            <a href="#"><Twitter className="h-5 w-5 " /></a>
            <a href="#"><Linkedin className="h-5 w-5 " /></a>
            <a href="#"><Facebook className="h-5 w-5 " /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-30 text-center text-sm text-white">
        © {new Date().getFullYear()} <pre className="inline font-normal">lunAR. All rights reserved.| Privacy Policy | Terms & Conditions</pre>
      </div>
    </footer>
   
  );
}

export default Footer;
