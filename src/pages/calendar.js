import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { homeButton } from './home.js';
import home from '../components/home.png';

const Events = {"Finally A Break":{"start":{"day":"20th","month":"November","year":"2023"},"end":{"day":"24th","month":"November","year":"2023"}},"FREEDOM":{"start":{"day":"15th","month":"December","year":"2023"}},"Made Up Holiday":{"start":{"day":"18th","month":"December","year":"2023"},"end":{"day":"1st","month":"January","year":"2024"}}};
const eventList = Object.keys(Events);
function EventsDisplay() {
    // State variable to hold the string
    const [eventsArray, setEventsArray] = useState([""]);
  
    // Function to update the string
    const updateArray = () => {
        const updatedArray = eventList.map((eventName, index) => {
            const eventInfo = Events[eventName];
            if('end' in eventInfo){
                var eventString = `${eventInfo.start.month} ${eventInfo.start.day} - ${eventInfo.end.month} ${eventInfo.end.day}: ${eventName}`;
            }
            else{
                var eventString = `${eventInfo.start.month} ${eventInfo.start.day}: ${eventName}`;
            }
            return (
                <div id="dayEvents" key={index}>
                    {eventString}
                </div>
            );
        });
        setEventsArray(updatedArray);
    };
    const buttonRef = useRef(null);
    useEffect(() => {
        buttonRef.current.addEventListener('click', updateArray);
        buttonRef.current.click();
    }, []);
    
    return (
      <div>
        {/* Display the string */}
        <div>{eventsArray}</div>
  
        {/* Button to update the string */}
        <button ref={buttonRef} id="classUpdate" onClick={updateArray}>Update String</button>
      </div>
    );
}

function DayDisplay() {
    // State variable to hold the string
    const [DayArray, setDayArray] = useState([""]);
  
    // Function to update the string
    const updateArray = () => {
        const updatedArray = eventList.map((eventName, index) => {
            const eventInfo = Events[eventName];
            if('end' in eventInfo){
                var eventString = `${eventInfo.start.month} ${eventInfo.start.day} - ${eventInfo.end.month} ${eventInfo.end.day}: ${eventName}`;
            }
            else{
                var eventString = `${eventInfo.start.month} ${eventInfo.start.day}: ${eventName}`;
            }
            return (
                <div id="dayEvents" key={index}>
                    {eventString}
                </div>
            );
        });
        setEventsArray(updatedArray);
    };
    const buttonRef = useRef(null);
    useEffect(() => {
        buttonRef.current.addEventListener('click', updateArray);
        buttonRef.current.click();
    }, []);
    
    return (
      <div>
        {/* Display the string */}
        <div>{eventsArray}</div>
  
        {/* Button to update the string */}
        <button ref={buttonRef} id="classUpdate" onClick={updateArray}>Update String</button>
      </div>
    );
}

