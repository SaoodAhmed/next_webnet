
import Link from "next/link"

export default function Footer(){
    return (

        <>
            <footer>
                <div className="container">
                    <h2 className="text-white text-center mb-5">Contact us</h2>
                    <div className="top_footer">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="footer-right">
                            <div className="headD">
                            <Link  href={"../../AboutPage/About"}><h3>HEAD OFFICE PAKISTAN</h3></Link>
                            <div className="hrText">
                                <div className="hrLeft">
                                <img src="./img/call.png" alt="" className="img-fluid" />
                                <a href="tel:+9203403701111">+92 3403701111</a>
                                </div>
                                <div className="hrRight">
                                <img src="./img/locator.png" alt="" className="img-fluid" />
                                <Link  href={""}><p>B 69, Block 18, Gulshan-e-Iqbal, Karachi, Pakistan</p></Link>
                                </div>
                            </div>
                            </div>
                            <div className="headD">
                            <div className="hrText">
                                <div className="hrLeft"></div>
                            </div>
                            </div>
                            <div className="headD">
                            <h3>HAMSON BRANCH OFFICE</h3>
                            <div className="hrText">
                                <div className="hrLeft">
                                <img src="./img/call.png" alt="" className="img-fluid" />
                                <a href="tel:+9203403701111">+92 3403701111</a>
                                </div>
                                <div className="hrRight">
                                <img src="img/locator.png" alt="" className="img-fluid" />
                                <p>
                                    Suite 12, 3rd Floor, Al-Baber Center, F-8 Markaz, Islamabad,
                                    Pakistan
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="headD">
                            <div className="hrText">
                                <div className="hrLeft"></div>
                            </div>
                            </div>
                            <div className="headD">
                            <h3>BRANCH OFFICE CANADA</h3>
                            <div className="hrText">
                                <div className="hrLeft">
                                <img src="img/call.png" alt="" className="img-fluid" />
                                <a href="tel:+16477861349">+16477861349</a>
                                </div>
                                <div className="hrRight">
                                <img src="img/locator.png" alt="" className="img-fluid" />
                                <p>798 Millworks Crescent, Mississauga, ON L5V 0B9, Canada</p>
                                </div>
                            </div>
                            </div>
                            <div className="headD">
                            <div className="hrText">
                                <div className="hrLeft"></div>
                            </div>
                            </div>
                            <div className="headD">
                            <h3>BRANCH OFFICE KSA</h3>
                            <div className="hrText">
                                <div className="hrLeft">
                                <img src="img/call.png" alt="" className="img-fluid" />
                                <a href="tel:+966564272797">+966564272797</a>
                                </div>
                                <div className="hrRight">
                                <img src="img/locator.png" alt="" className="img-fluid" />
                                <p>
                                    Suite 201, Building 6841 Fatima Al Zahra, Al Naseem
                                    District, Makkah Al Mukarama, Kingdom of Saudi Arabia
                                </p>
                                </div>
                            </div>
                            </div>
                            <div className="headD">
                            <div className="hrText">
                                <div className="hrLeft">
                                <img src="img/send.png" alt="" className="img-fluid" />
                                <a href="mailto:info@webnet.com.pk">info@webnet.com.pk</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="contactRight">
                            <h4 className="black text-center">
                            Let's have your project's discussion
                            </h4>
                            <h5 className="black text-center">Tell us about yourself</h5>
                            <div className="formHeading contact-field newContact">
                            <form className="form_log">
                                <div className="row">
                                <div className="col-sm-6 mb-3">
                                    <input
                                    type="text"
                                    name="name"
                                    defaultValue=""
                                    placeholder="Name"
                                    required
                                    autoComplete="false"
                                    className="form-control"
                                    />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    {/* Input Type text,email,hidden,number,tel */}
                                    <input
                                    type="email"
                                    name="email"
                                    defaultValue=""
                                    placeholder="Email"
                                    required
                                    autoComplete="false"
                                    className="getEmailAddress form-control email-check"
                                    />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    {/* Input Type text,email,hidden,number,tel */}
                                    <input
                                    type="number"
                                    id=""
                                    className="form-control phone"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    required
                                    minLength={9}
                                    />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <input
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    defaultValue=""
                                    required
                                    autoComplete="false"
                                    className="form-control"
                                    />
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <input
                                    type="text"
                                    placeholder="Contact Message"
                                    name="subject"
                                    defaultValue=""
                                    required
                                    autoComplete="false"
                                    className="form-control"
                                    />
                                </div>
                                <div className="col-sm-12 mb-3">
                                    <input
                                    type="text"
                                    placeholder="6 + 5 = ?"
                                    name="subject"
                                    defaultValue=""
                                    required
                                    autoComplete="false"
                                    className="form-control"
                                    />
                                </div>
                                <div className="clickBtnform">
                                    <button type="submit">
                                    <span>Send</span>
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row footer-second">
                        <div className="col-md-2">
                        <a href="/" className="footer-logs">
                            <img
                            className=" lazyloaded"
                            data-src="img/logo-f.png"
                            width={208}
                            height={42}
                            src="img/logo-f.png"
                            />
                        </a>
                        </div>
                        <div className="col-md-4">
                        <h3>Know More About Webnet</h3>
                        <ul className="footer-ul">
                            <li>
                            <a href="/about-us-overview">About us</a>
                            </li>
                            <li>
                            <a href="/ecommerce-solutions/"> Ecommerce Software</a>
                            </li>
                            <li>
                            <a href="/cms-solutions/custom-cms-services">Custom CMS</a>
                            </li>
                            <li>
                            <a href="/blog">Blog </a>
                            </li>
                            <li>
                            <a href="/contact-us">Contact us</a>
                            </li>
                            <li>
                            <a href="/portfolio">portfolio</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-4">
                        <h3>Services</h3>
                        <ul className="footer-ul footer-2">
                            <li>
                            <a href="/affordable-website-pricing">Website Design Solution</a>
                            </li>
                            <li>
                            <a href="/digital-marketing-services">Digital Marketing</a>
                            </li>
                            <li>
                            <a href="/graphic-designing/">Graphic Designing</a>
                            </li>
                            <li>
                            <a href="/point-of-sale-web-application-solution">
                                Web App Solutions
                            </a>
                            </li>
                            <li>
                            <a href="/application-development">App Development</a>
                            </li>
                        </ul>
                        </div>
                        <div className="col-md-2">
                        <h3>Stay Connected</h3>
                        <ul className="social-footer">
                            <li>
                            <a href="https://www.facebook.com/WebNetPK" rel="me">
                                <i className="fab fa-facebook" />
                            </a>
                            </li>
                            <li>
                            <a href="https://twitter.com/WebNetPK" rel="me">
                                <i className="fab fa-twitter" />
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.linkedin.com/company/webnet-pakistan-pvt-ltd/"
                                rel="me"
                            >
                                <i className="fab fa-linkedin" />
                            </a>
                            </li>
                            <li>
                            <a
                                href="https://www.youtube.com/channel/UCrWf2l-7yRxGcL-HzwKAunw"
                                rel="me"
                            >
                                <i className="fab fa-youtube" />
                            </a>
                            </li>
                            <li>
                            <a href="https://www.instagram.com/webnetpk/" rel="me">
                                <i className="fab fa-instagram" />
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                    <hr />
                    <div className="footer__copyright">
                        <p>
                        © 2023
                        <a href="/">Webnet Pakistan (Pvt) Ltd.</a> All rights reserved.
                        </p>
                        <div className="bottom_Right">
                        <p>
                            {" "}
                            <a href="/terms-conditions">Terms &amp; Conditions</a>
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}