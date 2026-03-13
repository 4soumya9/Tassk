import React from "react";
import { useDispatch } from "react-redux";
import { products } from "./Product";
import { addToGuest } from "../utils/CartSlice";
const Products = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Prod</h1>
      {products.map((t) => (
        <div key={t.id}>
          {t.name}
          <button onClick={() => dispatch(addToGuest(t))}>Add </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
