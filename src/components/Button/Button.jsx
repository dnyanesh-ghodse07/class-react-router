import React from "react";

const Button = ({ color, type, children }) => {
  const Text = {
    color: color,
    background: "#eee",
    padding: "10px",
    border: "1px solid 000",
  };

  return <button style={type === "text" ? Text : {}}>{children}</button>;
};

export default Button;
