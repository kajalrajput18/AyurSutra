import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold">AyurSutra</h2>
          <p className="mt-2 text-gray-300">
            Integrating Ayurveda with AI-powered therapy management for a healthier tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
            <li><a href="/therapy-scheduler" className="hover:text-yellow-300">Therapy Scheduler</a></li>
            <li><a href="/notifications" className="hover:text-yellow-300">Notifications</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-300">📍 Delhi, India</p>
          <p className="text-gray-300">📞 +91 98765 43210</p>
          <p className="text-gray-300">✉️ support@ayursutra.com</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-300"><Facebook /></a>
            <a href="#" className="hover:text-yellow-300"><Twitter /></a>
            <a href="#" className="hover:text-yellow-300"><Instagram /></a>
            <a href="#" className="hover:text-yellow-300"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} AyurSutra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
