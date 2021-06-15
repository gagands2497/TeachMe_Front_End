import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';

// ----------------import components------------

import Home from './Routes/Home';

// ---------------------------------------------

const port = process.env.PORT || 8080;
const App = () => {

    const [name, setname] = useState("");
    
    useEffect(()=>{
        let url = "http://localhost:" + port;
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
            </Switch>
        </Router>
    );
}
 
export default App;