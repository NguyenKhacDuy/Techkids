import React, { Component } from 'react';
import SearchField from './SearchField';
import logo from '../images/Logo.png'
import ProfilePanel from '../components/ProfilePanel'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="container">
          <SearchField />
          <div className="col-6 text-center">
            <img src={logo} />
          </div>
            <ProfilePanel />
        </div>
      </div>
    );
  }
}

export default NavBar;