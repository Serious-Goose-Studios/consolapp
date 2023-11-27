import React from 'react';
import { useState, useRef, useEffect } from 'react';
import secureLocalStorage from 'react-secure-storage';
import axios from 'axios';
import { homeButton } from './home.js';
import home from '../components/home.png';

var data = [];
var light = localStorage.getItem("lightMode");
export default function HAC(){
    function APIGetRequest(){
        let rankPromise = new Promise(function APIGetRequest(resolve) {
            const config = {
                headers: {
                    user: secureLocalStorage.getItem("user"),
                    pass: secureLocalStorage.getItem("pass")
                }
            };
            const url = "https://backend.consolapp.tech/api/rank";
            axios.get(url, config)
                .then(function(response){
                    data = response.data;
                    resolve(JSON.stringify(data.rank))})
                .catch(err => console.log(err))
        });
        rankPromise.then(
            function(value){secureLocalStorage.setItem("rankData", value);}
        )
        let classPromise = new Promise(function APIGetRequest(resolve) {
            const config = {
                headers: {
                    user: secureLocalStorage.getItem("user"),
                    pass: secureLocalStorage.getItem("pass")
                }
            };
            const url = "https://backend.consolapp.tech/api/assignments";
            axios.get(url, config)
                .then(function(response){
                    data = response.data;
                    resolve(JSON.stringify(data));
                })
                .catch(err => console.log(err))
        });

        classPromise.then(
            function(value){ 
                secureLocalStorage.setItem("classData", value);
                if(data.success === false){
                    document.getElementById('errTxt').innerHTML = data.message;
                    document.getElementById('loginErr').style.display = "inline";
                }
            }
        )
    }

    useEffect(() => {
        APIGetRequest()
    }, [])

    var isLogged = localStorage.getItem("loggedIn");
    if(!isLogged){
        return(
            <p>Login to view this page</p>
        );
    }

    var rank = secureLocalStorage.getItem("rankData");
    rank = JSON.parse(rank)
    console.log(rank)
    var classes = secureLocalStorage.getItem("classData");
    classes = JSON.parse(classes)
    console.log(classes)

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
        <div id="HACPage">
            <div id="NavBar">
                <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
                <p id="NavTitle">HAC</p>
                <RankDisplay />
                <GPADisplay />
            </div>
            <ClassesDisplay />
            <button ref={buttonRef} id="styleUpdate" onClick={updateStyle}>Update Style</button>
        </div>
    );
}