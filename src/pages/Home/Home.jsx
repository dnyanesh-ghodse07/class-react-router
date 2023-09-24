import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div className={styles.products}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
