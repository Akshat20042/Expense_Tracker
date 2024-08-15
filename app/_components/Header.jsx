import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="p-5 flex justify-between items-center shadow-md">
      <Image src={"./logo.svg"} alt="logo" width={120} height={70} />
      <Button>Get Started</Button>
    </div>
  );
}
