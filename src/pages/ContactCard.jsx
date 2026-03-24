import React from "react";
import {
  MapPin,
  Phone,
  Mail,

  Instagram,
  Linkedin,

} from "lucide-react";

export default function ContactSection() {
  const socialLinks = [
   
    {
      icon: Instagram,
      link: "https://www.instagram.com/learn2code_academy?igsh=MWFubTFvdG41bGN2cw%3D%3D&utm_source=qr",
    },
    { icon: Linkedin, link: "#" },

  ];

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-[#f8fafc] via-white to-[#eef2ff] flex items-center justify-center px-4 py-12">
      
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-10 items-start">

        {/* ================= LEFT - FORM ================= */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-8 md:p-10">

          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Let’s build something great
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Tell us about your project — we’ll get back within 24 hours.
          </p>

          {/* Full Name */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Email + Phone */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 transition"
              />
            </div>
          </div>

          {/* Courses */}
          <div className="mb-5">
            <label className="text-sm font-medium text-gray-600">
              Courses
            </label>
            <select className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 transition">
              <option>Select a topic</option>
              <option>Python Full-Stack Development</option>
              <option>Digital Marketing</option>
              <option>Data Analytics</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full mt-2 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Button */}
          <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#06b6d4] hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            Send Message
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            🔒 Your data is securely protected.
          </p>
        </div>

        {/* ================= RIGHT - CONTACT INFO ================= */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-xl p-8 md:p-10 h-fit">

          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>

          {/* Contact Items */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                <MapPin size={18} />
              </div>
              <p className="text-gray-600">Calicut, Kerala, India</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                <Phone size={18} />
              </div>
              <p className="text-gray-600">+91 8848458223</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-600">
                <Mail size={18} />
              </div>
              <p className="text-gray-600">
                info@blitzcodeitsolutions.com
              </p>
            </div>

          </div>

          {/* Social */}
          <h3 className="text-md font-semibold text-gray-800 mt-8 mb-3">
            Follow Us
          </h3>

          <div className="flex gap-3">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-purple-600 hover:scale-105 transition"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}