import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

// Styling
import "./index.scss";

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
