import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Zap, Brain } from "lucide-react";
import codingImg from "/images/3D_Coding.png"; // ✅ FIXED IMAGE IMPORT

const CodingIcon = () => (
  <img
    src={codingImg}
    alt="3D Coding"
    className="w-full h-full object-contain"
    loading="lazy"
  />
);

const Landing = () => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-title span", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
        .from(".hero-subtext", {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.6")
        .from(".hero-btns", {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, "-=0.4")
        .from(iconRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
        }, "-=0.8")
        .from(".orbit-ring", {
          scale: 0,
          opacity: 0,
          stagger: 0.2,
        }, "-=1");

      // Floating animation
      gsap.to(iconRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orbit-ring-1", {
        rotation: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring-2", {
        rotation: -360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-white py-12 lg:py-0"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 md:space-y-8">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              <span className="block">Build</span>
              <span className="block">Industry-Ready</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Skills
              </span>
            </h1>

            <p className="hero-subtext text-base sm:text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Master modern technologies through hands-on projects and expert mentorship. Start your journey into the digital economy today.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="px-8 py-4 border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-all">
                View Courses
              </button>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="lg:col-span-6 flex justify-center relative py-12 lg:py-20">

            {/* Rings */}
            <div className="orbit-ring orbit-ring-1 absolute w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] border border-slate-100 rounded-full" />
            <div className="orbit-ring orbit-ring-2 absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] border border-slate-100 rounded-full" />

            {/* Image */}
            <div
              ref={iconRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] z-10"
            >
              <CodingIcon />

              {/* Floating Chips */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 bg-white p-3 rounded-2xl shadow-xl border border-slate-50">
                <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                  <Zap size={16} />
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Live Support
                </span>
              </div>

              <div className="absolute top-1/2 -left-8 hidden sm:flex items-center gap-2 bg-white p-3 rounded-2xl shadow-xl border border-slate-50">
                <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg">
                  <Brain size={16} />
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Expert Led
                </span>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/20 to-purple-100/20 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;