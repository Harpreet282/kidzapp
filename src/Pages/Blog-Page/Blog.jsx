import React,{useState,useEffect} from "react";
import './blog.css'
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import axios from "axios";
import { FaRegUserCircle,FaRegCalendar } from "react-icons/fa";

const Blog = () => {
    document.title='The KZ Blog - Kidzapp | Kidzapp';

    const [blogTabData, setBlogTabData] = useState([]);

    const [blogData, setBlogData] = useState([]);
  const getBlogData = () => {
    axios
      .get(
        "https://api2.kidzapp.com/api/3.0/blogs?page=1&limit=10&country_code=ae"
      )
      .then((response) => {
        const myData = response.data.results;
        setBlogData(myData);
        // console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
    .get(
      "https://api2.kidzapp.com/api/3.0/blogs/categories?country_code=ae"
    )
    .then((response) => {
      const Data = response.data;
      setBlogTabData(Data);
      // console.log(Data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);



  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div className='marginFromHeader blogPage'>
      <section className="searchAndBanner">
          <div className="container ">
            <div className="row">
              <div className="col-md-12">
              <div className="searchButton d-flex">
         <input type="text" name="" className="form-control" placeholder="🔍 Type here to search video" />
          <button className="btn">Search</button>
        </div>
              </div>
            </div>
          </div>
          </section>
          <section className="topTabs container">
            <button className='btn px-0 my-3'>
            <BiArrowBack className='icon' /> Go Back
            </button>
            <ul className='row'>
              {
                blogTabData.map((tab,index)=>{
             return(
              <div className="col-sm-3 col-md-3" key={tab.id}>  <li style={{backgroundImage:
                `url(${
                index===0?
                  'https://beta.kidzapp.com/images/btn-01.png'
                  :
                  index===1?'https://beta.kidzapp.com/images/btn-02.png'
                  :
                  index===2?'https://beta.kidzapp.com/images/btn-03.png'
                  :
                  index===3?'https://beta.kidzapp.com/images/btn-04.png'
                  :
                  'https://beta.kidzapp.com/images/btn-04.png'})`
                }}>
                <NavLink to='/' className='absolute-center'>{tab.internal_name}<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             )
                })
              }
             {/* <div className="col-sm-3 col-md-3"> <li className=' firstList'><NavLink to='/' className='absolute-center' >{blogTabData[0]?blogTabData[0].internal_name:''}<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             <div className="col-sm-3 col-md-3">  <li className=' secondList'><NavLink to='/' className='absolute-center'>{blogTabData[1]?blogTabData[1].internal_name:''}<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             <div className="col-sm-3 col-md-3"> <li className='thirdList'><NavLink to='/' className='absolute-center'>{blogTabData[2]?blogTabData[2].internal_name:''}<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             <div className="col-sm-3 col-md-3"> <li className='fourthList'><NavLink to='/' className='absolute-center'>{blogTabData[3]?blogTabData[3].internal_name:''}<span text=''><BiRightArrowAlt /></span></NavLink> </li></div> */}
            </ul>
            <div className="blogListing">
              <h1>The KZ Blog</h1>
              <p>Your source for everything related to Arts & Crafts, Kids Activities, Parenting and Health & Nutrition.</p>
            </div>
          </section>
          <section className="displayCardsSection">
          <div className="products container">
            <div className="row absolute-center">
        {blogData.map((data) => {
          return (
              <div className="col-md-4 py-4" key={data.id}>
                <div
                  className="card"
                >
                 <div className="cardImage">
                 <img
                    // style={{ height: "15rem" }}
                    src={data.cover_image}
                    className="card-img-top"
                    alt="list"
                  />
                 </div>
                  <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                    <div className="row">
                      <div className="col-md-6" align='left'>
<p>
  <span className="icon mr-2"><FaRegCalendar /></span>{data.created_at}
</p>
                      </div>
                      <div className="col-md-6" align='right'>
                        <p>
  <span className="icon mr-2"><FaRegUserCircle  /></span>Posted By : {data.auther_name}
                        </p>
                      </div>
                    </div>
                    <p className="card-text">
                    {`${!data.body?'None' : data.excerpt}`}
                    </p>
                    <div className="buttonDiv">
                    <button className="btn">
               Read More...
                  </button>
                    </div>
                  </div>
                </div>
              </div>
          );
        })}
        </div>
      </div>
          </section>
    </div>
  )
}

export default Blog