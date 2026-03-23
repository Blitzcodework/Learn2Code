import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Play, Sparkles, Code2, Zap, Brain } from "lucide-react";

const CodingIcon = () => (
  <img
    src="/images/3D_Coding.png"
    alt="3D Coding Icon"
    className="w-full h-full object-contain"
  />
);

const Landing = () => {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-badge", { y: -30, opacity: 0, duration: 0.9 })
        .from(".hero-title span", { y: 80, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.5")
        .from(".hero-subtext", { y: 30, opacity: 0, duration: 0.8 }, "-=0.4")
        .from(".hero-btns", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".stat-item", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.3")
        .from(iconRef.current, { scale: 0.6, opacity: 0, rotation: -20, duration: 1.4, ease: "elastic.out(1, 0.5)" }, "-=0.8")
        .from(".orbit-ring", { scale: 0, opacity: 0, stagger: 0.15, duration: 0.8 }, "-=0.6")
        .from(".floating-chip", { y: 30, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4");

      gsap.to(iconRef.current, { y: -18, duration: 3.2, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(iconRef.current, { rotationY: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });

      gsap.to(".orbit-ring-1", { rotation: 360, duration: 12, repeat: -1, ease: "none", transformOrigin: "center center" });
      gsap.to(".orbit-ring-2", { rotation: -360, duration: 18, repeat: -1, ease: "none", transformOrigin: "center center" });

      gsap.to(glowRef.current, { scale: 1.2, opacity: 0.5, duration: 2.5, repeat: -1, yoyo: true, ease: "sine.inOut" });

      gsap.to(".chip-1", { y: -8, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".chip-2", { y: -10, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
      gsap.to(".chip-3", { y: -6, duration: 2.2, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });

      const handleMouseMove = (e) => {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 25;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 25;
        gsap.to(".parallax-bg", { x: moveX, y: moveY, duration: 1.8, ease: "power2.out" });
        gsap.to(iconRef.current, { rotationY: moveX * 0.5, rotationX: -moveY * 0.4, duration: 1.2, ease: "power2.out" });
        gsap.to(".orbit-ring", { x: moveX * 0.1, y: moveY * 0.1, duration: 1.5 });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,182,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,182,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft color blobs */}
      <div className="parallax-bg absolute top-[-15%] right-[-5%] w-[45vw] h-[45vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,182,255,0.1) 0%, transparent 70%)" }} />
      <div className="parallax-bg absolute bottom-[-15%] left-[-5%] w-[40vw] h-[40vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />
      <div className="absolute top-[30%] left-[20%] w-[20vw] h-[20vw] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,182,255,0.05) 0%, transparent 70%)" }} />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-screen py-20">

          {/* LEFT */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-8">

            

            <h1 className="hero-title text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              {["Build", "Industry-Ready"].map((word, i) => (
                <span key={i} className="block" style={{ color: "#0f1117" }}>
                  {word}
                </span>
              ))}
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #1a9fe0 0%, #7c3aed 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Skills    
              </span>
            </h1>

            <p className="hero-subtext text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
              style={{ color: "#64748b" }}>
              Gain practical experience through real-world projects and hands-on training designed to prepare you for real industry challenges.
            </p>

            <div className="hero-btns flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="group relative px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #1a9fe0, #7c3aed)",
                  color: "#fff",
                  boxShadow: "0 8px 30px rgba(56,182,255,0.25)",
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(56,182,255,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(56,182,255,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                Get Started
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* <button
                className="px-8 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  border: "1.5px solid #e2e8f0",
                  color: "#475569",
                  background: "#f8fafc",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1a9fe0"; e.currentTarget.style.color = "#1a9fe0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.color = "#475569"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <Play size={15} />
                Watch Demo
              </button> */}
            </div>

           
          </div>

          {/* RIGHT — 3D Icon */}
          <div className="lg:col-span-6 flex justify-center items-center relative">

            <div
              ref={glowRef}
              className="absolute w-80 h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(56,182,255,0.15) 0%, rgba(124,58,237,0.08) 50%, transparent 80%)",
                filter: "blur(24px)",
              }}
            />

            {/* Orbit Ring 1 */}
            <div
              className="orbit-ring orbit-ring-1 absolute w-[420px] h-[420px] rounded-full pointer-events-none"
              style={{ border: "1px dashed rgba(56,182,255,0.3)" }}
            >
              <div className="absolute top-0 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                style={{ background: "#38b6ff", boxShadow: "0 0 10px rgba(56,182,255,0.5)" }} />
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full"
                style={{ background: "#a78bfa", boxShadow: "0 0 8px rgba(167,139,250,0.5)" }} />
            </div>

            {/* Orbit Ring 2 */}
            <div
              className="orbit-ring orbit-ring-2 absolute w-[320px] h-[320px] rounded-full pointer-events-none"
              style={{ border: "1px dashed rgba(167,139,250,0.3)" }}
            >
              <div className="absolute top-1/2 right-0 w-2.5 h-2.5 rounded-full translate-x-1/2 -translate-y-1/2"
                style={{ background: "#f472b6", boxShadow: "0 0 8px rgba(244,114,182,0.5)" }} />
            </div>

            {/* Floating chips */}
            <div
              className="floating-chip chip-1 absolute top-[5%] right-[5%] flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(56,182,255,0.3)",
                color: "#1a9fe0",
                boxShadow: "0 4px 20px rgba(56,182,255,0.12)",
              }}
            >
              <Zap size={12} />
              Fast Training
            </div>

            <div
              className="floating-chip chip-2 absolute bottom-[10%] left-[0%] flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(167,139,250,0.3)",
                color: "#7c3aed",
                boxShadow: "0 4px 20px rgba(167,139,250,0.12)",
              }}
            >
              <Brain size={12} />
              AI Models
            </div>

            <div
              className="floating-chip chip-3 absolute top-[55%] right-[0%] flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid rgba(244,114,182,0.3)",
                color: "#db2777",
                boxShadow: "0 4px 20px rgba(244,114,182,0.12)",
              }}
            >
              <Code2 size={12} />
              Clean Code
            </div>

            {/* Icon — free floating, no box */}
            <div
              ref={iconRef}
              className="relative w-[280px] md:w-[340px] aspect-square flex items-center justify-center"
              style={{ perspective: "800px" }}
            >
              <div className="relative z-10 w-full h-full">
                <CodingIcon />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(255,255,255,0.95), transparent)" }}
      />
    </section>
  );
};

export default Landing;
