import React from "react";
import { useContext } from "react";
import "./HeaderStyles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../firebaseSetup";

const Header = () => {
  const user = useContext(AuthContext);
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <nav className="header-container">
      <div className="header-left">
        <img
          src={require("../assets/logo1.svg").default}
          alt="Logo"
          width={84.76712}
          height={56}
        />
        <p>About Us</p>
      </div>
      <div className="header-right">
        <div className="phone">
          <p>Call Us</p>
          <img
            src={require("../assets/mobile-notch.svg").default}
            alt="MobileNotch"
            height={16}
            style={{ alignSelf: "center" }}
          />
          <p>(888)-313-1597</p>
        </div>
        <div className="buttons">
          <a className="buttonStyleWhite" href="">
            Sell Your Livestock
          </a>
          {!user ? (
            <Link className="buttonStyleGreen" to="/login">
              Log In
            </Link>
          ) : (
            <a onClick={signOut} className="buttonStyleGreen" href="">
              Sign Out
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
