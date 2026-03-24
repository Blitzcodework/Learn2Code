import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  // ✅ Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      
      {/* ✅ Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
        <Navbar />
      </div>

      {/* ✅ Main Content */}
      <main className="flex-1 pt-[80px] w-full">
        <Outlet />
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;