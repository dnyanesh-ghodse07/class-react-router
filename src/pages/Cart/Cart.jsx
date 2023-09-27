import React, { useContext } from "react";
import { ProductContext } from "../../store/productContext";
import CartItems from "../../components/CartItems/CartItems";

import Button from "../../components/Button/Button";

import styles from "./Cart.module.css";

const Cart = () => {
  const { cart } = useContext(ProductContext);

  const noOfItem = cart.reduce(function (results, org) {
    (results[org.id] = results[org.id] || []).push(org);
    return results;
  }, {});

  const a = [];

  for (const key in noOfItem) {
    a.push({
      id: noOfItem[key][0]?.id,
      n: noOfItem[key]?.length,
    });
  }

  console.log(noOfItem[1]?.length);
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

  console.log(totalPrice);

  return (
    <div className={styles.cart}>
      <div className={styles.cartItems}>
        {cart?.map((item) => (
          <CartItems
            key={item.id}
            item={item}
            noOfItem={noOfItem[item.id]?.length}
          />
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
