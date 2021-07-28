import React from 'react';
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import logoImage from '../../Images/logo.png'
import Footer from '../../Components/Footer/Footer';
import Loading from '../../Components/Loading/Loading';

const Home = (props) => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <div id="home_section">
                <h1>TEACH  ME</h1>
                <h2>TOUCH THE SKY WITH YOUR TEACHER</h2>
                <div id="auth_buttons">
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                    {/* <a href="/login"><Button borderWidth="0" bgColor="#05386B" color="#EDF5E1" FS="1.5em">Sign In</Button></a> */}
                </div>
                <div id="aboutProject">
                    <h1>About Project</h1>
                    <h3>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed ullam ex dolore officia quidem soluta tenetur magni ab, recusandae reiciendis fugit iure distinctio modi officiis voluptates. Nemo dolore tempore hic!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsa ipsum a dolorum cumque optio temporibus aspernatur corrupti odio ipsam nam voluptatem provident, quasi numquam placeat est ullam ratione minus.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est labore iste minima adipisci nesciunt, exercitationem harum? Blanditiis voluptas quis dolorum quae consectetur, culpa quasi doloremque officia? Accusamus, explicabo architecto!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatum cupiditate accusamus ratione debitis, maxime praesentium minus dolorem quos quod, odio officia? Iusto nesciunt earum qui voluptatum molestias laudantium mollitia?
                    </h3>
                </div>
                <div id="aboutDevelopers">
                    <h1>About Developers</h1>
                    <div id="Developers">
                        <div className="devCard">
                            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEI86SwYf_KfQ/profile-displayphoto-shrink_400_400/0/1627483220125?e=1632960000&v=beta&t=IO8-x_k27Z1Bjo-JxowTuIWGM30Okqcb6Dt2ANV3BI8" alt="" />
                            <span>Name : Gagandeep Singh</span>
                            <span>Email id : gagands2497@gmail.com</span>
                            <span>Final Year student NIT-J@CSE</span>
                            <span >Skills :-</span>
                            <ul>
                                <li>Frontend development</li>
                                <li>Backend development</li>
                                <li>Database development</li>
                                <li>Block Chain Development</li>
                            </ul>

                        </div>
                        <div className="devCard">

                            <img src="https://media-exp1.licdn.com/dms/image/C5603AQFu4g478brDCg/profile-displayphoto-shrink_400_400/0/1624248625144?e=1632960000&v=beta&t=kNrtxxbnBbbXlM-BT1DJmyOpo88ouMmx31fFsgLDd3k" alt="" />
                            <span>Name : Navjot Singh</span>
                            <span>Email id : gagands2497@gmail.com</span>
                            <span>Final Year student NIT-J@CSE</span>
                            <span >Skills :-</span>
                            <ul>
                                <li>Frontend development</li>
                                <li>Backend development</li>
                                <li>Database development</li>
                                <li>Operating System development</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </React.Fragment>
    );
}

export default Home;
