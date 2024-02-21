import dynamic from "next/dynamic";

const AboutUs=() => {
  return (
    <section className="img-head-text top-editr">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h3>About Webnet Pakistan</h3>
            <h2>Inspiring Website Services</h2>
            <h4>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              accumsan, nibh vitae pellentesque semper
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae tincidunt purusLorem ipsum dolor sit amet, consectetur
              adipiscing elit. Praesent vitae tincidunt purusLorem ipsum dolor
              sit amet, consectetur adipiscing elit. Praesent vitae tincidunt
              purusLorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent vitae tincidunt purusLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Praesent vitae tincidunt purus
            </p>
            <ul>
              <li>
                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b>{" "}
                Cras accumsan, nibh vitae pellentesque semper, mauris risus
                euismod quam, non molestie
              </li>
              <li>
                est nibh eget nisi. Nulla facilisis mauris id dui placerat, eget
                suscipit augue ornare. Aenean vel arcu elementum, consequat
                ligula tempor,
              </li>
              <li>
                dapibus enim. Nulla vitae cursus magna. Phasellus cursus
                pharetra leo accumsan consectetur.
              </li>
            </ul>
          </div>
        </div>
        <div
          className="row mt-2"
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
                <img src="img/img1.png" alt="image" className="img-fluid" />
              </div>
              <div className="col-10">
                <h2>
                  <a href="#">Web Application Software</a>
                </h2>
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
                  <a href="#">Graphic Designing Services</a>
                </h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default dynamic (() => Promise.resolve(AboutUs), {ssr: false})
