import MenuItem from "@/components/menu-item";
import { cn } from "@/lib/utils";
import { MenuItem as IMenuItem } from "@/models/menu-item.model";

type Props = {
  className?: string;
  menuItems: IMenuItem[];
};

const Menu: React.FC<Props> = ({ className, menuItems }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",
        className
      )}
    >
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
