

interface TestiNomialsType {
    id: number,
    title: null,
    description: string;
    name: string,
    designation: string,
    image: string,
    is_active: number,
    sort_order: 1,
    created_at: string,
    updated_at: string,
    deleted_at: null
}




export const testimonials = async () => {
  try {
    const res = await fetch(
      `${process.env.BASE_URL}/api/fetch-testimonials?limit=3`,
      { cache: "no-store" }
    );
    console.log(res.ok);

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default async function ClientExpect() {
  const testimonialsData:TestiNomialsType[] = await testimonials();
  // console.log(testimonialsData);

  return (
    <>
      <section className="client-section">
        <div className="container">
          <div className="shaderow">
            <div className="shade">
              <h2 className="shadow-text">Feedback</h2>
            </div>
          </div>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            <div className="col-sm-5">
              <div className="carousel-card">
                <div className="news__arrows">
                  <div className="news__dots" />
                </div>
                <div className="whats">
                  <h2>What our clients say</h2>
                  <p>
                    We have had the privilege of serving clients from a diverse
                    range of countries, including but not limited to the United
                    States of America, Canada, Saudi Arabia, Kuwait, and
                    Pakistan. Our experience working with clients from these
                    countries has enriched our understanding of different
                    cultures and business practices, and has helped us to better
                    serve our clients and provide tailored solutions to their
                    unique needs and challenges.
                  </p>
                  <div className="viewsuccess-btn">
                    <a href="#" className="">
                      Success Stories
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-7">
              <ul className="testimonials" style={{ listStyle: "none" }}>

                {/* {
                  testimonialsData.map((testinomial:TestiNomialsType)=>(
                  <li key={testinomial.id}>
                    <div className="test-item">
                      <h3>Aliff Logo Design</h3>
                      <strong>{testinomial.name}</strong>
                      <p>{testinomial.description}</p>
                    </div>
                  </li>

                  ))
                } */}


                {/* <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="test-item">
                    <h3>Aliff Logo Design</h3>
                    <strong>Naveed Mahmood</strong>
                    <p>
                      Very happy with the service provided. All modifications
                      were met promptly and done as asked so good job. P.s.
                      sorry for late response been very busy.
                    </p>
                  </div>
                </li> */}
              </ul>
            </div>
            {/* sm7 */}
          </div>
        </div>
        <div
          className="rains"
          style={{ backgroundImage: 'url("img/rainbow.jpg")' }}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="raincard">
                  <h2>Let’s work on a project together</h2>
                  <a href="#" className="">
                    Request a Quote
                  </a>
                </div>
              </div>
              <div className="col-sm-7"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
