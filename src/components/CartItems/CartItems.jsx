import React, { useContext } from "react";

import { ProductContext } from "../../store/productContext";

import styles from "./CartItems.module.css";

const CartItems = ({ item }) => {
  const { dispatch } = useContext(ProductContext);
  const { id, title, images, price, brand } = item;

  const handleRemove = () => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  return (
    <div className={styles.cartItem}>
      <div className="img">
        <img src={images[0]} alt="" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <h3>{brand}</h3>
        <h1>$ {price}</h1>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItems;
