import {
  PRODUCTS_REQUEST,
  PRODUCTS_RECEIVE,
  PRODUCTS_RECEIVE_ERROR,
  ADDTOCART_REQUEST,
  ADDTOCART_RECEIVE,
  ADDTOCART_RECEIVE_ERROR,
  REMOVEFROMCART_REQUEST,
  REMOVEFROMCART_RECEIVE,
  REMOVEFROMCART_RECEIVE_ERROR,
  DECREMENT_REQUEST,
  DECREMENT_RECEIVE,
  DECREMENT_RECEIVE_ERROR
} from "../../utils/constants";

export const requestProducts = function() {
  return {
    type: PRODUCTS_REQUEST
  };
};

export const receiveProducts = products => ({
  type: PRODUCTS_RECEIVE,
  payload: {
    products
  }
});
export const errorReceiveingProducts = error => ({
  type: PRODUCTS_RECEIVE_ERROR,
  payload: {
    error
  }
});

export const productsReducer = function(state = {}, action) {
  switch (action.type) {
    case PRODUCTS_REQUEST:
      return {
        loading: true
      };
    case PRODUCTS_RECEIVE:
      return {
        loading: false,
        prods: [...action.payload.products]
      };
    default:
      return state;
  }
};

// Decriment
export const requestDecrement = function(payload) {
  return {
    type: DECREMENT_REQUEST,
    payload
  };
};

export const receiveDecrement = payload => ({
  type: DECREMENT_RECEIVE,
  payload: {
    payload
  }
});

export const errorReceiveingDecrement = error => ({
  type: DECREMENT_RECEIVE_ERROR,
  payload: {
    error
  }
});

// ADD TO CART
export const requestAddToCart = function(payload) {
  return {
    type: ADDTOCART_REQUEST,
    payload
  };
};

export const receiveAddToCart = payload => ({
  type: ADDTOCART_RECEIVE,
  payload: {
    payload
  }
});

export const errorReceiveingAddToCart = error => ({
  type: ADDTOCART_RECEIVE_ERROR,
  payload: {
    error
  }
});

// REMOVE FROM CART

export const requestRemoveFromCart = function(payload) {
  return {
    type: REMOVEFROMCART_REQUEST,
    payload
  };
};

export const receiveRemoveFromCart = payload => ({
  type: REMOVEFROMCART_RECEIVE,
  payload: {
    payload
  }
});

export const errorReceiveingRemoveFromCart = error => ({
  type: REMOVEFROMCART_RECEIVE_ERROR,
  payload: {
    error
  }
});

//Cart Reducer
export const cartReducer = function(state = { cartItems: [] }, action) {
  switch (action.type) {
    case ADDTOCART_REQUEST:
      return {
        loading: true,
        ...state
      };
    case ADDTOCART_RECEIVE:
      return {
        ...action.payload.payload,
        loading: false
      };
    case REMOVEFROMCART_REQUEST:
      return {
        loading: true,
        ...state
      };
    case REMOVEFROMCART_RECEIVE:
      return {
        ...action.payload.payload,
        loading: false
      };
    case DECREMENT_REQUEST:
      return {
        loading: true,
        ...state
      };
    case DECREMENT_RECEIVE:
      return {
        ...action.payload.payload,
        loading: false
      };
    default:
      return state;
  }
};
