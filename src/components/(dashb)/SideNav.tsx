import React from "react";
//from next
import Image from "next/image";

const SideNav = () => {
  return (
    <section className="p-8 border-r-[0.5px] border-white/10">
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
      <nav></nav>
    </section>
  );
};

export default SideNav;
