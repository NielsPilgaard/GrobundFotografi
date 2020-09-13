import React from "react";
import { render } from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

// Styling
import "./index.scss";

// Init emailjs
import { init } from "emailjs-com";
init("user_85PaRF6pVpFdXE5A2cX6w");

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
