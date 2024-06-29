import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { MenuItem as MenuItemType } from "@/models/menu-item.model";
import { Input } from "@/components/ui/input";

type Props = {
  item: MenuItemType;
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
        <h3 className="text-lg font-semibold">
          {name} <span className="text-sm text-muted-foreground">(₹{price})</span>
        </h3>
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
          <div className="flex items-center gap-2">
            <Button
              className="btn btn-primary p-2"
              variant={"outline"}
              onClick={() => handleUpdateQuantity(itemQuantity - 1)}
            >
              <Minus className="w-4 h-4"/>
            </Button>
            <Input value={itemQuantity} onChange={(e) => handleUpdateQuantity(+e.target.value)} className="w-10" />
            <Button
              className="btn btn-primary p-2"
              variant={"outline"}
              onClick={() => handleUpdateQuantity(itemQuantity + 1)}
            >
              <Plus className="w-4 h-4"/>
            </Button>
          </div>
        ) : null}
      </div>
    </Card>
  );
};

export default MenuItem;
