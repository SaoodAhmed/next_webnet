export default function BlogListOne() {
    return (
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="eql-img">
                            {/* image should be 1024 X 512 */}
                            <a href="#" className="eql-img-link">
                                <figure>
                                    <img src="img/blog-4.jpg" alt="" />
                                </figure>
                            </a>
                            <a href="#">
                                <span htmlFor="">APP DEVELOPMENT</span>
                            </a>
                            <a href="#">
                                <h2>4 Ways to Create Mobile Application</h2>
                            </a>
                            <p>
                                In today’s modern and fast-paced world, mobile application has
                                expanded at a warp speed. Resultantly, mobile marketing is becoming
                                super-competitive. It is tough challenge for any business to gain
                                visibility. That’s why; you need to get particular about
                                professional
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="eql-img">
                            {/* image should be 1024 X 512 */}
                            <a href="#" className="eql-img-link">
                                <figure>
                                    <img src="img/blog-5.png" alt="" />
                                </figure>
                            </a>
                            <a href="#">
                                <span htmlFor="">E-COMMERCE</span>
                            </a>
                            <a href="#">
                                <h2>How to make a drop shipping websites?</h2>
                            </a>
                            <p>
                                Start your dropshipping business by getting a highly-functional
                                website developed, searching for credible suppliers, and targetting
                                new market segments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}