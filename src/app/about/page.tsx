import NavBar from "@/components/NavBar";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaUsers,
  FaLightbulb,
  FaChartLine,
} from "react-icons/fa";

export default function LearnMorePage() {
  return (
    <>
      <NavBar />

      {/* MAIN SECTION */}
      <main className="min-h-screen w-full dark:bg-gray-300 bg-white relative overflow-hidden font-plex-mono">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
              linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
            `,
            backgroundSize: "80px 80px",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />

        {/* HERO / INTRO */}
        <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-[70vh] px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold dark:text-white text-black leading-tight tracking-tight mb-4">
            About <span className="text-[#0a93d8]">ConsistStats</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-700 max-w-2xl">
            We help developers track their coding rhythm, uncover patterns, and
            stay consistent — because progress starts with awareness.
          </p>

          <div className="mt-10">
            <Link
              href="/signin"
              className="bg-[#0a93d8] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition"
            >
              Get Started
            </Link>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="relative z-10 py-40 px-6 dark:text-white dark:bg-gray-900/40 border-t-[0.5px] border-blue-500/10 text-black">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <Image
              src="/consiststats-dashboard.jpg"
              alt="ConsistStats dashboard preview"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg dark:shadow-gray-900/20"
            />
            <div>
              <h2 className="text-3xl  font-bold mb-5">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-800 mb-4 leading-relaxed">
                ConsistStats was built for developers who care about
                improvement. We turn your daily coding data into meaningful
                insights — helping you spot trends, balance effort, and stay in
                the zone.
              </p>
              <p className="text-gray-600 dark:text-gray-800 leading-relaxed">
                From WakaTime and GitHub stats to AI-driven consistency
                tracking, we bring everything together to help you code smarter,
                not harder.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* CORE VALUES */}
      <section className="relative z-10 py-24 px-6 border-t border-gray-200 text-black dark:text-white">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            The Core of <span className="text-[#0a93d8]">ConsistStats</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
            Every feature we build revolves around helping developers understand
            their flow and stay consistent with clarity and purpose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="p-8 border-[0.5] border-blue-200/20 dark:bg-gray-700/20 bg-white shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
            <FaUsers className="text-[#0a93d8] text-5xl mb-4 bg-blue-200/20 p-2 rounded-lg border-[0.5] border-blue-200/20" />
            <h3 className="font-bold text-xl mb-3">For Developers</h3>
            <p className="text-gray-600 dark:text-gray-500">
              Built for makers and builders — whether you’re coding daily or on
              weekends, your journey matters.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border-[0.5] border-blue-200/20 dark:bg-gray-700/20 bg-white shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
            <FaLightbulb className="text-[#0a93d8] text-5xl mb-4 bg-blue-200/20 p-2 rounded-lg border-[0.5] border-blue-200/20" />
            <h3 className="font-bold text-xl mb-3">Driven by Insight</h3>
            <p className="text-gray-600 dark:text-gray-500">
              Our analytics and AI give you the clarity to understand where your
              effort goes — and how to improve it.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border-[0.5] border-blue-200/20 dark:bg-gray-700/20 bg-white shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
            <FaChartLine className="text-[#0a93d8] text-5xl mb-4 bg-blue-200/20 p-2 rounded-lg border-[0.5] border-blue-200/20" />
            <h3 className="font-bold text-xl mb-3">Progress that Lasts</h3>
            <p className="text-gray-600 dark:text-gray-500">
              Track progress, celebrate wins, and stay consistent — all while
              keeping your focus on growth.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 dark:text-white text-black dark:bg-gray-900/20 border-t-[0.5px] border-blue-500/10 py-10 mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} ConsistStats. Built with 💙 and Next.js
            by ChihurumanyaN.
          </p>
          <div className="flex items-center space-x-4 mt-3 md:mt-0 text-xl">
            <a href="#" className="text-gray-400 hover:text-[#0a93d8]">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0a93d8]">
              <FaGithub />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#0a93d8]">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
