import './ExploreCard.css';
import React from 'react';
// import profileImage from '../../Images/profile.png';

let profileImage = "https://tinyurl.com/pycvvjja";

const ExploreCard = (props) => {
    return (
        <div className="CourseCard">
            <div id="information">
                <img src={profileImage} alt="" />
                <a href="">View Profile</a>
            </div>
            <div id="about">
                <h1 id="name">{props.CourseName}</h1>
                <h1>{props.CourseTopic}</h1>
                <p>{props.CourseDescription}</p>
                <a href="">View Course</a>
            </div>
        </div>
    );
}

export default ExploreCard;