import React from 'react'
import Form from "../../Components.Form.Form";


const Create_Course = () => {
    return (
        < React.Fragment >

            < div id="form" >
                <form id="loginForm">
                    <input type="email" name="email_id" id="" placeholder="Email_id" />
                    <input type="password" name="password" id="" placeholder="Password" />
                    <div id="radioOptions">
                        <div>
                            <label htmlFor="userType">Teacher</label>
                            <input type="radio" name="userType" id="" value="teacher" onClick={(e) => {
                                setuserType("teacher");
                            }} />
                        </div>
                        <div>
                            <label htmlFor="userType">Student</label>
                            <input type="radio" name="userType" id="" value="student" onClick={(e) => {
                                setuserType("student");
                            }} />
                        </div>
                    </div>
                    <input onClick={handleSubmit} type="button" value="Login" />
                </form>
                </ >
        </React.Fragment >
    )
}

export default Create_Course
