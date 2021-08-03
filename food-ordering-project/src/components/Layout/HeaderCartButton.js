import React, { useState } from "react";

import CartIcon from "../Cart/CartIcon";
import ModalCart from "../UI/ModalCart";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [showingCart, setShowingCart] = useState(false);

  const closeCartHandler = () => {
    setShowingCart(false);
  };

  const clickCartButtonHandler = () => {
    setShowingCart(true);
  };

  return (
    <React.Fragment>
      {showingCart && <ModalCart onCloseCart={closeCartHandler} />}
      <button className={classes.button} onClick={clickCartButtonHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </React.Fragment>
  );
};

export default HeaderCartButton;
