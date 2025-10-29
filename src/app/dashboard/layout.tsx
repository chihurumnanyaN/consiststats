import React from "react";

//comps
import SideNav from "@/components/(dashb)/SideNav";
import Header from "@/components/(dashb)/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="flex flex-col w-full">
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
}
