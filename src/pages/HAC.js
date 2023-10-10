import React from 'react';
import { useState } from 'react';

var data = localStorage.getItem("rankData");
export default function HAC(){
    function StringDisplay() {
        // State variable to hold the string
        const [myString, setMyString] = useState("Login to see rank");
      
        // Function to update the string
        const updateString = () => {
            setMyString(JSON.stringify(data));
        };

        return (
          <div>
            {/* Display the string */}
            <p>Your Rank: {myString}</p>
      
            {/* Button to update the string */}
            <button onClick={updateString}>Update String</button>
          </div>
        );
    }
    function LogData(){
        console.log(data);
    }
    return(
        <div id="HACPage">
            <p>WIP</p>
            <StringDisplay />
            <button id="LogData" onClick={LogData}>Log Data</button>
        </div>
    );
}