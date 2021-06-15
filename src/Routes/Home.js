import React from 'react';
import HomeImage from '../Images/HomePageImage.jpg'
import Navbar from '../Components/Navbar/Navbar';
const Home = (props) => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <img src={HomeImage} alt="Home page" />
        </React.Fragment>
    );
}
 
export default Home;