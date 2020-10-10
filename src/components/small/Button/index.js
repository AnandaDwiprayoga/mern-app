import React from 'react'
import './button.scss'

const Button = ({title, ...rest}) => (
    <button className="button" {...rest} >{title}</button>
)


export default Button
