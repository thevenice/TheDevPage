import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Router from "./Router";

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
