import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
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
};

export default Footer;
