import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Button from "../Components/Button/Button";
import Footer from "../Components/Footer/Footer";
import StudentRegister from './StudentRegister';

const StudentORTeacher = () => {

    function handle_Teacher(){
        window.location.href = '/TeacherRegister';
    }

    function handle_Student(){
        window.location.href = '/StudentRegister';
    }


    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div className="Choice">
                <div className="SignUp_Choice">
                    <img className="SignUp_Choice_Image" src="https://tinyurl.com/ecjea7su" alt="Teacher Image" height="200" width="250" />
                    <Button handler={handle_Teacher} top_margin="50px" right_margin="45px" color="#5CD895" FS="1em">Teacher SignUp</Button>
                </div>
                <div className="SignUp_Choice">
                    <img className="SignUp_Choice_Image" src="https://tinyurl.com/7yjjhvu9" alt="Student Image" height="200" width="250" />
                    <Button handler={handle_Student} top_margin="50px" right_margin="45px" color="#5CD895" FS="1em">Student SignUp</Button>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default StudentORTeacher
