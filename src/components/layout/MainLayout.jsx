import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      
      {/* ✅ Fixed Navbar */}
      <Navbar />

      {/* ✅ Main Content (SCROLL ENABLED) */}
      <main className="flex-1 mt-[80px] w-full">
        <Outlet />
      </main>

      {/* ✅ Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;