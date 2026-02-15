"use client";
import { dataHeader } from "@/constants/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MenuBar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:inline-flex w-1/3  items-center gap-7 text-sm capitalize font-semibold text-lightColor">
      {dataHeader.map((item) => (
        <Link
          key={item.title}
          href={item.link}
          className={`hover:text-shop_light_green transition-colors duration-300 ${
            pathname === item.link ? "text-shop_light_green" : ""
          }`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
export default MenuBar;
