import React from 'react';
import axios from 'axios'
import home from '../components/home.jfif';
import HACLogo from '../components/HACLogo.png';
import { homeButton } from './home.js';
import JSON5 from 'json5';
function HACDirect() {
    window.location.href = 'https://hac.csisd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fhomeaccess%2f'
}
var data = [];

export default function Login() {
    function APIGetRequest(event){
        event.preventDefault();
        let rankPromise = new Promise(function APIGetRequest(resolve, reject) {
            const config = {
                headers: {
                    user: document.getElementById("userin").value,
                    pass: document.getElementById("passin").value
                }
            };
            const url = "https://backend.consolapp.tech/api/rank";
            axios.get(url, config)
                .then(function(response){data = response.data;
                if(data.success === true){resolve(JSON5.stringify(data.rank))}},
                function(error){if(data.success == false){ reject(data.message) }})
                .catch(err => console.log(err))
        });

        rankPromise.then(
            function(value){ localStorage.setItem("rankData", value);},
            function(error){document.getElementById('loginErr').style.display = "inline";}
        )
        let classPromise = new Promise(function APIGetRequest(resolve, reject) {
            const config = {
                headers: {
                    user: document.getElementById("userin").value,
                    pass: document.getElementById("passin").value
                }
            };
            const url = "https://backend.consolapp.tech/api/assignments";
            axios.get(url, config)
                .then(function(response){data = response.data;
                if(response.status){resolve(JSON5.stringify(data))}},
                function(error){if(error.response.status !== 200){ reject("error") }})
                .catch(err => console.log(err))
        });

        classPromise.then(
            function(value){ localStorage.setItem("classData", value);
            window.location.href = "./HAC"; },
            function(error){document.getElementById('loginErr').style.display = "inline";}
        )
    }
    return (
        <div id="LoginPage">
            <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
            <h5><button id="HACLogo" onClick={HACDirect}><img id="HACLogo" alt="hacDirect" src={HACLogo} /></button>Login</h5>
            <form id="HACLogin" onSubmit={APIGetRequest}>
                <label id="userField">
                    Username
                    <input type="text" id="userin" defaultValue="" />
                </label>
                <label id="passField">
                    Password
                    <input type="password" id="passin" defaultValue="" />
                </label>
                <div id="loginErr">
                    <p>Incorrect Username or Password</p>
                </div>
                <button type="submit" className="submitLogin" id="submitlogin">Login</button>
            </form>
        </div>
    )
}
