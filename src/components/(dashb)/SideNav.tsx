"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartLine, FaBrain, FaPlug, FaCog } from "react-icons/fa";
import Logo from "../Logo";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <FaChartLine className="text-lg" />,
  },
  {
    name: "AI Insights",
    href: "/dashboard/insights",
    icon: <FaBrain className="text-lg" />,
  },
  {
    name: "Integrations",
    href: "/dashboard/integrations",
    icon: <FaPlug className="text-lg" />,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: <FaCog className="text-lg" />,
  },
];

const SideNav = () => {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-[250px] flex flex-col justify-between border-r border-white/10 p-8 bg-[#03091a] text-white">
      <div>
        {/* logo section */}
        <div className="mb-10">
          <Logo width={30} height={30} textSize="lg" />
        </div>

        {/* nav links */}
        <nav className="flex flex-col gap-3">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl font-medium transition-all
                  ${
                    active
                      ? "bg-[#0a93d8] text-white shadow-sm"
                      : "text-gray-400 hover:bg-[#0a93d8]/10 hover:text-[#0a93d8]"
                  }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} ConsistStats
      </div>
    </aside>
  );
};

export default SideNav;
