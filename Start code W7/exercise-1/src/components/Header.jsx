import React from 'react';
import pnLogo from '../assets/pn-logo.png'; 

const Header = () => (
  <header id="header">
    <img src={pnLogo} alt="PN Logo" />
    <h1>Students results for (fake batch name)</h1>
  </header>
);

export default Header;