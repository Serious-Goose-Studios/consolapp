import React  from 'react';
import TigerLogo from '../components/TigerLogo.png';
import element1 from '../components/element1.png'
import element2 from '../components/element2.png'
import element3 from '../components/element3.png'
import settingsicon from '../components/images.jfif';
import './home.css';

var isLogged = localStorage.getItem("loggedIn");
export function homeButton(){
  window.location.href = './home';
}
function LightModeSwitch(){
  function switchClick(){
    if(document.getElementById("lightmode").checked){
      document.getElementById("main").style.background = "linear-gradient(to right,  #ffffff 0%, #ffffff 65%, #601c2e 99%,#601c2e 100%)";
      document.getElementById("HAC").style.color = "#000000";
      document.getElementById("Clubs").style.color = "#000000";
      document.querySelector("h1").style.color = "#000000";
      document.querySelector("h2").style.color = "#000000";
      document.querySelector("h1").style.textShadow = "none";
      document.querySelector("h2").style.textShadow = "none";
    }
    else{
      document.getElementById("main").style.background = "linear-gradient(to right,  #601c2e 0%,#601c2e 5%,#520000 45%,#520000 65%,#2e0010 95%,#2e0010 100%)";
      document.querySelector("#HAC").style.color = "#ffffff";
      document.querySelector("#Clubs").style.color = "#ffffff";
      document.querySelector("h1").style.color = "#ffffff";
      document.querySelector("h2").style.color = "#ffffff";
      document.querySelector("h1").style.textShadow = "4px 0 #000, -4px 0 #000, 0 4px #000, 0 -4px #000,2px 2px #000, -2px -2px #000, 2px -2px #000, -2px 2px #000";
      document.querySelector("h2").style.textShadow = "4px 0 #000, -4px 0 #000, 0 4px #000, 0 -4px #000,2px 2px #000, -2px -2px #000, 2px -2px #000, -2px 2px #000";
    }
  }
  return(
    <input type="checkbox" id="lightmode" className="switch" onClick={switchClick}></input>
  )
}
function logoClick(){
  window.location.href = "https://amchs.csisd.org";
}
function ClubsButton() {
  function ClubDirectory(){
    window.location.href = "./clubs";
  }

  return(
    <button id="Clubs" className="pageButton" onClick={ClubDirectory}>Clubs</button>
  );
}
function HACButton() {
  function LoginPage(){
      isLogged ? window.location.href = "./hac" : window.location.href = "./login";
  }
  return(
    <button id="HACButton" className="pageButton" onClick={LoginPage}>HAC</button>
  );
}

function LoginButton() {
  function LoginPage(){
    window.location.href = "./login";
  }
    return(
      <button id="loginButton" className="pageButton" onClick={LoginPage}>Login</button>
    );
}

function AccountButton() {
  function SettingsPage(){
    document.getElementById('settings').style.display = "inline";
    console.log("clicked")
  }

  return(
    <button className="cornerButton" id="account" onClick={SettingsPage}><img id="cornerImg" alt="cornerSettings" src={settingsicon}/></button>
  );
}
function CloseSettingsButton() {
  function SettingsPage(){
    document.getElementById('settings').style.display = "none";
    console.log("clicked")
  }

  return(
    <button className="cornerButton" onClick={SettingsPage}>X</button>
  );
}
function Settings(){
  function logOut(){
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("classData");
    localStorage.removeItem("rankData");
    window.location.reload();
  }
    return(
        <div id="settings">
            <CloseSettingsButton /> 
            <h6>Settings</h6>
            <p id="lightmodelabel">Light Mode<LightModeSwitch /></p>
            <button id="LogOut" onClick={logOut}>Log Out</button>
        </div>
    )
};

export default function Home(){
  return (
    <div>
      <h1>Consol</h1>
      <h2>App</h2>
      <img id="el1" alt="" src={element1}/>
      <img id="el2" alt="" src={element2}/>
      <img id="el3" alt="" src={element3}/>
      <Settings />
      <ClubsButton />
      <HACButton />
      {isLogged ? <AccountButton /> : <LoginButton />}
      <button className="consoLogo"><img src ={TigerLogo} alt="Consol Tiger" id="logo" onClick={logoClick}></img></button>
    </div>
      
  );
}