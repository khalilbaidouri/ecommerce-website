"use client";

import { X } from "lucide-react";
import Logo from "./Logo";
import { dataHeader, dataReseaux } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import useOutsideClick from "@/hooks";

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 text-white/80 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 w-80 bg-black h-full p-10 border-r border-r-shop_dark_green flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between relative">
          <Logo className="w-10 h-10 text-white" />

          <button
            className="absolute top-0 right-0 hover:text-shop_light_green transition-colors duration-300 cursor-pointer"
            onClick={onClose}
          >
            <X />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-6 text-sm capitalize font-semibold text-lightColor">
          {dataHeader.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className={`hover:text-shop_light_green transition-colors duration-300 ${
                pathname === item.link ? "text-shop_light_green" : ""
              }`}
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Social Icons with Tooltip */}
        <div className="mt-auto flex gap-7">
          <TooltipProvider>
            {dataReseaux.map((item) => {
              const Icon = item.icon;

              return (
                <Tooltip key={item.title}>
                  <TooltipTrigger asChild>
                    <Link
                      href={item.link}
                      className="hover:text-shop_light_green transition-colors duration-300"
                      onClick={onClose}
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>

                  <TooltipContent side="top">
                    {item.title}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;