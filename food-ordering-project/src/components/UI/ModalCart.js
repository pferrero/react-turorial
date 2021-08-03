import React from "react";
import ReactDOM from "react-dom";
import Cart from "../Cart/Cart";

import classes from "./ModalCart.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick} />;
};

const ModalCart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onCloseCart} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Cart className={classes.modal} onClose={props.onCloseCart} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ModalCart;
