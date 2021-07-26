import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ----------------import components------------
import UserProfile from './Routes/UserProfile';
import Home from './Routes/Home';
import Explore from './Routes/Explore';
import About from './Routes/About';
import Login from './Routes/Login/Login';
import SignUp from './Routes/SignUp/SignUp';
import Personal_Profile from './Routes/Personal_Profile/Personal_Profile';
import Create_Course from './Routes/Teacher_Stuff/Create_Course';
import Update_Profile from './Routes/Teacher_Stuff/Update_Profile';

// ---------------------------------------------
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <Home></Home>
                </Route>
                <Route path='/register'>
                    <SignUp />
                </Route>
                <Route path='/login'>
                    <Login></Login>
                </Route>
                <Route path="/create_course">
                    <Create_Course />
                </Route>
                <Route path="/Update_Profile">
                    <Update_Profile />
                </Route>

                <Route path='/about'>
                    <About></About>
                </Route>

                <Route path="/profile" >
                    <UserProfile></UserProfile>
                </Route>
                <Route path="/teacher/profile">
                    <Personal_Profile userType="teacher" />
                </Route>
                <Route path="/Explore">
                    <Explore></Explore>
                </Route>
                <Route path="*">
                    <div style={{
                        display: "flex",
                        height: "100vh",
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h1 style={{
                            fontSize: "4em",
                            fontFamily: "sans-serif"
                        }}>404 PAGE NOT FOUND</h1>
                        <a href="/" style={{
                            backgroundColor: "blue",
                            margin: "1em",
                            color: "white",
                            padding: "1em",
                            borderRadius: "0.5em",
                            fontFamily: "sans-serif"
                        }}>BACK TO HOME</a>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;