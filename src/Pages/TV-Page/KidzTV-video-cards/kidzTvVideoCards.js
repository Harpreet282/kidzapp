import React from 'react'
import './kidzTvVideoCards.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: true,
    slidesToShow: 3,
    lazyLoad: true,
    swipeToSlide: true,
    slidesToScroll:3,
    arrows: false,
dots:true,
  };
  const ArtAndCraftSlides = [
    {
      id: 1,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_ef573b10-d1ea-4394-b4d1-27e2956ef331.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/63e69b6b-a7ab-45dd-8b77-416918403cd2.jpg',
      cardTitle:'How to make a sailboat from a SPONGE! I Arts & Crafts with Kidzapp',
      likes:'14',
       comments:'7'
    },
    {
      id: 2,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_f6ee0e20-dfbc-46a2-a9b7-f4909eae4d17.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/e8f9977d-4638-446c-9b19-5baf82f84ea7.jpg',
      cardTitle:'Toilet Roll Crafts: Ninjas I Arts & Crafts',
      likes:'11',
       comments:'5'
    },
    {
      id: 3,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_b95b2d70-d7cf-412c-a76c-50b95dbfb555.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/6e2412d0-c2f7-4165-b3fe-ccb667cb3e65.jpg',
      cardTitle:'Buttterfly Handprint I Arts & Crafts',
      likes:'3',
       comments:'0'
    },
    {
      id: 4,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_1c0742c8-ac24-43af-b108-5638d989089b.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/a4fd8980-5b49-4172-aecd-4937089c9aa0.jpg',
      cardTitle:'DIY Fireworks Painting I Arts & Crafts',
      likes:'2',
       comments:'0'
    },
    {
      id: 5,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_babcf8c8-5e73-4df6-a279-8e4136f1159f.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/486ce3c8-c041-4807-9678-ab44ca8959ef.jpg',
      cardTitle:'Moonsighting Binoculars I Arts & Crafts',
      likes:'1',
       comments:'0'
    },
    {
      id: 6,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_41e5d800-77af-4db5-9be7-284b428c0039.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/63e69b6b-a7ab-45dd-8b77-416918403cd2.jpg',
      cardTitle:'How to make a sailboat from a SPONGE! I Arts & Crafts with Kidzapp',
      likes:'5',
       comments:'0'
    },
  
  ];
  const MethodsOfEducationSlides = [
    {
      id: 1,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_a4a44b12-857c-4c4f-9dde-49a806901505.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/50195b05-51b1-4f0a-9a62-4cce1fca22ee.png',
      cardTitle:'Genius Map - Guiness World Record',
      likes:'16',
       comments:'4'
    },
    {
      id: 2,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_ef859b23-a8d4-4e7c-a293-a5888fe3a2c1.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/2b6bcab5-aad9-43b3-bad6-447fd82fe8f8.png',
      cardTitle:'Bring in a child and take home a GENIUS',
      likes:'6',
       comments:'1'
    },
    {
      id: 3,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_e9b4c1e4-5e79-4623-a3c5-8985a66451cf.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/09ddc741-4ab4-4a25-8aea-134cd3e245b5.png',
      cardTitle:'Kids Recommendations on Genius Map',
      likes:'2',
       comments:'0'
    },
    {
      id: 4,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_1c0742c8-ac24-43af-b108-5638d989089b.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/a4fd8980-5b49-4172-aecd-4937089c9aa0.jpg',
      cardTitle:'Genius Map - Advanced Level',
      likes:'1',
       comments:'0'
    },
    {
      id: 5,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_babcf8c8-5e73-4df6-a279-8e4136f1159f.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/486ce3c8-c041-4807-9678-ab44ca8959ef.jpg',
      cardTitle:'What is Genius Map? I Dr. Hadi I Genius Map',
      likes:'1',
       comments:'0'
    },
    {
      id: 6,
      videoSrc:'https://images.kidzapp.com/media/kidzapp_tv/videos/None_41e5d800-77af-4db5-9be7-284b428c0039.mp4',
      videoPoster:'https://images.kidzapp.com/media/kidzapp_tv/video_thumbnals/63e69b6b-a7ab-45dd-8b77-416918403cd2.jpg',
      cardTitle:'The Genius Map Curriculum I Genius Map',
      likes:'2',
       comments:'2'
    },
  
  ];
const ArtAndCraft = () => {
  return (
    <>
     <div className="container arts-crafts mt-5 ">
       <div className="row mx-5 py-2">
         <div className="col-md-6">
           <h2 className='mainText'>Arts and Crafts</h2>
         </div>
         <div className="col-md-6" align='right'>
<button className='btn btn-outline-primary'>See All</button>
         </div>
       </div>
        <div className="row mx-5 " >
          <div className="col">
            <Slider {...settings}>
              {ArtAndCraftSlides.map((slide, i) => {
                return (
                  <div key={slide.id} className="ArtAndCraft-slides">
                    <div className="card" style={{width:'19rem',height:'25rem'}}>
  <video style={{height:'170px'}} className="card-img-top" poster={slide.videoPoster} controls>
  <source  src={slide.videoSrc} type="video/mp4"/>
</video>
  <div className="card-body">
    <h5 className="card-title">{slide.cardTitle}</h5>
    <p className="card-text">Arts and Crafts</p>
    <hr />
    <div className="row bottomRow">
      <div className="col-md-4 d-flex">
        <img src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" alt="..." />
        <span><button className='btn m-1'>{slide.likes}</button></span>
      </div>
      <div className="col-md-4 d-flex">
        <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" alt="..." />
        <span><button className='btn m-1'>{slide.comments}</button></span>
      </div>
      <div className="col-md-4 d-flex">
        <p className='m-1'>Share</p>
        <span>
        <img src="https://kidzapp.com/images/share-review-kd-new.png" alt="..." />
          </span>
      </div>
    </div>
    <hr />
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
  )
}


const MethodsOfEducation = () => {
  return (
    <>
     <div className="container methods-of-education mt-5 ">
       <div className="row mx-5 py-2">
         <div className="col-md-6">
           <h2 className='mainText'>Methods of Education</h2>
         </div>
         <div className="col-md-6" align='right'>
<button className='btn btn-outline-primary'>See All</button>
         </div>
       </div>
        <div className="row mx-5 " >
          <div className="col">
            <Slider {...settings}>
              {MethodsOfEducationSlides.map((slide, i) => {
                return (
                  <div key={slide.id} className="MethodsOfEducation-slides">
                    <div className="card" style={{width:'19rem',height:'25rem'}}>
  <video style={{height:'170px'}} className="card-img-top" poster={slide.videoPoster} controls>
  <source  src={slide.videoSrc} type="video/mp4"/>
</video>
  <div className="card-body">
    <h5 className="card-title">{slide.cardTitle}</h5>
    <p className="card-text">Methods of Education</p>
    <hr />
    <div className="row bottomRow">
      <div className="col-md-4 d-flex">
        <img src="https://drfsb8fjssbd3.cloudfront.net/images/like-icon.svg" alt="..." />
        <span><button className='btn m-1'>{slide.likes}</button></span>
      </div>
      <div className="col-md-4 d-flex">
        <img src="https://drfsb8fjssbd3.cloudfront.net/images/comment-icon.svg" alt="..." />
        <span><button className='btn m-1'>{slide.comments}</button></span>
      </div>
      <div className="col-md-4 d-flex">
        <p className='m-1'>Share</p>
        <span>
        <img src="https://kidzapp.com/images/share-review-kd-new.png" alt="..." />
          </span>
      </div>
    </div>
    <hr />
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
  )
}

export  {ArtAndCraft,MethodsOfEducation}