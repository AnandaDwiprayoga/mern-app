import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Input, Link } from '../../components';

const Login = () => {
    return (
        <div className="main-page">
            <div className="main-page__left">
                <img src={LoginBg} alt="Register background" className="left__img"/>
            </div>
            <div className="main-page__right">
                <h1 className="right__input-title">Login</h1>
                <Input 
                    label="Email"
                    placeholder="Email"
                    />
                <Input 
                    label="Password"
                    placeholder="Password"
                    />

                <Button 
                    title="Login"
                    />

                <Link title="Belum punya akun ? Daftar"/>
            </div>
        </div>
    )
}

export default Login
