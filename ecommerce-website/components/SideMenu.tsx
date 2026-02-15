import { X } from "lucide-react";
import Logo from "./Logo";
import {dataHeader} from '@/constants/data';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}
const SideMenu: React.FC<SideMenuProps> = ({ isOpen, onClose }) => {
      const pathname = usePathname();
    
  return (
    <div
      className={`fixed inset-y-0  z-50 left-0 w-full h-screen bg-black/50 text-white/80 shadow-xl  ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop_dark_green flex flex-col gap-6">
        <div className="flex items-center justify-between gap-5">
          <Logo className="w-16 h-16 text-white" />
          <button className="absolute top-4 right-4 hover:text-shop_light_green transition-colors duration-300 cursor-pointer" onClick={onClose}>
            <X />
          </button>
        </div>
        <div className="flex flex-col gap-6 text-sm capitalize font-semibold text-lightColor">
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
      </div>
    </div>
  );
};
export default SideMenu;
