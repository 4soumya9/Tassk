import React from "react";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { guestCart, userCart, isLoggedIn } = useSelector(
    (state) => state.cart,
  );

  const caritems = isLoggedIn ? userCart : guestCart;

  return (
    <div>
      <h1> Cart</h1>
      {caritems.map((t) => (
        <div key={t.id}>
          {t.name} - {t.quantity}
        </div>
      ))}
    </div>
  );
};
