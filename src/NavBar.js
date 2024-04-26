// src/NavBar.js
import React from 'react';
import './style.css';

function NavBar() {
  // Get the current date and time
  const dateTime = new Date().toLocaleString();

  return (
    <nav className="NavBar">
      <div className="NavBar-brand">
        <span>News Best</span>
      </div>
      <ul className="NavBar-menu">
        <li><a href="/">Home</a></li>
      </ul>
      <div className="NavBar-dateTime">
        <span>{dateTime}</span>
      </div>
    </nav>
  );
}

export default NavBar;
