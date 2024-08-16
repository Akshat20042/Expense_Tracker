import React from "react";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";

export default function DashBoardLayout({ children }) {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block shadow-sm">
        <SideNav></SideNav>
      </div>
      <div className="md:ml-64">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}
