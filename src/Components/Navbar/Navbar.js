import React from 'react';
import './Navbar.css'
import ProfileImage from '../ProfileImage/ProfileImage';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
    const options = [];
    if (sessionStorage.getItem("Access_Token")) {
        // means user is logged in
        options.push({
            item_id: options.length + 1,
            item_name: "Logout",
            item_handler: () => {
                sessionStorage.removeItem("Access_Token");
                window.location.href = "/login";
            }
        })

    } else {
        options.push({
            item_id: options.length + 1,
            item_name: "Login",
            item_handler: () => {
                window.location.href = '/login'
            }
        })
        options.push({
            item_id: options.length + 1,
            item_name: "Register",
            item_handler: () => {
                window.location.href = '/register'
            }
        })
    }

    return (
        <div id="navbar">
            <a href="/">TEACH ME</a>
            <a href="/explore">EXPLORE</a>
            <Dropdown
                items={options}
            > MENU </Dropdown>
        </div>
    );
}

export default Navbar;