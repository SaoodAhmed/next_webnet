export default function Offices(){
    return (
      <>
        <section className="our-branches">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        >
                        Pakistan Office
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-profile"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                        >
                        Saudi Arabia Office
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-contact"
                        type="button"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                        >
                        Canada Office
                        </button>
                    </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                    <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <div className="row">
                        <div className="col-sm-6">
                            <h4>Webnet Karachi</h4>
                            <ul className="contactInfo">
                            <li>
                                <b>ADDRESS</b>
                                <div className="flex mt-2">
                                <img src="img/locator.png" alt="" /> 
                                <p>
                                    B-69 Block/18
                                    Gulshan-e-Iqbal, Karachi
                                </p>
                                </div>
                            </li>
                            <li>
                                <b>PHONE</b>
                                <p className="flex mt-2 items-center">
                                <img src="img/call.png" alt="" />{" "}
                                <a href="tel:(+92)3403701111">(+92)3403701111</a> |{" "}
                                <a href="tel:(+92)3073337312">(+92)3073337312</a>
                                </p>
                            </li>
                            <li>
                                <b>Email</b>
                                <p className="flex mt-2">
                                <img src="img/call.png" alt="" />{" "}
                                <a href="mailto:info@webnet.com.pk">
                                    {" "}
                                    info@webnet.com.pk
                                </a>
                                </p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="mapImg">
                            <img src="img/Pak_map.png" alt="map" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <div className="row">
                        <div className="col-sm-6">
                            <h4>Webnet Saudi Arabia</h4>
                            <ul className="contactInfo">
                            <li>
                                <b>ADDRESS</b>
                                <p>
                                <img src="img/locator.png" alt="" /> Suite #201, Building
                                6841 Fatima Al Zahra, Al Naseem District, Makkah Al
                                Mukarama, Kingdom of Saudi Arabia
                                </p>
                            </li>
                            <li>
                                <b>PHONE</b>
                                <p>
                                <img src="img/call.png" alt="" />{" "}
                                <a href="tel:+966 564272797">+966 564272797</a>
                                </p>
                            </li>
                            <li>
                                <b>Email</b>
                                <p>
                                <img src="img/call.png" alt="" />{" "}
                                <a href="mailto:info@webnet.com.pk">info@webnet.com.pk</a>
                                </p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="mapImg">
                            <img src="img/saudi.png" alt="map" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                    >
                        <div className="row">
                        <div className="col-sm-6">
                            <h4>Webnet Canada</h4>
                            <ul className="contactInfo">
                            <li>
                                <b>ADDRESS</b>
                                <p>
                                <img src="img/locator.png" alt="" /> 798 Millworks Cr.,
                                Mississauga, Ontario, Canada L5V OB9
                                </p>
                            </li>
                            <li>
                                <b>PHONE</b>
                                <p>
                                <img src="img/call.png" alt="" />{" "}
                                <a href="tel:+16477861349">+16477861349</a>
                                </p>
                            </li>
                            <li>
                                <b>Email</b>
                                <p>
                                <img src="img/call.png" alt="" />{" "}
                                <a href="mailto:info@webnet.com.pk">info@webnet.com.pk</a>
                                </p>
                            </li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <div className="mapImg">
                            <img src="img/Canada_map.png" alt="map" />
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