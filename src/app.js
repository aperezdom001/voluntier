import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Opportunites from './components/Opportunities';
import Reviews from './components/Reviews';
import Contact from './components/Contact';


function App() {
    return(
        <div className='App'>
        <switch>
            <Navbar/>
             <Route path="/" exact component={Home} />
             <Route path="/about" exact component={About} />
             <Route path="/opportunities" exact component={Opportunites} />
             <Route path="/reviews" exact component={Reviews} />
             <Route path="/signup" exact component={Signup} />
             <Route path="/login" exact component={Login} />
             <Route path="/contact" exact component={Contact} />
        </switch>
        </div>
    
    )
}

export default App;