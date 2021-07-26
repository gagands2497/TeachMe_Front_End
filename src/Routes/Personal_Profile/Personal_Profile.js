import './Personal_Profile.css';
import React, { useEffect, useState } from 'react';
import Navbar from "../../Components/Navbar/Navbar";
import dummy_user_image from '../../Images/DefaultUserImage.png';

const base_req_url = "https://server300.herokuapp.com";

const Personal_Profile = (props) => {
    const userType = props.userType;
    const [userData, setuserData] = useState({})
    const [isLoading, setisLoading] = useState(true);
    const [Token, setToken] = useState(sessionStorage.getItem('Access_Token'));

    var p = "https://tinyurl.com/pycvvjja";

    useEffect(() => {
        // fetch the data
        setisLoading(true);
        if (!Token) {
            window.location.href = '/login';
        } else {
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `bearer ${Token}`
                }
            }
            const url = `${base_req_url}/${userType}/personal_profile`;
            fetch(url, options)
                .then(Response => {
                    return Response.json();
                })
                .then(resdata => {
                    setuserData(resdata.userData);
                    if (resdata.profile_url != null)
                        p = resdata.profile_url;
                    setisLoading(false);
                })
                .catch(error => {
                    setisLoading(false);
                    console.log(error);
                })

        }
    }, [Token]);


    const renderProfile = () => {
        if (userType === "student") {
            return (
                <React.Fragment>
                    <div id="student_data">
                        <div id="student_profile">
                            <div id="studentImage">
                                <img src={dummy_user_image} alt="" />
                            </div>
                            <div>
                                <span>Name : {userData.name}</span>
                                <span>Email-Id : {userData.email_id}</span>
                                <span>Ph .no : {userData.ph_number ? userData.ph_number : "Not provided"}</span>
                                <span>Joined on : {userData.createdAt.substring(0, 10)}</span>
                            </div>

                        </div>
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className="teacher">
                        <div class="profile">
                            <div class="profile-bg"></div>
                            <section class="container">
                                <div class="profile-image" style={{ backgroundImage: `url(${p})` }}>
                                    <a class="camera" href="#"><i class="fas fa-camera"></i></a>
                                </div>

                                <div class="profile-info">
                                    <h1 class="first-name">{userData.name}</h1>
                                    <h2>ABOUT</h2>
                                    <p>{userData.description}</p>

                                    <aside class="social-media-icons">
                                        <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-codepen"></i></a>
                                        <a href="" target="_blank"><i class="fab fa-github"></i></a>
                                    </aside>
                                </div>
                            </section>

                            <section class="skills">
                                <a href="#"><strong>Create Course</strong> </a>
                                <a href="#"><strong>Session Requests</strong> </a>
                                <a href="#"><strong>Update profile</strong> </a>
                            </section>
                            <button class="icon close"></button>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }

    if (isLoading) {
        return <h1 style={{
            textAlign: 'center',
            margin: "5rem",
            fontSize: "3rem",
            letterSpacing: "2px"
        }}>Loading....</h1>
    } else
        return (
            <React.Fragment>
                {renderProfile()}
            </React.Fragment>
        );
}
export default Personal_Profile;