import React from 'react';
import axios from 'axios'
import home from '../components/home.jfif';
import HACLogo from '../components/HACLogo.png';
import { homeButton } from './home.js';
function HACDirect(){
    window.location.href='https://hac.csisd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fhomeaccess%2f'
}
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
            <button id="homeButton" onClick={homeButton}><img id="homeButton" src={home} /></button>
            <h5><button id="HACLogo" onClick={HACDirect}><img id="HACLogo" src={HACLogo}/></button>Login</h5>
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