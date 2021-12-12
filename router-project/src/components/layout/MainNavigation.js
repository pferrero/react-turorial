import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/quotes"
            >
              Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={({ isActive }) =>
                isActive ? classes.active : ""
              }
              to="/newQuote"
            >
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(MainNavigation);
