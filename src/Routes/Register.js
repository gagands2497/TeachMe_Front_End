import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Prompt from "../Components/Prompt/Prompt";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
const Register = () => {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState("");

    const handler = (e)=>{
        seterror("");
        let data = {
            Username:Username,
            Email_Id:Email,
            Password:Password,
            ConfirmPassword:ConfirmPassword
        }
        if(Email && Username && (Password.length >= 6) && (Password === ConfirmPassword)){
            setisLoading(true);
            sessionStorage.setItem("Email_Id",data.Email_Id)
            let options = {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data)
            }
            let url = 'http://localhost:8080/api/register';
            fetch(url,options).then(async(response)=>{
                setisLoading(false);
                
                const data=await response.json();
                if(response.status === 200){
                    sessionStorage.setItem("Token" , data.Token)
                    window.location.href = '/profile'
                }else{
                    console.log(data);
                    throw new Error(data.Error);
                }
                
            }).catch(err =>{
                setisLoading(false);
                seterror(err.message);
            })
        }else{
            seterror("Please enter valid credentials")
        }

        e.preventDefault();
    }

    return (
        <React.Fragment>
            <Prompt>Email can't be empty</Prompt>
            <Navbar></Navbar>
            <Form id = "RegisterForm" header = "Register">
                {isLoading && <div id = "warning">Loading.....</div>}
                {error && <div id = "warning">{error}</div>}
                <input type="text" name = "userName" placeholder = "Username" onChange = {(e)=>{setUsername(e.target.value)}}/>
                {!Username && <div id = "warning">Username cannot be empty</div>}
                <input type="email" name="Email_Id" placeholder = "Email Id" onChange = {(e)=>{setEmail(e.target.value)}} />
                {!Email && <div id = "warning">Email Id cannot be empty</div>}
                <input type="password" name="Password" placeholder = "Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                {(Password.length < 6 )  && <div id = "warning">Password lenght must be greater than 6</div>}
                <input type="password" name="Password" placeholder = "Confirm Password" onChange = {(e)=>{setConfirmPassword(e.target.value)}} />
                {(Password !== ConfirmPassword ) && <div id = "warning">password and confirm password must match</div>}
                <Button handler = {handler} color = "#5CD895" FS = "1em">Register</Button>
            </Form>
            <Footer></Footer>
        </React.Fragment>
    );
}
 
export default Register;