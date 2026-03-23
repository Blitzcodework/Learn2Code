import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="bg-[#F9F7FF] min-h-screen">
      <Navbar />

      {/* ✅ THIS FIXES OVERLAP */}
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;