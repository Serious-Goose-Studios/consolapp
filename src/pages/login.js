import React from 'react';
import axios from 'axios'
import home from '../components/home.jfif';
import HACLogo from '../components/HACLogo.png';
import { homeButton } from './home.js';
function HACDirect() {
    window.location.href = 'https://hac.csisd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fhomeaccess%2f'
}
var data = [];

export default function Login() {
    function APIGetRequest(event) {
        event.preventDefault();
        const config = {
            headers: {
                user: document.getElementById("userin").value,
                pass: document.getElementById("passin").value
            }
        };
        const url = "https://backend.consolapp.tech/api/rank";
        axios.get(url, config)
            .then(res => data = res.data,
                storeData())
            .catch(err => console.log(err),
            document.getElementById('loginErr').style.display = "inline")
        setTimeout(storeData, 2000);
    }
    async function storeData(){
        
        data  = JSON.stringify(data);
        localStorage.setItem("rankData", data)
        console.log(data)
    }
    function LoginErr(){
        return(
            <div id="loginErr">
                <p id="loginErrMessage">Incorrect Username or Password</p>
            </div>
        )
    };
    return (
        <div id="LoginPage">
            <button className="cornerButton" onClick={homeButton}><img id="cornerImg" src={home} /></button>
            <h5><button id="HACLogo" onClick={HACDirect}><img id="HACLogo" src={HACLogo} /></button>Login</h5>
            <form id="HACLogin" onSubmit={APIGetRequest}>
                <label id="userField">
                    Username
                    <input type="text" id="userin" defaultValue="" />
                </label>
                <label id="passField">
                    Password
                    <input type="password" id="passin" defaultValue="" />
                </label>
                <button type="submit" className="submitLogin" id="submitlogin">Login</button>
            </form>
            <LoginErr />
        </div>
    )
}
