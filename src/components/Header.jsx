import React, { useRef } from 'react';
import './Header.css';

function Header() {
    const felix = useRef();
    const responseFrame = useRef();
    const responseMessage = useRef();
    // Constants
const ACTIVE_TIME_MS = 5000;
const DEACTIVATION_TIME_MS = 750;

// Variables
var userMadeDecision = false;
var jokes = [
	'I ate a clock yesterday, it was very time-consuming.',
	'A perfectionist walked into a bar…apparently, the bar wasn’t set high enough.',
	'Employee of the month is a good example of how somebody can be both a winner and a loser at the same time.',
	'I don’t have a girlfriend, but I know a girl that would get really mad if she heard me say that.',
	'Relationships are great, but have you ever had stuffed crust pizza?',
	'The worst time to have a heart attack is during a game of charades.',
	'My therapist says I have a preoccupation with vengeance. We’ll see about that.',
	'I have a friend. He keeps trying to convince me he’s a compulsive liar, but I don’t believe him.'
];

// Activate felix and set timeout for awaiting a command.
function activateFelix() {
	userMadeDecision = false;
	felix.classNameList.remove("inactive");
	felix.classNameList.add("active");
	setTimeout(function() {
		if (!userMadeDecision) {
			felix.classNameList.remove("active");
			felix.classNameList.add("inactive");
			setTimeout(function() {
				felix.classNameList.remove("inactive");
			}, 750);
		}
	}, 5000);
}
function deactivateFelix() {
	userMadeDecision = true;
	felix.classNameList.remove("active");
	felix.classNameList.add("inactive");
	setTimeout(function() {
		felix.classNameList.remove("inactive");
	}, 750);
}
function getWeather() {
	responseMessage.innerText = "The weather really just kind of sucks here, and I know you wanted the weather at your location, but that's life for you.";
	showResponse();
}
function getTime() {
	var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes();
	responseMessage.innerText = "Perhaps it's time for you to get a watch? I'm just kidding... No. Really... It's " + time + ".";
	showResponse();
}
function getDate() {
	var today = new Date();
	var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
	responseMessage.innerText = "A calendar is a great investment you know; I mean, your computer even has one! Since you asked, today is " + date + ".";
	showResponse();
}
function tellJoke() {
	var index = Math.floor((Math.random() * jokes.length) - 1);
	responseMessage.innerText = jokes[index];
	showResponse();
}
function searchGoogle() {
	deactivateFelix();
	window.open("https://www.google.com/", "_blank");
}
function showInspiration() {
	deactivateFelix();
	window.open("https://dribbble.com/shots/5473987-AI-Robot", "_blank");
}
function showResponse() {
	responseFrame.classNameList.add("active");
	deactivateFelix();
}
function closeResponse() { responseFrame.classNameList.remove("active"); }
// changeTheme(SiteTheme.Dark);
  return (
    <div className='Header'>
        <div id="primary-content" className="centered-pen">
        <div style={{display: "flex", justifyContent: "center", marginLeft: "-80px"}}>
        <div style={{marginTop: "65px"}}> <h1 className="display-3 text-white" style={{width: "340px", textAlign: "right", marginRight: "40px", width: "400px"}}>Hello there!</h1>
        </div>
        <div className="personal-assistant" style={{transform: "scale(0.8)",width: "70px"}}>
        <div id="felix" ref={felix} className="felix" onClick={activateFelix}>
                <div className="eyes">
                    <div className="eye left"></div>
                    <div className="eye right"></div>
                </div>
            </div>
            <div className="platform"></div>
            <ul className="command-list">
                <li><i className="far fa-clouds" onClick={getWeather}></i></li>
                <li><i className="far fa-clock" onClick={getTime}></i></li>
                <li><i className="far fa-calendar-alt" onClick={getDate}></i></li>
                <li><i className="far fa-grin-squint-tears" onClick={tellJoke}></i></li>
                <li><i className="far fa-search" onClick={searchGoogle}></i></li>
                <li><i className="far fa-lightbulb-on" onClick={showInspiration}></i></li>
                <p className="hey-felix lead"></p>
            </ul>
        </div>
        </div>
        <p className="lead display-6 text-uppercase text-white text-center" style={{marginTop: "-30px"}}>I'm <span>Sahil</span> from <span>India</span></p>
        <div id="response-frame" ref={responseFrame} className="response-frame">
            <p id="response-message" ref={responseMessage} className="lead"></p>
            <i className="fas fa-times" onClick={closeResponse}></i>
        </div>
        </div>
    </div>
  )
}

export default Header