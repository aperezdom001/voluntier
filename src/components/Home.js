import React from 'react';
import './Home.css';

function Home () {
    return (
        <div>
            <h2 className="thankyou"><em>Thank you in advance for reaching out to your community!</em></h2>

            <h2 className="mHeading">Mission Statement</h2>
            <p className="mState">Voluntier seeks to give people opportunities to help the communities
               around them in an engaging and impacting way. In order to make our future 
               a accepting and understanding place, helping communities for nothing in return 
               can help us be empathetic, honest, and to better ourselves as people.
            </p>

            <h2 className="cHeading">Core Values</h2>

    
                            <h4 className="value"><em>Courageous</em></h4>
                            <p className="vDesc">Finding the courage to help others and 
                                speak out for others.
                            </p>
      
                            <h4 className="value"><em>Creative</em></h4>
                            <p className="vDesc">Using your background to solve problems and to create
                                solutions.
                            </p>
            
                            <h4 className="value"><em>Collaborative</em></h4>
                            <p className="vDesc">Working together with others and to learn from them.
                            </p>
                   


            <img  className="homeImage" src="img/home.png" />
        </div>
    );
}

export default Home;
