import React from 'react';
import LoginFormHeader from './LoginFormHeader';
import LoginFormInputes from './LoginFormInputes';
import './login-form.css';


function LoginForm() {
    return (
        <div className="bg-image">
            <div className="form-style">
                <LoginFormHeader />
                <LoginFormInputes />
            </div>
            
        </div>
    )
}

export default LoginForm
