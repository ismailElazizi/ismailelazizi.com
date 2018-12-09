import React from 'react'
import logo from '../images/logo.svg';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


import Header from './header'
import './layout.css'

const Layout = ({ children }) => (

  <html lang="en" >
        
    

    <div className="children">
          {children}
    </div>

    <div className="footer">
          <p>...</p>
    </div>
    

        
  </html>

)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
