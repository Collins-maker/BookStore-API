import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Library Management System</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
         
          <li className="header__nav-item"> <a href="">Home</a></li>
          <li className="header__nav-item"><a href="">Books</a></li>
          <li className="header__nav-item"><a href="">About</a></li>
          <li className="header__nav-item"><a href="">Contact</a></li>
          <li className="header__nav-item"><a href="">Account</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

