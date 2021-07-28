import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import logoImage from '../../Images/logo.png'
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const Home = (props) => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div id="home_section">
                <h1>TEACH  ME</h1>
                <h2>TOUCH THE SKY WITH YOUR TEACHER</h2>                
                <div id="auth_buttons">
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    {/* <a href="/login"><Button borderWidth="0" bgColor="#05386B" color="#EDF5E1" FS="1.5em">Sign In</Button></a> */}
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Home;
