import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CarteIcon = () => {
      return (
        <Link href="/cart" className="group relative">
            <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">0</span>
            </Link>
      );
}
export default CarteIcon