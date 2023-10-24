import "../Components/ApprovedStyles.css";

function Approved() {
  return (
    <div className="approved-container">
      <div className="approved-image">
        <img
          src={require("../assets/loginTestimonials.png")}
          alt="LoginTestimonials"
          height={545}
          width={632}
        />
      </div>
      <div className="approved-frame">
        <div className="approved-header">
          <div className="approved-overline">
            <text>Get Approved Today</text>
          </div>
          <div className="approved-title">
            <text>Start Selling Around the Country</text>
          </div>
        </div>
        <div className="approved-points">
          <div className="approved-bullet-point">
            <div className="approved-frame-line">
              <div className="approved-circle">
                <div className="approved-circle-bottom">
                  <img
                    src={require("../assets/Ellipse780.svg").default}
                    alt="MobileNotch"
                  />
                </div>
                <div className="approved-circle-top">
                  <text>1</text>
                </div>
              </div>
              <div className="approved-bullet-text">
                <text>Create an account</text>
              </div>
            </div>
          </div>
          <div className="approved-bullet-point">
            <div className="approved-frame-line">
              <div className="approved-circle">
                <div className="approved-circle-bottom">
                  <img
                    src={require("../assets/Ellipse780.svg").default}
                    alt="MobileNotch"
                  />
                </div>
                <div className="approved-circle-top">
                  <text>2</text>
                </div>
              </div>
              <div className="approved-bullet-text">
                <text>Get approved to sell</text>
              </div>
            </div>
          </div>
          <div className="approved-bullet-point">
            <div className="approved-frame-line">
              <div className="approved-circle">
                <div className="approved-circle-bottom">
                  <img
                    src={require("../assets/Ellipse780.svg").default}
                    alt="MobileNotch"
                  />
                </div>
                <div className="approved-circle-top">
                  <text>3</text>
                </div>
              </div>
              <div className="approved-bullet-text">
                <text>Add cattle listing with breed, age, weight</text>
              </div>
            </div>
          </div>
          <div className="approved-bullet-point">
            <div className="approved-frame-line">
              <div className="approved-circle">
                <div className="approved-circle-bottom">
                  <img
                    src={require("../assets/Ellipse780.svg").default}
                    alt="GreenCircle"
                  />
                </div>
                <div className="approved-circle-top">
                  <text>4</text>
                </div>
              </div>
              <div className="approved-bullet-text approved-bullet-padding">
                <text>
                  Start appearing in our catalog for thousands of nationwide
                  buyers searching for livestock everyday!
                </text>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a className="approved-button" href="">
            Register to Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Approved;
