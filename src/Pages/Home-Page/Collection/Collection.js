import React,{useState,useEffect} from "react";
import "./collection.css";
import Slider from "react-slick";
// import HOMEIMAGES from "../../../Assets/Images/HomePage-Images/HomeImages";
import axios from "axios";
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

    responsive:[
      {
        breakpoint:480,
        settings:{
          slidesToShow:3,
          slideToScroll:1,
          arrows:false
        }
      }
    ]
  };

  const [collectionData, setCollectionData] = useState([]);
  const getCollectionData = () => {
    axios
      .get(
        "https://api2.kidzapp.com/api/3.0/lists?country_code=ae"
      )
      .then((response) => {
        // console.log(response)
        let kidzaprovedCollections =[]
let response_Names=[];

        if (response.data.length > 0) {
          for (let val of response.data) {
            // console.log(val)
              if(val.create_button === false && val.internal_name !== 'featured' && val.internal_name !== 'featured_banner_uae' ){
                response_Names.push(val);
                // console.log(response_Names.push(val))

              }else if(val.create_list === true && val.internal_name !== 'featured' && val.internal_name !== 'featured_banner_uae' ){
                response_Names.push(val)
              }
              if(val.create_button === true){
                kidzaprovedCollections.push(val)
              }
          }
      }
      
      setCollectionData(kidzaprovedCollections);
      // console.log(kidzaprovedCollections)

      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCollectionData();
  }, []);

  // const data = [
  //   {
  //     id: 1,
  //     image: HOMEIMAGES.collectionSticker1,
  //     text: "How to spend your cashback - top picks",
  //   },
  //   {
  //     id: 2,
  //     image: HOMEIMAGES.collectionSticker1,
  //     text: "Fun for AED 50 or less",
  //   },
  //   {
  //     id: 3,
  //     image: HOMEIMAGES.collectionSticker3,
  //     text: "Weekday Deals Not To Miss",
  //   },
  //   {
  //     id: 4,
  //     image: HOMEIMAGES.collectionSticker4,
  //     text: "SupperClub Offers",
  //   },
  //   {
  //     id: 5,
  //     image: HOMEIMAGES.collectionSticker5,
  //     text: "Family Shopping for Less",
  //   },
  //   {
  //     id: 6,
  //     image: HOMEIMAGES.collectionSticker6,
  //     text: "Birthday Deals and Picks",
  //   },
  //   {
  //     id: 7,
  //     image: HOMEIMAGES.collectionSticker7,
  //     text: "Deals: Big Attractions",
  //   },
  //   {
  //     id: 8,
  //     image: HOMEIMAGES.collectionSticker2,
  //     text: "Play Attraction Deals",
  //   },
  // ];

  return (
    <>
      <div className="collection-component container">
        <div className="row ">
          <div className="col" align="center">
            <Slider {...settings}>
              {collectionData.map((slide, i) => {
                return (
                  <div key={slide.id} className="collection-slides ">
                    <div className="imgAndText">
                      <div className="images">
                        <img className="" src={slide.thumbnail_url} alt=".." />

                        <span className="text">{slide.name}</span>
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
