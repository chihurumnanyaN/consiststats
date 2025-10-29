import SignIn from "@/components/sign-in";
import React from "react";

//from next
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex items-center justify-center h-screen w-full dark:bg-[#03091a] bg-[#03091a]">
      <div className="sm:bg-white/5 sm:dark:bg-gray-800/40 sm:backdrop-blur-md p-8 rounded-2xl sm:shadow-lg w-[95%] sm:w-[35%] flex flex-col justify-center items-start gap-6 sm:border sm:border-white/10">
        {/* Logo and Title */}
        <div className="flex items-center w-full justify-center space-x-2">
          <Image
            src="/consist-stats-logo.png"
            alt="ConsistStats Logo"
            width={30}
            height={30}
          />
          <h1 className="text-lg font-bold text-white">
            Consist<span className="text-[#0a93d8]">Stats</span>
          </h1>
        </div>

        {/* Heading */}
        <div className="flex flex-col justify-center sm:items-start items-center gap-2">
          <h2 className="text-3xl text-center sm:text-left font-semibold text-gray-200">
            Yoo, Welcome back{" "}
          </h2>
          <p className="text-sm text-center sm:text-left text-gray-400">
            Sign in to continue your coding journey
          </p>
        </div>

        {/* Sign In Provider (if using NextAuth) */}
        <SignIn />
        <div className="w-full flex justify-center items-center gap-2">
          <div className="w-1/4 h-px bg-gray-600"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="w-1/4 h-px bg-gray-600"></div>
        </div>
        {/* Email + Password Form */}
        <form className="w-full flex flex-col gap-4">
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 bg-[#0b132b] border border-gray-600 rounded-xl w-full text-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0a93d8]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="p-3 bg-[#0b132b] border border-gray-600 rounded-xl w-full text-gray-100 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0a93d8]"
              placeholder="Enter your password(8 characters)"
              maxLength={8}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#0a52d8] hover:bg-[#0977b5] text-white px-6 py-3 w-full rounded-xl font-semibold transition-colors duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-white text-xs">
          {"dont't have an account? "}
          <Link href="/signup" className="text-[#0a93d8]">
            Signup
          </Link>
        </p>
      </div>
    </main>
  );
};

export default page;
