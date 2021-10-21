import React from 'react';
//import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import s from './styles/Nav.module.css'
import { Link } from 'react-router-dom';
import './styles/Nav.module.css'; // not needed, since using BS in this compònent


function Nav({ onSearch }) {
    return (
        <nav className="navbar navbar-dark bg-dark d-flex justify-content-around">
            <Link to='/'>
                <span className="navbar-brand">
                    Weather App
                </span>
            </Link>

            <Link to='/About'>
                <span className="navbar-brand">About me</span>
            </Link>

            <SearchBar
                onSearch={onSearch}
            />
        </nav>
    );
};

export default Nav;
