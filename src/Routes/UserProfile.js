import React,{useState} from "react";
import Navbar from "../Components/Navbar/Navbar";
// import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
const UserProfile = () => {

    const [userType, setuserType] = useState("")
    const renderSkills = ()=>{
        if(userType == "Teacher" || userType == "teacher"){
            return(
                <React.Fragment>
                    <input type="text"  placeholder= "Skill-1"/>
                    <input type="text"  placeholder= "Skill-2"/>
                    <input type="text"  placeholder= "Skill3"/>
                    <input type="text"  placeholder= "Skill-4"/>
                </React.Fragment>
            )
            
        }
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div id="profile">
                <div id="updateProfile">
                    <form>
                        <input type="text"  placeholder= "Email-Id"/>
                        <input type="text"  placeholder= "Username"/>
                        <input type="text"  placeholder= "Country"/>
                        <input type="text"  placeholder= "Teacher or student" onChange = {(e)=>{setuserType(e.target.value)}}/>
                        <input type="text"  placeholder = "City" />
                        <input type="text"  placeholder = "Pincode"/>
                        {renderSkills()}
                        
                    </form>
                    <Button bgColor = "#05386B" color = "#5CD895" FS = "1em">Update</Button>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>
        
    );
}
 
export default UserProfile;