import React from "react";
import "./getInTouch.css";

const GetInTouch = () => {
  document.title = "Get in Touch - Kidzapp | Kidzapp";
  return (
    <div className="marginFromHeader getInTouch">
      <section className="getInTouchtext">
        <h1>Suggestion? Help? Just want to say Hi?</h1>
        <p>
          Fill out the form below and one of the Kidzapp family will
          <br />
          be in touch
        </p>
      </section>
      <section className="formSection my-2">
        <div className="container getInTouchForm">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" className="form-control" id="firstName" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="email" className="form-control" id="lastName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="email" className="form-control" id="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="6"
              ></textarea>
            </div>
            <br />
            <div className="getInTouchButton">
              <button type="submit" className="btn">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="getInTouchInfo container pt-5">
        <div className="row">
          <div className="col-md-4 col-sm-12 infoText infoTextLeft" align="center">
            <div className="">
              <p>
                <strong>Email:</strong>
              </p>
              <p>info@kidzapp.com</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 infoText infoTextCenter" align="center">
            <div className="">
              <p>
                <strong>Phone:</strong>
              </p>
              <p>+201001177193</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12 infoText infoTextRight" align="center">
            <div className="">
              <p>
                <strong>Address:</strong>
              </p>
              <p>
                Kidzapp LLC, 1404 Ascott Park Place, Sheikh Zayed Road, Dubai,
                P.O. Box 117452, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouch;
