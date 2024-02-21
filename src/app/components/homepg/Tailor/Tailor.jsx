import dynamic from "next/dynamic";

const TailorMadeWebsite = () => {
  return (
    <>
      {/* chair bg section */}
      <section
        className="brown-section"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        style={{ backgroundImage: "url(img/brown-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                Tailor-made website for your brand! Custom Web Design Services
              </h2>
              <h3>
                Get a custom web design to outclass your competition. This is
                our Guarantee
              </h3>
              <p>
                Get your brand presence with a custom web design and development
                that keeps your web visitors hovering the mouse around your
                pages. We develop Custom Applications that integrate into your
                web design to help you get complete control of your website by a
                professional custom website design by a professional web design
                and development team that guarantees bespoke design. Custom
                website designs are designed as-your-wish basis that is highly
                responsive, secure, easy to maintain, and tailor-made for your
                company's brand. No Templates, original website design to get a
                competitive advantage and impress your audience with a
                persuasive website design that is impactful, highly functional,
                sales-turning, and trust-generating.
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className="col-md-6" />
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(TailorMadeWebsite), {
  ssr: false,
});
