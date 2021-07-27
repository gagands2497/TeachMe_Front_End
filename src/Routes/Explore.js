import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import ExploreCard from "../Components/ExploreCard/ExploreCard";

const base_req_url = "https://server300.herokuapp.com";

const Explore = () => {
    const [search, setSearch] = useState("");
    const [courseData, setcourseData] = useState([]);

    const handler = (e) => {
        if (e)
            setSearch(e.target.value);

        const url = `${base_req_url}/course/search_courses?course_topic=${search}`;

        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, options)
            .then(response => {
                return response.json();
            }).then(res => {
                console.log(res);
                setcourseData(res.data);
            }).catch(err => {
                console.log(err);
            })

    }

    useEffect(() => {
        handler()
    }, []);

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="SearchCourse">
                <input onChange={handler} className="SearchBar" type="text" placeholder="Search.." />
            </div>

            <div className="explore_base">
                {
                    courseData.map(function (course) {
                        return <ExploreCard CourseName={course.course_name} CourseTopic={course.course_topic} CourseDescription={course.description} />
                    })
                }

                {/* <ExploreCard CourseName="Web Bootcamp" CourseTopic="React Js" CourseDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sed atque, deserunt harum labore ratione voluptatibus porro odio laborum reiciendis voluptatem. Eligendi blanditiis officia quidem. Quae omnis ipsum repudiandae nulla!" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="Web Bootcamp" CourseTopic="React Js" CourseDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sed atque, deserunt harum labore ratione voluptatibus porro odio laborum reiciendis voluptatem. Eligendi blanditiis officia quidem. Quae omnis ipsum repudiandae nulla!" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="Web Bootcamp" CourseTopic="React Js" CourseDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sed atque, deserunt harum labore ratione voluptatibus porro odio laborum reiciendis voluptatem. Eligendi blanditiis officia quidem. Quae omnis ipsum repudiandae nulla!" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="Web Bootcamp" CourseTopic="React Js" CourseDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sed atque, deserunt harum labore ratione voluptatibus porro odio laborum reiciendis voluptatem. Eligendi blanditiis officia quidem. Quae omnis ipsum repudiandae nulla!" CourseTeacher="Angela Yu" />
                <ExploreCard CourseName="Web Bootcamp" CourseTopic="React Js" CourseDescription="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sed atque, deserunt harum labore ratione voluptatibus porro odio laborum reiciendis voluptatem. Eligendi blanditiis officia quidem. Quae omnis ipsum repudiandae nulla!" CourseTeacher="Angela Yu" /> */}
            </div>
        </React.Fragment>
    );
}

export default Explore;