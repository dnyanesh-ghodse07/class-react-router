import React, { useContext } from "react";
import { ProductContext } from "../../store/productContext";
import CartItems from "../../components/CartItems/CartItems";

import Button from "../../components/Button/Button";

import styles from "./Cart.module.css";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  console.log(totalPrice);

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        {cart?.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}
      </div>

      <div className={styles.cartDetails}>
        <div className={styles.cartSummary}>
          <h2>Cart Details</h2>
          {cart.map((item) => {
            return (
              <p>
                <strong>{item.title.substring(0, 15)}</strong> - ${item.price}
              </p>
            );
          })}
          <p>Total : $ {totalPrice}</p>
          <Button type="text" color="blue">
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
