import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";


const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, seterror] = useState("");


    const handler = (e) => {
        e.preventDefault();

        seterror("");
        let data = {
            email_id: Email,
            password: Password,
        }


        if (Email && Password) {

            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            let url = "";

            if (document.getElementById('User_teacher').checked) {
                url = 'https://server300.herokuapp.com/auth/teacher_login';
            }
            else if (document.getElementById('User_student').checked) {
                url = 'https://server300.herokuapp.com/auth/student_login';
            }


            fetch(url, options).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                if (data.message == "Login Student success") {
                    const Token = "Bearer " + data.Access_Token;
                    sessionStorage.setItem("Token", Token);
                    console.log(Token);
                    window.location.href = '/Explore';

                }
                else if (data.message == "Login Teacher success") {
                    const Token = "Bearer" + " " + data.Acces_Token;
                    sessionStorage.setItem("Token", Token);
                    console.log(Token);
                    // window.location.href = '/TeacherProfile';
                }
                else {
                    alert(data.message);
                }
            })
        }
        else {
            console.log("Please enter valid credentials");
        }

        e.preventDefault();
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Form id="LoginForm" header="Login">

                {error && <div id="warning">{error}</div>}
                <input type="email" name="Email_Id" placeholder="Email Id" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" name="Password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

                <div id="usertype">
                    <div className="label1">
                        <input id="User_teacher" type="radio" name="usertype" value="teacher" />
                        <label for="html">Teacher</label>
                    </div>
                    <div className="label1">
                        <input id="User_student" type="radio" name="usertype" value="student" />
                        <label for="css">Student</label>
                    </div>
                </div>

                <Button handler={handler} color="#5CD895" FS="1em">Login</Button>

            </Form>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default Login;