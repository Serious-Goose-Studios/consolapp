import React from 'react';
import TigerLogo from '../components/TigerLogo.png';
import Test from '../components/test.js';

function ClubListing({ ctitle, sponsor, descript, clogo, nextmeet, roomnum }){
    return (
        <span id="clist">
            <p id="cname">{ctitle}</p>
            <p id="chost">Club Sponsor(s): {sponsor}</p>
            <p id="cdesc">{descript}</p>
            <img id="cimg" src={clogo} />
            <p id="cmeet">Next Meeting: {nextmeet}</p>
            <p id="croom">Meeting in Room: {roomnum}</p>
        </span>
    );
}

const ClubsList = [["Newspaper Club", "The Roar is our schools newspaper that shines light on student researched and written topics.", "Mr. Williams", "IDK Lol", "2303"], ["Robotics Club", "Robotics is a club that builds robots to compete in First Tech Challenge.", "Mr. Deere", "Thursday", "2303"]]
function addClub(){
    
    console.log(ClubsList);
}


export default function ClubsPage(){
    return(
        <div id="ClubsPage">
            
            <h4>Clubs</h4>
            <button id="ccreate" onClick={Test}>Add Club</button>
            <ClubListing ctitle="Newspaper Club" descript="The Roar is our schools newspaper that shines light on student researched and written topics." clogo={TigerLogo} sponsor="Mr. Williams" nextmeet="Tommorrow" roomnum="2303"/>
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