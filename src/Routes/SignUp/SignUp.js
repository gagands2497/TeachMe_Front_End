import React, { useState } from 'react';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import Navbar from "../../Components/Navbar/Navbar";
import './SignUp.css';

const base_req_url = "https://server300.herokuapp.com";
// const base_req_url = require('../../../base_req_url');
const SignUp = () => {

    if (sessionStorage.getItem("Access_Token")) {
        window.location.href = '/teacher/profile'
    }
    const [errors, seterrors] = useState([]);
    const [userType, setuserType] = useState("student");
    const [isLoading, setisLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setisLoading(true);
        const form = document.getElementById('signUpform');
        seterrors([]);
        const bodyData = {
            email_id: form.email_id.value,
            password: form.password.value,
            name: form.name.value,
            description: form.description ? form.description.value : "",

        }
        if (bodyData.password.trim() !== form.confirmPassword.value.trim()) {
            const error = new Error("Password and Confirm Password does not matched");
            seterrors([error]);
            setisLoading(false);
        } else {

            let url = `${base_req_url}/auth/${userType}_signup`;
            console.log(url);
            const options = {
                body: JSON.stringify(bodyData),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }

            fetch(url, options)
                .then(response => {
                    return response.json();
                })
                .then(response_data => {
                    if (response_data.errors) {
                        // change this name to errors at the backend
                        seterrors(response_data.errors);
                        console.log(errors)
                        setisLoading(false);
                    } else {
                        if (response_data.message === "Registered") {
                            // window.location.href = `${userType}/profile`
                            window.location.href = "/login";
                        }
                    }
                })
                .catch(err => {
                    if (err.message === 'Failed to fetch') {
                        err.message = "Server is offline please Try again"
                    }
                    seterrors([err]);
                    console.log(err);
                    setisLoading(false);
                })
        }
    }

    // const showErrors = () => {
    //     if (errors.length) {
    //         return <div id="errors">
    //             {
    //                 errors.map(err => {
    //                     return <div className="errorMessage">{err.msg || err.message}</div>
    //                 })
    //             }
    //         </div>
    //     } else {
    //         return <div></div>
    //     }
    // }

    const getExtraFields = () => {
        if (userType === 'teacher') {
            return <textarea name="description" id="description" cols="30" rows="10" placeholder="Include about you your skills in the description"></textarea>
        } else {
            return <div></div>
        }
    }
    if (isLoading) {
        return <Loading/>
    } else {
        return (
            <React.Fragment>
                <Navbar />
                <Error errors={errors} />
                <div id="form">
                    <form id="signUpform">
                        <div>
                            <input type="text" name="name" placeholder="Name" />
                            <input type="email" name="email_id" id="" placeholder="Email_id" />
                        </div>
                        <div>
                            <input type="password" name="password" id="" placeholder="Password" />
                            <input type="password" name="confirmPassword" id="" placeholder="Confirm Password" />
                        </div>
                        {getExtraFields()}
                        <div id="radioOptions">
                            <div>
                                <label htmlFor="userType" >Teacher</label>
                                <input type="radio" name="userType" id="" value="teacher" onClick={(e) => {
                                    console.log("hye");
                                    setuserType("teacher")
                                }} />
                            </div>
                            <div>
                                <label htmlFor="userType">Student</label>
                                <input type="radio" name="userType" id="" value="student" onClick={(e) => {
                                    setuserType("student")
                                }} />
                            </div>
                        </div>
                        <input onClick={handleSubmit} type="button" value="SignUp" />
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUp;