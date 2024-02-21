import React from 'react'

const SubWebnet = () => {
    return (
        <section className="subscribe_section">
            <div className="subscribe_webnet">
                <img src="img/rainbow.jpg" alt="" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="subscribe_sec">
                            <div className="subscribe_left">
                                <h2>Subscribe to WEBNET</h2>
                                <p>
                                    Get our daily newsletter from WEBNET's Founder mobile is being
                                    used for mobile and desktop is going to be used for desktop!
                                </p>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-4">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="mb-4">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="exampleInputEmail1"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Topic of Interest"
                                                />
                                            </div>
                                        </div>
                                        <label>Topic(S) of Interest*</label>
                                        <div className="col-md-12">
                                            <div className="form-check form-check-inline radio_btn">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio1"
                                                    defaultValue="option1"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio1">
                                                    SEO
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline radio_btn">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio2"
                                                    defaultValue="option2"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio2">
                                                    PPC
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline radio_btn">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio3"
                                                    defaultValue="option1"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio3">
                                                    Content
                                                </label>
                                            </div>
                                            <div className="form-check form-check-inline radio_btn">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio4"
                                                    defaultValue="option2"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio4">
                                                    Social
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-sub">
                                        <button>
                                            <span>Subscribe</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="subscribe_right">
                                <h2>Strengthening your business by building an effective team</h2>
                                <p>
                                    Kindly share with us any parts of your company that are causing
                                    you concern or that you wish to enhance. Outsourcing could
                                    potentially be a solution, but it may not be the best option.
                                    After a brief conversation with us, you will be able to determine
                                    whether or not it is suitable for your company. Please contact us,
                                    and we will address any queries you may have.
                                </p>
                                <p>
                                    We are eager to discuss with you how WEBNET can assist your
                                    business.
                                </p>
                                <a href="tel:123-456-7890">
                                    Call Now: <span>+92 3403701111</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SubWebnet