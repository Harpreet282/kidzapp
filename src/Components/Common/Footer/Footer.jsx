import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import KidzappFeed from "./Kidzapp-Feed/KidzappFeed";

const Footer = () => {
  return (
    <>
      <KidzappFeed />
      <div className="footer py-5">
       <div className="footerSubDiv">
       <div className="px-5">
          <div className="row footerFirstRow">
            <div className="col">
              <ul>
                <li className="heading">Kids Activities by Category</li>
                <li>
                  <NavLink to="/">Exclusively on Kidzapp</NavLink>
                </li>
                <li>
                  <NavLink to="/">Spring Fun</NavLink>
                </li>
                <li>
                  <NavLink to="/">Afterschool Activities</NavLink>
                </li>
                <li>
                  <NavLink to="/">Animal Fun</NavLink>
                </li>
                <li>
                  <NavLink to="/">Art, Music and Dance</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="heading">Kids Activities by Category</li>
                <li>
                  <NavLink to="/">Baby & Toddler</NavLink>
                </li>
                <li>
                  <NavLink to="/">Birthdays</NavLink>
                </li>
                <li>
                  <NavLink to="/">Courses,Camps & Workshops</NavLink>
                </li>
                <li>
                  <NavLink to="/">Workshops</NavLink>
                </li>
                <li>
                  <NavLink to="/">Eat Out</NavLink>
                </li>
                <li>
                  <NavLink to="/">Explore The City</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="heading">Family activity</li>
                <li>
                  <NavLink to="/">Venues</NavLink>
                </li>
                <li>
                  <NavLink to="/">Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/">Events</NavLink>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li className="heading">Others</li>
                <li>
                  <NavLink to="/">Find Activities</NavLink>
                </li>
                <li>
                  <NavLink to="/">Our Story</NavLink>
                </li>
                <li>
                  <NavLink to="/">About The App</NavLink>
                </li>
                <li>
                  <NavLink to="/">Get In Touch</NavLink>
                </li>
                <li>
                  <NavLink to="/">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/">Site Map</NavLink>
                </li>
              </ul>
            </div>
            <div className="col ">
              <ul>
                <li className="heading availableHeading">Available on</li>
                <div className="row">
                  <div className="col-md-12 col-sm-6">
                    <li className="AvailibaleList">
                      <NavLink to="/" className="AvailableAnchor">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-app-store.svg"
                          alt="..."
                        />
                      </NavLink>
                    </li>
                  </div>
                  <div className=" col-md-12 col-sm-6">
                    <li className="AvailibaleList">
                      <NavLink to="/" className="AvailableAnchor">
                        <img
                          src="https://drfsb8fjssbd3.cloudfront.net/images/kidzapp-google-play.svg"
                          alt="..."
                        />
                      </NavLink>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div className="row footerSecondRow ">
            <div className="col-md d-none d-sm-block"></div>
            <div className="col-md d-none d-sm-block"></div>
            <div className="col-md col-sm-6">
              <ul>
                <li className="heading">Indoor / Outdoor Kids activity</li>
                <li>
                  <NavLink to="/">Indoor</NavLink>
                </li>
                <li>
                  <NavLink to="/">Outdoor</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md col-sm-6">
              <ul>
                <li className="heading">Legal</li>
                <li>
                  <NavLink to="/">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/">Terms and Conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/">Cacellation Policy</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md d-none d-sm-block iconColumn">
              <ul>
                <p className="heading">Follow us on</p>
                <div className="ic">
                  <li>
                    <NavLink to="/">
                      <FaInstagram />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <FaFacebookF />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <FaWhatsapp />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/">
                      <FaYoutube />
                    </NavLink>
                  </li>{" "}
                </div>
              </ul>
            </div>
          </div>
        </div>
        <hr className="d-none d-sm-block" />
        <div className="px-5">
          <div className="row footerThirdRow d-none d-sm-block">
            <div className="col">
              Copyright © 2022 kidzapp.com. All Rights Reserved
            </div>
            <div className="col mr-5  text-right">
              <img
                className="mx-2"
                src="https://drfsb8fjssbd3.cloudfront.net/images/new-visa.svg"
                alt="..."
              />
              <img
                className="mx-2"
                src="https://drfsb8fjssbd3.cloudfront.net/images/new-mc.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
       </div>
      </div>
    </>
  );
};

export default Footer;
