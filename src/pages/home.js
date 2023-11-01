import React  from 'react';
import { useRef, useEffect } from 'react';
import TigerLogo from '../components/TigerLogo.png';
import element1 from '../components/element1.png';
import element2 from '../components/element2.png';
import element2_1 from '../components/element2.5.png';
import element3 from '../components/element3.png';
import element3_1 from '../components/element3.5.png';
import element4 from '../components/element4.png';
import element5 from '../components/element5.png';
import element6 from '../components/element6.png';
import element6_1 from '../components/element6.5.png';
import settingsicon from '../components/settings.png';
import accounticon from '../components/account.png'
import './home.css';

var light = localStorage.getItem("lightMode");
var isLogged = localStorage.getItem("loggedIn");
export function homeButton(){
  window.location.href = './home';
}
function LightModeSwitch(){
  function switchClick(){
    if(light){
      localStorage.removeItem("lightMode");
    }
    else{
      localStorage.setItem("lightMode", true);
    }
    window.location.reload();
  }
  return(
    <button id="lightmode" className="switch" onClick={switchClick}>{light ? <p>on</p> : <p>off</p>}</button>
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
    function CalendarPage(){
      window.location.href = "./calendar";
    }
    return(
        <div className="DropDown" id="account">
            <CloseAccountButton /> 
            <h6>Account</h6>
            <button className="pageButton" id="CalendarButton" onClick={CalendarPage}>Calendar</button>
        </div>
    )
};

export default function Home(){
  function updateStyle(){
    if(light){
        document.getElementById("main").style.background = "linear-gradient(to right,  #ffffff 0%, #ffffff 65%, #601c2e 99%,#601c2e 100%)";
        document.getElementById("HACButton").style.color = "#000000";
        document.getElementById("Clubs").style.color = "#000000";
        document.getElementById("profile").style.background = "#601c2e";
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("h2").style.color = "#000000";
        document.querySelector("h1").style.textShadow = "none";
        document.querySelector("h2").style.textShadow = "none";
    }
    else{
      document.getElementById("main").style.background = "linear-gradient(to right,  #601c2e 0%,#601c2e 5%,#520000 45%,#520000 65%,#2e0010 95%,#2e0010 100%)";
      document.getElementById("HACButton").style.color = "#ffffff";
      document.getElementById("Clubs").style.color = "#ffffff";
      document.querySelector("h1").style.color = "#ffffff";
      document.querySelector("h2").style.color = "#ffffff";
      document.querySelector("h1").style.textShadow = "4px 0 #000, -4px 0 #000, 0 4px #000, 0 -4px #000,2px 2px #000, -2px -2px #000, 2px -2px #000, -2px 2px #000";
      document.querySelector("h2").style.textShadow = "4px 0 #000, -4px 0 #000, 0 4px #000, 0 -4px #000,2px 2px #000, -2px -2px #000, 2px -2px #000, -2px 2px #000";
    }
  }
  const buttonRef = useRef(null);
  useEffect(() => {
      buttonRef.current.addEventListener('click', updateStyle);
      buttonRef.current.click();
  }, []);
  return (
    <div>
      <h1>Consol</h1>
      <h2>App</h2>
      { light ? <><img id="el1" alt="" src={element4}/><img id="el5" alt="" src={element5}/><img id="el2_1" alt="" src={element2_1}/><img id="el6" alt="" src={element6}/><img id="el3_1" alt="" src={element6_1}/></> : <><img id="el1" alt="" src={element1}/><img id="el2" alt="" src={element2}/><img id="el2_1" alt="" src={element2_1}/><img id="el3" alt="" src={element3}/><img id="el3_1" alt="" src={element3_1}/></>}
      <Settings />
      <Account />
      <ClubsButton />
      <HACButton />
      {isLogged ? <><AccountButton /><SettingsButton /></> : <LoginButton />}
      <button className="consoLogo"><img src ={TigerLogo} alt="Consol Tiger" id="logo" onClick={logoClick}></img></button>
      <button ref={buttonRef} id="styleUpdate" onClick={updateStyle}>Update Style</button>
    </div>
      
  );
}