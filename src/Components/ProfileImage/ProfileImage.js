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

    const logout = ()=>{

        let data = {
            Email_Id :sessionStorage.getItem("Email_Id"),
            Token : sessionStorage.getItem("Token"),
        }

        let url = '/api/logout'

        let options = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }

        fetch(url,options).then(async(response) => {

            const data = await response.json();

            if(response.status === 200)
            {
                sessionStorage.clear();
                window.location.href = '/'
            }else{
                alert(data.Error);
            }

        }).catch(err =>{
            console.log(err.message);
        })

    }
    const renderItems  = ()=>{
        if(sessionStorage.Token)
        {
            return (
                <React.Fragment>
                    {/* <h3>UPDATE THIS PART</h3> */}
                    <a href="/profile"><h3>Profile</h3></a>
                    <a href="/explore"><h3>Explore</h3></a>
                    <a href="/chats"><h3>Chats</h3></a>
                    <a href="/history"><h3>History</h3></a>
                    <h3 onClick = {logout}>Logout</h3>
                </React.Fragment>    
            )
        }else{
            return (
                <React.Fragment>
                    <a href="/about"><h3>About Us</h3></a>
                    <a href="/contact"><h3>Contact Us</h3></a>
                    <a href="/register"><h3>Register</h3></a>
                    <a href="/login"><h3>Login</h3></a>
                </React.Fragment>
            )
        }
    }
    const renderProfileImage = ()=>{
        if(sessionStorage.Token)
        {
            //change it pick from database
            return <img onClick = {toggleMenu} src={DefaultUserImage} alt="profile " />
        }
        else{
            return <img onClick = {toggleMenu} src={DefaultUserImage} alt="Default User " />
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