import React from "react";
import SignOut from "@/components/(dashb)/Sign-out";

const page = () => {
  return (
    <main className="w-full h-full p-6 bg-[#010715] flex flex-col gap-6">
      <div className="mt-auto w-full h-fit flex flex-row items-center justify-center gap-3 border-t border-white/10 pt-6 px-4 bg-[#010715]">
        <p className="w-full text-sm text-gray-400 text-center">
          Ready to take a break? You can safely log out anytime.
        </p>

        <SignOut />
      </div>
    </main>
  );
};

export default page;
