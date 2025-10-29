import React from "react";

//from next
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className=" flex flex-row gap-20 p-20 dark:bg-[#03091a] bg-[#03091a]">
      <section className=" w-[40%] flex flex-col gap-9 justify-center items-start mx-20">
        <div className="flex items-center w-full justify-start space-x-2">
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
        <div>
          <h2 className="text-3xl text-left font-semibold mb-3 text-gray-200">
            Create an Account, broo
          </h2>
          <p className="text-sm text-left text-gray-400">
            {"let's build your consistency journey together"}
          </p>
        </div>

        <form className="w-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="p-3 bg-[#0b132b] border border-gray-600 rounded-lg w-full text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0a93d8]"
              placeholder="Enter your Full Name"
              required
            />
          </div>
          <div className="w-full flex flex-col gap-2">
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
              className="p-3 bg-[#0b132b] border border-gray-600 rounded-lg w-full text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0a93d8]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="w-full flex flex-col gap-2">
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
              className="p-3 bg-[#0b132b] border border-gray-600 rounded-lg w-full text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0a93d8]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-[#0a52d8] hover:bg-[#0977b5] text-white px-6 py-3 w-full rounded-lg font-semibold transition-colors duration-200"
          >
            SignUp
          </button>
        </form>
        <p className="text-white text-xs">
          {"Already have an account? "}
          <Link href="/login" className="text-[#0a93d8]">
            Login broski
          </Link>
        </p>
      </section>
      <section className="bg-[#010614] text-[#010614] h-[80vh] w-[40%] rounded-xl p-5 border-[0.5px] border-blue-600/20 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rerum in
        magnam minima commodi alias id nisi quos nesciunt doloremque cum,
        distinctio fuga fugiat architecto minus eos repellat provident! Quis
        eveniet aliquid voluptatibus tempora necessitatibus impedit et ipsam.
        Eius blanditiis provident optio et aspernatur odio, iusto voluptates
        facere voluptatibus voluptatem vero quo illum, aperiam, cumque
        perspiciatis assumenda commodi. Quas eligendi laboriosam corrupti. Magni
        officiis illum optio adipisci quasi, quod quia.
      </section>
    </main>
  );
};

export default page;
