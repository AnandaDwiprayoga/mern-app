import React from 'react'
import './input.scss'

const Input = ({label, ...rest}) => {
    return (
        <div className="input"> 
            <p className="input__label">{label}</p>
            <input className="input__input" placeholder="form input" {...rest}/>
        </div>
    )
}

export default Input
