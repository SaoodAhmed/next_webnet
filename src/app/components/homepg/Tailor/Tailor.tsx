import dynamic from "next/dynamic";



const TailorMadeWebsite: React.FC<{data:any}> = ({data}) => {
  //console.log("Tailor Made: ", data)
  return (
    <>
      {/* chair bg section */}
      <section
        className="brown-section"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${data.image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                {data.heading}
              </h2>
              <h3>
                {data.sub_heading}
              </h3>
              <p>
                {data.text}
              </p>
              <a href={data.link}>{data.btn}</a>
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
