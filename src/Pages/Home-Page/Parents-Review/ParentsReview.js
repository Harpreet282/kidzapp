import React from "react";
import "./parentsReview.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviewsCard = [
  {
    id: 1,
    cardTopPara: "TR88HOUSE Family Entertainment Center",
    cardTitle: "MAAZING",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "Sussy",
    cardBottomSecondP: "a day ago",
    cardButtonText: "5.0",
  },
  {
    id: 2,
    cardTopPara: "Outdoor Playground at AI Barari",
    cardTitle: "its ok",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "Chell",
    cardBottomSecondP: "a day ago",
    cardButtonText: "3.0",
  },
  {
    id: 3,
    cardTopPara: "BOUNCE X",
    cardTitle: "amazing",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "Sussy",
    cardBottomSecondP: "a day ago",
    cardButtonText: "5.0",
  },
  {
    id: 4,
    cardTopPara: "Dare Adventure Park",
    cardTitle: "it was reallyb fun",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "Rima",
    cardBottomSecondP: "2 days ago",
    cardButtonText: "5.0",
  },
  {
    id: 5,
    cardTopPara: "Schoko Fabrik Cafe",
    cardTitle: "Lovr it!",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "neshe",
    cardBottomSecondP: "4 days ago",
    cardButtonText: "5.0",
  },
  {
    id: 6,
    cardTopPara: "Tommy Life Kids Playground",
    cardTitle: "good not that great",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "Anonymous",
    cardBottomSecondP: "4 days ago",
    cardButtonText: "3.0",
  },
  {
    id: 7,
    cardTopPara: "Dubai Safari Park",
    cardTitle: "Amazing",
    cardCenterText:
      "not for kids 6 and under.. it’s would be boring! They would run around mindlessly and not know what’s going on🤦🏼‍♀️. I saw kids running around on the trampoline and hitting themselves..",
    cardBottomFirstP: "Chell",
    cardBottomSecondP: "5 days ago",
    cardButtonText: "5.0",
  },
];
const ParentsReview = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: false,
dots:true,
  };
  return (
    <>
      <div className="container review-comp">
        <div className="row mx-5 mt-5" >
          <div className="col">
            <Slider {...settings}>
              {reviewsCard.map((slide, i) => {
                return (
                  <div key={slide.id} className="Review-slides ">
                    <div className="card" style={{width:'18rem'}}>
                      <div className="card-body">
                        <p className="card-Top-Para"> {slide.cardTopPara} </p>
                        <h5 className="card-title">{slide.cardTitle} </h5>
                        <hr />
                        <p className="card-text">{slide.cardCenterText}</p>
                        <div className="bottomCardText">
                         <div className="bottomRow d-flex">
                         <div className="leftText col-6">
                            <p className="text-center">{slide.cardBottomFirstP}</p>
                            <h6 className="text-center">{slide.cardBottomSecondP}</h6>
                          </div>

                          <div className=" col-6">
                           <div className="starRate rightText text-right  absolute-center">
                           <img
                              src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                              alt=""
                            />
                            <span>{slide.cardButtonText}</span>
                           </div>
                          </div>
                         </div>
                        </div>
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

export default ParentsReview;
