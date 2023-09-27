import React, { useContext } from "react";
import { ProductContext } from "../../store/productContext";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(ProductContext);

  return (
    <nav className={styles.nav}>
      <div className="brand">
        <Link to="/products">E-COM</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/cart">
              <sup
                style={{ background: "#000", color: "#fff", padding: "10px" }}
              >
                {cart?.length}
              </sup>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
