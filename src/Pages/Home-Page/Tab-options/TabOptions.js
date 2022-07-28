import React, { useState, useEffect } from "react";
import "./tabOptions.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import {TabOptionsAxios,TabResponseAxios} from '../../../Services'

const TabOptions = () => {
  const [activeTab, setActiveTab] = useState("featured_kidzapp_deal");

  const [cardData, setCardData] = useState([]);

  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    TabOptionsAxios()
      .then((response) => {
        const myData = response.data;
        setTabData(myData);
        // console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    TabResponseAxios(activeTab)
      .then((response) => {
        const myCardData = response.data.results;
        setCardData(myCardData);
        // console.log(activeTab)
        // console.log(myCardData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [activeTab]);

  const settings2 = {
    lazyLoad: true,
    infinite: false,
    slidesToShow: 3,
    slideToScroll: 1,
    dots: false,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          lazyLoad: true,
          infinite: true,
          slidesToShow: 1,
          slideToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: false,
          cssEase: "linear",
        },
      },
    ],
  };

  const settings = {
    infinite: true,
    slidesToShow: 7,
    slideToScroll: 1,
    variableWidth: true,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container tabOptions">
        <div className="row ">
          <div className="col" align="center">
            <Slider {...settings}>
              {tabData.map((tab) => {
                return (
                  <div
                    onClick={() => setActiveTab(tab.internal_name)}
                    className={`tab-item absolute-center cur-po mb-5 ${
                      activeTab === tab.internal_name && "active-tab"
                    }`}
                    key={tab.id}
                  >
                    <div
                      className="tab-text absolute-center"
                      style={{
                        color: `${
                          activeTab === tab.internal_name ? "#fff" : "#000"
                        }`,
                        backgroundColor: `${
                          activeTab === tab.internal_name
                            ? "var(--active-color)"
                            : "#fff"
                        }`,
                        cursor: "pointer",
                      }}
                    >
                      {tab.name}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <section className="cardsSection">
        <div className="container">
          <Slider {...settings2}>
            {cardData.map((card) => {
              return (
                <div key={card.id}>
                  <div className="card mx-auto">
                    <img
                      src={card.image_url}
                      className="card-img-top"
                      alt="..."
                    />
                    <span
                      className={`${card.has_offer ? "new-deal" : "d-none"}`}
                    >
                      <img
                        src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                        height="100"
                        width="100"
                        alt=""
                      />
                    </span>
                    <div className="card-body">
                      <h3 className="card-title">{card.title}</h3>
                      <p className="card-text">{card.address}</p>
                      <div className="starRate absolute-center">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                          alt=""
                        />
                        <span>5.0</span>
                        {/* <span>{cardItem.average_rating}</span> */}
                      </div>
                      <p className="priceCard">
                        {card.city.country.currency_code} 1.6{" "}
                        <NavLink
                          to="/"
                          className="btn absolute-center float-right"
                        >
                          {card.booking_button.text_en}
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default TabOptions;
