import { get } from "lodash";
import { createSelector } from "reselect";

export const getCartSelector = function(state) {
  return get(state, "cart", {});
};

export const cartAndCountSelector = createSelector(
  [getCartSelector],
  cart => {
    return {
      ...cart,
      numberOfItems: cart.cartItems.length
    };
  }
);
