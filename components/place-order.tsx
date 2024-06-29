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
  className?: string;
  onOpenChange?: (open: boolean) => void;
  onPlaceOrder?: () => void;
};

const PlaceOrder: React.FC<Props> = ({
  open = false,
  side = "right",
  className,
  onOpenChange,
  onPlaceOrder,
}) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side={side} className={cn(className)}>
        <SheetHeader>
          <SheetTitle className="text-2xl">New Prasadam Order</SheetTitle>
          <PlaceOrderForm onPrintComplete={onPlaceOrder} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default PlaceOrder;
