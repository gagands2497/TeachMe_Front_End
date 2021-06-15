import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import RegisterBackgroungImage from '../Images/RegisterBackground.jpg'
const Login = () => {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const handler = ()=>{
        let data = {
            userName:Username,
            Email_Id:Email,
            Password:Password,
            ConfirmPassword:ConfirmPassword
        }
        console.log(data);
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Form header = "Login">
                <input type="text" name = "userName" placeholder = "Username" onChange = {(e)=>{setUsername(e.target.value)}}/>
                <input type="email" name="Email_Id" placeholder = "Email Id" onChange = {(e)=>{setEmail(e.target.value)}} />
                <input type="password" name="Password" placeholder = "Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                <input type="password" name="Password" placeholder = "Confirm Password" onChange = {(e)=>{setConfirmPassword(e.target.value)}} />
                <Button handler = {handler} color = "magenta" FS = "1em">Login</Button>
            </Form>
            <img src={RegisterBackgroungImage} alt="" />
        </React.Fragment>
    );
}
 
export default Login;