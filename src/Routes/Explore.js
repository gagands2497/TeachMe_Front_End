import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import Error from "../Components/Error/Error";
import Loading from "../Components/Loading/Loading";

const base_req_url = "https://server300.herokuapp.com";

const Explore = () => {
    const [search, setSearch] = useState("");
    const [courseData, setcourseData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [errors, seterrors] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const handler = (e) => {

        seterrors([]);
        setisLoading(true);
        const url = `${base_req_url}/course/search_courses?course_topic=${search}&pageNumber=${pageNumber}`;
        console.log(url)

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
                if (res.errors) {
                    seterrors(res.errors);
                    setcourseData([]);
                    setisLoading(false);
                }
                else {
                    console.log(res);
                    setcourseData(res.data);
                    seterrors([])
                    setisLoading(false);
                }
            }).catch(err => {
                err.data = [{
                    msg: err.message ? err.message : "Server is offline"
                }]
                seterrors([err]);
                setisLoading(false);
                console.log(err);
            })

    }
    useEffect(() => {
        handler();
        if (pageNumber === 1) {
            document.getElementById("prev").disabled = true;
            document.getElementById("prev").style.backgroundColor = "white";
        }
        else {
            document.getElementById("prev").disabled = false;
            document.getElementById("prev").style.backgroundColor = "#5CD895";
        }
    }, [pageNumber, search]);

    if (isLoading) {
        return <Loading/>
    } else {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Error errors={errors} />
                <div className="SearchCourse">
                    <input onChange={(e) => { setSearch(e.target.value) }} className="SearchBar" type="text" placeholder="Search.." />
                </div>
                <div className="explore_base">
                    {
                        courseData.map(function (course) {
                            return <CourseCard CourseName={course.course_name} CourseTopic={course.course_topic} CourseDescription={course.description} />
                        })
                    }

                    <div className="next_prev">
                        <button onClick={() => {
                            // if (pageNumber > 1)
                                setPageNumber(pageNumber - 1)

                        }} className="direction" id="prev">Prev</button>
                        <h4>{pageNumber}</h4>
                        <button onClick={() => { setPageNumber(pageNumber + 1) }} className="direction" name="next">Next</button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Explore;