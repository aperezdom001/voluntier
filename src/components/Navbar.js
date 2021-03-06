import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="login">Login</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="signup">Signup</Link></li>
                <li><Link to="opportunities">Opportunities</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
