import React from "react";
import pyramid from "../assets/pyramid.png"; // <-- if your file is named differently, change this line

export default function HeaderBanner() {
  return (
    <div className="header-banner">
      <div className="header-inner">
        <img src={pyramid} alt="" className="header-pyramid" />
        <h1 className="header-title">Laser Sharks Fantasy Football</h1>
      </div>
    </div>
  );
}
