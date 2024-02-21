import React from "react";

const ContactUs = () => {
  return (
    <section className="mainSec waitingSec contactSec1">
      <div className="beforeColor">
        <div className="container">
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1700}
            >
              <div className="contactLeft">
                <h5>Pick Up Your Cell Give Us A Bell</h5>
                <h2>Webnet Pakistan (Pvt) Ltd.</h2>
                <p>
                  You get all the smart and unique solutions here at webnet from
                  web development to graphic designing and from applications
                  development to digital marketing. We bring innovations as our
                  current clients have been positively experiencing our
                  high-powered e-commerce cms which is first in pakistan
                </p>
                <div className="row">
                  <div className="col-sm-6">
                    <img src="img/Pak_map.png" alt="map" />
                    <h4>Webnet Pakistan</h4>
                    <ul className="contactInfo">
                      <li>
                        <strong>Head Office</strong>
                        <a href="#">
                          <img src="img/locator.png" alt="" /> B-69 Block/18
                          Gulshan-e-Iqbal, Karachi{" "}
                        </a>
                      </li>
                      <li>
                        <strong>PHONE</strong>
                        <a href="#">
                          <img src="img/call.png" alt="" /> (+92)3073337310{" "}
                          <br /> (+92)3073337312
                        </a>
                      </li>
                      <li>
                        <strong>Email</strong>
                        <a href="#">
                          <img src="img/send.png" alt="" /> info@webnet.com.pk{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <img src="img/Canada_map.png" alt="map" />
                    <h4>Webnet Canada</h4>
                    <ul className="contactInfo">
                      <li>
                        <strong>ADDRESS</strong>
                        <a href="#">
                          <img src="img/locator.png" alt="" /> 798 Millworks
                          Cr., Mississauga, Ontario, Canada L5V OB9
                        </a>
                      </li>
                      <li>
                        <strong>PHONE</strong>
                        <a href="#">
                          <img src="img/call.png" alt="" /> +16477861349
                        </a>
                      </li>
                      <li>
                        <strong>Email</strong>
                        <a href="#">
                          <img src="img/send.png" alt="" /> info@webnet.com.pk{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration={1700}
            >
              <div className="contactRight">
                <h5>Stay Connected With Webnet</h5>
                <h3>Are you facing any problem?</h3>
                <h2>We are always there to solve it.</h2>
                <div className="formHeading contact-field newContact">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="First Name*"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="Email"
                            name="text"
                            className="form-control"
                            placeholder="Email Address*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="Phone Number*"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="Enter Subject*"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Message*"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            type="text"
                            name="text"
                            className="form-control"
                            placeholder="9+4=?"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group text-left">
                          <input
                            type="submit"
                            defaultValue="send"
                            placeholder="Send"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
