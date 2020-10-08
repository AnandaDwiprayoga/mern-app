import React from 'react'
import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__logo">MERN-BLOG</h1>
            <p className="header__logout">Logout</p>
        </header>
    )
}

export default Header
