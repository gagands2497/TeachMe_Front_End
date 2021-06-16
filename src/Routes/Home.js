import React from 'react';
import HomeImage from '../Images/HomePageImage.jpg'
import Image from '../Components/Image/Image';
import Navbar from '../Components/Navbar/Navbar';
const Home = (props) => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Image 
                id = "HomePageImage"
                image = {HomeImage}
                height = "95vh"
                width  = "100vw"
                opacity = "0.8"
            ></Image>
        </React.Fragment>
    );
}
 
export default Home;