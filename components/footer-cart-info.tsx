import { Button } from "@/components/ui/button";

type Props = {
  subTotal: number;
};

const FooterCartInfo: React.FC<Props> = ({ subTotal }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="flex items-center justify-between border-t border-gray-200 py-4 container mx-auto">
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-500">Subtotal</div>
          <div className="text-lg font-bold text-primary">₹ {subTotal}</div>
        </div>
        <Button>Place Order</Button>
      </div>
    </div>
  );
};

export default FooterCartInfo;
