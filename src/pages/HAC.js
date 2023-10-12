import React from 'react';
import { useState, useRef, useEffect } from 'react';

const rank = localStorage.getItem("rankData");
const classes = localStorage.getItem("classData");
export default function HAC(){
    function RankDisplay(){
        // State variable to hold the string
        const [rankString, setRankString] = useState("Login to see rank");
      
        // Function to update the string
        const updateString = () => {
            setRankString(rank);
        };
        const buttonRef = useRef(null);
        useEffect(() => {
            buttonRef.current.addEventListener('click', updateString);
            buttonRef.current.click();
        }, []);
        
        return (
          <div>
            {/* Display the string */}
            <p>Your Rank: {rankString}</p>
      
            {/* Button to update the string */}
            <button ref={buttonRef} id="rankUpdate" onClick={updateString}>Update String</button>
          </div>
        );
    }
    function ClassesDisplay() {
        // State variable to hold the string
        const [classString, setClassString] = useState("Login to see class info");
      
        // Function to update the string
        const updateString = () => {
            setClassString(classes);
        };
        const buttonRef = useRef(null);
        useEffect(() => {
            buttonRef.current.addEventListener('click', updateString);
            buttonRef.current.click();
        }, []);
        
        return (
          <div>
            {/* Display the string */}
            <p>Classes: {classString}</p>
      
            {/* Button to update the string */}
            <button ref={buttonRef} id="classUpdate" onClick={updateString}>Update String</button>
          </div>
        );
    }
    return(
        <div id="HACPage">
            <p>WIP</p>
            <RankDisplay />
            <ClassesDisplay />
        </div>
    );
}