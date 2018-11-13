import { takeEvery, put, call, select } from 'redux-saga/effects';
import { delay } from "redux-saga";
import { getProducts } from '../services/api'
import { receiveProducts, errorReceiveingProducts, receiveAddToCart, errorReceiveingAddToCart, errorReceiveingRemoveFromCart, receiveRemoveFromCart, errorReceiveingDecrement, receiveDecrement } from '../modules/product.module';
import {PRODUCTS_REQUEST, ADDTOCART_REQUEST, REMOVEFROMCART_REQUEST, DECREMENT_REQUEST } from "../../utils/constants";
import {getCartSelector} from "../../redux/selectors/cart.selector";


// GET PRODUCTS
export function* watchProducts () {
  yield takeEvery(PRODUCTS_REQUEST, fetchProducts)
}

export function* fetchProducts () {
  try {
    yield call(delay, 1000);
    const { data: products } = yield call(getProducts);
    yield put(receiveProducts(products));
  } catch (e) {
    yield put(errorReceiveingProducts(e));
  }
}


// ADD TO CART
export function* watchCart () {
  yield takeEvery(ADDTOCART_REQUEST, fetchCart)
}

export function* fetchCart (payload) {

  try {
  let cart = yield select(getCartSelector);  
  const recievePayload = createReturnObject(cart,payload);
    yield put(receiveAddToCart(recievePayload)) 
  } catch (e) {
    yield put(errorReceiveingAddToCart(e));
  }
}


const createReturnObject = (cart, {payload})=>{
  let returnObject = null;
   
  if(!cart.cartItems.length){
     payload.quantity = 1;
     payload.total = payload.price;
     cart.grandTotal = payload.price;
     returnObject = {
       ...cart,
      cartItems:[payload]
    }
  }else {
    const index = cart.cartItems.findIndex((item => item.title === payload.title));
    const total = cart.grandTotal + payload.price;
    if (index !== -1) {
      cart.cartItems[index].quantity =  cart.cartItems[index].quantity + 1;
      cart.cartItems[index].total = cart.cartItems[index].price * cart.cartItems[index].quantity;
      
      returnObject = {
        ...cart,
        cartItems:[...cart.cartItems],
        grandTotal: total
      }
    }else {
      payload.quantity = 1;
      payload.total = payload.price;
      returnObject = {
        ...cart,
        cartItems:[...cart.cartItems,payload],
        grandTotal: total
      }
    }
  }
  return returnObject;
}


// REMOVE FROM CART
export function* watchDecrement () {
  yield takeEvery(DECREMENT_REQUEST, decrementQuantity)
}

export function* decrementQuantity ({payload}) {
  try {
  let cart = yield select(getCartSelector);  
  const index = cart.cartItems.findIndex((item => item.title === payload.title));
   cart.cartItems[index].quantity = cart.cartItems[index].quantity -1;
   cart.cartItems[index].total = cart.cartItems[index].total - cart.cartItems[index].price;
   const total = cart.grandTotal - cart.cartItems[index].price;
  const resultCart = {
    ...cart,
    cartItems:cart.cartItems, 
    grandTotal: total
  }
    yield put(receiveDecrement(resultCart)) 
  } catch (e) {
    yield put(errorReceiveingDecrement(e));
  }
}


// REMOVE FROM CART
export function* watchRemoveFromCart () {
  yield takeEvery(REMOVEFROMCART_REQUEST, removeFromCart)
}

export function* removeFromCart ({payload}) {
  try {
  let cart = yield select(getCartSelector);  
  const resultCart = {
    ...cart,
    cartItems: cart.cartItems.filter(item=> item.title.toUpperCase() !== payload.title.toUpperCase()),
    grandTotal: cart.grandTotal - payload.total
  }
    yield put(receiveRemoveFromCart(resultCart)) 
  } catch (e) {
    yield put(errorReceiveingRemoveFromCart(e));
  }
}