import './ExploreCard.css';
import React from 'react';
// import profileImage from '../../Images/profile.png';

let profileImage = "https://tinyurl.com/pycvvjja";

const ExploreCard = (props) => {
    return (
        <div className="CourseCard">
            <div id="information">
                <img src={profileImage} alt="" />
            </div>
            <div id="about">
                <h1 id="name">Gagandeep Singh</h1>
                <h1>Student of Computer Science and Engineering @NIT - Jalandhar</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sed atque, deserunt harum labore ratione voluptatibus porro odio laborum reiciendis voluptatem. Eligendi blanditiis officia quidem. Quae omnis ipsum repudiandae nulla!</p>
                <a href="mailto: gagands2497@gmail.com">gagands2497@gmail.com</a>
            </div>
        </div>
    );
}

export default ExploreCard;