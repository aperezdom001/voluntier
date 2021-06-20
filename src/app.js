import React, {useState, useEffect} from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import userService from '../src/utils/userService'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Opportunities from './components/Opportunities';
import Reviews from './components/Reviews';
import Contact from './components/Contact';


function App() {
    const [user, setUser] = useState(userService.getUser())

    function handleSignUpOrLogin(){
        setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
      }
    
    function handleLogout(){
        userService.logout();
        setUser({user: null})
    }

    return(
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/signup" exact component={Signup} handleSignUpOrLogin={handleSignUpOrLogin}/>
                <Route path="/login" exact component={Login} handleSignUpOrLogin={handleSignUpOrLogin}/>
                {userService.getUser() ?
                <>
                <Route path="/opportunities" exact component={Opportunities} />
                <Route path="/reviews" exact component={Reviews} />
                </>
                :
                <Redirect to='/login'/>
                }
            </Switch>
        </div>
    );
}

export default App;
