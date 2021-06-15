import './Navbar.css'
import ProfileImage from '../ProfileImage/ProfileImage';
const Navbar = () => {


    return (
        <div id="navbar">
            <a href="/"><span>Home</span></a>
            <span>About us</span>
            <span>Contact us</span>
            <ProfileImage></ProfileImage>
        </div>
    );
}
 
export default Navbar;