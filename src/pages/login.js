import React from 'react';
import './login.css';
import axios from 'axios';

export default function Login(){
    function handleSubmit() {
        alert('A name was submitted: ' + this.state.value);
    }
    return(
        <div>
            <h1>Login to HAC</h1>
            <form onSubmit={handleSubmit}>
                <label>
                <input type="text" id="userin" value="Username"></input>
                </label>
                <input id="passin" value="Password"></input>
                <button type="submit" id="submitlogin">Login</button>
            </form>
        </div>
    )
}