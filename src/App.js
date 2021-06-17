import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

// ----------------import components------------
import UserProfile from './Routes/UserProfile';
import Home from './Routes/Home';
import Register from './Routes/Register';
import Login from './Routes/Login';
// ---------------------------------------------
const App = () => {

    
    return (  
        <Router>
            <Switch>
                <Route path = '/' exact>
                    <Home></Home>
                </Route>
                <Route path = '/register'>
                    <Register></Register>
                </Route>
                <Route path = '/login'>
                    <Login></Login>
                </Route>
                <Route path = "/profile" >
                    <UserProfile></UserProfile>
                </Route>
            </Switch>
        </Router>
    );
}
 
export default App;