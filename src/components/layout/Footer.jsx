import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ===== BRAND ===== */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-purple-400">
            Learn2Code
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            Empowering learners with real-world tech skills through
            industry-based training and hands-on projects.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-purple-400 transition" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-purple-400 transition" />
          </div>
        </div>

        {/* ===== PROGRAMS ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Programs</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-purple-400 cursor-pointer">Python Full Stack Development</li>
            <li className="hover:text-purple-400 cursor-pointer">Digital Marketing</li>
            <li className="hover:text-purple-400 cursor-pointer">Data Analyst</li>
          </ul>
        </div>

        {/* ===== QUICK LINKS (Same as Navbar) ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-purple-400 cursor-pointer">Home</li>
            <li className="hover:text-purple-400 cursor-pointer">About</li>
            <li className="hover:text-purple-400 cursor-pointer">Courses</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* ===== CONTACT ===== */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>info@learn2code.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 8848458223</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Calicut, Kerala</span>
            </div>

          </div>
        </div>
      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 Learn2Code. All rights reserved.
      </div>
    </footer>
  );
}