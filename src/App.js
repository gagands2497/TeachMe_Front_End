import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// ----------------import components------------
import UserProfile from './Routes/UserProfile';
import TeacherProfile from './Routes/TeacherProfile';
import Home from './Routes/Home';
import Register from './Routes/Register';
import Login from './Routes/Login';
import Explore from './Routes/Explore'
import About from './Routes/About'
import StudentRegister from './Routes/StudentRegister'
import StudentORTeacher from './Routes/StudentORTeacher'
import TeacherRegister from './Routes/TeacherRegister'
// ---------------------------------------------
const App = () => {
    return (  
        <Router>
            <Switch>
                <Route path = '/' exact>
                    <Home></Home>
                </Route>
                <Route path = '/register'>
                    <StudentORTeacher />
                </Route>
                <Route path = '/login'>
                    <Login></Login>
                </Route>
                <Route path = '/StudentRegister'>
                    <StudentRegister />
                </Route>
                <Route path = '/TeacherRegister'>
                    <TeacherRegister />
                </Route>
                <Route path = '/about'>
                    <About></About>
                </Route>
                <Route path='/StudentORTeacher'>
                    <StudentORTeacher />
                </Route>
                <Route path = "/profile" >
                    <UserProfile></UserProfile>
                </Route>
                <Route path = "/TeacherProfile">
                    <TeacherProfile></TeacherProfile>
                </Route>
                <Route path = "/Explore"> 
                    <Explore></Explore>
                </Route>
                <Route path = "*">
                    <div style = {{
                        display:"flex",
                        height:"100vh",
                        flexDirection:'column',
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                        <h1 style = {{
                            fontSize : "4em",
                            fontFamily:"sans-serif"
                        }}>404 PAGE NOT FOUND</h1>
                        <a href="/" style = {{
                            backgroundColor:"blue",
                            margin:"1em",
                            color:"white",
                            padding:"1em",
                            borderRadius:"0.5em",
                            fontFamily:"sans-serif"
                        }}>BACK TO HOME</a>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}
 
export default App;