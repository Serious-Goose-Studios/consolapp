import React from 'react';
import './login.css';

export default function Login(){
    function handleSubmit() {
        alert("Not functioning");
    }
    return(
        <div>
            <h3>Login to HAC</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" id="userin" defaultValue="Username"></input>
                <input id="passin" defaultValue="Password"></input>
                <button type="submit" id="submitlogin">Login</button>
            </form>
        </div>
    )
}