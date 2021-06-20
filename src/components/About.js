import React from 'react';
import './About.css';

function About() {
    return (

        //PSEUDOCODE:
        // Show the what, where, how, and why of Voluntier 
        // Look up images in creative commons to use to describe each of these
        // Maybe the images can go on top of each of these (50% opacity)
        // Add the images in the css file?? 
        // Should there be CSS animations with the images?? Can I make this 
        // carousel (like a slideshow of the what, where, how, and why)

        <div>
            <h1 className="aboutHeading">About Voluntier</h1>

            <div className="box-wrap">
            {/* WHAT */}
            <h3 className="wwhw">What is Voluntier?</h3>
            <p className="desc"> Voluntier is an organization that lets communities close to us communicate with others
                about great opportunities they can participate in to help in any way they can. 
            </p>

            {/* WHERE */}   
            <h3 className="wwhw">Where is Voluntier?</h3>
            <p className="desc">The best aspect about Voluntier is that it is fully remote and you can reach out to many communitiesand organizations nationally.  </p>

            {/* HOW */}
            <h3 className="wwhw">How does Voluntier reach out to communities near you?</h3>
            <p className="desc">Create an account if your organization or company or you yourself want to organize an event 
                for others to participate in to make a difference in your community. 
            </p>

            {/* WHY */}
            <h3 className="wwhw">Why was Voluntier created in the first place?</h3>
            <p className="desc">It is important for people to engage with their communities and help with anything that can make the future a better 
                place to live in. Voluntier was created for people to contribute some way for their future in an engaging and simple way.
            </p>
            </div>
        </div>
    );
};

export default About;
