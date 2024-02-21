import React from 'react'
import dynamic from 'next/dynamic'
const Icons = () => {
    return (
        <section className="blog-social">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12">
                            <div className="blog-social-ican">
                                <p>Like this article? Spread the word.</p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ backgroundColor: "#00acee" }}>
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ backgroundColor: "#0e76a9" }}>
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default dynamic (() => Promise.resolve(Icons), {ssr: false})
