import React from 'react';
import RegFormHeader from './RegFormHeader';
import FormInputs from './Inputs';

//signup css style is directly affection the dashbbord and message forms when de-activeted
//cant figure out why. 26th Sept 2021
import './signupform.css';

function SignupForm
() {
    return (
        <div className="bg-regForm">
           <div className="regForm-style">
                <RegFormHeader />
                <FormInputs />
           </div>
        </div>
    )
}

export default SignupForm

