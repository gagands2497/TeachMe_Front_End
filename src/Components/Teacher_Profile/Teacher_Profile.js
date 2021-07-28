import React, { useState, useEffect } from 'react';
import './Teacher_Profile.css';
import dummyImage from '../../Images/DefaultUserImage.png'
import Loading from '../Loading/Loading';
import base_req_url from '../../base_req_url';
import Error from '../Error/Error';
import Navbar from '../Navbar/Navbar';
import CourseByTeacher from '../CourseByTeacher/CourseByTeacher';

import $ from 'jquery';


const Teacher_Profile = () => {

    const [isLoading, setisLoading] = useState(false);
    const [Errors, setErrors] = useState([]);
    const [TeacherData, setTeacherData] = useState([]);
    const [OptionValue, setOptionValue] = useState("COURSE");
    useEffect(() => {

        setisLoading(true);
        const email_id = window.location.href.split("=")[1];
        console.log(email_id);
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
        console.log($("input[type='radio']:checked").value)
        const url = `${base_req_url}/teacher/profile_by_mail/?email_id=${email_id}`;

        fetch(url, options)
            .then(resData => {
                return resData.json();
            }).then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                    setisLoading(false);

                    data.errors.forEach(error => {
                        if (error.msg === "teacher not found") {
                            window.location.href = '/explore';
                        }
                    })

                } else {
                    setTeacherData(data)
                    setisLoading(false);
                }
            })
            .catch(err => {
                if (!err.data) {
                    err.data = [{
                        msg: err.message ? err.message : "Server is offline Please refresh the page"
                    }]
                }
                setisLoading(false);
                setErrors([err])
            })

    }, [])

    const renderOptions = () => {
        if (OptionValue === "COURSE") {
            return <CourseByTeacher email_id={TeacherData.email_id} />
        } else if (OptionValue === "SESSION") {
            return <h1>LIVE SESSIONS</h1>
        }
        else {
            return <h1>DEMAND SESSIONS</h1>
        }
    }


    if (isLoading) {
        return <Loading></Loading>
    } else {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Error errors={Errors} />
                <div id="teacher_profile">
                    <div id="teacher_data">
                        <img src={dummyImage} alt="" />
                        <h1>Name : {TeacherData.name}</h1>
                        <h1>Email-Id : {TeacherData.email_id}</h1>
                    </div>
                    <div id="about_teacher">
                        <h1>About Teacher</h1>
                        <h3>{TeacherData.description} </h3>
                    </div>
                </div>
                <div id="teacher_options">
                    <div >
                        <h3>Courses By the teacher</h3>
                        <input
                            type="radio"
                            name="teacher_options"
                            value="COURSE"
                            onClick={(e) => {
                                setOptionValue(e.target.value)
                            }} />
                    </div>
                    <div >
                        <h3>Live sessions by teacher</h3>
                        <input
                            type="radio"
                            name="teacher_options"
                            value="SESSION"
                            onClick={(e) => {
                                setOptionValue(e.target.value)
                            }} />
                    </div>
                    <div >
                        <h3>Demand live session</h3>
                        <input
                            type="radio"
                            name="teacher_options"
                            value="DEMAND"
                            onClick={(e) => {
                                setOptionValue(e.target.value)
                            }} />
                    </div>
                </div>
                {renderOptions()}
            </React.Fragment>
        );
    }


}

export default Teacher_Profile;