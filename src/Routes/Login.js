import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
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
        let url = 'http://localhost:8080/api/login'
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
                <Button handler = {handler} color = "#5CD895" FS = "1em">Login</Button>
            </Form>
            
        </React.Fragment>
    );
}
 
export default Login;