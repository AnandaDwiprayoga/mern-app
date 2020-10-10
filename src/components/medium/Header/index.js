import React from 'react'
import { useHistory } from 'react-router-dom'
import './header.scss'

const Header = () => {
    const history = useHistory();

    return (
        <header className="header">
            <h1 className="header__logo" onClick={() => history.goBack()}>MERN-Blog</h1>
            <p className="header__logout" onClick={() => history.push('/login')}>Logout</p>
        </header>
    )
}

export default Header
