export default function BlogList() {
    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="big-img">
                            {/* image should be 573 X 300 */}
                            <a href="#" className="big-img-link">
                                <figure>
                                    <img src="img/blog-1.jpg" alt="" />
                                </figure>
                            </a>
                            <a href="#">
                                <span>SEO</span>
                            </a>
                            <a href="#">
                                <h2>
                                    Duplicate, submitted URL not selected as canonical, HOW TO FIX?
                                </h2>
                            </a>
                            <p>
                                For SEO, content duplication is one of the major problems many
                                websites come across, and still, there is no indication of why this
                                is happening even though everything seems okay.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="sml-img">
                                    {/* image should be 573 X 300 */}
                                    <a href="#" className="sml-img-link">
                                        <figure>
                                            <img src="img/blog-2.jpg" alt="" />
                                        </figure>
                                    </a>
                                    <a href="#">
                                        <span htmlFor="">E-COMMERCE</span>
                                    </a>
                                    <a href="#">
                                        <h4>
                                            5 Best CMS for Ecommerce 2022 | Complete analysis of top
                                            Ecommerce CMS
                                        </h4>
                                    </a>
                                    <p>
                                        It is everyone's dream to find the best ecommerce CMS (Content
                                        Management System) for their ecommerce business website. Top
                                        ecommerce CMS ultimate goal is to build a flexible, scalable,
                                        and highly-functional e-commerce feature website.{" "}
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="sml-img">
                                    {/* image should be 573 X 300 */}
                                    <a href="#" className="sml-img-link">
                                        <figure>
                                            <img src="img/blog-3.png" alt="" />
                                        </figure>
                                    </a>
                                    <a href="#">
                                        <span htmlFor="">E-COMMERCE</span>
                                    </a>
                                    <a href="#">
                                        <h4>
                                            Multi-Vendor Marketplace Benefits for eCommerce Business
                                        </h4>
                                    </a>
                                    <p>
                                        The eCommerce industry is booming nowadays, and with the current
                                        progress, entrepreneurs worldwide are trying to enter into this
                                        market segment to get a high share of income.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}