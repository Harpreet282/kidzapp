import React, { useState, useEffect } from "react";
import "./parentsReview.css";
import Slider from "react-slick";
import { ParentsReviewAxios } from "../../../Services";

const ParentsReview = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  const [reviewData, setReviewData] = useState([]);
  const getReviewData = () => {
    ParentsReviewAxios()
      .then((response) => {
        const myData = response.data;
        setReviewData(myData);
        // console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getReviewData();
  }, []);

  return (
    <>
      <div className="reviewComp container review-comp" align="center">
        <div className="row  mt-5">
          <div className="col" align="center">
            <Slider {...settings}>
              {reviewData.map((slide, i) => {
                return (
                  <div key={slide.id} className="Review-slides ">
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <p className="card-Top-Para"> {slide.venue.title} </p>
                        <h5 className="card-title">{slide.title} </h5>
                        <hr />
                        <p className="card-text">{slide.review}</p>
                        <div className="bottomCardText">
                          <div className="bottomRow d-flex">
                            <div className="leftText col-6">
                              <p className="text-center">
                                {/* Anonymous */}
                                {`${
                                  !slide.user
                                    ? "Anonymous"
                                    : slide.user.first_name
                                }`}
                              </p>
                              <p className="text-center">5 months ago</p>
                            </div>

                            <div className=" col-6">
                              <div className="starRate rightText text-right  absolute-center">
                                <img
                                  src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                                  alt=""
                                />
                                <span>{slide.rating}.0</span>
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
