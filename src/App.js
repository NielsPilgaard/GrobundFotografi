import React from "react";

// Styling
import "./App.scss";
import Navigation from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>

      <header className='App-header'>
        <h1>Grobund Fotografi</h1>
      </header>
    </div>
  );
}

export default App;
