import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { useNavigate } from "react-router-dom";

const logo = "/images/Learn2Code.png";

const LogoAnimation = () => {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate(); // ✅ add this

  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "chars" });

    const tl = gsap.timeline({
      onComplete: () => {
        // ✅ redirect after animation
        setTimeout(() => {
          navigate("/landing");
        }, 500);
      },
    });

    tl.fromTo(
      containerRef.current,
      { background: "radial-gradient(circle, #ffffff 100%, #ffffff 100%)" },
      {
        background:
          "radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, #ffffff 70%)",
        duration: 1.2,
        ease: "power2.out",
      }
    );

    tl.fromTo(
      logoRef.current,
      {
        scale: 0.4,
        rotation: -120,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.3,
        ease: "expo.out",
      },
      "-=0.6"
    );

    tl.to(logoRef.current, {
      scale: 1.05,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });

    tl.fromTo(
      split.chars,
      {
        y: 40,
        opacity: 0,
        rotateX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.8"
    );

    gsap.to(logoRef.current, {
      y: -12,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(logoRef.current, {
      filter: "drop-shadow(0px 0px 25px rgba(139,92,246,0.5))",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

  }, [navigate]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center h-screen overflow-hidden"
    >
      <img
        ref={logoRef}
        src={logo}
        alt="Learn2Code Logo"
        className="w-36 h-36 object-contain"
      />

      <h1
        ref={textRef}
        className="text-6xl font-extrabold mt-6 text-gray-900 tracking-wide"
      >
        Learn2Code
      </h1>
    </div>
  );
};

export default LogoAnimation;