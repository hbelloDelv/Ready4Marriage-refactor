import React from 'react'
import {Link} from 'react-router-dom';
import { MdLockOutline } from 'react-icons/md';
import './hero.css';

function Hero() {
    return (
        <div className="herosection-style">
            <div>
                <h1>Ready4Marriage</h1>
                <div className="herosection-text">
                    <p>
                        Dating for successful men and ambitious women Find <br /> a relationship on your own terms
                    </p>
                    <form className="button-style">
                    <Link to="/login"><span><MdLockOutline className="loginIconHome"/> </span>Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Hero



