import React from 'react';
import TigerLogo from '../components/TigerLogo.png';
import home from '../components/home.jfif';
import { homeButton } from './home.js';

function ClubListing({ ctitle, sponsor, descript, clogo, nextmeet, roomnum }){
    return (
        <span id="clist">
            <p id="cname">{ctitle}</p>
            <p id="chost">Club Sponsor(s): {sponsor}</p>
            <p id="cdesc">{descript}</p>
            <img id="cimg" alt="" src={clogo} />
            <p id="cmeet">Next Meeting: {nextmeet}</p>
            <p id="croom">Meeting in Room: {roomnum}</p>
        </span>
    );
}

function addClub(){
    console.log("added club");
}


export default function ClubsPage(){
    return(
        <div id="ClubsPage">
            <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
            <h4>Clubs</h4>
            <button id="ccreate" onClick={addClub}>Add Club</button>
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