"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi"; // 👈 using react-icons
import Link from "next/link";
import Logo from "./Logo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full dark:bg-gray-900/30 bg-white/10 backdrop-blur-lg flex items-center justify-between px-6 sm:px-10 py-4 font-mono border-b border-white/10">
      {/* Logo Section */}
      <Logo />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8 dark:text-white text-black font-medium">
        <Link href="/#features" className="hover:text-[#0a93d8] transition">
          Features
        </Link>
        <Link href="/about" className="hover:text-[#0a93d8] transition">
          About
        </Link>
        <Link
          href="/dashboard"
          className="bg-[#0a93d8] text-white px-5 py-3 rounded-lg hover:bg-black transition"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex items-center justify-center p-2 rounded-lg dark:text-white text-black hover:bg-white/10 transition"
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full dark:bg-gray-900/95 bg-white/90 backdrop-blur-lg flex flex-col items-center space-y-6 py-6 border-t border-white/10 transition-all duration-300 md:hidden">
          <Link
            href="/#features"
            className="hover:text-[#0a93d8] dark:text-white text-black transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/about"
            className="hover:text-[#0a93d8] dark:text-white text-black transition"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/dashboard"
            className="bg-[#0a93d8] text-white px-6 py-3 rounded-lg hover:bg-black transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
