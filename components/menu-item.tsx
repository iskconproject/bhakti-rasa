import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { MenuItem } from "@/models/menu-item.model";

type Props = {
  item: MenuItem;
};

const MenuItem: React.FC<Props> = ({ item }) => {
  const { id, name, price, quantity } = item;
  const { addItem, updateItemQuantity, items } = useCartStore();

  const handleAddClick = () => {
    addItem(item);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity >= 0) {
      updateItemQuantity(id, newQuantity);
    }
  };

  const cartItem = items.find((cartItem) => cartItem.id === item.id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  return (
    <Card
      className={cn(
        "p-4 bg-card",
        itemQuantity ? "border-2 border-accent-foreground" : ""
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        {itemQuantity < 1 ? (
          <Button
            className="btn btn-primary"
            variant={"outline"}
            onClick={handleAddClick}
          >
            Add
          </Button>
        ) : null}

        {itemQuantity > 0 ? (
          <div className="flex items-center gap-4">
            <Button
              className="btn btn-primary"
              variant={"outline"}
              onClick={() => handleUpdateQuantity(itemQuantity - 1)}
            >
              <Minus />
            </Button>
            <span>{itemQuantity}</span>
            <Button
              className="btn btn-primary"
              variant={"outline"}
              onClick={() => handleUpdateQuantity(itemQuantity + 1)}
            >
              <Plus />
            </Button>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default MenuItem;
