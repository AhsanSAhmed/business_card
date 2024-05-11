import React from "react";
import Github from "../Images/GitHub Icon.png"
import twitter from "../Images/Twitter Icon.png"
import facebook from "../Images/Facebook Icon.png"
import instagram from "../Images/Instagram Icon.png"

export default function Footer() {
  return (
    <div className="footerContainer">
        <nav className="footLogoBox">
            <img src={twitter}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={Github}></img>
        </nav>
    </div>
  );
}