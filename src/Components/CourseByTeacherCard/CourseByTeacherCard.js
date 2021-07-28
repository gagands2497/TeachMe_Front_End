import React from 'react'
import './CourseByTeacherCard.css';

const CourseByTeacherCard = (props) => {
    return (
        <div className="CourseByTeacherCard_main">
            <h3>{props.course_name}</h3>
            <h3>{props.course_topic}</h3>
            <a href={props.link}>View Course</a>
        </div>
    )
}

export default CourseByTeacherCard
