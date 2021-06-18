import React, { Component }  from 'react';
import './Navbar.css'
import ProfileImage from '../ProfileImage/ProfileImage';
const Navbar = () => {


    return (
        <div id="navbar">
            <a href="/"><span id = "logo">TEACH ME</span></a>
            <ProfileImage></ProfileImage>
        </div>
    );
}
 
export default Navbar;