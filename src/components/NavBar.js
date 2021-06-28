import React from 'react';
import logoIcon from '../assets/images/logo.svg';
import menuIcon from '../assets/images/hamburgerMenuIcon.svg';

const NavBar = () => {
    return (
        <nav className="main-nav-bar">
           <div className="container">
             <img className="logo" src={logoIcon} alt ="logo invoicely"/>
             <img className="menu-icon" src={menuIcon} alt="menu icon"/>
           </div>
        </nav>
    )
}

export default NavBar;
