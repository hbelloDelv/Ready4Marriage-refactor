import React from 'react';
import { Link } from 'react-router-dom';

function Inputs() {
    return (
        <div className="formInputs-style">
            <form>
                <div className="form-group" >
                    <label for="username">Username</label>
                    <input type="text" placeholder="username" className="form-control"/>
                </div>
                <div className="form-group" >
                    <label for="email">Email</label>
                    <input type="text" placeholder="email" className="form-control"/>
                </div>
                <div className="form-group" >
                    <label for="dateOfBirth">Date of birth</label>
                    <input type="text" placeholder="date of birth" className="form-control"/>
                </div>
                <div className="form-group" >
                    <label for="password">Password</label>
                    <input type="text" placeholder="password" className="form-control"/>
                </div>
                <div className="form-group" >
                    <label for="confirmPassword">Confirm password</label>
                    <input type="text" placeholder="confirm password" className="form-control"/>
                </div>
                
                <br /><hr />

                <h3>2</h3>
                <div><h4>Personal information</h4></div>

                <div className="form-group" >
                    <label for="fullName">Fullname</label>
                    <input type="text" placeholder="Full name" className="form-control"/>
                </div>
                <div className="form-group" >
                    <label for="maritalStatus">Marital status</label>
                    <input type="text" placeholder="Marital status" className="form-control"/>
                </div>
                <div className="form-group" >
                    <label for="country">Country</label>
                    <input type="text" placeholder="Country" className="form-control"/>
                </div>

                {/* To be work on latter */}
                <button  type="submit" className="btn btn-success btn-style"><Link>Submit</Link></button>
                {/* <div className="submitButton">
                <button  type="submit" className="btn btn-success"><Link>Submit</Link></button>
                </div> */}
                
            </form>
        </div>
    )
}

export default Inputs
