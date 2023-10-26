import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { homeButton } from './home.js';
import home from '../components/home.png';


export default function HAC(){
    var isLogged = localStorage.getItem("loggedIn");
    if(!isLogged){
        return(
            <p>Login to view this page</p>
        );
    }

    var rank = localStorage.getItem("rankData");
    rank = JSON.parse(rank)
    var classes = localStorage.getItem("classData");
    classes = JSON.parse(classes)

    const classList = Object.keys(classes);
    classList.pop();

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
            <p id="rankDisplay">Rank: {rankString}</p>
      
            {/* Button to update the string */}
            <button ref={buttonRef} id="rankUpdate" onClick={updateString}>Update String</button>
          </div>
        );
    }
    function GPADisplay(){
        // State variable to hold the string
        const [gpaString, setGPAString] = useState("Login to see GPA");
      
        // Function to update the string
        const updateString = () => {
            setGPAString(rank.gpa);
        };
        const buttonRef = useRef(null);
        useEffect(() => {
            buttonRef.current.addEventListener('click', updateString);
            buttonRef.current.click();
        }, []);
        
        return (
          <div>
            {/* Display the string */}
            <p id="gpaDisplay">GPA: {gpaString}</p>
      
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
            const updatedArray = classList.map((className, index) => {
                const classInfo = classes[className];
                var classString = `${className}: ${classInfo.average}`;
                const assignmentList = Object.keys(classInfo.assignments)
                assignmentList.shift();
                const classAssignments = assignmentList.map((assignment, assignmentNum) => {
                    var assignmentInfo = classInfo.assignments[assignment];
                    var assignmentString = `${assignmentInfo[2]}: ${assignmentInfo[4]}`
                    return(
                        <p key={assignmentNum}>
                            {assignmentString}
                        </p>
                    );
                });
                return (
                    <div id="classAverage" key={index}>
                        {classString}
                        {classAssignments}
                        <br />
                    </div>
                );
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
            <div>{classArray}</div>
      
            {/* Button to update the string */}
            <button ref={buttonRef} id="classUpdate" onClick={updateArray}>Update String</button>
          </div>
        );
    }
    return(
        <div id="HACPage">
            <div id="NavBar">
                <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
                <p id="NavTitle">HAC</p>
                <RankDisplay />
                <GPADisplay />
            </div>
            <ClassesDisplay />
        </div>
    );
}