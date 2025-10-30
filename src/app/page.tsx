import NavBar from "@/components/NavBar";
import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaChartLine,
  FaRobot,
  FaFire,
} from "react-icons/fa";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main
        className="min-h-screen w-full dark:bg-gray-300
       bg-white relative overflow-hidden font-plex-mono"
      >
        {/* Diagonal Grid Background */}
        <div
          className="absolute inset-0 "
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
        ></div>
        {/* HERO SECTION */}
        <section className="absolute  w-full z-10 flex flex-col items-center justify-center text-center min-h-[80vh] px-6 opacity-1000">
          <h1 className="text-5xl md:text-7xl md:mt-10 font-extrabold dark:text-white text-black max-w-3xl leading-tight tracking-tight z-10">
            Track your <span className="text-[#0a93d8]">coding rhythm</span>{" "}
            with style.
          </h1>
          <p className="text-lg dark:text-gray-800 text-gray-600 mt-6 max-w-xl">
            Visualize your coding journey, stay consistent, and build better
            habits — powered by insights that matter.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-[#0a93d8] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-black hover:text-white transition">
              Start Tracking
            </button>
            <button className="border border-black text-black dark:bg-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#0a93d8] hover:text-white transition">
              Learn More
            </button>
          </div>
        </section>
      </main>

      {/* FEATURE SECTION */}
      <section
        id="features"
        className="relative z-10 py-24 px-6 border-t text-black dark:text-white border-gray-200"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-center w-full mb-12 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold dark:text-white text-black mb-5">
              Why <span className="text-[#0a93d8]">ConsistStats?</span>
            </h2>
            <p className="text-center text-md dark:text-gray-500 text-gray-600 mt-2 max-w-3xl">
              Gain powerful insights into your coding habits and supercharge
              your productivity with our suite of analytics tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-8 border-[0.5] border-blue-200/20 dark:bg-gray-700/20 bg-white md:mb-20 shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <FaChartLine className="text-[#0a93d8] text-5xl mb-4 bg-blue-200/20 p-2 rounded-lg border-[0.5] border-blue-200/20" />
              <h3 className="font-bold text-xl dark:text-white text-black mb-3">
                Track Effortlessly
              </h3>
              <p className="text-gray-600 dark:text-gray-500">
                Automatically sync your WakaTime data to see your daily coding
                rhythm without lifting a finger.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 border-[0.5] border-blue-200/20 dark:bg-gray-700/20 bg-white md:mt-20 shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <FaRobot className="text-[#0a93d8] text-5xl mb-4 bg-blue-200/20 p-2 rounded-lg border-[0.5] border-blue-200/20" />
              <h3 className="font-bold text-xl dark:text-white text-black mb-3">
                Smart AI Insights
              </h3>
              <p className="text-gray-600 dark:text-gray-500">
                AI analyzes your patterns and gives you feedback to stay on
                track and improve focus over time.
              </p>
            </div>

            {/* Card 3 */}

            <div className="p-8 border-[0.5] border-blue-200/20 dark:bg-gray-700/20 bg-white md:mb-20 shadow-md rounded-2xl hover:shadow-xl transition transform hover:-translate-y-2">
              <FaFire className="text-[#0a93d8] text-5xl mb-4 bg-blue-200/20 p-2 rounded-lg border-[0.5] border-blue-200/20" />
              <h3 className="font-bold text-xl dark:text-white text-black mb-3">
                Stay Consistent
              </h3>
              <p className="text-gray-600 dark:text-gray-500">
                Keep your streak alive with friendly reminders, stats, and a
                progress dashboard that motivates you daily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10  dark:text-white text-black dark:bg-gray-900/20  border-t-[0.5px] border-blue-500/10 py-10 mt-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} ConsistStats. Built with 💙 and Nextjs
            by ChihurumanyaN .
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
