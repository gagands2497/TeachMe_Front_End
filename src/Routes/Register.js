import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Prompt from "../Components/Prompt/Prompt";
import Button from "../Components/Button/Button";
const Register = () => {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handler = ()=>{
        let data = {
            Username:Username,
            Email_Id:Email,
            Password:Password,
            ConfirmPassword:ConfirmPassword
        }
        sessionStorage.setItem("Email_Id",data.Email_Id)
        let options = {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }
        let url = 'http://localhost:8080/api/register';
        fetch(url,options)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                sessionStorage.setItem("Token" , data.Token)
                window.location.href = '/profile'
            })
            .catch(err =>{
                console.log(err.message);
            })
    }

    return (
        <React.Fragment>
            <Prompt>Email can't be empty</Prompt>
            <Navbar></Navbar>
            <Form id = "RegisterForm" header = "Register">
                <input type="text" name = "userName" placeholder = "Username" onChange = {(e)=>{setUsername(e.target.value)}}/>
                <input type="email" name="Email_Id" placeholder = "Email Id" onChange = {(e)=>{setEmail(e.target.value)}} />
                <input type="password" name="Password" placeholder = "Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                <input type="password" name="Password" placeholder = "Confirm Password" onChange = {(e)=>{setConfirmPassword(e.target.value)}} />
                <Button handler = {handler} color = "#5CD895" FS = "1em">Register</Button>
            </Form>
            
        </React.Fragment>
    );
}
 
export default Register;