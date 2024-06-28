'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";

type Props = {};

// cart form schema
const cartSchema = z.object({
  customerName: z.string(),
  items: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      price: z.coerce.number(),
      quantity: z.coerce.number(),
    })
  ),
  paymentType: z.enum(["cash", "upi"]),
});

type CartForm = z.infer<typeof cartSchema>;

const Cart: React.FC<Props> = () => {
  const cartForm = useForm<CartForm>({
    resolver: zodResolver(cartSchema),
    defaultValues: {},
  });

  const onSubmit = (data: CartForm) => {};

  return (
    <div>
      <Form {...cartForm}>
        <form onSubmit={cartForm.handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="customerName">Customer Name</label>
            <input {...cartForm.register("customerName")} />
          </div>

          <div>
            <label htmlFor="items">Items</label>
            <input {...cartForm.register("items")} />
          </div>

          <div>
            <label htmlFor="paymentType">Payment Type</label>
            <select {...cartForm.register("paymentType")}>
              <option value="cash">Cash</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Form>
    </div>
  );
};

export default Cart;
