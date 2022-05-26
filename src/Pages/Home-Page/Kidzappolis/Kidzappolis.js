import React from "react";
import "./kidzappolis.css";
import Slider from "react-slick";
import HOMEIMAGES from "../../../Assets/Images/HomePage-Images/HomeImages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Kidzappolis = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: true,
    // dots: true,
  };

  const data = [
    {
      id: 1,
      image: HOMEIMAGES.sticker1,
      text: "Baby and Toddler",
    },
    {
      id: 2,
      image: HOMEIMAGES.sticker2,
      text: "Courses, camps and workshops",
    },
    {
      id: 3,
      image: HOMEIMAGES.sticker3,
      text: "Eat Out",
    },
    {
      id: 4,
      image: HOMEIMAGES.sticker4,
      text: "Birthdays",
    },
    {
      id: 5,
      image: HOMEIMAGES.sticker5,
      text: "Explore the City",
    },
    {
      id: 6,
      image: HOMEIMAGES.sticker5,
      text: "Explore the City",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col " align="center">
            <Slider {...settings}>
              {data.map((slide, i) => {
                return (
                  <div key={slide.id} className="kidzappolis-slides ">
                    <div className="images">
                      <img className="" src={slide.image} alt=".." />
                    </div>
                    <p className="text">{slide.text}</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kidzappolis;
