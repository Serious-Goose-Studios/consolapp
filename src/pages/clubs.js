import React from 'react';
import TigerLogo from './TigerLogo.png';

export class ClubListing extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <span id="clist">
                <p id="cname">{this.props.ctitle}</p>
                <p id="chost">Club Sponsor: {this.props.sponsor}</p>
                <p id="cdesc">{this.props.descript}</p>
                <img id="cimg" src={this.props.clogo} />
                <p id="cmeet">Next Meeting: {this.props.nextmeet}</p>
                <p id="croom">Meeting in Room: {this.props.roomnum}</p>
            </span>
        );
    }
}

function addClub(){
    
}


export default function ClubsPage(){
    return(
        <div id="ClubsPage">
            <h4>Clubs</h4>
            <button id="ccreate" onClick={addClub}>Add Club</button>
            <ClubListing ctitle="Newspaper Club" descript="The Roar is our schools newspaper that shines light on student researched and written topics." clogo={TigerLogo} sponsor="Mr. Williams" nextmeet="Tommorrow" roomnum="2303"/>
        </div>
    )
}