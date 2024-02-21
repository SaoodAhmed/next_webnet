import dynamic from "next/dynamic"

const  WorriedAbou = () => {
    return (
        <>
        {/* orange,yellow,green,blue,purple, pink */}
        <section id="counter" className="worried sec_5">
          <div className="container">
            <div className="row">
              <div className="col-md-1" />
              <div className="col-md-10">
                <div className="worried_about">
                  <h2>Worried about website getting slow</h2>
                  <h3>
                    Company Websites is the driving force for your customers
                    interaction
                  </h3>
                  <p>
                    Webnet also offers custom CMS services to develop your website
                    with robust and user-friendly management. There are many{" "}
                    <strong>types of CMS ,</strong> but with years of experience in
                    web development, we have built a powerful CMS consisting of
                    experiencing the result of 500+ websites developed. We guarantee
                    fast, user-friendly, and hack-free website development.{" "}
                  </p>
                  <h4>ANALYZE OUR EXPERIENCE &amp; DEDICATION FROM OUR WORK</h4>
                  <div className="projectFactsWrap ">
                    <ul id="counter" className="facts-ul">
                      <li>
                        <div className="facts-div">
                          <span className="count percent" data-count={100}>
                            0
                          </span>
                          <p>Projects Completed</p>
                        </div>
                      </li>
                      <li>
                        <div className="facts-div">
                          <span className="count percent" data-count={1000}>
                            0
                          </span>
                          <p>Projects Completed</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="">
                    <a href="#">CMS Software</a>
                  </div>
                </div>
              </div>
              <div className="col-md-1" />
            </div>
          </div>
        </section>
      </>
      
    )
}

export default dynamic (() => Promise.resolve(WorriedAbou), {ssr: false})
