import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker";

// Styling
import "./index.scss";

// Init emailjs
import { init } from "emailjs-com";
init("user_85PaRF6pVpFdXE5A2cX6w");

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

serviceWorker.register();
