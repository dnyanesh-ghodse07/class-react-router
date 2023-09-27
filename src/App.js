import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Favorite from "./pages/Favorite/Favorite";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import { ProductContext } from "./store/productContext";
import { useEffect, useReducer } from "react";
import Filter from "./components/Filter/Filter";

const initialState = {
  loading: true,
  error: "",
  products: [],
  productData: [],
  cart: [],
  fav: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_RECEIVED":
      return {
        ...state,
        productData: action.payload,
        products: action.payload,
        loading: false,
      };
    case "FILTER":
      return {
        ...state,
        products: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload),
      };
    case "ADD_TO_FAV":
      return { ...state, fav: [...state.fav, action.payload] };
    case "REMOVE_FAV":
      return {
        ...state,
        fav: state.fav.filter((item) => item.id != action.payload),
      };
    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { cart, productData, products, fav } = state;

  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      dispatch({ type: "DATA_RECEIVED", payload: data.products });
    } catch (err) {
      dispatch({ type: "ERROR", payload: "Something went wrong" });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const categories = productData?.map((item) => item.category);
  const uniqCat = [...new Set(categories)];
  return (
    <ProductContext.Provider
      value={{ cart, dispatch, productData, products, fav, uniqCat }}
    >
      <div className="App" style={{ width: "900px", margin: "0 auto" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
