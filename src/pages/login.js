import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import home from '../components/home.png';
import HACLogo from '../components/HACLogo.png';
import { homeButton } from './home.js';
function HACDirect() {
    window.location.href = 'https://hac.csisd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fhomeaccess%2f'
}
var data = [];

export default function Login() {
    const[isLoading, setIsLoading] = useState(false);
    function APIGetRequest(event){
        setIsLoading(true);
        event.preventDefault();
        let rankPromise = new Promise(function APIGetRequest(resolve) {
            const config = {
                headers: {
                    user: document.getElementById("userin").value,
                    pass: document.getElementById("passin").value
                }
            };
            const url = "https://backend.consolapp.tech/api/rank";
            axios.get(url, config)
                .then(function(response){
                    data = response.data;
                    resolve(JSON.stringify(data.rank))})
                .catch(err => console.log(err))
        });
        rankPromise.then(
            function(value){localStorage.setItem("rankData", value);}
        )
        let classPromise = new Promise(function APIGetRequest(resolve) {
            const config = {
                headers: {
                    user: document.getElementById("userin").value,
                    pass: document.getElementById("passin").value
                }
            };
            const url = "https://backend.consolapp.tech/api/assignments";
            axios.get(url, config)
                .then(function(response){
                    data = response.data;
                    resolve(JSON.stringify(data));
                    setIsLoading(false);
                })
                .catch(err => console.log(err),
                setIsLoading(false))
        });

        classPromise.then(
            function(value){ 
                localStorage.setItem("classData", value);
                if(data.success === true){
                    var from = localStorage.getItem("returnTo");
                    localStorage.setItem("loggedIn", true);
                    if(from === "hac")
                        window.location.href = "./HAC";
                        
                    else{
                        window.location.href = "./home";
                    }
                }
                else if(data.success === false){
                    document.getElementById('errTxt').innerHTML = data.message;
                    document.getElementById('loginErr').style.display = "inline";
                    setIsLoading(false)
                }
            }
        )
    }
    return (
        <span id="LoginPage">
            <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
            <p id="loginHeader">Login</p>
            {isLoading ? <div className="loading-spinner"/>: <button id="HACLogo" onClick={HACDirect}><img id="HACLogo" alt="hacDirect" src={HACLogo} /></button>}
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
                    <p id="errTxt">Incorrect Username or Password</p>
                </div>
                <button type="submit" className="submitLogin" id="submitlogin">Login</button>
            </form>
        </span>
    )
}
