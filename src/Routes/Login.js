import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Image from "../Components/Image/Image";
import RegisterBackgroungImage from '../Images/RegisterBackground.jpg'
const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const handler = ()=>{
        let data = {
            Email_Id:Email,
            Password:Password,
            Token : sessionStorage.getItem("Token")
        }
        sessionStorage.setItem("Email_Id",data.Email_Id)
        let options = {
             method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }
        let url = '/api/login'
        fetch(url,options).then((response)=>{
            return response.json()
        }).then((data)=>{
            sessionStorage.setItem("Token" , data.Token)
            window.location.href = '/profile'
        })
        .catch(err =>{
            console.log(err.message);
        })
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Form id = "LoginForm" header = "Login">
                <input type="email" name="Email_Id" placeholder = "Email Id" onChange = {(e)=>{setEmail(e.target.value)}} />
                <input type="password" name="Password" placeholder = "Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                <Button handler = {handler} color = "magenta" FS = "1em">Login</Button>
            </Form>
            <Image 
                id = "LoginPageImage"
                image = {RegisterBackgroungImage}
                height = "95vh"
                width  = "100vw"
                opacity = "0.8"
            ></Image>
        </React.Fragment>
    );
}
 
export default Login;