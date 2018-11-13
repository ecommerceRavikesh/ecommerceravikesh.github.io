import { combineReducers } from "redux";
import {productsReducer, cartReducer} from "../redux/modules/product.module"


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
