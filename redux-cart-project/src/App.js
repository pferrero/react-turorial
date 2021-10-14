import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import axios from "axios";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.uiStore.cartIsVisible);
  const cart = useSelector((state) => state.cartStore);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.uiStore.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );
      await axios
        .put(
          "https://react-hooks-74268-default-rtdb.firebaseio.com/cart.json",
          {
            data: cart,
          }
        )
        .then((response) => {
          if (response.status !== 200) {
            throw new Error("Sending cart data failed.");
          }
          dispatch(
            uiActions.showNotification({
              status: "success",
              title: "Successfully sent.",
              message: "Cart data sent successfully.",
            })
          );
        });
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Failed",
          message: "Sending cart data failed.",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
