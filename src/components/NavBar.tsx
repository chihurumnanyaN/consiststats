import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="relative z-10 dark:bg-gray-900/20 flex items-center justify-between px-8 py-5 font-mono">
      <div className="flex items-center space-x-2">
        <Image
          src="/consist-stats-logo.png"
          alt="ConsistStats Logo"
          width={48} //
          height={48} //
        />
        <h1 className="text-2xl font-bold dark:text-white text-black">
          Consist<span className="text-[#0a93d8]">Stats</span>
        </h1>
      </div>
      <div className="space-x-6 dark:text-white text-black font-medium">
        <a href="#features" className="hover:text-[#0a93d8] transition">
          Features
        </a>
        <a href="#about" className="hover:text-[#0a93d8] transition">
          About
        </a>
        <a
          href="#get-started"
          className="bg-[#0a93d8] text-white px-6 py-4 rounded-lg hover:bg-black transition"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
