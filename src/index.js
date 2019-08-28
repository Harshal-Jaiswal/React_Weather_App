import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import * as storage from "redux-storage";
import createEngine from "redux-storage-engine-localstorage";

//Below code is for redux-storage constants
const reducer = storage.reducer(rootReducer);
const engine = createEngine("my-save-key");
const reduxStorage = storage.createMiddleware(engine);
const persistMiddleware = applyMiddleware(reduxStorage);
const thunkMiddleware = applyMiddleware(thunk);

let store = createStore(
  reducer,
  compose(
    persistMiddleware,
    thunkMiddleware
  )
);
const load = storage.createLoader(engine);
load(store);


ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
