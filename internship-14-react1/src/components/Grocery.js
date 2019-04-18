import React from "react";
import "./style.css";

function Grocery(props) {
  return (
    <div>
      {props.name} <span className="quantity__item">{props.quantity}</span>
      <button onClick={props.handleGroceryClick}>+</button>
    </div>
  );
}

export default Grocery;
