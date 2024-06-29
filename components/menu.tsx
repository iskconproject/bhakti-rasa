import MenuItem from "@/components/menu-item";
import { cn } from "@/lib/utils";
import { MenuItem as IMenuItem } from "@/models/menu-item.model";
import Empty from "@/components/ui/empty";

type Props = {
  className?: string;
  menuItems: IMenuItem[];
};

const Menu: React.FC<Props> = ({ className, menuItems }) => {
  return (
    <>
      {menuItems.length ? (
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4",
            className
          )}
        >
          {menuItems?.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <Empty message="No items found" className="my-8" />
      )}
    </>
  );
};

export default Menu;
