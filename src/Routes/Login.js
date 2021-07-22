import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [error, seterror] = useState("");


    const handler = (e)=>{
        seterror("");
        let data = {
            email_id:Email,
            password:Password,
        }


        if(Email && Password.length >= 8)
        {
           
            sessionStorage.setItem("Email_Id",data.Email_Id)
            let options = {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data)
            }

            let url = 'https://server300.herokuapp.com/auth/student_login'
            
            fetch(url, options).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
            })
        e.preventDefault();
        }
        else
        {
            console.log("Try Again");
        }
    }

    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Form id = "LoginForm" header = "Login">
                
                {error && <div id = "warning">{error}</div>}
                <input type="email" name="Email_Id" placeholder = "Email Id" onChange = {(e)=>{setEmail(e.target.value)}} />
                
                <input type="password" name="Password" placeholder = "Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                <Button handler = {handler} color = "#5CD895" FS = "1em">Login</Button>
            </Form>
            <Footer></Footer>
        </React.Fragment>
    );
}
 
export default Login;