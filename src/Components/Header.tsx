import React from "react";
import "./HeaderStyles.css";

const Header = () => {
  return (
    <nav className="header-container">
      <div className="header-left">
        <img
          src={require("../assets/logo1.svg").default}
          alt="Logo"
          width={84.76712}
          height={56}
        />
        <text>About Us</text>
      </div>
      <div className="header-right">
        <div className="phone">
          <text>Call Us</text>
          <img
            src={require("../assets/mobile-notch.svg").default}
            alt="MobileNotch"
            height={16}
          />
          <text>(888)-313-1597</text>
        </div>
        <div className="buttons">
          <a className="buttonStyleWhite" href="">
            Sell Your Livestock
          </a>
          <a className="buttonStyleGreen" href="">
            Log In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
