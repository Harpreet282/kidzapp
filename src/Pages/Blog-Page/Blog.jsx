import React,{useState,useEffect} from "react";
import './blog.css'
import { BiArrowBack,BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import axios from "axios";

const Blog = () => {
    document.title='The KZ Blog - Kidzapp | Kidzapp';

    const [blogData, setBlogData] = useState([]);
  const getBlogData = () => {
    axios
      .get(
        "https://api2.kidzapp.com/api/3.0/categories?country_code=ae"
      )
      .then((response) => {
        const myData = response.data;
        setBlogData(myData);
        console.log(myData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
             <div className="col-md-3"> <li className=' firstList'><NavLink to='/' className='absolute-center' >Arts & Crafts<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             <div className="col-md-3">  <li className=' secondList'><NavLink to='/' className='absolute-center'>Kids Activities<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             <div className="col-md-3"> <li className='thirdList'><NavLink to='/' className='absolute-center'>Parenting<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
             <div className="col-md-3"> <li className='fourthList'><NavLink to='/' className='absolute-center'>Health & Nutrition<span text=''><BiRightArrowAlt /></span></NavLink> </li></div>
            </ul>
            <div className="blogListing">
              <h1>The KZ Blog</h1>
              <p>Your source for everything related to Arts & Crafts, Kids Activities, Parenting and Health & Nutrition.</p>
            </div>
          </section>
    </div>
  )
}

export default Blog