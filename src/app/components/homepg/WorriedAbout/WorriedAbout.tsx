import dynamic from "next/dynamic";

const WorriedAbou: React.FC<{ data: any }> = ({ data }) => {
  //console.log("Worried About: ", data);
  return (
    <>
      {/* orange,yellow,green,blue,purple, pink */}
      <section id="counter" className="worried sec_5">
        <div className="container">
          <div className="row">
            <div className="col-md-1" />
            <div className="col-md-10">
              <div className="worried_about">
                <h2>{data.heading}</h2>
                <h3>{data.sub_heading}</h3>
                <div dangerouslySetInnerHTML={{ __html: data.text }} />
                <h4>{data.color_heading}</h4>
                <div className="projectFactsWrap ">
                  <ul id="counter" className="facts-ul">
                    {data.box.map((box: any) => (
                      <>
                        <li>
                          <div className="facts-div">
                            <span className="count percent" data-count={box.count}>
                            {box.count}
                            </span>
                            <p>{box.name}</p>
                          </div>
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="">
                  <a href={data.link}>{data.btn}</a>
                </div>
              </div>
            </div>
            <div className="col-md-1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(WorriedAbou), { ssr: false });
