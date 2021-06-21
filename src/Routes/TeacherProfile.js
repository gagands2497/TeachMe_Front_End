import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";


const TeacherProfile = () => {
    var p = "https://media-exp3.licdn.com/dms/image/C5603AQHRO0_5q-5Nfw/profile-displayphoto-shrink_400_400/0/1588227680293?e=1629936000&v=beta&t=pIIu_7NZg2yttVByYV_s_27Izf5mGaoHh4hv6fuCaiE";
    return (
        <React.Fragment>
            <Navbar></Navbar>

            <div className="teacher">
                <div class="profile">
                    <div class="profile-bg"></div>
                    <section class="container">
                        <aside class="profile-image" style={{ backgroundImage: `url(${p})` }}>
                            <a class="camera" href="#"><i class="fas fa-camera"></i></a>
                        </aside>

                        <section class="profile-info">
                            <h1 class="first-name">Navjot Singh</h1>
                            <h2>ABOUT</h2>
                            <p>Hello Hello, I'm Navjot Singh, Coder and developer , student at NIT Jalandhar; intern at No Where , happy to be here! , let's code the best we can!</p>

                            <aside class="social-media-icons">
                                <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
                                <a href="" target="_blank"><i class="fab fa-codepen"></i></a>
                                <a href="" target="_blank"><i class="fab fa-github"></i></a>
                            </aside>
                        </section>
                    </section>

                    <section class="skills">
                        <p><strong>React Js</strong> </p>
                        <p><strong>Data Structures</strong> </p>
                        <p><strong>English Speaking</strong> </p>
                    </section>
                    <button class="icon close"></button>
                </div>
            </div>
            <Footer></Footer>
        </React.Fragment >
    );
}

export default TeacherProfile;
