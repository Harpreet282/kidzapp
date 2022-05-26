import React from "react";
import "./collection.css";
import Slider from "react-slick";
import HOMEIMAGES from "../../../Assets/Images/HomePage-Images/HomeImages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collection = () => {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: true,

    // afterChange:function(index){
    //   console.log(
    //     `slider Changed to: ${index+1},background:black;color:red`
    //   )
    // }
  };

  const data = [
    {
      id: 1,
      image: HOMEIMAGES.collectionSticker1,
      text: "How to spend your cashback - top picks",
    },
    {
      id: 2,
      image: HOMEIMAGES.collectionSticker1,
      text: "Fun for AED 50 or less",
    },
    {
      id: 3,
      image: HOMEIMAGES.collectionSticker3,
      text: "Weekday Deals Not To Miss",
    },
    {
      id: 4,
      image: HOMEIMAGES.collectionSticker4,
      text: "SupperClub Offers",
    },
    {
      id: 5,
      image: HOMEIMAGES.collectionSticker5,
      text: "Family Shopping for Less",
    },
    {
      id: 6,
      image: HOMEIMAGES.collectionSticker6,
      text: "Birthday Deals and Picks",
    },
    {
      id: 7,
      image: HOMEIMAGES.collectionSticker7,
      text: "Deals: Big Attractions",
    },
    {
      id: 8,
      image: HOMEIMAGES.collectionSticker2,
      text: "Play Attraction Deals",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col" align="center">
            <Slider {...settings}>
              {data.map((slide, i) => {
                return (
                  <div key={slide.id} className="collection-slides ">
                    <div className="imgAndText">
                      <div className="images">
                        <img className="" src={slide.image} alt=".." />

                        <span className="text">{slide.text}</span>
                      </div>
                    </div>
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

export default Collection;
