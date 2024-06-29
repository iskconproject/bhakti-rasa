import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import PlaceOrderForm from "./place-order-form";

type Props = {
  open: boolean;
  side?: "top" | "right" | "bottom" | "left";
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

const PlaceOrder: React.FC<Props> = ({
  open = false,
  side = "right",
  className,
  onOpenChange,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side={side} className={cn(className)}>
        <SheetHeader>
          <SheetTitle className="text-2xl">New Prasadam Order</SheetTitle>
          <SheetDescription>
            <PlaceOrderForm />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PlaceOrder;
