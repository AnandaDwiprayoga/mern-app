import React from 'react'
import './footer.scss'
import { 
     Instagram as InstagramIcon, 
     LinkedIn as LinkedInIcon, 
     GitHub as GithubIcon
} from '@material-ui/icons/';
import { b0rnLogo } from '../../../assets';


const Icon = ({Icon}) => (
    <div className="icon-wrapper">
        <Icon />
    </div>
)

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div>
                    <img 
                        className="footer-top__logo"
                        src={b0rnLogo}
                        alt="logo"/>
                </div>
                <div className="footer-top__social-wrapper">
                    <Icon Icon={InstagramIcon} />
                    <Icon Icon={LinkedInIcon} />
                    <Icon Icon={GithubIcon} />
                </div>
            </div>
            <p className="footer-bottom">Copyright 2020, made with love</p>
        </footer>
    )
}

export default Footer
