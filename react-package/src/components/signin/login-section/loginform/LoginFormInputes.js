import React from 'react'
import { Link } from 'react-router-dom';

function LoginFormInputes() {
        
  const  handleSubmit = (e) =>{
        e.preventDefault();

        const {username, password } = e.target.elements;
        
        
        if({username: username.value === "admin" &&  password.value === "123"}){
            console.log("you are logged in ")
        }else{
            console.log("go to signup page")
        }

        console.log({username: username.value, password: password.value})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="loginform">
                <div><input type="text" placeholder="Username/email"
                        id="username"/>
                        </div>

                <div><input type="password" placeholder="Password" id="password"
                        />
                        </div>   
            </div>
            
            <button className="loginButton">LOGIN</button>
            
            <p className="sign-up"><Link to="/signup">Dont have an account? Sign up</Link></p>
        </form>
    )
}

export default LoginFormInputes
