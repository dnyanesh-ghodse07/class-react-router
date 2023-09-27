import React, { useContext } from "react";
import { ProductContext } from "../../store/productContext";

import styles from "./Filter.module.css";

const Filter = () => {
  const { productData, dispatch } = useContext(ProductContext);

  const handleFilter = (query) => {
    const filter = productData.filter((item) => item.category === query);
    dispatch({ type: "FILTER", payload: filter });
  };
  const uniqCat = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
  ];
  return (
    <div>
      <h1>Filter: </h1>
      <div className={styles.categories}>
        {uniqCat.map((item) => (
          <button onClick={() => handleFilter(item)} className={styles.cat}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
