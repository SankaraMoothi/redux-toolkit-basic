import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CardItem";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, total, amount } = useSelector((state) => state.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">Is Currently Empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          onClick={() => {
            dispatch(openModal());
          }}
          className="btn  clear-btn"
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
