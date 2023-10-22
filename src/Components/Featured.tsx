import React from "react";
import "./FeaturedStyles.css";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured-text">
        <div className="featured-text-overline">
          <text>Top Cattle Offers From Around the Country</text>
        </div>
        <div className="featured-text-heading">
          <text>Register today and get your cattle listed.</text>
        </div>
      </div>
      <div className="featured-cards">
        <div className="featured-productCard">
          <div className="featured-card-image">
            <img src={require("../assets/card1.png")} alt="ProductCard1" />
          </div>
          <div className="featured-card-bio">
            <div className="featured-bio-name">
              <div className="featured-bio-title">
                <text>12 Red Angus</text>
              </div>
            </div>
            <div className="featured-bio-location">
              <img
                src={require("../assets/🇺🇸.png")}
                alt="AmericanFlag"
                height={20}
                width={18}
              />
              <text>Texas</text>
            </div>
            <div className="featured-bio-head">
              <text>$3,200 / head</text>
            </div>
          </div>
        </div>
        <div className="featured-productCard">
          <div className="featured-card-image">
            <img src={require("../assets/card2.png")} alt="ProductCard2" />
          </div>
          <div className="featured-card-bio">
            <div className="featured-bio-name">
              <div className="featured-bio-title">
                <text>17 Angus</text>
              </div>
            </div>
            <div className="featured-bio-location">
              <img
                src={require("../assets/🇺🇸.png")}
                alt="AmericanFlag"
                height={20}
                width={18}
              />
              <text>Kansas</text>
            </div>
            <div className="featured-bio-head">
              <text>$2,200 / head</text>
            </div>
          </div>
        </div>
        <div className="featured-productCard">
          <div className="featured-card-image">
            <img src={require("../assets/card3.png")} alt="ProductCard3" />
          </div>
          <div className="featured-card-bio">
            <div className="featured-bio-name">
              <div className="featured-bio-title">
                <text>8 Beefmaster</text>
              </div>
            </div>
            <div className="featured-bio-location">
              <img
                src={require("../assets/🇺🇸.png")}
                alt="AmericanFlag"
                height={20}
                width={18}
              />
              <text>Texas</text>
            </div>
            <div className="featured-bio-head">
              <text>$2,500 / head</text>
            </div>
          </div>
        </div>
        <div className="featured-productCard">
          <div className="featured-card-image">
            <img src={require("../assets/card4.png")} alt="ProductCard4" />
          </div>
          <div className="featured-card-bio">
            <div className="featured-bio-name">
              <div className="featured-bio-title">
                <text>1 Brahman</text>
              </div>
            </div>
            <div className="featured-bio-location">
              <img
                src={require("../assets/🇺🇸.png")}
                alt="AmericanFlag"
                height={20}
                width={18}
              />
              <text>Texas</text>
            </div>
            <div className="featured-bio-head">
              <text>$5,500 / head</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
