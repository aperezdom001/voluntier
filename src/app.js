import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import About from "./components/About";
import Home from "./components/Home";
import Opportunities from './components/Opportunities';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

import './app.css';

function App() {
    return(
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/opportunities" exact component={Opportunities} />
                <Route path="/reviews" exact component={Reviews} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
