import React from 'react';
import './ProfileImage.css';
import DefaultUserImage from '../../Images/DefaultUserImage.png'

const ProfileImage = () => {
    const toggleMenu = ()=>{
        let menu = document.getElementById('menu');

        if(!menu.style.display || menu.style.display === "none")
        {
            menu.style.display = "inline-block";
        }
        else{
            menu.style.display = "none";
        }
    }
    const renderItems  = ()=>{
        if(sessionStorage.Token)
        {
            return (
                <React.Fragment>
                    <h3>UPDATE THIS PART</h3>
                </React.Fragment>    
            )
        }else{
            return (
                <React.Fragment>
                    <a href="/register"><h3>Register</h3></a>
                    <a href="/login"><h3>Login</h3></a>
                </React.Fragment>
            )
        }
    }
    const renderProfileImage = ()=>{
        if(sessionStorage.Token)
        {
            return <img onClick = {toggleMenu} src="" alt="profile Image" />
        }
        else{
            return <img onClick = {toggleMenu} src={DefaultUserImage} alt="Default User Image" />
        }
    }
    
    return (
        <div id="profileImage" >
            {renderProfileImage()}
            <div id="menu">
                {renderItems()}
            </div>
        </div>
    );
}
 
export default ProfileImage;