import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ FIXED
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Shield,
  Globe,
  Server,
  Sparkles,
  Megaphone,
  BarChart3,
  LineChart,
  Brain,
  Search,
  Target,
} from "lucide-react";

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ================= COURSE DATA ================= */
const courses = [
  {
    title: "Python Full Stack",
    desc: "Full-stack with Python, Django, React, and databases.",
    color: "bg-yellow-500",
    icon: Code2,
    features: [
      { icon: Server, text: "Python & Django" },
      { icon: Database, text: "MySQL & MongoDB" },
      { icon: Code2, text: "React JS & JavaScript" },
      { icon: Globe, text: "APIs (REST)" },
      { icon: Shield, text: "Security Essentials" },
      { icon: Sparkles, text: "Zero-Cost Hosting Solutions" },
    ],
    projects: [
      "Hands-on experience through real company projects aligned with industry standards.",
    ],
  },
  {
    title: "Digital Marketing",
    desc: "Master online marketing strategies to grow brands and businesses.",
    color: "bg-pink-500",
    icon: Megaphone,
    features: [
      { icon: Megaphone, text: "Social Media Marketing" },
      { icon: Search, text: "SEO & SEM" },
      { icon: Target, text: "Paid Ads Campaigns" },
      { icon: Globe, text: "Content Marketing" },
      { icon: LineChart, text: "Analytics & Insights" },
      { icon: Sparkles, text: "Brand Strategy" },
    ],
    projects: [
      "Live Ad Campaign (Real Client)",
      "SEO Optimization Project",
      "Brand Growth Strategy",
    ],
  },
  {
    title: "Data Analyst",
    desc: "Analyze data and generate insights using modern tools.",
    color: "bg-blue-500",
    icon: BarChart3,
    features: [
      { icon: BarChart3, text: "Excel & Advanced Analytics" },
      { icon: Database, text: "SQL & Data Handling" },
      { icon: Code2, text: "Python for Data Analysis" },
      { icon: LineChart, text: "Data Visualization" },
      { icon: Brain, text: "Business Insights" },
      { icon: Sparkles, text: "Real-world Datasets" },
    ],
    projects: [
      "Gain hands-on experience by analyzing real company data to generate actionable business insights.",
    ],
  },
];

const Courses = () => {
  const container = useRef();
  const navigate = useNavigate(); // ✅ FIXED

  useGSAP(
    () => {
      // Header Animation
      gsap.from(".course-header", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".course-header",
          start: "top 85%",
        },
      });

      // Cards Animation
      gsap.from(".course-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".course-grid",
          start: "top 80%",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="py-20 px-6 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="course-header text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-[#B45DEB]">Courses</span>
          </h2>
          <p className="text-gray-500 mt-3 text-base md:text-lg">
            Industry-ready programs with real-world company projects.
          </p>
        </div>

        {/* GRID */}
        <div className="course-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => {
            const Icon = course.icon;

            return (
              <div
                key={i}
                className="course-card bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-12 h-12 ${course.color} text-white rounded-full flex items-center justify-center`}
                  >
                    <Icon size={24} />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {course.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-6">
                  {course.desc}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {course.features.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 text-sm"
                    >
                      <item.icon
                        size={16}
                        className="text-[#B45DEB]"
                      />
                      {item.text}
                    </li>
                  ))}
                </ul>

                {/* Projects */}
                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">
                    Company Real-Time Projects
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                    {course.projects.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => navigate("/ContactCard")}
                  className="w-full bg-[#B45DEB] hover:bg-[#9f4de0] text-white font-semibold py-3 rounded-xl transition-transform active:scale-95"
                >
                  Enroll Now
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;