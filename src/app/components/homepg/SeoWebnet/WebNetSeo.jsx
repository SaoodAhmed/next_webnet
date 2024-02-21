import dynamic from "next/dynamic"

const WebNetSeo = () => {
    return (
        <>
            <section className="clippath-sec">
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12 text-center">
                        <h3>
                        <img alt="" classname="img-fluid" src="img/logo-black.png" />
                        expertise in SEO-friendly
                        </h3>
                        <h2>Website Design and Development services</h2>
                        <p>
                        Webnet has years of experience in web design and development services,
                        contributing to over 1000+ web designing websites developed globally.
                        Our websites are responsive (mobile-friendly), high performance, and
                        full of innovation and creativity.
                        </p>
                        <p>
                        A professional website design builds your business brand visibility on
                        digital media. A good quality website development also helps your web
                        design load faster and processes your web design interface to appear
                        to your end-user.
                        </p>
                        <p>
                        Web designing is the technical aspect of your website user experience
                        that your audience engages on your web. In other words, it portrays
                        your business image, and SEO-friendly website design and development
                        is a necessity of the era. Our team of professionals - Web designers,
                        Graphic Designers, Content Writers, and Web Developers makes sure to
                        develop you with a fantastic website.
                        </p>
                    </div>
                    </div>
                </div>
                <div className="main-img">
                    <img alt="" className="" src="img/curve-bg-style.jpg" />
                </div>
                </section>

        </>
    )
}

export default dynamic (() => Promise.resolve(WebNetSeo), {ssr: false})
