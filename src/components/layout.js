import React from 'react'
import logo from '../images/logo.svg'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <html lang="en">
    <div className="padd-css">
      <Header />
      {children}
    </div>
  </html>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
