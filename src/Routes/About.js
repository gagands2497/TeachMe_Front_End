import React,{compnent} from 'react'
import Tilt from 'react-vanilla-tilt'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Button from "../Components/Button/Button";

const About = () => {
    return (
        <div style={{ backgroundColor: "#F0F6F4" }}>
            <Navbar />
            <div className="About1">
                <h1>Raise The Bar Through Learning</h1>
                <h2>With Us</h2>
            </div>

            <div class="area">
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div style={{ textAlign: "center" }}>
                <Tilt className="profileCard" style={{ width: "350px", height: "450px", backgroundColor: "#FDFEFF" }}>
                    <div className="card">
                        <div className="top" style={{backgroundColor:"#31394D"}}>
                            <h2 className="name" style={{color:"#fff"}}>Navjot Singh</h2>
                            <img className="circle-img" src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.18169-9/20768220_1941766279397150_2695648205262839535_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=J4qvBmKamSoAX80kOUS&_nc_ht=scontent-bom1-2.xx&oh=fa4ed2371f94f7b54521a108449f2896&oe=60D12605" alt="navi_img" />
                        </div>
                        <div className="bottom">
                             <ul>
                                <li>Full Stack Web developer</li>
                                <li>C / C++</li>
                                <li>Data Structures</li>
                                <li>Operating Systems</li>
                                <li>Database Management System</li>
                            </ul>

                            <a href="https://www.linkedin.com/in/navjot-singh-8a79561a0/" target="_blank"><Button bgColor="#31394D" FS="1.1em" color="#FDFEFF">View Profile</Button></a>
                        </div>
                    </div>
                </Tilt>

                <Tilt class="profileCard" style={{ width: "350px", height: "450px", backgroundColor: "#31394D" }}>
                    <div className="card">
                        <div className="top" style={{backgroundColor:"#FDFEFF"}}>
                            <h2 className="name">Gagandeep Singh</h2>
                            <img className="circle-img" src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.6435-1/s320x320/82132459_600315464078088_3769127711147032576_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_ohc=eBNx-qy7CdMAX-8-Nr_&tn=7bco4pFpQyJOeNf6&_nc_ht=scontent-bom1-2.xx&tp=7&oh=ff0f85c6ff897d499bd142103e7f3b5f&oe=60D18E5B" alt="gaggi_img" />
                        </div>
                        <div className="bottom">
                            <ul style={{color: "#fff"}}>
                                <li>Full Stack Web developer</li>
                                <li>C / C++</li>
                                <li>Data Structures</li>
                                <li>Block Chain</li>
                                <li>Data Mining</li>
                            </ul>

                            <a href="https://www.linkedin.com/in/gagandeep-singh-913046214/" target="_blank"><Button bgColor="#FDFEFF" FS="1em" color="#31394D">View Profile</Button></a>
                        </div>
                    </div>
                </Tilt>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default About
