import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Target,
  Rocket,
  Users,
  Briefcase,
  BookOpen,
  Wrench,
  Trophy,
  ChevronRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ================= CLEAN SECTION ================= */
const Section = ({ title, content, subtitle }) => {
  const sectionRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".fade-item"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 border-b border-gray-100 last:border-0"
    >
      <div className="max-w-3xl mx-auto text-center px-4 fade-item">
        {subtitle && (
          <span className="text-[#B45DEB] font-bold tracking-[0.2em] text-[11px] uppercase mb-3 block">
            {subtitle}
          </span>
        )}

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight">
          {title}
        </h2>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
          {content}
        </p>
      </div>
    </section>
  );
};

/* ================= MAIN ABOUT ================= */
const About = () => {
  const heroRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      /* HERO */
      gsap.from(".hero-item", {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"
      });

      /* GRID */
      gsap.to(".grid-card", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="min-h-[60vh] flex flex-col justify-center items-center text-center px-6 pt-20"
      >
        <h1 className="hero-item text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          Empowering the Next Generation of{" "}
          <span className="text-[#B45DEB]">Digital Creators</span>
        </h1>

        <p className="hero-item mt-6 text-gray-500 max-w-xl text-base md:text-lg">
          Learn2Code builds real skills through real-world projects and industry-level learning.
        </p>

        <div className="hero-item mt-8 w-20 h-[2px] bg-[#B45DEB] opacity-40"></div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-18">

        {/* WHO WE ARE */}
        <Section
          subtitle="Our Identity"
          title="Who We Are"
          content="Learn2Code, powered by BlitzCode IT Solutions, is a modern learning ecosystem built to bridge the gap between theoretical knowledge and real-world execution. We focus on delivering industry-relevant skills through hands-on experience, enabling learners to confidently build, innovate, and solve real problems. Our approach goes beyond traditional education—empowering individuals to become creators, not just consumers of technology."
        />

        {/* MISSION & VISION */}
        <section className="py-16 grid md:grid-cols-2 gap-12 border-b border-gray-100 text-center md:text-left">
          <div>
            <Target className="mx-auto md:mx-0 text-[#B45DEB] mb-4" size={28} />
            <h3 className="text-xl md:text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-500">
              Deliver accessible, project-driven education that mirrors real industry environments.
            </p>
          </div>

          <div>
            <Rocket className="mx-auto md:mx-0 text-[#B45DEB] mb-4" size={28} />
            <h3 className="text-xl md:text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-500">
              Become a global benchmark where our certification equals real-world capability.
            </p>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section ref={gridRef} className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="text-[#B45DEB]">Learn2Code?</span>
            </h2>
            <p className="text-gray-500 mt-2">
              A smarter way to learn modern technology.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: "Project-Based Learning", d: "Build real-world applications.", icon: Rocket },
              { t: "Expert Mentors", d: "Learn from industry professionals.", icon: Users },
              { t: "Certification", d: "Boost your career with credentials.", icon: Trophy },
              { t: "Placement Support", d: "Career guidance & interviews.", icon: Briefcase },
              { t: "Flexible Learning", d: "Offline & online options.", icon: BookOpen },
              { t: "Tool Mastery", d: "Hands-on latest tools.", icon: Wrench }
            ].map((item, i) => (
              <div
                key={i}
                className="grid-card opacity-0 translate-y-10 p-6 border border-gray-100 rounded-xl hover:shadow-md transition"
              >
                <item.icon className="text-[#B45DEB] mb-4" size={26} />
                <h4 className="font-semibold text-lg mb-2">{item.t}</h4>
                <p className="text-gray-500 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* POWER OF COLLABORATION (MOVED UP) */}
        <div className="-mt-10 md:-mt-16">
          <Section
            subtitle="Our Culture"
            title="Power of Collaboration"
            content="At Learn2Code, collaboration is at the core of everything we do. We foster an environment where learners actively engage in peer-to-peer development, real-time problem solving, and team-based projects that mirror professional workflows. By working together, sharing ideas, and building collectively, our students gain not only technical expertise but also the communication and teamwork skills essential for success in the modern tech industry."
          />
        </div>

      </div>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 text-center px-6">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Ready to start your journey?
        </h2>

        <button className="bg-[#B45DEB] hover:bg-[#9f4de0] px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto transition">
          Join Now <ChevronRight size={18} />
        </button>
      </section>
    </div>
  );
};

export default About;