import React from "react";
import Image from "next/image";

const Logo = ({
  height,
  width,
  textSize,
}: {
  height?: number;
  width?: number;
  textSize?: string;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/consist-stats-logo.png"
        alt="ConsistStats Logo"
        width={width || 48} //
        height={height || 48} //
      />
      <h1
        className={`text-${
          textSize || "2xl"
        } font-bold dark:text-white text-black`}
      >
        Consist<span className="text-[#0a93d8]">Stats</span>
      </h1>
    </div>
  );
};

export default Logo;
