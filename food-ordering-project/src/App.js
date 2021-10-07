import React, { useState, useEffect } from "react";
import ModalCart from "./components/UI/ModalCart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import useHttp from "./hooks/use-http";

function App() {
  const [showingCart, setShowingCart] = useState(false);
  const [availableMeals, setAvailableMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const transformMeals = (mealsObj) => {
      console.log("entering transformMeals...");
      console.log(mealsObj);
      let mealsArray = [];
      for (const key in mealsObj) {
        mealsArray.push({
          id: key,
          name: mealsObj[key].name,
          description: mealsObj[key].description,
          price: mealsObj[key].price,
        });
      }
      console.log("ready");
      console.log(typeof mealsArray);
      console.log(mealsArray);
      setAvailableMeals(mealsArray);
    };

    sendRequest(
      {
        url: "https://react-hooks-74268-default-rtdb.firebaseio.com/meals.json",
        method: "GET",
      },
      transformMeals
    );
  }, [sendRequest]);

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
        <Meals mealsArray={availableMeals} />
      </main>
    </CartProvider>
  );
}

export default App;
