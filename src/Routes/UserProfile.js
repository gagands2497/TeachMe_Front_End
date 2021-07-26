import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
// import Form from "../Components/Form/Form";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";


const UserProfile = () => {
    const [Email, setEmail] = useState("");
    const [Username, setUsername] = useState("");
    const [Country, setCountry] = useState("");
    const [UserType, setUserType] = useState("");
    const [City, setCity] = useState("");
    const [Pincode, setPincode] = useState("");
    const [Skills, setSkills] = useState({});
    const [Warning, setWarning] = useState("");


    const renderSkills = () => {
        if (UserType.toLowerCase() === "teacher") {
            return (
                <React.Fragment>
                    <input type="text" placeholder="Skill-1" onChange={(e) => { setSkills({ skill1: e.target.value }) }} />
                    <input type="text" placeholder="Skill-2" onChange={(e) => { setSkills({ skill2: e.target.value }) }} />
                    <input type="text" placeholder="Skill-3" onChange={(e) => { setSkills({ skill3: e.target.value }) }} />
                    <input type="text" placeholder="Skill-4" onChange={(e) => { setSkills({ skill4: e.target.value }) }} />
                </React.Fragment>
            )
        }
        return (
            <React.Fragment>

            </React.Fragment>
        )
    }


    const update = () => {

        setWarning("");
        if (!Email || !UserType || !Pincode || !Country || !City) {
            setWarning("Please Fill all the fields");
        } else if ((UserType.toLowerCase() === "teacher")) {
            if (!Skills.skill1 && !Skills.skill2 && !Skills.skill3 && !Skills.skill4) {
                setWarning("Please enter atleast one skill");
            }
        }
        else if (UserType.toLowerCase() !== "teacher" && UserType.toLowerCase() !== "student") {
            setWarning("Only student and teachers are allowed")
        }
        else if (UserType.toLowerCase() === "teacher") {
            console.log('data')
            let data = {
                Email_Id: Email,
                Username: Username,
                Country: Country,
                City: City,
                Pincode: Pincode,
                Skills: Skills,
                UserType: "teacher"
            }
            let url = "http://localhost:8080/api/teacher"
            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }

            fetch(url, options).then(async (response) => {
                let data = await response.json();

                console.log(data);
            }).catch(err => {
                console.log(err);
            })

            // window.location.href = '/TeacherProfile';
        }
        else {
            // window.location.href = '/Explore';
            console.log("HELLO");
        }
    }






    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div id="profile">
                <div id="updateProfile">
                    {(Warning) && <div id="warning">{Warning}</div>}
                    <form>
                        <input type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email-Id" />
                        <input type="text" onChange={(e) => { setUsername(e.target.value) }} placeholder="Username" />
                        <input type="text" onChange={(e) => { setCountry(e.target.value) }} placeholder="Country" />
                        <input type="text" onChange={(e) => { setUserType(e.target.value) }} placeholder="Teacher or student" />
                        <input type="text" onChange={(e) => { setCity(e.target.value) }} placeholder="City" />
                        <input type="text" onChange={(e) => { setPincode(e.target.value) }} placeholder="Pincode" />
                        {renderSkills()}

                    </form>
                    <Button bgColor="#05386B" color="#5CD895" FS="1em" handler={update}>Update</Button>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment>

    );
}

export default UserProfile;