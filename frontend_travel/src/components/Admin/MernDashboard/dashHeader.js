import React from 'react';

const Header = () => (
  <div className="header animate__animated animate__fadeIn">
    <div>
      <h1 className="gradient-text">Welcome back, John!</h1>
      <p className="text-secondary-text">Here's what's happening today</p>
    </div>
    <input type="search" placeholder="Search..." className="search-bar" />
  </div>
);

export default Header;