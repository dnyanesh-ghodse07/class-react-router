import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, thumbnail, brand, title, price } = product;
  return (
    <Link className={styles.link} to={`${id}`}>
      <div key={id} className={styles.card}>
        <img src={thumbnail} alt={brand} />
        <strong className={styles.brand}>{brand?.substring(0, 10)}</strong>
        <h3 className={styles.title}>{title.substring(0, 15) + "..."} </h3>
        <h3 className={styles.price}>Price : {price} $</h3>
      </div>
    </Link>
  );
};

export default Card;
