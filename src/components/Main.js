import React from "react";
import email from "../Images/Mail.png"
import linkedIn from "../Images/linkedin.png"

export default function Main() {
  return (
    <div className="mainContainer">
        <h2>Ahsan Shajee Ahmed</h2>
        <h4>KIIT Student</h4>
        <p className="hyperlink">hyperlink here</p>
        <div className="buttonContainer">
            <button className="emailbtn">
                <img src={email}></img>
                Email
            </button>
            <button className="linkedbtn">
                <img src={linkedIn}></img>
                LinkedIn
            </button>
        </div>
        <div className="about">
            <h4>About</h4>
            <p>I am a third-year student at KIIT who is passionate about full-stack development along with working and leveraging databases like SQL. With a passion for learning and a knack for finding solutions, I'm eager to explore the ever-evolving world of technology.   </p>
        </div>
        <div className="interests">
            <h4>Interests</h4>
            <p>Reader. Internet fanatic. Gamer. Mythos nerd.</p>
        </div>
    </div>
  );
}