import React, { useState } from 'react'
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";

const StudentRegister = () => {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ph_number, setph_number] = useState("");
    const [error, seterror] = useState("");
    const [Success, setSuccess] = useState("");
    const [isLoading, setisLoading] = useState(false);


    

    const handle_it = (e) => {
        seterror("");
        setSuccess("");
        let data = {
            name: Username,
            email_id: Email,
            password: Password,
            ph_number: ph_number
        }

        if (Email && Username && ph_number && Password) {
            setisLoading(true);
            sessionStorage.setItem("email_id", data.email_Id);
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            let url = 'https://server300.herokuapp.com/auth/student_signup';

            fetch(url, options).then(response => {

                return response.json();

            }).then(data => {

                if(data.error) {
                    var p="";

                    for(var key in data.error.data) {
                        p=p+data.error.data[key].msg;
                        p=p+"\n";
                    }

                    alert(p);
                    setSuccess("Please Enter Evewrything correctly");
                }
                else{
                    console.log(data.message);
                    window.location.href = '/Explore';
                    setSuccess(data.message);
                    
                }
            })
        }
        else {
            seterror("Please enter all credentials")
        }


        e.preventDefault();
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Form>
                {error && <div id="warning">{error}</div>}
                {Success && <div id="warning">{Success}</div>}
                <input type="text" name="name" placeholder="Username *" onChange={(e) => { setUsername(e.target.value) }} />
                <input type="email" name="email_id" placeholder="Email Id *" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="text" name="ph_number" placeholder="Mobile Number *" onChange={(e) => { setph_number(e.target.value) }} />
                <input type="password" name="Password" placeholder="Password *" onChange={(e) => { setPassword(e.target.value) }} />
                <Button handler={handle_it} color="#5CD895" FS="1em">Register</Button>
            </Form>
        </React.Fragment>
    )
}

export default StudentRegister;