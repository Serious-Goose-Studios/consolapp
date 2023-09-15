import React from 'react';
import './login.css';
export default function Login(){
    return(
        <div>
            <h1>Login to HAC</h1>
            <input type="text" id="userin" value="Username"></input>
            <input type="text" id="passin" value="Password"></input>
            <button id="submitlogin">Login</button>
        </div>
    )
}