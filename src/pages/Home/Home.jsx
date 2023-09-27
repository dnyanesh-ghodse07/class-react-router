import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import styles from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import { ProductContext } from "../../store/productContext";
import Filter from "../../components/Filter/Filter";
const Home = () => {
  const { products, loading } = useContext(ProductContext);
  return (
    <>
      <Filter />
      <div className={styles.home}>
        <h1>Products</h1>
        {loading && <Loading />}
        <div className={styles.products}>
          {products?.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
