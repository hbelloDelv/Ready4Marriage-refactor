import React from 'react';
import { Link } from 'react-router-dom';

function RegFormHeader() {
    return (
        <div>
              <div className="content">
                    <h3>Registration form</h3>
                </div>
                <div className="regParagraph">
                    <p>Please Enter your Informations so that we can proceed to create an account for you</p>
                </div>
                <div className="regLinks">
                    <ul>
                        <li><Link to="/login">Go to Login Page</Link></li>
                        <li> | </li>
                        <li><Link to="/">Go to Home Page</Link></li>
                    </ul>
                </div>
                <hr />
        </div>
    )
}

export default RegFormHeader
