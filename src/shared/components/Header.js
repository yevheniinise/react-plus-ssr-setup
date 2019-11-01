import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink exact to="/" className="link" activeClassName="selected">
          Home
        </NavLink>
        <NavLink exact to="/about" className="link" activeClassName="selected">
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
