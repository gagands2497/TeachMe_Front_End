import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ExploreCard from "../Components/ExploreCard/ExploreCard";

const Explore = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="SearchCourse">
                <input className="SearchBar" type="text" placeholder="Search.." />
            </div>

            <div className="explore_base">
                <ExploreCard CourseName="React Js" CourseDescription="Learn Fluent React Js with me" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="React Js" CourseDescription="Learn Fluent React Js with me" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="React Js" CourseDescription="Learn Fluent React Js with me" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="React Js" CourseDescription="Learn Fluent React Js with me" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="React Js" CourseDescription="Learn Fluent React Js with me" CourseTeacher="Angela Yu" />
            </div>
        </React.Fragment>
    );
}

export default Explore;