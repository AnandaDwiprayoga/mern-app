import React from 'react'
import './footer.scss'
import { 
     Instagram as InstagramIcon, 
     LinkedIn as LinkedInIcon, 
     GitHub as GithubIcon
} from '@material-ui/icons/';



const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <img src="https://instagram.fsub8-1.fna.fbcdn.net/v/t51.2885-19/s320x320/84312501_2569971623282449_4963051859779518464_n.jpg?_nc_ht=instagram.fsub8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=0G9GXg3XOWcAX-Vo7ut&oh=5b04147ae82e2bc3b646084668412efc&oe=5FA8B325" alt="logo"/>
                </div>
                <div>
                    <InstagramIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                </div>
            </div>
            <p>Copyright</p>
        </footer>
    )
}

export default Footer
