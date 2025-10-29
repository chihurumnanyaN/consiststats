import React from "react";

const page = () => {
  return (
    <main className="w-full h-full p-6 bg-[#010715] flex flex-col gap-6">
      <div className="flex justify-between items-center h-[20vh]">
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[32%] h-full"></div>
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[32%] h-full"></div>
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[32%] h-full"></div>
      </div>
      <div className="flex justify-between items-center h-[50vh]">
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[66%] h-full"></div>
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[32%] h-full"></div>
      </div>
      <div className="flex justify-between items-center h-[40vh]">
        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[32%] h-full"></div>

        <div className="bg-[#03091a] border-[0.5] border-white/10 rounded-xl w-[66%] h-full"></div>
      </div>

      <div className="bg-orange-500/15 border-2 border-dotted border-orange-400 rounded-xl w-full h-[20vh]"></div>
      <div className=" w-full h-[10vh]">
        <p className="text-center text-[0.5px]">
          {" "}
          Built with 💙 and Nextjs by ChihurumanyaN .
        </p>
      </div>
    </main>
  );
};

export default page;
