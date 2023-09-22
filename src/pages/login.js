import React from 'react';

export default function Login(){
    function handleSubmit() {
        alert("Not functioning");
    }
    return(
        <div id="LoginPage">
            <h5>Login to HAC</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" id="userin" defaultValue="Username" />
                <input id="passin" defaultValue="Password" />
                <button type="submit" id="submitlogin">Login</button>
            </form>
        </div>
    )
}