// Header
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './twitch_logo.png';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="Twitch Logo" />
        </div>
    );
};

export default Header;