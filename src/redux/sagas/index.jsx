import { all } from "redux-saga/effects";
import { watchProducts, watchCart, watchRemoveFromCart, watchDecrement } from "./products.saga";

export default function* rootSaga() {
yield all([watchProducts(), watchCart(), watchRemoveFromCart(), watchDecrement()]);
}
