import React, { useState } from 'react';
import './Footer.css'
import Button from '../Button/Button';
import facebookIcon from '../../Images/facebook.png'
import instagramIcon from '../../Images/instagram.png'
import twitterIcon from '../../Images/twitter.png'
import youtubeIcon from '../../Images/youtube.png'
const Footer = () => {

    const [Email, setEmail] = useState("");
    const [error, seterror] = useState("");

    const subscribed = (e) => {
        let data = {
            Email_Id: Email,
            Error:error
        }

        if (Email) {
            sessionStorage.setItem("Email_Id", data.Email_Id);

            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            let url = 'http://localhost:8080/api/subscribe';

            fetch(url, options).then(async (response) => {

                const data = await response.json();

                if (response.status === 200) {
                    sessionStorage.setItem("Token", data.Token)
                    window.location.href = '/profile'
                }
                else {
                    throw new Error(data.Error);
                }
            }).catch(err => {
                seterror(err.message);
            })
        } else {
            seterror("Please Enter Email Id")
        }

        e.preventDefault();
    }


    return (
        <div id="footer">
            <h2>Turn on the notifications</h2>
            <div id="turn-on-updates">
                <input type="email" placeholder="Email Address" />
                <Button FS="1.5em" bgColor="#F4442E" color="#FEDC97" handler={subscribed}>Subscribe</Button>
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