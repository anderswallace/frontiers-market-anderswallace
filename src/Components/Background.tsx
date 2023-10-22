import React from "react";
import "../Components/BackgroundStyles.css";

const Background = () => {
  return (
    <div className="background-container">
      <div className="background-body">
        <div className="background-top">
          <text>Top Quality Livestock</text>
        </div>
        <div className="background-middle">
          <text>Sell Your Cattle to Nationwide Buyers</text>
        </div>
        <div className="background-steps">
          <div className="overline">
            <img
              src={require("../assets/checkmark.svg").default}
              alt="checkmark"
              height={16}
              width={16}
            />
            <text>Quick & Easy Process</text>
          </div>
          <div className="overline">
            <img
              src={require("../assets/checkmark.svg").default}
              alt="checkmark"
              height={16}
              width={16}
            />
            <text>Top-Dollar Offers</text>
          </div>
          <div className="overline">
            <img
              src={require("../assets/checkmark.svg").default}
              alt="checkmark"
              height={16}
              width={16}
            />
            <text>Add Listings for Free</text>
          </div>
        </div>
      </div>
      <div className="approved">
        <text>Get Approved, Get Offers, Get Paid</text>
      </div>
      <div>
        <a className="register-button" href="">
          Register to Sell
        </a>
      </div>
    </div>
  );
};

export default Background;
