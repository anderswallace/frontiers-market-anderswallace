import React from "react";
import "./WhyStyles.css";

const Why = () => {
  return (
    <div className="why-container">
      <div>
        <div className="why-top-overline">
          <text>Trusted Online Marketplace</text>
        </div>
        <div className="why-top-header">
          <text>Why Sell with Top Quality Livestock?</text>
        </div>
        <div className="why-top-body">
          <text>
            Top Quality Livestock is the premier online marketplace connecting a
            national network of verified buyers and sellers of livestock.
          </text>
        </div>
      </div>
      <div className="why-content">
        <div className="why-content-row">
          <div className="why-content-text">
            <div className="why-content-top">
              <div className="why-top-text-overline">
                <text>Free To List</text>
              </div>
              <div className="why-top-text-title">
                <text>Sell to a National Market</text>
              </div>
            </div>
            <div className="why-top-desc">
              <text>
                Sell to anyone from industry giants to small-scale operations
                wanting to buy your product. Ensure fair, competitive prices in
                the national market with buyers you can trust. Get listings seen
                for free.
              </text>
            </div>
          </div>

          <img
            src={require("../assets/why1.png")}
            alt="NationalMarket"
            height={324}
            width={360}
          />
        </div>
        <div className="why-content-row">
          <div className="why-content-text">
            <div className="why-content-top">
              <div className="why-top-text-overline">
                <text>Get More Offers</text>
              </div>
              <div className="why-top-text-title">
                <text>Make More Sales</text>
              </div>
            </div>
            <div className="why-top-desc">
              <text>
                Access to TQL’s marketplace means you are seen by thousands of
                potential buyers. As soon as you are verified to sell, get
                offers from all over the country.
              </text>
            </div>
          </div>

          <img
            src={require("../assets/why2.png")}
            alt="NationalMarket"
            height={324}
            width={360}
          />
        </div>
        <div className="why-content-row">
          <div className="why-content-text">
            <div className="why-content-top">
              <div className="why-top-text-overline">
                <text>Instant Messaging</text>
              </div>
              <div className="why-top-text-title">
                <text>Quick & Easy Process</text>
              </div>
            </div>
            <div className="why-top-desc">
              <text>
                Connect quickly with buyers and negotiate directly until you are
                satisfied. Your cattle don’t leave the ranch until you meet a
                buyer you like.
              </text>
            </div>
          </div>

          <img
            src={require("../assets/why3.png")}
            alt="NationalMarket"
            height={324}
            width={360}
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
