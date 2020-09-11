import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";

// Styling
import "./index.scss";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
