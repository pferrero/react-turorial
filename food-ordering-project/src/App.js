import React, { useState } from "react";
import ModalCart from "./components/UI/ModalCart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showingCart, setShowingCart] = useState(false);

  const closeCartHandler = () => {
    setShowingCart(false);
  };

  const clickCartButtonHandler = () => {
    setShowingCart(true);
  };

  return (
    <CartProvider>
      {showingCart && <ModalCart onCloseCart={closeCartHandler} />}
      <Header onOpenCart={clickCartButtonHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
