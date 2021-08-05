import React from "react";
import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

/* Header of the page with the cart and the image */
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onOpenCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="Table with meals." />
      </div>
    </React.Fragment>
  );
};

export default Header;
