import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
          <header>
        <div className='logo'>
          <img src="../../../public/icons8-mate-48.png" alt="Logo" />
          <h1><NavLink to="/">Buena Madera</NavLink></h1>
        </div>
        <nav>
          <ul>
            <li><NavLink to="/categoria/Mates">Mates</NavLink></li>
            <li><NavLink to="/categoria/Bombillas">Bombillas</NavLink></li>
            <li><NavLink to="/categoria/Termos">Termos</NavLink></li>
          </ul>
        </nav>
        <CartWidget />
      </header>

  );
};

export default NavBar;
