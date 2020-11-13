import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Button = (props) => {
    const className = [props.className];
    //menambahkan kelas kelas di bootstrap sesuai dengan kondisi props
    props.isPrimary && className.push('btn-primary');
    props.isLarge && className.push('btn-lg');
    props.isSmall && className.push('btn-sm');
    props.isBlock && className.push('btn-block');
    props.hasShadow && className.push('btn-shadow');
    props.isDisabled && className.push('disabled');

    const onClick = () => {
       props.onClick && props.onClick();
    }

    if(props.isDisabled || props.isLoading){
        return (
            <span
                className={className.join(" ")}
                style={props.style}
            >
            { props.isLoading ? (
                <>
                    <span className="spinner-border spinner-border-sm mx-5"></span>
                    <span className="sr-only">Loading...</span>
                </>
            ) : (
                props.children
            )}
            </span>
        )
    }

    if(props.type == "link"){
        if(props.isExternal){
            return (
                // karena className bentuk array dan value pada attribute class adalah string jadi harus dijoin
                //contoh dari ['a','b'] menjadi "a b"
                <a 
                    href={props.href} 
                    className={className.join(" ")}
                    style={props.style}
                    target={props.target == "_blank" ? "_blank" : undefined}
                    rel={props.target == "_blank" ? "noopener noreferrer" : undefined}
                >{props.children}
                </a>
            );
        }else{
            return (
                <Link
                    to={props.href} 
                    className={className.join(" ")}
                    style={props.style}
                    onClick={onclick}
                >
                    {props.children}
                </Link>
            );
        }
    }

    //jika typenya button maka kembalikan button juga
    return (
        <button
            className={className.join(" ")}
            style={props.style}
            onClick={onclick}
        >
            {props.children}
        </button>
    )
}

//untuk tipe data property apa saja
Button.propTypes = {
    // oneOf seperti enum, yang diperbolehkan hanya button dan link
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isExternal: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    hasShadow: propTypes.bool
}

export default Button;