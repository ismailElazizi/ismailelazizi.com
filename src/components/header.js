import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

import './header.css'

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>
    </div>

    <div class="dropdown-menu">
      <input type="checkbox" id="checkbox" />
      <label id="burger" for="checkbox">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </label>
      <div class="menu-content">
        <ul>
          <li>
            <Link to="/" className="menu_ele">
              WORK
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu_ele">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/blog" className="menu_ele">
              BLOG
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu_ele">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
