import React  from 'react';
import TigerLogo from '../components/TigerLogo.png';
import element1 from '../components/element1.png'
import element2 from '../components/element2.png'
import element3 from '../components/element3.png'
import settingsicon from '../components/settings.png';
import accounticon from '../components/account.png'
import './home.css';

localStorage.setItem("lightMode", false);
var light = localStorage.getItem("lightMode");
var isLogged = localStorage.getItem("loggedIn");
export function homeButton(){
  window.location.href = './home';
}
function LightModeSwitch(){
  function switchClick(){
    if(document.getElementById("lightmode").checked){
      localStorage.setItem("lightMode", true);
    }
    else{
      localStorage.setItem("lightMode", false);
    }
    window.location.reload();
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
      localStorage.setItem("returnTo", "hac")
      isLogged ? window.location.href = "./hac" : window.location.href = "./login";
  }
  return(
    <button id="HACButton" className="pageButton" onClick={LoginPage}>HAC</button>
  );
}

function LoginButton() {
  function LoginPage(){
    localStorage.setItem("returnTo", "home")
    window.location.href = "./login";
  }
    return(
      <button id="loginButton" className="pageButton" onClick={LoginPage}>Login</button>
    );
}

function SettingsButton() {
  function SettingsPage(){
    document.getElementById('settings').style.display = "inline";
  }

  return(
    <button className="cornerButton" id="settings" onClick={SettingsPage}><img id="settingsImg" alt="cornerSettings" src={settingsicon}/></button>
  );
}
function CloseSettingsButton() {
  function SettingsPage(){
    document.getElementById('settings').style.display = "none";
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
        <div className="DropDown" id="settings">
            <CloseSettingsButton /> 
            <h6>Settings</h6>
            <p id="lightmodelabel">Light Mode<LightModeSwitch /></p>
            <button id="LogOut" onClick={logOut}>Log Out</button>
        </div>
    )
};

function AccountButton() {
  function AccountPage(){
    document.getElementById('account').style.display = "inline";
  }

  return(
    <button className="cornerButton" id="profile" onClick={AccountPage}><img id="profileImg" alt="cornerSettings" src={accounticon}/></button>
  );
}

function CloseAccountButton() {
  function AccountPage(){
    document.getElementById('account').style.display = "none";
  }

  return(
    <button className="cornerButton" onClick={AccountPage}>X</button>
  );
}

function Account(){
    return(
        <div className="DropDown" id="account">
            <CloseAccountButton /> 
            <h6>Account</h6>
            <button>Calender</button>
        </div>
    )
};

if(light){
    document.getElementById("main").style.background = "linear-gradient(to right,  #ffffff 0%, #ffffff 65%, #601c2e 99%,#601c2e 100%)";
    
}
export default function Home(){
  return (
    <div>
      <h1>Consol</h1>
      <h2>App</h2>
      { light ? <><img id="el1" alt="" src={element1}/><img id="el2" alt="" src={element2}/><img id="el3" alt="" src={element3}/></> : <><img id="el1" alt="" src={element4}/><img id="el2" alt="" src={element5}/><img id="el3" alt="" src={element6}/></>}
      <Settings />
      <Account />
      <ClubsButton />
      <HACButton />
      {isLogged ? <><AccountButton /><SettingsButton /></> : <LoginButton />}
      <button className="consoLogo"><img src ={TigerLogo} alt="Consol Tiger" id="logo" onClick={logoClick}></img></button>
    </div>
      
  );
}