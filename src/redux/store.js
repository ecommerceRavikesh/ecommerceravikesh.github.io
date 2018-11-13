import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
//import default reducer which is combination of many reducers of your app
import rootReducer from "./reducers";

// import root saga
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {};

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
