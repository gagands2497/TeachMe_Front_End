import React from 'react';
import Button from '../Components/Button/Button';
import Navbar from '../Components/Navbar/Navbar';
import logoImage from '../Images/logo.png'
import Footer from '../Components/Footer/Footer';
const Home = (props) => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div id="welcome">
                <h1>TEACH  ME</h1>
                <h2>TOUCH THE SKY WITH YOUR TEACHER</h2>
                <div id="logoImage"><img src={logoImage} alt="" /></div>
                <div id="home-btns">
                    <a href="/register"><Button borderWidth = "0" bgColor = "#05386B" color = "#EDF5E1" FS = "1.5em">SignUp</Button></a>
                    <a href="/login"><Button borderWidth = "0" bgColor = "#05386B" color = "#EDF5E1" FS = "1.5em">SignIn</Button></a>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}
 
export default Home;
