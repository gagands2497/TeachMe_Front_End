import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';

// ----------------import components------------

import Home from './Routes/Home';
import Register from './Routes/Register';
import Login from './Routes/Login';
// ---------------------------------------------

const port = process.env.PORT || 8080;
const App = () => {

    const [name, setname] = useState("");
    
    useEffect(()=>{
        let url = "/backend";
        fetch(url)
                .then((response)=>{
                    return response.json();
                })
                .then((data)=>{
                    console.log(data);
                })
                .catch((err)=>{
                    console.log(err);
                })
    })
    
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
            </Switch>
        </Router>
    );
}
 
export default App;