import React from "react";
import "animate.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__heading">
          <img alt="logo" src="./doneall.svg"></img>
          <h1 className="header__text--main">bigTO-DO</h1>
        </div>
        <div className="header__menu-items">
          {/* <div className="header__heading">
            <img alt="icon" className="header__icon" src="./pricing.svg"></img>
            <h1 className="header__text">Pricing</h1>
          </div> */}
          <div className="header__heading" onClick={e => props.setLogin(true)}>
            <img alt="icon" className="header__icon" src="./login.svg"></img>
            <h1 className="header__text">Login / Signup</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
