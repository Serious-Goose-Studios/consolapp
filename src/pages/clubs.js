import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import TigerLogo from '../components/TigerLogo.png';
import home from '../components/home.png';
import { homeButton } from './home.js';

var light = localStorage.getItem("lightMode");

function addClub(){
    console.log("added club");
}

export default function ClubsPage(){
    const[isLoading, setIsLoading] = useState(false);
    var ClubsList = {"Art Club":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"}, "Business Professionals of America":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"},"Environmental Club":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"},"Gay Straight Alliance":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"},"Floral Club":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"},"Robotics Club":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"},"SkillsUSA":{"descript":"The Roar is our schools newspaper that shines light on student researched and written topics.", "sponsor":"Mr. Williams", "nextmeet":"Tommorrow", "roomnum":"2303"}}

    function APIGetRequest(){
        setIsLoading(true);
        const url = "https://backend.consolapp.tech/api/clubs";
        axios.get(url)
            .then(function(response){
                ClubsList = response.data;
                setIsLoading(false);})
            .catch(err => console.log(err), setIsLoading(false))
    }
    useEffect(() => {
        APIGetRequest()
    },[]);
    
    const ClubNames  = Object.keys(ClubsList)
    ClubNames.sort();
    function ClubListing(){
        const [clubArray, setClubArray] = useState([""]);
        
            // Function to update the string
            const updateArray = () => {
                const updatedArray = ClubNames.map((clubName, index) => {
                    const clubInfo = ClubsList[clubName];
                    const hostTeacher = clubInfo.sponsor;
                    const basicInfo = clubInfo.descript;
                    const meeting = clubInfo.nextmeet;
                    const hostRoom = clubInfo.roomnum;
                    return (
                        <div id="clist" key={index}>
                            <p id="cname">{clubName}</p>
                            <p id="chost">Club Sponsor(s): {hostTeacher}</p>
                            <p id="cdesc">{basicInfo}</p>
                            <img id="cimg" alt="" src={TigerLogo} />
                            <p id="cmeet">Next Meeting: {meeting}</p>
                            <p id="croom">Meeting in Room: {hostRoom}</p>
                            <br/>
                        </div>
                    );
                });
                setClubArray(updatedArray);
            };
            const buttonRef = useRef(null);
            useEffect(() => {
                buttonRef.current.addEventListener('click', updateArray);
                buttonRef.current.click();
            }, []);
            
            return (
            <div>
                {/* Display the string */}
                <div>{clubArray}</div>
        
                {/* Button to update the string */}
                <button ref={buttonRef} id="classUpdate" onClick={updateArray}>Update String</button>
            </div>
            );
    }

    function updateStyle(){
        if(light){
            document.querySelector("body").style.background = "linear-gradient(to right,  #ffffff 0%, #ffffff 65%, #601c2e 99%,#601c2e 100%)";
            document.getElementById("NavBar").style.background = "#520000"
            document.getElementById("NavBar").style.borderBottomColor = "#000"
        }
        else{
          document.getElementById("main").style.background = "linear-gradient(to right,  #601c2e 0%,#601c2e 5%,#520000 45%,#520000 65%,#2e0010 95%,#2e0010 100%)";
        }
      }
      const buttonRef = useRef(null);
      useEffect(() => {
          buttonRef.current.addEventListener('click', updateStyle);
          buttonRef.current.click();
      }, []);

    return(
        <div id="ClubsPage">
            <div id="NavBar">
                <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
                <p id="NavTitle">Clubs</p>
                <button className="navButton" id="ccreate" onClick={addClub}>Add Club</button>
            </div>
            {isLoading ? <div className="loading-spinner"/>: null}
            <ClubListing />
            <button ref={buttonRef} id="styleUpdate" onClick={updateStyle}>Update Style</button>
        </div>
    )
}
/*<form>
    <input type="text" id="userin" defaultValue="Title" />
    <input type="text" id="userin" defaultValue="Club Name" />
    <input type="text" id="userin" defaultValue="Club Sponsor" />
    <input type="text" id="userin" defaultValue="Short Club Description" />
    <input type="text" id="userin" defaultValue="Next Meeting Date" />
    <input type="text" id="userin" defaultValue="Meeting Room Number" />
</form>
*/