import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, thumbnail, brand, title, price } = product;
  return (
    <Link to={`${id}`}>
      <div key={id} className={styles.card}>
        <img src={thumbnail} alt={brand} />
        <h1 className={styles.title}>
          {title} <strong className={styles.brand}>{brand}</strong>
        </h1>
        <h3 className={styles.price}>{price} $</h3>
      </div>
    </Link>
  );
};

export default Card;
