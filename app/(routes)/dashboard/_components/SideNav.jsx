import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SideNav() {
  const menulist = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutGrid,
    },
    {
      id: 2,
      name: "Budgets",
      icon: PiggyBank,
    },
    {
      id: 3,
      name: "Budgets",
      icon: ReceiptText,
    },
    {
      id: 4,
      name: "Upgrade",
      icon: ShieldCheck,
    },
  ];
  return (
    <div className="h-screen p-5">
      <Image src={"/logo.svg"} alt="logo" width={180} height={110}></Image>
      <div className="mt-5">
        {menulist.map((menu, index) => (
          <h2 className="flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-blue-100">
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 items-center  hover:text-primary hover:bg-blue-100">
        <UserButton />
        Profile
      </div>
    </div>
  );
}
