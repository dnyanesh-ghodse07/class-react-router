import React, { useEffect, useState, useContext } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import { ProductContext } from "../../store/productContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setLoading(false);
      setProducts(data.products);
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.home}>
      <h1>Products</h1>
      {loading && <Loading />}
      <div className={styles.products}>
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
