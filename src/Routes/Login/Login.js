import React, { useState } from 'react';
import './Login.css';
import Error from "../../Components/Error/Error"
import Navbar from "../../Components/Navbar/Navbar";
const base_req_url = "https://server300.herokuapp.com";


const Login = () => {
    if (sessionStorage.getItem("Access_Token")) {
        window.location.href = '/teacher/profile'
    }
    const [errors, seterrors] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [userType, setuserType] = useState("student");

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById('loginForm');
        seterrors([]);
        const bodyData = {
            email_id: form.email_id.value,
            password: form.password.value
        }

        // setuserType(form.userType.value);

        sessionStorage.setItem("userType", userType);

        let url = `${base_req_url}/auth/${userType}_login`;
        console.log(url);
        const options = {
            body: JSON.stringify(bodyData),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        }
        setisLoading(true);//just before making the req
        fetch(url, options)
            .then(response => {
                return response.json();
            })
            .then(response_data => {
                if (response_data.errors) {
                    // change this name to errors at the backend
                    seterrors(response_data.errors);
                    setisLoading(false);
                    console.log(errors)
                } else {
                    if (response_data.Access_Token) {
                        sessionStorage.setItem("Access_Token", response_data.Access_Token);
                        setisLoading(false);
                        if (userType === "teacher")
                            window.location.href = `${userType}/profile`
                        else
                            window.location.href = `/Explore`
                    }
                }
            })
            .catch(err => {
                setisLoading(false)
                console.log(err);
                if (err.message === 'Failed to fetch') {
                    err.message = "Server is offline please Try again"
                }
                seterrors([err]);
            })

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
            <React.Fragment>
                <Navbar/>
                <Error errors={errors} />
                <div id="form">
                    <form id="loginForm">
                        <input type="email" name="email_id" placeholder="Email_id" />
                        <input type="password" name="password" placeholder="Password" />
                        <div id="radioOptions">
                            <div>
                                <label htmlFor="userType">Teacher</label>
                                <input type="radio" name="userType" value="teacher" onClick={(e) => {
                                    setuserType("teacher");
                                }} />
                            </div>
                            <div>
                                <label htmlFor="userType">Student</label>
                                <input type="radio" name="userType" value="student" onClick={(e) => {
                                    setuserType("student");
                                }} />
                            </div>
                        </div>
                        <input onClick={handleSubmit} type="button" value="Login" />
                    </form>
                </div>
            </React.Fragment>
        );
}

export default Login;