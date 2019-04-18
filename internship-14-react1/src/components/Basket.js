import React from "react";

function Basket(props) {
  return (
    <div onClick={props.handleGroceryStrike}>
      {props.name} {props.quantity} {props.isStriked}{" "}
      <button button onClick={props.handleGroceryRemove}>
        -
      </button>{" "}
    </div>
  );
}

export default Basket;
