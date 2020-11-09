import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">

            <Link to='/'>

          <img className="header__icon" src="https://i.pinimg.com/564x/1a/dd/e8/1adde8bf514c8868d662ac5897891417.jpg"  alt="" />
            </Link>
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
                
            </div>

            <div className="header__right">
                <p>Become a Host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header
