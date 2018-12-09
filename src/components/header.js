import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/logo.svg';


const Header = () => (
<div className="header">
    <div className="logo">    
      <Link to="/"><img src={logo} className="logo" /></Link>
    </div>
    <div className="menu">
      <Link to="/" className="menu_ele"  >WORK</Link>
      <Link to="/about" className="menu_ele" >ABOUT</Link>
      <Link to="/articles" className="menu_ele"  >ARTICLES</Link>
      <Link to="/contact" className="menu_ele"    >CONTACT</Link>
    </div>
  </div>
)

export default Header
