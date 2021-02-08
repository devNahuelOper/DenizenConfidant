import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store} history={history}>
    <HashRouter>
      <App state={store.getState()} dispatch={store.dispatch}/>
    </HashRouter>
  </Provider>
);

export default Root;