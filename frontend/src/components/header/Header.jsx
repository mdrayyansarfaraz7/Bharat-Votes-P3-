import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'; // Adjust path as necessary
import './navbar.css';

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
                <span className="navbar-title">Election Commission of India</span>
            </div>
        </header>
    );
}

export default Header;
