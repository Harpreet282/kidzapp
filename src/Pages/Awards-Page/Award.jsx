import React from "react";
import "./award.css";
import AWARDIMAGES from "../../Assets/Images/AwardsPage-images/AwardsImages";

const Award = () => {
  document.title = "The Kidzapp Awards 2022 – Winners | Kidzapp";
  return (
    <div className="marginFromHeader awards-comp">
      <section className="award-banner py-5">
        <img src={AWARDIMAGES.awardBanner} alt="..." />
      </section>
      <section className="journey-section">
        <div className="container">
          <h1 className="pb-5">The Journey to the Awards</h1>
          <div className="row journey-slides">
            <div className="col">
              <img src={AWARDIMAGES.awardFirstImg} alt="" />
              <div className="para">
                <p>Nomination Opens</p>
              </div>
            </div>
            <div className="col">
              <img src={AWARDIMAGES.awardSecondImg} alt="" />
              <div className="para">
                <p>Nomination Closes</p>
              </div>
            </div>
            <div className="col">
              <img src={AWARDIMAGES.awardThirdImg} alt="" />
              <div className="para">
                {" "}
                <p>Voting Starts</p>
              </div>
            </div>
            <div className="col">
              <img src={AWARDIMAGES.awardForthImg} alt="" />
              <div className="para">
                {" "}
                <p>Voting Closes</p>
              </div>
            </div>
            <div className="col">
              <img src={AWARDIMAGES.awardFifthImg} alt="" />
              <div className="para">
                <p>Announcing Winner – Awards Caremony</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Award;