var eventsByDay = {}
export default function Calendar(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();

    // Array of month names
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    
    const manipulate = () => {
        const day = document.querySelector(".calendar-dates");
        const currdate = document.querySelector(".calendar-current-date");
        

        // Get the first day of the month
        let dayone = new Date(year, month, 1).getDay();
    
        // Get the last date of the month
        let lastdate = new Date(year, month + 1, 0).getDate();
    
        // Get the day of the last date of the month
        let dayend = new Date(year, month, lastdate).getDay();
    
        // Get the last date of the previous month
        let monthlastdate = new Date(year, month, 0).getDate();
    
        // Variable to store the generated calendar HTML
        let lit = "";
    
        // Loop to add the last dates of the previous month
        for (let i = dayone; i > 0; i--) {
            lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
            if(month === 0){
                var tempyear = year - 1;
                var tempmonth = 12;
            }
            else{
                var tempyear= year;
                var tempmonth = month;
            }
            var monthDay = `${tempyear}:${tempmonth}:${monthlastdate - i + 1}`;
            eventsByDay[monthDay] = {};
        }
    
        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
    
            // Check if the current date is today
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "active"
                : "";
            lit += `<li class="${isToday}">${i}</li>`;
            var monthDay = `${year}:${month + 1}:${i}`;
            eventsByDay[monthDay] = {};
        }
    
        // Loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            lit += `<li class="inactive">${i - dayend + 1}</li>`
            if(month + 2 === 13){
                var tempyear = year + 1;
                var tempmonth = 1;
            }
            else{
                var tempyear= year;
                var tempmonth = month + 2;
            }
            var yearMonthDay = `${tempyear}:${tempmonth}:${i - dayend + 1}`;
            eventsByDay[yearMonthDay] = {};
        }
    
        // Update the text of the current date element 
        // with the formatted current month and year
        currdate.innerHTML = `${months[month]} ${year}`;
    
        // update the HTML of the dates element 
        // with the generated calendar
        day.innerHTML = lit;

        
        const dayList = Object.keys(eventsByDay);
        dayList.forEach(splitEvents);

        function splitEvents(key){
            eventsByDay[key].events = {};
            var dateArray = key.split(':').map(function(num) {
                return parseInt(num, 10);
            });
            var splitYear = dateArray[0];
            var splitMonth = dateArray[1];
            var splitDay = dateArray[2];
            eventList.forEach(checkDates);

            function checkDates(item){
                var strStartDay = Events[item].start.day;
                var str2StartDay = strStartDay.substring(0, strStartDay.length - 2);
                var numStartDay = parseInt(str2StartDay, 10);

                var strStartMonth = Events[item].start.month;
                var numStartMonth = months.indexOf(strStartMonth) + 1;

                var strStartYear = Events[item].start.year;
                var numStartYear = parseInt(strStartYear, 10);
                if('end' in Events[item]){
                    var strEndDay = Events[item].end.day;
                    var str2EndDay = strEndDay.substring(0, strEndDay.length - 2);
                    var numEndDay = parseInt(str2EndDay, 10);

                    var strEndMonth = Events[item].end.month;
                    var numEndMonth = months.indexOf(strEndMonth) + 1;

                    var strEndYear = Events[item].end.year;
                    var numEndYear = parseInt(strEndYear, 10);
                    if(splitYear >= numStartYear && splitYear <= numEndYear){
                        if(numStartYear !== numEndYear){
                            numEndMonth += 12;
                        }
                        if(splitMonth >= numStartMonth && splitMonth <= numEndMonth){
                            if(splitDay >= numStartDay && splitDay <= numEndDay){
                                eventsByDay[key].events += item;
                            }
                            if(numStartMonth !== numEndMonth){
                                if(splitDay >= numStartDay && splitMonth === numStartMonth){
                                    eventsByDay[key].events += item;
                                }
                                if(splitDay <= numEndDay && (splitMonth === numEndMonth || splitMonth + 12 === numEndMonth)){
                                    eventsByDay[key].events += item;
                                }
                            }
                        }
                    }
                }
                else{
                    if(splitYear === numStartYear){
                        if(splitMonth === numStartMonth){
                            if(splitDay === numStartDay){
                                eventsByDay[key].events += item;
                            }
                        }
                    }
                }
            }
        }
    }
    useEffect(() => {
        manipulate();
    }, []);
    // Attach a click event listener to each icon
    const handleIconClick = (iconId) => {
            eventsByDay = {}
            // Check if the icon is "calendar-prev"
            // or "calendar-next"
            month = iconId === "calendar-prev" ? month - 1 : month + 1;
    
            // Check if the month is out of range
            if (month < 0 || month > 11) {
    
                // Set the date to the first day of the 
                // month with the new year
                date = new Date(year, month, new Date().getDate());
    
                // Set the year to the new year
                year = date.getFullYear();
    
                // Set the month to the new month
                month = date.getMonth();
            }
    
            else {
    
                // Set the date to the current date
                date = new Date();
            }
            manipulate();
    } 

    return(
        <div id="CalendarPage">
            <div id="NavBar">
                <button className="cornerButton" onClick={homeButton}><img id="cornerImg" alt="cornerHome" src={home} /></button>
                <p id="NavTitle">Calendar</p>
            </div>
            <div className="cal-page-top">
                <div className="calendar-container">
                    <header className="calendar-header">
                        <p className="calendar-current-date"></p>
                        <div className="calendar-navigation">
                            <span id="calendar-prev"
                                className="material-symbols-rounded"
                                onClick={() => handleIconClick("calendar-prev")}>
                                &lt;
                            </span>
                            <span id="calendar-next"
                                className="material-symbols-rounded"
                                onClick={() => handleIconClick("calendar-next")}>
                                &gt;
                            </span>
                        </div>
                    </header>
            
                    <div className="calendar-body">
                        <ul className="calendar-weekdays">
                            <li>Sun</li>
                            <li>Mon</li>
                            <li>Tue</li>
                            <li>Wed</li>
                            <li>Thu</li>
                            <li>Fri</li>
                            <li>Sat</li>
                        </ul>
                        <ul className="calendar-dates"></ul>
                    </div>
                </div>
                <div className="eventCol" id="upcomingEvents">
                    <header id="eventsHeader">Upcoming Events:</header>
                    <EventsDisplay/>
                </div>
            </div>
        </div>
    );
}