import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import CartMenu from "./cart-menu";

const Navbar = () => {
  return (
    <nav className="h-[75px] sticky top-0 bg-primary">
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg">
          Bhakti Rasa
        </Link>
        <div className="flex items-center gap-8">
          <ThemeToggle />

          <CartMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
