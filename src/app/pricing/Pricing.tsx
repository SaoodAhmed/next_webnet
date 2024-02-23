import React from "react";

const Pricing: React.FC<{ data: any }> = ({ data }) => {
  console.log("Princing: ", data);
  const { type, page, components } = data;

  console.log("components: ", components);
  return (
    <>
      <section className="packages_sec purple">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              {components.map((item: any) => {
                if (item.type === "pricing-1") {
                  return (
                    <>
                      <div key={item.id}>
                        <h2>{item.meta.heading}</h2>
                        <p>{item.meta.text}</p>
                      </div>
                    </>
                  );
                }
              })}
            </div>
            <div id="no-more-tables" className="">
              <table className="col-md-12 table table-bordered">
                <thead className="cf">
                  <tr>
                    <th className="numeric" colSpan={1}>
                      <h3>Technical SEO</h3>
                      <h2>
                        <strong />
                        <span />
                      </h2>
                    </th>
                    <th className="numeric" colSpan={1}>
                      <h3>SEO Plan # 1</h3>
                      <h2>
                        <strong>PKR</strong>
                        50,000 <span>/Month</span>
                      </h2>
                    </th>
                    <th className="numeric" colSpan={1}>
                      <h3>SEO Plan # 2</h3>
                      <h2>
                        <strong>PKR</strong>
                        50,000 <span>/Month</span>
                      </h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td className="numeric" colSpan={1}>
                      Keywords Research &amp; Analysis
                    </td>
                    <td className="numeric mx-auto" colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png "
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Keywords Volume Checking
                    </td>
                    <td className="numeric" colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric" colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      301 Redirection
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Google Business Account Setup
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Google Search Console Setup
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Website Technical Errors Resolution
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Number of Pages Optimization
                    </td>
                    <td className="numeric" colSpan={1}>
                      10 Pages
                    </td>
                    <td className="numeric" colSpan={1}>
                      25 Pages
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Blogs Writing and Optimization Per Month
                    </td>
                    <td className="numeric" colSpan={1}>
                      2 Blogs
                    </td>
                    <td className="numeric" colSpan={1}>
                      3 Blogs
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Monthly Reporting With Keywords Position
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                    <td className="numeric " colSpan={1}>
                      <img
                        src="https://webnet.imagiacian.com/public/assets_frontend/img/check-purple.png"
                        className="mx-auto"
                      />
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      Allocated Working Hours Per Day
                    </td>
                    <td className="numeric" colSpan={1}>
                      2 Hours
                    </td>
                    <td className="numeric" colSpan={1}>
                      3 Hours
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="secHead text-center" colSpan={3}>
                      Expected Results
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      All Keywords Position ( 2nd Month )
                    </td>
                    <td className="numeric" colSpan={1}>
                      40th Position
                    </td>
                    <td className="numeric" colSpan={1}>
                      40th Position
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      3rd Month
                    </td>
                    <td className="numeric" colSpan={1}>
                      30th Position
                    </td>
                    <td className="numeric" colSpan={1}>
                      30th Position
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      5th Month
                    </td>
                    <td className="numeric" colSpan={1}>
                      20th Position
                    </td>
                    <td className="numeric" colSpan={1}>
                      20th Position
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      7th Month
                    </td>
                    <td className="numeric" colSpan={1}>
                      Top 10
                    </td>
                    <td className="numeric" colSpan={1}>
                      Top 10
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <td className="numeric" colSpan={1}>
                      8th Month
                    </td>
                    <td className="numeric" colSpan={1}>
                      Top 5
                    </td>
                    <td className="numeric" colSpan={1}>
                      Top 5
                    </td>
                  </tr>
                </tbody>
              </table>
              {components.map((item: any) => {
                if (item.type === "pricing-1") {
                  return (
                    <>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.meta.note }}
                      />
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
      {/*  leads yellow purple orange green pink blue*/}
      <section className="leads yellow">
        <div className="container">
          <div
            className="row"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            {
              components.map((item:any)=>{
                if(item.type === 'content-1'){
                  return (
                    <>
                      <div className="col-md-6 ">
                      <h3>{item.meta.top_heading}</h3>
                      <h2>{item.meta.heading}</h2>
                      <h4>{item.meta.sub_heading}</h4>
                      <div dangerouslySetInnerHTML={{__html:item.meta.content}}/>
                      </div>
                      <div className="col-md-6 " data-aos="flip-left">
                        <img
                          className=""
                          alt="rwar"
                          src={`${process.env.PUBLIC_URL}${item.meta.img}`}
                        />
                      </div>
                    
                    </>
                  )
                }
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
