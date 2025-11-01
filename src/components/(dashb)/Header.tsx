import { auth } from "@/lib/auth";
import Image from "next/image";
import React from "react";
import { FaBell } from "react-icons/fa";

const Header = async () => {
  const session = await auth();
  const userImage = session?.user?.image || "/default-avatar.png"; // fallback image
  const userName = session?.user?.name || "Anonymous";

  return (
    <header className="flex justify-between items-center h-20 w-full border-b border-white/10 px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-[#03091a] text-gray-200 placeholder-gray-400 border border-white/10 rounded-xl px-4 py-2 focus:outline-none focus:border-[#0a93d8] transition"
        />
      </div>

      {/* User Profile & Notifications */}
      <div className="flex items-center gap-4">
        {/* Notification Button */}
        <button
          className="relative p-2 rounded-full bg-white/10 hover:bg-transparent transition"
          aria-label="Notifications"
        >
          <FaBell className="text-gray-300 text-2xl" />
          {/* Optional: notification badge */}
          <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        </button>

        {/* User Info 
        <span className="text-gray-300 text-2xl font-sans hidden sm:block">
          {userName}
        </span>*/}
        <div className="w-14 h-14 rounded-full bg-gray-400/20 p-2 border border-white/10 flex items-center justify-center overflow-hidden">
          <Image
            src={userImage}
            alt={`Profile picture of ${userName}`}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
