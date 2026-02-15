"use client";
import { AlignLeft } from "lucide-react";
import SideMenu from "./SideMenu";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignLeft
          className="w-5 h-5 hover:text-shop_light_green 
        transition-colors duration-300 cursor-pointer md:gap-0"
        />
      </button>
      <div className="md:hidden">
        <SideMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  );
};
export default MobileMenu;
