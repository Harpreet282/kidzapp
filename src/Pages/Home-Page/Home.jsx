import React,{useState,useEffect} from "react";
import "./home.css";
import Slider from "react-slick";
import HOMEIMAGES from "../../Assets/Images/HomePage-Images/HomeImages";
import TabOptions from "./Tab-options/TabOptions";
import Kidzappolis from "./Kidzappolis/Kidzappolis";
import Collection from "./Collection/Collection";
import ParentsReview from "./Parents-Review/ParentsReview";
import Features from "./Features/Features";
import axios from "axios";

const Home = () => {
  document.title = "Kids activities in dubai, Abu Dhabi | UAE | Kidzapp";

  const [bannerData, setBannerData] = useState([]);
  const getBannerData = () => {
    axios
      .get(
        "https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=featured_banner_uae&country_code=&page=1&page_size=10&city=&website=1"
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

  const settings = {
    infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        autoplay: false,
  autoplaySpeed: 10000,
  dots:true
  };

  return (
    <div className="marginFromHeader">
 <section className="mainSlider">
<Slider {...settings}>
{bannerData.map((slide) => {
                return (
<div key={slide.id}  className="slider-item">
<img
                src={slide.image_url}
                className="d-block w-100"
                alt={slide.image_url_alt}
              />
<div className="sliderText">
                <h1>{slide.title}</h1>
                <p>
      {slide.description}
                </p>
                <button className="btn">
                  {slide.booking_button.text}
                </button>
              </div>
</div>
                )
})}
</Slider>
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
