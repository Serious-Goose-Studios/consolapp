import React from 'react';
import axios from 'axios'


export default function Login(){
    function APIGetRequest(event){
        event.preventDefault();
        const config = {
          headers:{
            user: document.getElementById("userin").value,
            pass: document.getElementById("passin").value
          }
        };
        const url = "https://consolapp.tech/API/rank";
        axios.get(url, config)
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
        console.log(config);
    }
    return(
        <div id="LoginPage">
            <h5>Login to HAC</h5>
            <form id="HACLogin" onSubmit={APIGetRequest}>
                <label id="userField">
                    Username
                    <input type="text" id="userin" defaultValue="" />
                </label>
                <label id="passField">
                    Password
                    <input type="password" id="passin" defaultValue="" />
                </label>
                <button type="submit" class="submitLogin" id="submitlogin">Login</button>
            </form>
        </div>
    )
}