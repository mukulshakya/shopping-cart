import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Support for Redux dev tools

const middlewares = [];
middlewares.push(sagaMiddleware);
const enhancers = [];
enhancers.push(applyMiddleware(...middlewares));

const store = createStore(rootReducer, composeEnhancers(...enhancers));

sagaMiddleware.run(rootSaga);

export default store;
