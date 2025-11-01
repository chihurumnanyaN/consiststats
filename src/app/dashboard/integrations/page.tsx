import DashFooter from "@/components/(dashb)/DashFooter";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full p-6 flex flex-col gap-6">
      <div className="w-full h-fit flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Connect your tools </h1>
        <p className="text-white/80">
          sync your favourite tools with consiststats, and get real-time
          insights
        </p>
      </div>
      <div className="w-full h-fit flex justify-start items-center flex-wrap gap-6">
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-70 h-[300px]"></div>
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-70 h-[300px]"></div>
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-70 h-[300px]"></div>
      </div>
      <DashFooter />
    </main>
  );
};

export default page;
