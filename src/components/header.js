import { Link } from 'gatsby'
import React from 'react'
import logo from '../images/logo.svg'
import './header.css'

const Header = () => (
  <header className="header">
    <div className="css-icons-sttl">
      <Link to="/">
        <img src={logo} className="css-icons-sttl" />
      </Link>
    </div>

    <div className="dropdown-menu">
      <input type="checkbox" id="checkbox" />
      <label id="burger" htmlFor="checkbox">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
      </label>
      <div className="menu-content">
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
