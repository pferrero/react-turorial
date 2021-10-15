import { uiActions } from "./ui-slice";

import axios from "axios";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return (dispatch) => {
    axios
      .get("https://react-hooks-74268-default-rtdb.firebaseio.com/cart.json")
      .then((response) => {
        console.log(response.data);
        dispatch(
          cartActions.repleceCart({
            items: response.data.items || [],
            totalQuantity: response.data.totalQuantity || 0,
          })
        );
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed",
            message: "Sending cart data failed.",
          })
        );
      });
  };
};

/**
 * Returns a dispatch function with side effects.
 * Thunk.
 */
export const sendCartData = (cart) => {
  return async (dispatch) => {
    // send pending notification.
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    // send http request.
    // axios.put(url[, data[, config]])
    await axios
      .put("https://react-hooks-74268-default-rtdb.firebaseio.com/cart.json", {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      })
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
      })
      .catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Failed",
            message: "Sending cart data failed.",
          })
        );
      });
  };
};
