import React from 'react';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { homeButton } from './home.js';
import home from '../components/home.png';

var light = localStorage.getItem("lightMode");
var eventsByDay = {}
export default function Calendar(){
    const [dayEventList, setDayEventList] = useState([""]);
    const [dayDate, setDayDate] = useState("");
    
    var Events = {"Test Day":{"start":{"day":"20th","month":"November","year":"2023"}}, "Finally A Break":{"start":{"day":"20th","month":"November","year":"2023"},"end":{"day":"24th","month":"November","year":"2023"}},"FREEDOM":{"start":{"day":"15th","month":"December","year":"2023"}, "end":{"day":"15th","month":"December","year":"2023"}},"Made Up Holiday":{"start":{"day":"18th","month":"December","year":"2023"},"end":{"day":"1st","month":"January","year":"2024"}}};
    function APIGetRequest(){
        const url = "https://backend.consolapp.tech/api/calendar";
        axios.get(url)
            .then(function(response){
                Events = response.data;
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        APIGetRequest()
    },[]);
    const eventList = Object.keys(Events);
    function EventsDisplay() {
        // State variable to hold the string
        
        const [eventsArray, setEventsArray] = useState([""]);
    
        // Function to update the string
        const updateUpcomingEvents = () => {
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
            buttonRef.current.addEventListener('click', updateUpcomingEvents);
            buttonRef.current.click();
        }, []);
        
        return (
        <div>
            {/* Display the string */}
            <div>{eventsArray}</div>
    
            {/* Button to update the string */}
            <button ref={buttonRef} id="classUpdate" onClick={updateUpcomingEvents}>Update String</button>
        </div>
        );
    }

    const updateEventList = (dayKey, monthKey, yearKey) => {
        var dateDisplay = `${monthKey}/${dayKey}/${yearKey}`
        setDayDate(dateDisplay)

        var dateKey = `${yearKey}/${monthKey}/${dayKey}`
        var daysEvents = eventsByDay[dateKey] && eventsByDay[dateKey].events;
        if(!daysEvents || Object.keys(daysEvents).length === 0){
            setDayEventList(["No Events on this Day"]);
        }
        else{
            setDayEventList(daysEvents.map(event => <React.Fragment key={event}>{event}<br /></React.Fragment>));  
        }     
    };
    useEffect(() => {
        // Call the updateArray function when the component mounts
        updateEventList(`${date.getDate()}`, `${month + 1}`, `${year}`);
    }, []);

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
            if(month === 0){
                var tempyear = year - 1;
                var tempmonth = 12;
            }
            else{
                var tempyear= year;
                var tempmonth = month;
            }
            lit += `<li class="inactive" data-month="${tempmonth}" data-day="${monthlastdate - i + 1}" data-year="${tempyear}">${monthlastdate - i + 1}</li>`;
            var yearMonthDay = `${tempyear}/${tempmonth}/${monthlastdate - i + 1}`;
            eventsByDay[yearMonthDay] = {};
        }
    
        // Loop to add the dates of the current month
        for (let i = 1; i <= lastdate; i++) {
    
            // Check if the current date is today
            let isToday = i === date.getDate()
                && month === new Date().getMonth()
                && year === new Date().getFullYear()
                ? "active"
                : "inMonth";
            lit += `<li class="${isToday}" data-month="${month + 1}" data-day="${i}" data-year="${year}">${i}</li>`;
            var yearMonthDay = `${year}/${month + 1}/${i}`;
            eventsByDay[yearMonthDay] = {};
        }
    
        // Loop to add the first dates of the next month
        for (let i = dayend; i < 6; i++) {
            if(month + 2 === 13){
                var tempyear = year + 1;
                var tempmonth = 1;
            }
            else{
                var tempyear= year;
                var tempmonth = month + 2;
            }
            
            lit += `<li class="inactive" data-month="${tempmonth}" data-day="${i - dayend + 1}" data-year="${tempyear}">${i - dayend + 1}</li>`
            var yearMonthDay = `${tempyear}/${tempmonth}/${i - dayend + 1}`;
            eventsByDay[yearMonthDay] = {};
        }
    
        // Update the text of the current date element 
        // with the formatted current month and year
        currdate.innerHTML = `${months[month]} ${year}`;
    
        // update the HTML of the dates element 
        // with the generated calendar
        day.innerHTML = lit;

        const elementsWithDataEvent = document.querySelectorAll('[data-day]');
        elementsWithDataEvent.forEach(element => {
            const dayValue = element.getAttribute('data-day');
            const monthValue = element.getAttribute('data-month');
            const yearValue = element.getAttribute('data-year');
            element.addEventListener('click', () => updateEventList(dayValue, monthValue, yearValue));
        });
        
        const dayList = Object.keys(eventsByDay);
        dayList.forEach(splitEvents);

        function splitEvents(key){
            eventsByDay[key].events = [];
            var dateArray = key.split('/').map(function(num) {
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
                                eventsByDay[key].events = [eventsByDay[key].events, item];;
                            }
                            if(numStartMonth !== numEndMonth){
                                if(splitDay >= numStartDay && splitMonth === numStartMonth){
                                    eventsByDay[key].events = [eventsByDay[key].events, item];;
                                }
                                if(splitDay <= numEndDay && (splitMonth === numEndMonth || splitMonth + 12 === numEndMonth)){
                                    eventsByDay[key].events = [eventsByDay[key].events, item];;
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
        console.log(eventsByDay);

        var calDates = document.querySelector(".calendar-dates");
        var days = calDates.getElementsByTagName("li");
        dayList.forEach((key, index) => {
            var dayEvents = eventsByDay[key].events;
            if(dayEvents.length > 0){
                days[index].innerHTML += `<div class="dot" />`
            }
        });
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

    function DayDisplay() {
        return (
          <div>
            {/* Display the string */}
            <div id="currDayInfo"><header id="dayInfoHeader">{dayDate} Events</header><br/>{dayEventList}</div>
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
                <DayDisplay />
            </div>
            <button ref={buttonRef} id="styleUpdate" onClick={updateStyle}>Update Style</button>
        </div>
    );
}