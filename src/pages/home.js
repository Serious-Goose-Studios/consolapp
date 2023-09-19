import React  from 'react';
import TigerLogo from './TigerLogo.png';
import './home.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Login from './login.js';
function LightModeSwitch(){
    
    function switchClick(){
      if(document.getElementById("lightmode").checked){
        document.getElementById("main").style.background = "linear-gradient(to right,  #ffffff 0%, #ffffff 65%, #601c2e 99%,#601c2e 100%)";
        document.querySelector("#HAC").style.color = "#000000";
        document.querySelector("#Clubs").style.color = "#000000";
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("h2").style.color = "#000000";
      }
      else{
        document.getElementById("main").style.background = "linear-gradient(to right,  #601c2e 0%,#601c2e 5%,#520000 45%,#520000 65%,#2e0010 95%,#2e0010 100%)";
        document.querySelector("#HAC").style.color = "#ffffff";
        document.querySelector("#Clubs").style.color = "#ffffff";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("h2").style.color = "#ffffff";
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
      window.location.href = "./login";
    }

    return(
      <button id="HAC" className="pageButton" onClick={LoginPage}>HAC</button>
    );
  }
  function Home(){
    return (
      <div>
        <h1>Consol</h1>
        <h2>App</h2>  
        <ClubsButton />
        <HACButton />
        <LightModeSwitch />
        <button className="consoLogo"><img src ={TigerLogo} alt="Consol Tiger" id="logo" onClick={logoClick}></img></button>
      </div>
        
    );
  }

export default Home;