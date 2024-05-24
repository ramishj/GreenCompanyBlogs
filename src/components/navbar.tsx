import React from 'react';
import './navbar.css'; // Import your CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#blogs">Blogs</a></li>
        <li className="navbar-item"><a href="#discussion-forum">Discussion Forum</a></li>
        <li className="navbar-item"><a href="#events">Events</a></li>
        <li className="navbar-item"><a href="#contact-us">Contact Us</a></li>
        <li className="navbar-item"><a href="#join-us">Join Us</a></li>
        <li className="navbar-item"><a href="#sign-in">Sign in</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
