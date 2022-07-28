import React, { useState, useEffect } from "react";
import "./kidzappolis.css";
import Slider from "react-slick";
// import HOMEIMAGES from "../../../Assets/Images/HomePage-Images/HomeImages";
import { KidzappolisAxios } from "../../../Services";

const Kidzappolis = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: true,
    // dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  // const data = [
  //   {
  //     id: 1,
  //     image: HOMEIMAGES.sticker1,
  //     text: "Baby and Toddler",
  //   },
  //   {
  //     id: 2,
  //     image: HOMEIMAGES.sticker2,
  //     text: "Courses, camps and workshops",
  //   },
  //   {
  //     id: 3,
  //     image: HOMEIMAGES.sticker3,
  //     text: "Eat Out",
  //   },
  //   {
  //     id: 4,
  //     image: HOMEIMAGES.sticker4,
  //     text: "Birthdays",
  //   },
  //   {
  //     id: 5,
  //     image: HOMEIMAGES.sticker5,
  //     text: "Explore the City",
  //   },
  //   {
  //     id: 6,
  //     image: HOMEIMAGES.sticker3,
  //     text: "Eat Out",
  //   },
  // ];
  const [kidzappolisData, setKidzappolisData] = useState([]);
  const getKidzappolisData = () => {
      KidzappolisAxios()
      .then((response) => {
        const myData = response.data;
        setKidzappolisData(myData);
        // console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getKidzappolisData();
  }, []);
  return (
    <>
      <div className="kidzapplis-comp container">
        <div className="row ">
          <div className="col " align="center">
            <Slider {...settings}>
              {kidzappolisData.map((slide, i) => {
                return (
                  <div key={slide.id} className="kidzappolis-slides ">
                    <div className="images">
                      <img className="" src={slide.image_url} alt=".." />
                    </div>
                    <p className="text">{slide.name}</p>
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
