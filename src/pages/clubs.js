import React from 'react';

export class ClubListing extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <p id="clist">
                <h6>{this.props.ctitle}</h6>
                <p id="cdesc">{this.props.descript}</p>
                <img id="cimg" src={this.props.clogo} />
            </p>
        );
    }
}


export default function ClubsPage(){
    return(
        <div id="ClubsPage">
            <h4>Clubs</h4>
            <ClubListing ctitle="Newspaper Club" descript="The Roar is the school newspaper of Consol, run by an elite team of 
   journalists lead by Mr. Williams to produce and report the most interesting 
   news that our school has to offer." clogo="./TigerLogo.png"/>
        </div>
    )
}