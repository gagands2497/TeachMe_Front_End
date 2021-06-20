import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
const Login = () => {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [error, seterror] = useState("");


    const handler = (e)=>{
        seterror("");
        let data = {
            Email_Id:Email,
            Password:Password,
            Token : sessionStorage.getItem("Token")
        }


        if(Email && Password.length >= 6)
        {
            setisLoading(true);
            sessionStorage.setItem("Email_Id",data.Email_Id)
            let options = {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body : JSON.stringify(data)
            }

            let url = 'http://localhost:8080/api/login'
            fetch(url,options).then(async (response)=>{
                setisLoading(false);
                
                const data=await response.json();

                if(response.status === 200){
                    sessionStorage.setItem("Token" , data.Token)
                    window.location.href = '/profile'
                }else{
                    console.log(data);
                    throw new Error(data.Error);
                }

                // return response.json();
                
            })
            .catch(err =>{
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
            <Navbar></Navbar>
            <Form id = "LoginForm" header = "Login">
                {isLoading && <div id = "warning">Loading.....</div>}
                {error && <div id = "warning">{error}</div>}
                <input type="email" name="Email_Id" placeholder = "Email Id" onChange = {(e)=>{setEmail(e.target.value)}} />
                { !Email && <div id = "warning">Email cannot be empty</div> }
                <input type="password" name="Password" placeholder = "Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                {(Password.length < 6) && <div id = "warning">Password length must be greater than 6</div>}
                <Button handler = {handler} color = "#5CD895" FS = "1em">Login</Button>
            </Form>
            <Footer></Footer>
        </React.Fragment>
    );
}
 
export default Login;