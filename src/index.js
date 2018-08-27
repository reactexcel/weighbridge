import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./routes/App";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./redux/sagas";

const SagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(SagaMiddleware));

SagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
