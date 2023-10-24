import "./LetterStyles.css";

function Letter() {
  return (
    <div className="letter-container">
      <div className="letter-text">
        <div className="letter-left-side">
          <img
            src={require("../assets/letterImage.png")}
            alt="FoundersPicture"
          />
        </div>
        <div className="letter-right-side">
          <div className="letter-title">
            <div className="letter-overline">
              <text>Who We Are</text>
            </div>
            <div className="letter-body">
              <text>The Top Quality Livestock Family</text>
            </div>
          </div>
          <div className="letter-statement">
            <text>
              Top Quality Livestock got its start in Austin, Texas with one
              goal: provide farmers and ranchers with digital solutions to help
              them become more efficient, profitable, and competitive in
              national markets.<br></br>
              <br></br>
            </text>
            <text>
              Our team of ranchers and tech innovators is helping build a
              stronger future for agriculture, as a trusted partner of
              operations across the country.<br></br>
              <br></br>
            </text>
            <text>
              We are driven by the belief that agriculture is the backbone of
              this country and without farmers and ranchers creating a secure
              and independent food supply, there is no United States.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letter;
