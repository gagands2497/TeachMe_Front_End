import React from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import './Teacher_Stuff.css';
import Form from '../../Components/Form/Form'

const Update_Profile = () => {
    return (
        < React.Fragment >
            <Navbar />
            < div id="form" >
                <Form id="Teacher_Form">
                    <input type="text" name="name" id="" placeholder="Userame" />
                    <input type="button" value="Update" />
                    <input type="text" name="ph_number" id="" placeholder="Phone Number" />
                    <input type="button" value="Update" />
                    <textarea name="description" id="description" placeholder="Write The Description Here ..."></textarea>
                    <input type="button" value="Update" />
                    <input type="text" name="Image Link" id="" placeholder="Image Link" />
                    <input type="button" value="Update" />
                </Form>
            </ div>
        </React.Fragment >
    )
}

export default Update_Profile
