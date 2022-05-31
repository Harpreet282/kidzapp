import React from "react";
import "./home.css";
import HOMEIMAGES from "../../Assets/Images/HomePage-Images/HomeImages";
import TabOptions from "./Tab-options/TabOptions";
import Kidzappolis from "./Kidzappolis/Kidzappolis";
import Collection from "./Collection/Collection";
import ParentsReview from "./Parents-Review/ParentsReview";
import Features from "./Features/Features";

const Home = () => {
  document.title = "Kids activities in dubai, Abu Dhabi | UAE | Kidzapp";

  return (
    <div className="marginFromHeader">
      <section className="mainSlider">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators ">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="10000">
              <img
                src={HOMEIMAGES.centraBeach}
                className="d-block w-100"
                alt="..."
              />
              <div className="sliderText">
                <h1>Centara Mirage Beach Resort Dubai </h1>
                <p>
                  Get your dose of family fun at Centara Mirage Beach Resort
                  Dubai - a spectacular family-oriented resort with endless
                  facilities and activities design...
                </p>
                <button className="btn">
                  <b>Learn More</b>
                </button>
              </div>
            </div>
            <div className="carousel-item" data-interval="10000">
              <img
                src={HOMEIMAGES.diversePerform}
                className="d-block w-100"
                alt="..."
              />
              <div className="sliderText">
                <h1>Diverse Performing Arts Center Show at Dubai Opera </h1>
                <p>
                  Get ready for Diverse Performing Art Center's spectacular
                  annual summer show at the Dubai Opera! Prepare to be dazzled
                  and blown away with Dubai's top..
                </p>
                <button className="btn">
                  <b>Book Now</b>
                </button>
              </div>
            </div>
            <div className="carousel-item" data-interval="10000">
              <img
                src={HOMEIMAGES.brainGame}
                className="d-block w-100"
                alt="..."
              />
              <div className="sliderText">
                <h1>Infinity Des Lumieres - Immersive Digital Art Gallery </h1>
                <p>
                  Infinity des Lumières is an immersive digital art experience
                  realised in a series of stunning exhibitions. It is the
                  region’s largest epicentre of cultural expression...
                </p>
                <button className="btn">
                  <b>Book Now</b>
                </button>
              </div>
            </div>
            <div className="carousel-item" data-interval="10000">
              <img
                src={HOMEIMAGES.digitalArt}
                className="d-block w-100"
                alt="..."
              />
              <div className="sliderText">
                <h1>Brain Game - Escape Rooms & Board Game Café </h1>
                <p>
                  Immerse yourselves into an awesome world of alternative
                  amusement and escape rooms at Brain Game Dubai! Grab your
                  family members and enjoy 60...
                </p>
                <button className="btn">
                  <b>Book Now</b>
                </button>
              </div>
            </div>
            <div className="carousel-item" data-interval="10000">
              <img
                src={HOMEIMAGES.waterWorld}
                className="d-block w-100"
                alt="..."
              />
              <div className="sliderText">
                <h1>Yas Waterworld </h1>
                <p>
                  Yas Waterworld, Water's Greatest Playground, is the ultimate
                  destination for family bonding on an awesome splash-tastic
                  adventure! Spread over 37 acres...
                </p>
                <button className="btn">
                  <b>Book Now</b>
                </button>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>
     
      <section className="places-section m-5">
        <div className="container ">
          <div className="places-text ">
            <h1>
              Find the best places to take your
              <br />
              kids in the UAE
            </h1>
            <p className="subtitle">Handpicked Experiences</p>
            <p className="second-title">
              Our pick of the best kids activities in Dubai, Abu Dhabi and the
              rest of the UAE
            </p>
          </div>

          <div>
            <TabOptions/>
          </div>
        </div>
        <div className="places-section-button absolute-center">
          <button className="btn">View All</button>
        </div>
      </section>
      <section className="kidzappolisAndCollection p-5">
        <div className="container">
          <div className="appolisText">
            <h1>Kidzappolis</h1>
            <Kidzappolis />
          </div>
          <div className="collectionText">
            <h1>Kidzapproved Collections</h1>
            <Collection />
          </div>
        </div>
      </section>
      <section className="blogPicks p-5">
        <div className="container">
          <div className="text">
            <h1>Our Blog Picks</h1>
          </div>
          <div className="row FirstRow">
            <div className="col-md-8">
              <div className="card">
                <img
                  src={HOMEIMAGES.funThings}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Fun Things To Do With Your Older Kids In Dubai And Abu Dhabi
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.childBday}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    Kids Birthdays In Dubai And Abu Dhabi: 10+ Awesome Ways To
                    Celebrate
                  </h5>
                  <div className="card-text">
                    <hr />
                   <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row SecondRow py-5">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.funThings}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    10+ Big Family Attractions You Need To Visit This Eid
                    Holiday
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.childBday}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    15 Indoor Activities In Dubai And Abu Dhabi You Might Not
                    Have Tried Yet
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.childBday}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    10 Ramadan Deals In Dubai And Abu Dhabi You Don’t Want To
                    Miss
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ThirdRow">
            <div className="col-md-8">
              <div className="card">
                <img
                  src={HOMEIMAGES.iftars}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    10+ Family Friendly Iftars in Dubai & Abu Dhabi (2022)
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.springBreak}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    15 Awesome Things To Do This Spring Break In Dubai And Abu
                    Dhabi (2022)
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ForthRow py-5">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.springCamp}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    14 Spring Camps In Dubai And Abu Dhabi That You Gotta Sign
                    Up For (2022)
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.mothersDay}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    15 Awesome Things To Do For Mother’s Day in Dubai and Abu
                    Dhabi
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={HOMEIMAGES.kidsPlayArea}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    5 Kids Play Areas In Dubai With Drop-Off Service
                  </h5>
                  <div className="card-text">
                    <hr />
                    <p>Kidzapp Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blogPicks-section-button absolute-center">
            <button className="btn">View All</button>
          </div>
        </div>
      </section>

      <section className="parentsReview py-5">
        <div className="text">
          <h1>Kids Activities Reviews<br />by Real Parents</h1>
        </div>
        <ParentsReview />
        <div className="parentsReview-section-button absolute-center">
            <button className="btn">View All</button>
          </div>
      </section>
<section className="featureSection">
  <div className="text text-center">
    <h1>As Featured in</h1>
    <Features />
  </div>
</section>
    
      
    </div>
  );
};

export default Home;
