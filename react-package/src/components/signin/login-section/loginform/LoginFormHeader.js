import React from 'react';
import FormLogo from '../loginformImages/logo.png'


function LoginFormHeader() {
    return (
        <div className="formHeader-style">
            <h2>Welcome</h2>
            <img src={FormLogo} alt={"formlogo"} />
        </div>
    )
}

export default LoginFormHeader
