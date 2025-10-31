import React from "react";

// comps
import SideNav from "@/components/(dashb)/SideNav";
import Header from "@/components/(dashb)/Header";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <div className="flex w-full min-h-screen bg-[#03091a] text-white">
      {/* FIXED SIDENAV */}
      <div className="fixed left-0 top-0 h-full w-[250px] border-r border-white/10 bg-[#03091a]">
        <SideNav />
      </div>

      {/* MAIN SECTION */}
      <div className="ml-[250px] flex flex-col w-full min-h-screen">
        {/* Sticky Header (optional) */}
        <div className="sticky top-0 z-20 bg-[#03091a]/80 backdrop-blur-md border-b border-white/10">
          <Header />
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
