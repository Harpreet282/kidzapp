import React,{useState} from "react";
import "./tabOptions.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import HOMEIMAGES from "../../../Assets/Images/HomePage-Images/HomeImages";

const tabs = [
  {
    id: 1,
    name: "Cashback",
    text: "How To Spend Your Cashback - Top Picks",
  },
  {
    id: 2,
    name: "Trending",
    text: "Trending",
  },
  {
    id: 3,
    name: "New",
    text: "NEW! On Kidzapp",
  },
  {
    id: 4,
    name: "Indoor",
    text: "Indoor Kids Play Areas",
  },
  {
    id: 5,
    name: "Birthday",
    text: "Birthday Deals & Picks",
  },
  {
    id: 6,
    name: "Afterschool",
    text: "Afterschool Activities & Cources",
  },
  {
    id: 7,
    name: "Popular",
    text: "Popular Attractions",
  },
];

const TabOptions = () => {

  const [activeTab, setActiveTab] = useState("Cashback");

  const settings = {
    infinite: false,
    slidesToShow: 5,
    variableWidth: true,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: true,
  };


  return (
    <>
<div className="container tabOptions">
        <div className="row ">
          <div className="col" align="center">
            <Slider {...settings}>
            {tabs.map((tab) => {
            return (
              <div
                onClick={() => setActiveTab(tab.name)}
                className={`tab-item absolute-center cur-po mb-5 ${
                  activeTab === tab.name && "active-tab"
                }`}
                key={tab.id}
              >
                <div
                  className="tab-text absolute-center"
                  style={{
                    color: `${activeTab === tab.name ? "#fff" : "#000"}`,
                    backgroundColor: `${
                      activeTab === tab.name ? "var(--active-color)" : "#fff"
                    }`,
                    cursor: "pointer",
                  }}
                >
                  {tab.text}
                </div>
              </div>
            );
          })}
            </Slider>
          </div>
        </div>
      </div>
      {getCorrectScreen(activeTab)}

          </>
  );
};



const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Cashback":
      return (
        <>
        
        <section className="cardsSection">
    <div id="carouselExampleCaptions" className="carousel slide" data-interval="false" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="displayClass">
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.wooHoo}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">
                          woo-hoo! Children's Museum
                        </h3>
                        <p className="card-text">
                          1 6A St - Al QuozAl Quoz 1-...
                        </p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.3</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.madameTussauds}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">Madame Tussauds Dubai</h3>
                        <p className="card-text">Madame Tussauds Dubai,...</p>
                        <div
                          className="starRate absolute-center"
                          style={{ visibility: "hidden" }}
                        >
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.3</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.dubaiSafari}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">Dubai Safari Park</h3>
                        <p className="card-text">
                          Dubai Safari Park, Ras Al Khor...
                        </p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.8</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
      
    </div>
    <div className="carousel-item">
    <div className="displayClass">
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.splashParty}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">
                          woo-hoo! Children's Museum
                        </h3>
                        <p className="card-text">
                          1 6A St - Al QuozAl Quoz 1-...
                        </p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.7</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.kidzania}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">Madame Tussauds Dubai</h3>
                        <p className="card-text">Madame Tussauds Dubai,...</p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.9</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.bounceX}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">Dubai Safari Park</h3>
                        <p className="card-text">
                          Dubai Safari Park, Ras Al Khor...
                        </p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.2</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
      
    </div>
    <div className="carousel-item">
    <div className="displayClass">
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.wooHoo}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">
                          woo-hoo! Children's Museum
                        </h3>
                        <p className="card-text">
                          1 6A St - Al QuozAl Quoz 1-...
                        </p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.1</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.madameTussauds}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">Madame Tussauds Dubai</h3>
                        <p className="card-text">Madame Tussauds Dubai,...</p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.8</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                    <div className="card mx-auto" style={{ width: "18rem" }}>
                      <img
                        src={HOMEIMAGES.dubaiSafari}
                        className="card-img-top"
                        alt="..."
                      />
                      <span className="new-deal">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                          height="100"
                          width="100"
                          alt=""
                        />
                      </span>
                      <div className="card-body">
                        <h3 className="card-title">Dubai Safari Park</h3>
                        <p className="card-text">
                          Dubai Safari Park, Ras Al Khor...
                        </p>
                        <div className="starRate absolute-center">
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                            alt=""
                          />
                          <span> 4.3</span>
                        </div>
                        <p className="priceCard">
                          AED 105{" "}
                          <NavLink
                            to="/"
                            className="btn absolute-center float-right"
                          >
                            Book Now
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
    </div>
  </div>

</div>
    </section>
         
        </>
      );
    default:
      return <>hlo</>;
  }
};

export default TabOptions;
