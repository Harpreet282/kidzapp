import React from 'react'
import './getListed.css'

const GetListed = () => {
    document.title='Get Listed | Kidzapp';
    return (
    <div className='marginFromHeader get-listed'>
   <section className='get-listed-text'>
<h1>Get Listed on Kidzapp</h1>
<p>Expand your reach by listing your business with us. Simply fill out<br/>the form below and you'll hear back from us very soon.
</p>
      </section>
      <section className='get-listed-form-Section my-2 p-5'>
        <div className="container get-listed-form">
          <h1>Experience Information</h1>
        <form>
        <div className="form-group">
    <label htmlFor="type">Type</label>
    <select className="form-control" id="type">
    <option value=''>--Select--</option>
      <option>Course</option>
      <option>Venuw</option>
      <option>Event</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="city">City</label>
    <select className="form-control" id="city">
    <option value=''>--Select--</option>
      <option>Dubai</option>
      <option>Al Ain</option>
      <option>Fujairah</option>
      <option>Abu Dhabi</option>
      <option>Ajman</option>
      <option>sharjah</option>
    </select>
  </div>        
  <div className="form-group">
    <label htmlFor="LocationMap">Location Map</label>
    <iframe className='location-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30118397996!2d54.947287526927106!3d25.076381471817122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1653909837433!5m2!1sen!2sin" width="600" title='map' height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
  <div className="form-group">
    <label htmlFor="ExperienceName">Experience Name*</label>
    <input type='text' className="form-control" id="ExperienceName"></input>
  </div>
  <div className="form-group">
    <label htmlFor="VenueName">Venue Name*</label>
    <input type='text' className="form-control" id="VenueName"></input>
  </div>
  <div className="form-group">
    <label htmlFor="Category">Category*</label>
    <select className="form-control" id="Category">
    <option value=''>--Select--</option>
      <option>Animal Fun</option>
      <option>Baby And Toddlers</option>
      <option>Birthdays</option>
      <option>Eat Out</option>
      <option>Fun and Play</option>
      <option>Spring Fun</option>
    </select>
  </div>     
  <div className="form-group">
    <label htmlFor="Subcategory">Subcategory*</label>
    <select className="form-control" id="Subcategory">
    <option value=''>--Select--</option>
      <option>Animal Fun</option>
      <option>Baby And Toddlers</option>
      <option>Birthdays</option>
      <option>Eat Out</option>
      <option>Fun and Play</option>
      <option>Spring Fun</option>
    </select>
  </div>   
  <div className="form-group">
    <label htmlFor="Description">Description*</label>
    <textarea className="form-control" id="Description" rows="6"></textarea>
  </div>
  <h2>Contact Information</h2>
  <div className="form-group">
    <label htmlFor="Designation">Designation*</label>
    <input type='text' className="form-control" id="Designation"></input>
  </div>
  <div className="form-group">
    <label htmlFor="Name">Name*</label>
    <input type='text' className="form-control" id="Name"></input>
  </div>
  <div className="form-group">
    <label htmlFor="Email">Email*</label>
    <input type='email' className="form-control" id="Email"></input>
  </div>
  <div className="form-group">
    <label htmlFor="PhoneNumber">Phone Number*</label>
    <input type='text' className="form-control" id="PhoneNumber"></input>
  </div>
  <div className=" form-check ">
    <div className="row">
      <div className="col-md-6">
      <input type="checkbox" className="" id="exampleCheck1"/>
    <span > I am not a robot</span>
      </div>
      <div className="col-md-6 " align='right'>
        <div><img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="" /></div>
        <div><p>reCAPTCHA</p></div>
        <div className='bottomRow'>
          <a href="https://policies.google.com/privacy?hl=en" target='blank'>Privacy</a>-
          <a href="https://policies.google.com/terms?hl=en" target='blank'>Terms</a>
        </div>
      </div>
    </div>

  </div>
                     <br />
<div className="get-listed-button">
<button type="submit" className="btn">Get Listed</button>

</div>
                  </form>
        </div>
      </section>
    </div>
  )
}

export default GetListed