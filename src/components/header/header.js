import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <Link className='links' to='/'>Form</Link>
            <Link className='links' to='/confirm'>Confirm</Link>
            <Link className='links' to='/selectToken'>Select Token</Link>
            <Link  className='links' to='/farms'>Farms</Link>
        </header>
    );
};

export default Header;