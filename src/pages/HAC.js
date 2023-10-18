import React from 'react';
import { useState, useRef, useEffect } from 'react';

var rank = localStorage.getItem("rankData");
rank = JSON.parse(rank)
var classes = localStorage.getItem("classData");
classes = JSON.parse(classes)
console.log(classes)
const classList = Object.keys(classes);
classList.pop();

export default function HAC(){
    function RankDisplay(){
        // State variable to hold the string
        const [rankString, setRankString] = useState("Login to see rank");
      
        // Function to update the string
        const updateString = () => {
            setRankString(rank.rank);
        };
        const buttonRef = useRef(null);
        useEffect(() => {
            buttonRef.current.addEventListener('click', updateString);
            buttonRef.current.click();
        }, []);
        
        return (
          <div>
            {/* Display the string */}
            <p id="rankDisplay">Your Rank: {rankString}</p>
      
            {/* Button to update the string */}
            <button ref={buttonRef} id="rankUpdate" onClick={updateString}>Update String</button>
          </div>
        );
    }
    function ClassesDisplay() {
        // State variable to hold the string
        const [classArray, setClassArray] = useState(["Login to see class info"]);
      
        // Function to update the string
        const updateArray = () => {
            const updatedArray = classList.map(className => {
                const classInfo = classes[className];
                return `${className}: ${classInfo.categories[classInfo.categories.length - 1][5]}`;
            });
            setClassArray(updatedArray);
        };
        const buttonRef = useRef(null);
        useEffect(() => {
            buttonRef.current.addEventListener('click', updateArray);
            buttonRef.current.click();
        }, []);
        
        return (
          <div>
            {/* Display the string */}
            <p>{classArray}</p>
      
            {/* Button to update the string */}
            <button ref={buttonRef} id="classUpdate" onClick={updateArray}>Update String</button>
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