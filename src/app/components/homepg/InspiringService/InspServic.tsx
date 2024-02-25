import { Key } from "lucide-react";
import dynamic from "next/dynamic";

const InspiringServices: React.FC<{ data: any }> = ({ data }) => {
  const { icons } = data;
  //console.log("its icons", icons);
  //console.log("Services: " + data);
  return (
    <section className="img-head-text green">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="">{data.top_heading}</h3>
            <h2>{data.heading}</h2>
            <h2>{data.sub_heading}</h2>
            {/* <h3>About Webnet Pakistan</h3>
                    <h2>A leading digital company in Pakistan that grows you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae tincidunt purus</p> */}
          </div>
        </div>
        <div
          className="row mt-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <div className="col-sm">
            <div
              className="row"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="col-2">
                {icons.img.map((image: any) => {
                  return (
                    <img
                      src={`${process.env.PUBLIC_URL}${image}`}
                      alt="image"
                      className="img-fluid"
                    />
                  );
                })}
              </div>
              <div className="col-10">
                {icons.title.map((title: string, i: number) => (
                  <>
                    <h2>
                      <a href={`${icons.link?.[i]}`}>{title}</a>
                    </h2>
                  </>
                ))}

                {icons.short_desc.map((short_text: string) => (
                  <h5>{short_text}</h5>
                ))}

                {icons.link_text.map((linkText: string, i: number) => (
                  <a href={icons.link[i]}>{linkText}</a>
                ))}

                <div className="read-more-a">
                  {icons.long_desc.map((longText: string, i: number) => (
                    <>
                      <p className="moreText" style={{ display: "none" }}>
                        {longText}
                      </p>
                      <a href={icons.link[i]} className="rdbtn">
                        Read More <i className="fa fa-plus-circle" />
                      </a>
                      <a
                        href={icons.link[i]}
                        className="rdless"
                        style={{ display: "none" }}
                      >
                        Read Less <i className="fa fa-minus-circle" />
                      </a>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-sm">
            <div
              className="row"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="col-2">
                <img src="img/img1.png" alt="image" className="img-fluid" />
              </div>
              <div className="col-10">
                <h2>
                  <a href="#">Graphic Designing Services</a>
                </h2>
                <h5>
                  Make your brand speak louder for impactful positioning in the
                  market with creative designing
                </h5>
                <a href="#">Web Application Development</a>
                <div className="read-more-a">
                  <p className="moreText" style={{ display: "none" }}>
                    Webnet Pakistan has developed many web application software
                    and has experience in the agile development of any web
                    application required for your business. Our company had been
                    providing web services for a decade and has been a pioneer
                    in web application development for custom large-scale
                    applications.
                  </p>
                  <a href="#" className="rdbtn">
                    Read More <i className="fa fa-plus-circle" />
                  </a>
                  <a href="#" className="rdless" style={{ display: "none" }}>
                    Read Less <i className="fa fa-minus-circle" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="row"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="col-2">
                <img src="img/img1.png" alt="image" className="img-fluid" />
              </div>
              <div className="col-10">
                <h2>
                  <a href="#">Digital Marketing ServicesM</a>
                </h2>
                <h5>
                  Moving traffic towards your website via digital marketing for
                  your sales enhancement
                </h5>
                <a href="#">Web Application Development</a>
                <div className="read-more-a">
                  <p className="moreText" style={{ display: "none" }}>
                    Webnet Pakistan has developed many web application software
                    and has experience in the agile development of any web
                    application required for your business. Our company had been
                    providing web services for a decade and has been a pioneer
                    in web application development for custom large-scale
                    applications.
                  </p>
                  <a href="#" className="rdbtn">
                    Read More <i className="fa fa-plus-circle" />
                  </a>
                  <a href="#" className="rdless" style={{ display: "none" }}>
                    Read Less <i className="fa fa-minus-circle" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div
              className="row"
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >
              <div className="col-2">
                <img src="img/img1.png" alt="image" className="img-fluid" />
              </div>
              <div className="col-10">
                <h2>
                  <a href="#">Website Design Solutions</a>
                </h2>
                <h5>
                  We solve your problem of doing business and let you capture
                  maximum ROIs
                </h5>
                <a href="#">Web Application Development</a>
                <div className="read-more-a">
                  <p className="moreText" style={{ display: "none" }}>
                    Webnet Pakistan has developed many web application software
                    and has experience in the agile development of any web
                    application required for your business. Our company had been
                    providing web services for a decade and has been a pioneer
                    in web application development for custom large-scale
                    applications.
                  </p>
                  <a href="#" className="rdbtn">
                    Read More <i className="fa fa-plus-circle" />
                  </a>
                  <a href="#" className="rdless" style={{ display: "none" }}>
                    Read Less <i className="fa fa-minus-circle" />
                  </a>
                </div> 
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};
export default dynamic(() => Promise.resolve(InspiringServices), {
  ssr: false,
});
