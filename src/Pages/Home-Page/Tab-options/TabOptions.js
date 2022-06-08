import React,{useState,useEffect} from "react";
import "./tabOptions.css";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import axios from "axios";

const TabOptions = () => {

  const [activeTab, setActiveTab] = useState("featured_kidzapp_deal");

  const [cardData,setCardData]=useState([]);

  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    axios
    .get(
      "https://api2.kidzapp.com/api/3.0/lists?country_code=ae"
    )
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
    
      axios
        .get(
          `https://api2.kidzapp.com/api/3.0/experiences/curated-list/?list_name=${activeTab}&country_code=&page=1&page_size=10&city=&website=1`
        )
        .then((response) => {
          const myCardData = response.data.results;
          setCardData(myCardData);
          // console.log(activeTab)
          // console.log(myCardData);
        })
        .catch((error) => {
          console.log(error);
        });
    
  
  },[activeTab]);

  const cardSliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slideToScroll:1,
    variableWidth: true,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: false,
    // resetOnMouseOut:true,
// loop:true,
//     speed: 1000,
//     autoplay: true,
// autoplaySpeed: 1000,


    responsive:[
      {
        breakpoint:480,
        cardSliderSettings:{
          slidesToShow:1,
          slideToScroll:1,
        }
      }
    ],
  };



  // const getCorrectScreen = (tab) => {
  //   switch (tab) {
  //     case activeTab:
  //       return (
  //         <>
  //         <div className="container cardsSection">
  //       <div className="row absolute-center">
  //         <div className="col text-center" align="center" style={{height:'22.5rem'}}>
  //           <Slider {...cardSliderSettings}>
  //           {cardData.map(cardItem=>{
  //           return(
  //             <div className="cardItemSection" key={cardItem.id}>
  //             <div className="displayClass">
  //                     <div className="card mx-auto">
  //                       <img
  //                         src={cardItem.image_url}
  //                         className="card-img-top"
  //                         alt="..."
  //                       />
  //                       <span className="new-deal">
  //                         <img
  //                           src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
  //                           height="100"
  //                           width="100"
  //                           alt=""
  //                         />
  //                       </span>
  //                       <div className="card-body">
  //                         <h3 className="card-title">
  //                       {cardItem.title}
  //                         </h3>
  //                         <p className="card-text">
  //                         {cardItem.address}
  //                         </p>
  //                         <div className="starRate absolute-center">
  //                           <img
  //                             src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
  //                             alt=""
  //                           />
  //                           <span>5.0</span>
  //                           {/* <span>{cardItem.average_rating}</span> */}
  //                         </div>
  //                         <p className="priceCard">
  //                           {cardItem.city.country.currency_code} 1.6{" "}
                            
  //                           <NavLink
  //                             to="/"
  //                             className="btn absolute-center float-right"
  //                           >
  //                             {cardItem.booking_button.text_en}
  //                           </NavLink>
  //                         </p>
  //                       </div>
  //                     </div>
  //                     </div>
  //                     </div>
  //           )
  //         })}
  //           </Slider>
  //         </div>
  //       </div>
  //     </div>

  //         </>
  //       );
  //     default:
  //       return <>hlo</>;
  //   }
  // };


  const settings = {
    infinite: true,
    slidesToShow: 7,
    slideToScroll:1,
    variableWidth: true,
    lazyLoad: true,
    swipeToSlide: true,
    arrows: true,

    responsive:[
      {
        breakpoint:480,
        settings:{
          slidesToShow:2,
          slideToScroll:1,
          arrows: false,
        }
      }
    ]
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
                    color: `${activeTab === tab.internal_name ? "#fff" : "#000"}`,
                    backgroundColor: `${
                      activeTab === tab.internal_name ? "var(--active-color)" : "#fff"
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
      <div className="container cardsSection">
        <div className="row absolute-center">
          <div className="col text-center" align="center" style={{height:'22.5rem'}}>
            <Slider {...cardSliderSettings}>
            {cardData.map(cardItem=>{
            return(
              <div className="cardItemSection" key={cardItem.id}>
              <div className="displayClass">
                      <div className="card mx-auto">
                        <img
                          src={cardItem.image_url}
                          className="card-img-top"
                          alt="..."
                        />
                        <span className={`${cardItem.has_offer?'new-deal':'d-none'}`}>
                          <img
                            src="https://drfsb8fjssbd3.cloudfront.net/images/Deal.svg"
                            height="100"
                            width="100"
                            alt=""
                          />
                        </span>
                        <div className="card-body">
                          <h3 className="card-title">
                        {cardItem.title}
                          </h3>
                          <p className="card-text">
                          {cardItem.address}
                          </p>
                          <div className="starRate absolute-center">
                            <img
                              src="https://drfsb8fjssbd3.cloudfront.net/images/new-white-star.svg"
                              alt=""
                            />
                            <span>5.0</span>
                            {/* <span>{cardItem.average_rating}</span> */}
                          </div>
                          <p className="priceCard">
                            {cardItem.city.country.currency_code} 1.6{" "}
                            
                            <NavLink
                              to="/"
                              className="btn absolute-center float-right"
                            >
                              {cardItem.booking_button.text_en}
                            </NavLink>
                          </p>
                        </div>
                      </div>
                      </div>
                      </div>
            )
          })}
            </Slider>
          </div>
        </div>
      </div>
      {/* {getCorrectScreen(activeTab)} */}
          </>
  );
};





export default TabOptions;
