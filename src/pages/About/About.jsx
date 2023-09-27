import React, { useContext } from "react";
import { ProductContext } from "../../store/productContext";

const About = () => {
  const abc = useContext(ProductContext);
  console.log(abc);
  return <div>About</div>;
};

export default About;
