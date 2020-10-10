import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../assets';
import { Button, Input, Link } from '../../components';
import './register.scss';

const Register = () => {

    const history = useHistory();

    return (
        <div className="main-page">
            <div className="main-page__left">
                <img src={RegisterBg} alt="Register background" className="left__img"/>
            </div>
            <div className="main-page__right">
                <h1 className="right__input-title">Register</h1>
                <Input 
                    label="Full Name"
                    placeholder="Full Name"
                    />
                <Input 
                    label="Email"
                    placeholder="Email"
                    />
                <Input 
                    label="Password"
                    placeholder="Password"
                    />

                <Button 
                    title="Register"
                    onClick={() => history.push('/login')}
                    />

                <Link title="Sudah punya akun ? Login" onClick={() => history.goBack()}/>
            </div>
        </div>
    );
};

export default Register
