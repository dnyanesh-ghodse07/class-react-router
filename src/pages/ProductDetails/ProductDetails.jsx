import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";

import { ProductContext } from "../../store/productContext";

const ProductDetails = () => {
  const { products, dispatch } = useContext(ProductContext);
  const { id } = useParams();

  const currentProduct = products?.filter((item) => item?.id == id);

  // const { title, brand, images, description, price, rating } =
  //   currentProduct?.[0];

  console.log(currentProduct[0]);
  return (
    <div className={styles.productDetails}>
      <div className={styles.img}>
        <img src={currentProduct?.[0]?.images?.[0]} alt="" />
      </div>
      <div className={styles.desc}>
        <h1>{currentProduct?.[0]?.title}</h1>
        <h2>{currentProduct?.[0]?.brand}</h2>
        <p>{currentProduct?.[0]?.description}</p>
        <h1>$ {currentProduct?.[0]?.price}</h1>
        <div className={styles.rating}>
          <span>{currentProduct?.[0]?.rating}/5</span>
        </div>
        <button
          className={styles.addBtn}
          onClick={() =>
            dispatch({ type: "ADD_TO_CART", payload: currentProduct?.[0] })
          }
        >
          Add to cart
        </button>
        <button
          className={styles.addBtn}
          onClick={() =>
            dispatch({ type: "ADD_TO_FAV", payload: currentProduct?.[0] })
          }
        >
          Favorite
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
