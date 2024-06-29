import React from "react";

type OrderItem = {
  name: string;
  quantity: number;
  price: number;
};

type Props = {
  orderDetails: {
    items: OrderItem[];
    total: number;
    orderId: string;
    date: string;
    devoteeName: string;
    contactNumber: number;
    paymentType: string;
    tokenNumber: number;
  };
};

const Receipt = React.forwardRef<HTMLDivElement, Props>(({ orderDetails }, ref) => {
  return (
    <div ref={ref} style={{ width: '300px', padding: '10px', fontFamily: 'monospace' }}>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h2>ISKCON Asansol</h2>
        <p>Rath Yatra Festival 2024</p>
        <p>Budha Ground Premises, Asansol</p>
        <p>Phone: (+91) 9433320314</p>
      </div>
      <hr />
      <div style={{ textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>
        <h3>Token Number: <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{orderDetails.tokenNumber}</span></h3>
        <p>Order ID: {orderDetails.orderId}</p>
        <p>Date: {orderDetails.date}</p>
        <p>Devotee Name: {orderDetails.devoteeName}</p>
        <p>Contact Number: {orderDetails.contactNumber}</p>
        <p>Payment Type: {orderDetails.paymentType}</p>
      </div>
      <hr />
      <div>
        {orderDetails.items.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{item.name}</span>
            <span>{item.quantity} x ₹{item.price.toFixed(2)}</span>
            <span>₹{(item.quantity * item.price).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
        <span>Total</span>
        <span>₹{orderDetails.total.toFixed(2)}</span>
      </div>
      <hr />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <p>Thank you for your order!</p>
        <p>Hare Krishna!</p>
      </div>
    </div>
  );
});

Receipt.displayName = 'Receipt';

export default Receipt;

