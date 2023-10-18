import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../redux/itemSlice";

const Products = () => {
  const products = useSelector((state) => state.item.items);
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <p>{product.title} - ${product.price} x{product.inventory}</p>
          <button onClick={() => dispatch(addItems(product))}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
};

export default Products;
