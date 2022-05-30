import React from "react";
import "./button.scss";

const Button = ({ text, className, onClick }) => {
  return (
    <button className={["button", className].join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
