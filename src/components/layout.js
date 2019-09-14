import NavigationFooter from '@components/Navigation/Navigation.Footer';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <div>
  <div className="padd-css">
    <Header/>
    {children}
  </div>
  <NavigationFooter />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
