import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = (total * 10) / 100;
  const gradTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h3>Order summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${gradTotal}</h4>
    </div>
  );
};

export default Cart;
