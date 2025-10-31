import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({
  height,
  width,
  textSize,
  darkMode,
}: {
  height?: number;
  width?: number;
  textSize?: string;
  darkMode?: boolean;
}) => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/consist-stats-logo.png"
        alt="ConsistStats Logo"
        width={width || 48} //
        height={height || 48} //
      />
      <h1
        className={`text-${textSize || "2xl"} font-bold dark:text-white 
        ${darkMode ? "text-white" : "text-black"}`}
      >
        Consist<span className="text-[#0a93d8]">Stats</span>
      </h1>
    </Link>
  );
};

export default Logo;
