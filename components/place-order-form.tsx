import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useReactToPrint } from "react-to-print";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useCartStore } from "@/store/cartStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import Receipt from "./receipt";
import { useRef, useState } from "react";

const formSchema = z.object({
  name: z.string().regex(/^[a-zA-Z\s]+$/),
  contact: z.coerce
    .number({
      message: "Contact number must contain 10 digits",
    })
    .min(10, "Contact number must be 10 digits"),
  paymentType: z.enum(["cash", "upi"]),
});

type FormData = z.infer<typeof formSchema>;

const PlaceOrderForm: React.FC = () => {
  const [tokenNumber, setTokenNumber] = useState(
    Math.floor(Math.random() * 1000) + 1
  );

  const placeOrderForm = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      paymentType: "cash",
    },
  });

  const { items, getSubTotal } = useCartStore();

  const onSubmit = (data: FormData) => {};

  const devoteeName = placeOrderForm.watch("name");
  const contactNumber = placeOrderForm.watch("contact");
  const paymentType = placeOrderForm.watch("paymentType");

  const receiptRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => receiptRef.current,
  });

  const handleSaveAndPrint = () => {
    // Perform any additional save logic here
    handlePrint();
  };

  const orderDetails = {
    items: items.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    total: getSubTotal(),
    orderId: "12345", // You can generate a unique order ID as needed
    date: new Date().toLocaleString(),
    devoteeName,
    contactNumber,
    paymentType,
    tokenNumber
  };

  return (
    <Form {...placeOrderForm}>
      <form
        onSubmit={placeOrderForm.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 max-h-[60vh] overflow-auto">
          <div className="space-y-4 md:max-w-xl">
            <FormField
              control={placeOrderForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Devotee Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter devotee name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={placeOrderForm.control}
              name="contact"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter contact number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={placeOrderForm.control}
              name="paymentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Type</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="upi">UPI</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="md:w-2/3 mx-auto">
            <div className=" w-fit p-2">
              <h3 className="text-2xl text-center">Bill Preview</h3>
              <div className="border-2 border-gray-200 rounded mt-4">
                <Receipt orderDetails={orderDetails} ref={receiptRef} />
              </div>
            </div>
          </div>
        </div>

        <Button
          type="submit"
          className="btn btn-primary"
          onClick={handleSaveAndPrint}
        >
          Save and print receipt
        </Button>
      </form>
    </Form>
  );
};

export default PlaceOrderForm;
