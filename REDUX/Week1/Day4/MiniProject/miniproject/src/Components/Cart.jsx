import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAllItems } from "../redux/itemSlice";

const Cart = () => {
  const carts = useSelector((state) => state.item.cartItems);
  const dispatch = useDispatch();
  const [remove, setRemove] = useState(false);

  const totalAmount = () => {
    let sum = 0;
    for (let cart of carts) {
      sum += cart.quantity * cart.price;
    }
    return sum;
  };

  const removeAll = () => {
    dispatch(removeAllItems());
    setRemove(true);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {!remove && (
        <ul>
          {carts.map((cart) => (
            <li key={cart.id}>
              <p>
                {cart.title} - ${cart.price} x {cart.quantity}
              </p>
            </li>
          ))}
        </ul>
      )}

      {remove && <p>Please add some products to cart.</p>}

      <p>Total: ${totalAmount()}</p>

      <button onClick={removeAll}>Checkout</button>
    </div>
  );
};

export default Cart;
