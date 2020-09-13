import React from "react";
import Navigation from "./Components/Navigation";
import { BrowserRouter } from "react-router-dom";

// Styling
import "./index.scss";
import { Navbar } from "react-bootstrap";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
      ,
      <Navbar className='navbar-bottom' fixed='bottom'>
        <div className='d-inline-flex mx-auto mt-3'>
          <p>
            <span role='img' aria-label='Copyright' className='mr-1'>
              ©
            </span>
            Grobund Fotografi 2020
          </p>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
