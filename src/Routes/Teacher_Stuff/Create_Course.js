import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Teacher_Stuff.css';

const Create_Course = () => {

    const [errors, seterrors] = useState([]);


    return (
        < React.Fragment >
            <Navbar />
            < div id="form" >
                <form id="Teacher_Form">
                    <input type="text" name="course_name" id="" placeholder="Course Name" />
                    <input type="text" name="course_topic" id="" placeholder="Course Topic" />
                    <textarea name="description" id="description" placeholder="Write The Course Description Here ..."></textarea>
                    <input type="text" name="Storage Link" id="" placeholder="Storage Link" />

                    <input type="button" value="Create" />
                </form>
            </ div>
        </React.Fragment >
    )
}

export default Create_Course
