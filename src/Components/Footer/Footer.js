import React from 'react';
import './Footer.css'
import Button from '../Button/Button';
import facebookIcon from '../../Images/facebook.png'
import instagramIcon from '../../Images/instagram.png'
import twitterIcon from '../../Images/twitter.png'
import youtubeIcon from '../../Images/youtube.png'
const Footer = () => {
    return (
        <div id="footer">
            <h2>Turn on the notifications</h2>
            <div id="turn-on-updates">
                <input type="email" placeholder = "Email Address"/>
                <Button FS = "1.5em" bgColor = "#5CD895" color  = "#05386B">Subscribe</Button>
            </div>
            <h2>Connect with us</h2>
            <div id="social-media">
                <img src={facebookIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
                <img src={youtubeIcon} alt="" />
            </div>
        </div>
    );
}
 
export default Footer;