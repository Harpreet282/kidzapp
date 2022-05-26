import React from 'react'
import './features.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 1500,
        arrows: false,
        autoplay: true,
  autoplaySpeed: 3000,
      };

  return (
    <>
    <div className="container featureComp pt-5 px-5">
        
            <div className="row">
                <div className="col" align='center'>
                <Slider {...settings}>
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/the-national.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/khaleej-times.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/dubai-tv.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/lovin-dubai.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/dubai-eye.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/the-national.png" alt="" />
                    <img src="https://drfsb8fjssbd3.cloudfront.net/images/khaleej-times.png" alt="" />
        </Slider>

                </div>
                
            </div>
    </div>
    </>
  )
}

export default Features