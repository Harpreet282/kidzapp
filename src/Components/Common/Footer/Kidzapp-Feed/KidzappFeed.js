import React from 'react'
import './kidzappFeed.css'
import HOMEIMAGES from '../../../../Assets/Images/HomePage-Images/HomeImages'

const KidzappFeed = () => {
  return (
    <>
      <section className="kidzappFeed py-5 ">
        <div className="container py-4">
          <div className="row globeRow">
            <div className="col-md-4 column col1">
             <img src={HOMEIMAGES.subscBaby} alt="" />
            </div>
            <div className="col-md-8 column col2 p-5">
               <div className="content">
               <div className="text text-center">
                 <h1>The Kidzapp Feed</h1>
                 <p>Receive regular updates and promotions from Kidzapp</p>
               </div>
               <div className="searchBar mx-5 my-3">
               <div className="row">
      <div className="col-md-12">
        <div className="searchwithbutton d-flex">
         <input type="text" name="" className="form-control" placeholder="Email address" />
          <button className="btn">Subscribe</button>
        </div>
        
      </div>
    </div>
               </div>

               <div className="kidzFeedValues mx-5">
                 <div className="row ">
                   <div className="col-md-4">
                     <div className="text">
                       <h2>2500 +</h2>
                       <p>Experiences</p>
                     </div>
                   </div>
                   <div className="col-md-4 second">
                   <div className="text">
                       <h2>500 +</h2>
                       <p>Vanues & Events</p>
                     </div>
                   </div>
                   <div className="col-md-4">
                   <div className="text">
                       <h2>1000 +</h2>
                       <p>Classes</p>
                     </div>
                   </div>
                 </div>
               </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KidzappFeed