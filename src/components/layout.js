import PropTypes from 'prop-types'
import React from 'react'
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
