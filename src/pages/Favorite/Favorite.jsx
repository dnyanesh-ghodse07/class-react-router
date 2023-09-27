import React, { useContext } from "react";

import styles from "./Favorite.module.css";

import { ProductContext } from "../../store/productContext";

const Favourite = () => {
  const { fav, dispatch } = useContext(ProductContext);

  const favItems = [...fav];

  return (
    <div>
      Favourite
      {favItems.map((item) => {
        return (
          <div key={item.id} className={styles.fav}>
            <div className={styles.img}>
              <img src={item.images[0]} alt="" />
            </div>
            <div className={styles.desc}>
              <h1>{item.title}</h1>
              <h2>{item.brand}</h2>
              <button
                className={styles.btn}
                onClick={() =>
                  dispatch({ type: "REMOVE_FAV", payload: item.id })
                }
              >
                Remove Favorite
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
