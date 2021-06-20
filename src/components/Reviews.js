import React from 'react';
import './Reviews.css';

function Reviews() {
    return (
        <div>
            <h1 className="rHeading">Reviews</h1>

            <div className="review">
            <p className="rDesc"> Ever since my surgery, I have become immobile. I posted on Voluntier
                about my garden needing some tending to and within 3 hours I already
                had members of the community responding to help me. I would reccommend 
                Voluntier to everyone in need of assistance!
            </p>

            <p className="name">
            -Rosamund 71, Connecticut
            </p>

            </div>

            <div className="review">
            <p className="rDesc">
                We needed volunteers for a charity event for our local community center! Within hours we had 
                responses and were able to fill our roster with people will to help! Thank you Voluntier!
            </p>

            <p className="name">
            -Darla 41, Massachussetts
            </p>
            </div>

            <div className="review">
            <p className="rDesc">
                Our non-profit WagMoreBarkLess needed help transporting puppies from a puppy mill down south. We 
                organized our event on Voluntier and were able to find people on very short notice. Voluntier made
                finding reputable volunteers extremely easy!
            </p>
            <p className="name">
            -Mary 31, Connecticut
            </p>
            </div>

        </div>
    );
}

export default Reviews;
