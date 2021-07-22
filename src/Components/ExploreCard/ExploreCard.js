import React from 'react';
import './ExploreCard.css';
import Button from '../Button/Button';


const ExploreCard = (props) => {
    return (
        <div className="explore_card">
            <h1>{props.CourseName}</h1>
            <h4>{props.CourseDescription}</h4>
            <h3>{props.CourseTeacher}</h3>
            
            <Button right_margin="20vh" color="#5CD895" FS="1em">Watch</Button>
        </div>
    )
}

export default ExploreCard
