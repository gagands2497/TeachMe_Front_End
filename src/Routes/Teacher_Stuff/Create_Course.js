import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Teacher_Stuff.css';

const base_req_url = "https://server300.herokuapp.com";

const Create_Course = () => {

    const [errors, seterrors] = useState([]);
    const [success, setsuccess] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const handler = (e) => {
        e.preventDefault();
        const form = document.getElementById('Teacher_Form');
        seterrors([]);

        const data = {
            course_name: form.course_name.value,
            course_topic: form.course_topic.value,
            description: form.description.value,
            storage_link: form.storage_link.value
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionStorage.getItem("Access_Token")}`
            },
            body: JSON.stringify(data)
        }

        const url = `${base_req_url}/teacher/create_course`


        setisLoading(true);

        fetch(url, options)
            .then(response => {
                return response.json();
            }).then(res => {

                if (res.errors) {
                    seterrors(res.errors);
                    setisLoading(false);
                    setsuccess("");
                    console.log(res.errors);
                }
                else {
                    setisLoading(false);
                    setsuccess(res.message);
                    setsuccess("");
                    // console.log(success);
                }
            }).catch(err => {
                setisLoading(false);
                seterrors([err]);
                console.log(err);
            })
    }

    const printSuccess = () => {
        if (success !== "")
            return <div className="success">
                <div className="successMessage">{success}</div>
            </div>
    }

    const printErrors = () => {
        if (errors.length) {
            return <div id="errors">
                {
                    errors.map(err => {
                        return <div className="errorMessage">{err.msg || err.message}</div>
                    })
                }
            </div>
        }
        else {
            return <div></div>
        }
    }

    if (isLoading) {
        return <h1 style={{
            textAlign: 'center',
            margin: "5rem",
            fontSize: "3rem",
            letterSpacing: "2px"
        }}>Loading....</h1>
    } else
        return (
            < React.Fragment >
                <Navbar />
                {printErrors()}
                {printSuccess()}
                < div id="form" >
                    <form id="Teacher_Form">
                        <input type="text" name="course_name" id="" placeholder="Course Name" />
                        <input type="text" name="course_topic" id="" placeholder="Course Topic" />
                        <textarea name="description" id="description" placeholder="Write The Course Description Here ..."></textarea>
                        <input type="text" name="storage_link" id="" placeholder="Storage Link" />

                        <input onClick={handler} type="button" value="Create" />
                    </form>
                </ div>
            </React.Fragment >
        );
}

export default Create_Course
