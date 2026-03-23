import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";

const logo = "/images/Learn2Code.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null); 

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Course", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Entrance Animation
      tl.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
      });

      tl.from(".nav-item", {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }, "-=0.7");

      // 2. Continuous Subtle Pulse on "Get Started"
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  // 3. Magnetic & Glow Hover Effect for Button
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.15,
      backgroundColor: "#9d40db", // Slightly darker purple
      boxShadow: "0px 0px 20px 5px rgba(180, 93, 235, 0.5)",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: "#B45DEB",
      boxShadow: "0px 0px 0px 0px rgba(180, 93, 235, 0)",
      duration: 0.3,
    });
  };

  // Mobile Menu Animation
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <header className="fixed top-4 left-0 w-full z-50 flex justify-center px-4">
      <nav 
        ref={navRef}
        className="w-full max-w-7xl bg-white/70 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] border border-white/40 rounded-2xl px-6 lg:px-10"
      >
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 leading-none nav-item">
            <img src={logo} alt="Learn2Code" className="h-[35px] w-[55px] object-contain" />
            <span className="font-extrabold text-lg sm:text-xl md:text-2xl tracking-tight text-gray-900">
              Learn2Code
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm lg:text-base font-semibold transition-all duration-300 relative group ${
                      isActive ? "text-[#B45DEB]" : "text-gray-700 hover:text-[#B45DEB]"
                    }`
                  }
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#B45DEB] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* ENHANCED CTA Button */}
          <div className="hidden md:block nav-item">
            <NavLink
              ref={buttonRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to="/register"
              className="px-8 py-3 rounded-full bg-[#B45DEB] text-white text-sm font-bold shadow-md transition-transform duration-300 inline-block"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden overflow-hidden border-t border-gray-100">
            <div className="flex flex-col gap-4 py-6">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `mobile-link text-lg font-semibold px-2 ${isActive ? "text-[#B45DEB]" : "text-gray-700"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink
                to="/register"
                className="mobile-link mt-2 w-full text-center px-5 py-3 rounded-xl bg-[#B45DEB] text-white font-bold"
              >
                Get Started
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;