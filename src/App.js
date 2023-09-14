function LightModeSwitch(){
    
    function switchClick(){
      if(document.getElementById("lightmode").checked){
        document.getElementById("main").style.background = "linear-gradient(to right,  #ffffff 0%, #ffffff 65%, #601c2e 99%,#601c2e 100%)";
        document.querySelector(".pageButton").style.color = "#000000";
        document.querySelector("h1").style.color = "#000000";
        document.querySelector("h2").style.color = "#000000";
      }
      else{
        document.getElementById("main").style.background = "linear-gradient(to right,  #601c2e 0%,#601c2e 5%,#520000 45%,#520000 65%,#2e0010 95%,#2e0010 100%)";
        document.querySelector(".pageButton").style.color = "#ffffff";
        document.querySelector("h1").style.color = "#ffffff";
        document.querySelector("h2").style.color = "#ffffff";
      }
    }
    return(
      <input type="checkbox" id="lightmode" className="switch" onClick={switchClick}></input>
    )
  }
  function Logo(){
    function logoClick(){
      window.location.href = "https://amchs.csisd.org";
    }
    return(
      <button className="consoLogo" onClick={logoClick}><img src ="TigerLogo.png" id="logo"></img></button>
    );
  }
  function ClubsButton() {
    function ClubDirectory(){
      window.location.href = "./Clubs.html";
    }

    return(
      <button className="pageButton" onClick={ClubDirectory}>Clubs</button>
    );
  }
  let App = function MyApp() {
    return (
      <div>
        <LightModeSwitch />
        <ClubsButton />
        <Logo />
      </div>
    );
  }

export default App;
