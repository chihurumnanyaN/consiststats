import DevProductivityAI from "@/components/(chatbot)/Chatbot";
import DashFooter from "@/components/(dashb)/DashFooter";
import React from "react";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col gap-10 p-6">
      <div className="w-full h-full flex items-start justify-center gap-4">
        <div className="w-[48%] h-fit bg[#03091a] rounded-lg flex flex-col gap-5">
          <DevProductivityAI />
          <div className="bg-orange-900/30 border-2 border-dotted border-orange-400 rounded-xl w-full h-[20vh]"></div>
        </div>
        <div className="w-[48%] h-fit flex flex-col gap-5 rounded-lg">
          <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl h-[46vh] w-full"></div>

          <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl h-[46vh] w-full"></div>

          <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl h-[46vh] w-full"></div>
        </div>
      </div>
      <DashFooter />
    </main>
  );
};

export default page;
