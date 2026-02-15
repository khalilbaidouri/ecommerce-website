import { Container } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className="logo">
      <Link href="/" className="flex items-center space-x-2">
        <Container className={cn("w-6 h-6 text-shop_dark_green", className)} />
        <h1
          className={cn(
            "text-3xl font-bold text-shop_dark_green tracking-wider hover:text-shop_light_green transition-colors duration-300",
            className,
          )}
        >
          Baidouri<span className="text-shop_light_green">Store</span>
        </h1>
      </Link>
    </div>
  );
};
export default Logo;
