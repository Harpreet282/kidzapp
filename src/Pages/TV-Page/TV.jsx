import React from "react";
import "./tv.css";
import {
  ArtAndCraft,
  MethodsOfEducation,
} from "./KidzTV-video-cards/kidzTvVideoCards";

const TV = () => {
  document.title = "Kidzapp TV | Kidzapp";
  return (
    <div className="marginFromHeader">
      <div className="kidzTvSection">
        <section className="searchAndBanner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="searchButton d-flex">
                  <input
                    type="text"
                    name=""
                    className="form-control"
                    placeholder="🔍 Type here to search video"
                  />
                  <button className="btn">Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="headingVideoSection container">
          <h1 className="p-5 text-center">Kidzapp TV- Kids Activities</h1>
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <video
                  poster="https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/ab216b4e-c4e6-4cec-934e-cf910e335170.jpg"
                  controls
                >
                  <source
                    src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_1c0742c8-ac24-43af-b108-5638d989089b.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Rainbow Rice | Fun & Games</h2>
                  <p>Fun & Games</p>
                </div>
              </div>
              <div className="carousel-item">
                <video
                  poster="https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/997d7279-fe0f-45f9-aac6-f9785c80ae31.jpg"
                  controls
                >
                  <source
                    src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_d3a2c98a-035d-411f-b900-0b51a23f5418.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Watermeln Sorbet | Cooking with Kidzapp</h2>
                  <p>Cooking</p>
                </div>
              </div>
              <div className="carousel-item">
                <video
                  poster="https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/6ad55ad5-ce2f-4f02-b2d3-e762d91e25ac.jpg"
                  controls
                >
                  <source
                    src="https://images.kidzapp.com/media/kidzapp_tv/videos/None_dd8ddc3e-be2d-4f40-9df8-8153db32e4cd.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="carousel-caption d-none d-md-block">
                  <h2>Toy Wash Fun | Fun & Games</h2>
                  <p>Fun & Games</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ArtAndCraft />
        <MethodsOfEducation />
      </div>
    </div>
  );
};

export default TV;
