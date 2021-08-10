import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "./redux/store/store";
async function init() {
  console.log("Waiting for store");

  await configureStore();

  console.log("Store was fully loaded");

  ReactDOM.render(<App />, document.getElementById("root"));

  console.log("Rendering");
}

init();
