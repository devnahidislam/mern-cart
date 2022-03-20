
// import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar_logo">
        <h2>MERN Shopping Cart</h2>
      </div>
      {/* Links */}
      <ul className="navbar_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartLogo_badge">10</span>
            </span>
          </Link>
          
        </li>
        <li>
          <Link to="/">
            Shop
          </Link>
        </li>
      </ul>
      {/* Hamburger Menu */}
      <div className="hamburger_menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar