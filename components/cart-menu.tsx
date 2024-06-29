"use client";

import { useCartStore } from "@/store/cartStore";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CartMenu = () => {
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="relative">
      <ShoppingCart className="text-white"/>
      {cartCount > 0 && (
        <Badge
          className="absolute -top-4 -right-4 rounded-full w-6 h-6 flex justify-center items-center"
          variant={"secondary"}
        >
          {cartCount}
        </Badge>
      )}
    </div>
  );
};

export default CartMenu;
