import dynamic from "next/dynamic"


const NavBar=() => {
    return (
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <ul className="bloglinks-ul">
                            <li>
                                <a href="#">E-COMMERCE</a>
                            </li>
                            <li>
                                <a href="#">CUSTOM CMS</a>
                            </li>
                            <li>
                                <a href="#">WEB DESIGN</a>
                            </li>
                            <li>
                                <a href="#">DIGITAL MARKETING</a>
                            </li>
                            <li>
                                <span>
                                    MORE
                                    <i className="fa fa-caret-down" aria-hidden="true" />
                                </span>
                                <ul>
                                    <li>
                                        <a href="#">WEBSITE DEVELOPMENT</a>
                                    </li>
                                    <li>
                                        <a href="#">CORPORATE WEBSITES</a>
                                    </li>
                                    <li>
                                        <a href="#">SEO</a>
                                    </li>
                                    <li>
                                        <a href="#">TECHNOLOGY</a>
                                    </li>
                                    <li>
                                        <a href="#">APP DEVELOPMENT</a>
                                    </li>
                                    <li>
                                        <a href="#">WEB MAINTENANCE</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <a href="#">
                            <button
                                className="b-a-btn blog-b-btn"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Post Your Own Article
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default dynamic (() => Promise.resolve(NavBar), {ssr: false})
