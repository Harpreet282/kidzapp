import React, { useState, useEffect } from "react";
import "./home.css";
import Slider from "react-slick";
// import HOMEIMAGES from "../../Assets/Images/HomePage-Images/HomeImages";
import TabOptions from "./Tab-options/TabOptions";
import Kidzappolis from "./Kidzappolis/Kidzappolis";
import Collection from "./Collection/Collection";
import ParentsReview from "./Parents-Review/ParentsReview";
import Features from "./Features/Features";
import axios from "axios";
import { BANNER_DATA_API, BLOG_PICKS_API } from "../../APIs/apis";

const Home = () => {
  document.title = "Kids activities in dubai, Abu Dhabi | UAE | Kidzapp";

  const [bannerData, setBannerData] = useState([]);
  const getBannerData = () => {
    axios
      .get(
        BANNER_DATA_API
      )
      .then((response) => {
        const myData = response.data.results;
        setBannerData(myData);
        // console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBannerData();
  }, []);

  const [blogPicksData, setBlogPicksData] = useState([]);
  const getBlogPicksData = () => {
    axios
      .get(
        BLOG_PICKS_API
      )
      .then((response) => {
        const myData = response.data.results;
        setBlogPicksData(myData);
        // console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getBlogPicksData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
  };

  return (
    <div className="marginFromHeader">
      <section className="mainSlider">
        <Slider {...settings}>
          {bannerData.map((slide) => {
            return (
              <div key={slide.id} className="slider-item">
                <img
                  src={slide.image_url}
                  className="d-block w-100"
                  alt={slide.image_url_alt}
                />
                <div className="sliderText">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <button className="btn">{slide.booking_button.text}</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>

      <section className="places-section my-5">
        <div className="container">
          <div className="places-text ">
            <h1>Find the best places to take your kids in the UAE</h1>
            <p className="subtitle">Handpicked Experiences</p>
            <p className="second-title">
              Our pick of the best kids activities in Dubai, Abu Dhabi and the
              rest of the UAE
            </p>
          </div>

          <div>
            <TabOptions />
          </div>
        </div>
        <div className="places-section-button absolute-center">
          <button className="btn">View All</button>
        </div>
      </section>
      <section className="kidzappolisAndCollection py-5">
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
          <div className="row ">
            {blogPicksData.map((data, index) => {
              return (
                <div
                  className={`py-4 ${
                    index === 0 || index === 5 ? "col-md-8" : "col-md-4"
                  }`}
                  key={data.id}
                >
                  <div
                    className="card"
                    style={{
                      height: `${
                        index === 0 || index === 1 || index === 5 || index === 6
                          ? "420px"
                          : "320px"
                      }`,
                    }}
                  >
                    <div className="cardImage">
                      <img
                        src={data.cover_image}
                        className="card-img-top"
                        alt="list"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <div className="card-text">
                        <hr />
                        <p>Kidzapp Team</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="blogPicks-section-button absolute-center">
            <button className="btn">View All</button>
          </div>
        </div>
      </section>

      <section className="parentsReview py-5">
        <div className="text">
          <h1>
            Kids Activities Reviews
            <br />
            by Real Parents
          </h1>
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
