import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './Teacher_Stuff.css';
import Form from '../../Components/Form/Form'

const base_req_url = "https://server300.herokuapp.com";

const Update_Profile = () => {
    const [errors, seterrors] = useState([]);
    const [success, setsuccess] = useState("");
    const [isLoading, setisLoading] = useState(false);

    const [name, setName] = useState("");
    const [ph_number, setPhone] = useState("");
    const [description, setdescription] = useState("");

    const handler = (e) => {
        e.preventDefault();
        const form = document.getElementById("TeacherForm");
        seterrors([]);

        let data = {}

        if (name)
            data.name = name;
        if (ph_number)
            data.ph_number = ph_number;
        if (description)
            data.description = description;

        if (form.ProfileImage)
            data.profile_image = form.ProfileImage.value;


        let options = {
            headers: {
                "Authorization": `Bearer ${sessionStorage.getItem("Access_Token")}`,
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }

        const url = `${base_req_url}/teacher/update_data`;

        setisLoading(true);

        fetch(url, options)
            .then(response => {
                return response.json();
            }).then(res => {
                if (res.errors) {
                    seterrors(res.errors);
                    setisLoading(false);
                    setsuccess("");
                    console.log(res.errors);
                }
                else {
                    setisLoading(false);
                    setsuccess(res.message);
                }
            }).catch(err => {
                setisLoading(false);
                seterrors([err]);
                setsuccess("");
                console.log(err);
            })
    }
    const printSuccess = () => {
        if (success != "")
            return <div className="success">
                <div className="successMessage">{success}</div>
            </div>
    }

    const printErrors = () => {
        if (errors.length) {
            return <div id="errors">
                {
                    errors.map(err => {
                        return <div className="errorMessage">{err.msg || err.message}</div>
                    })
                }
            </div>
        }
        else {
            return <div></div>
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
            < React.Fragment >
                <Navbar />
                {printErrors()}
                {printSuccess()}
                < div id="form" >
                    <form id="TeacherForm" encType="multipart/form-data">
                        <input type="text" name="name" id="" placeholder="Userame" onChange={(e) => { setName(e.target.value) }} />
                        <input type="text" name="ph_number" id="" placeholder="Phone Number" onChange={(e) => { setPhone(e.target.value) }} />
                        <textarea name="description" id="description" placeholder="Write The Description Here ..." onChange={(e) => { setdescription(e.target.value) }}></textarea>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', margin: "1rem" }}>
                            <h1 class="img-label">Select Profile Image</h1>
                            <input type="file" name="ProfileImage" id="" />
                        </div>
                        <input onClick={handler} type="button" value="Update" />
                    </form>
                </ div>
            </React.Fragment >
        )
}

export default Update_Profile
