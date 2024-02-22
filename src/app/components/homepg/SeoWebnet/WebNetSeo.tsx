import dynamic from "next/dynamic";

const WebNetSeo: React.FC<{ data: any }> = ({data}) => {
  console.log("webnet seo: ",data)
  return (
    <>
      <section className="clippath-sec">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center ">
              <div className="flex justify-center gap-x-1">
                <div className="mt-[3px]">

                  <img alt="" className="img-fluid " src={`${process.env.PUBLIC_URL}${data.logo}`} />
                </div>
               
                
                <h3 className="">{data.sub_title}</h3>
              </div>
              <h2>{data.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: data.text }} />
            </div>
          </div>
        </div>
        <div className="main-img">
          <img alt="" className="" src={`${process.env.PUBLIC_URL}${data.image}`}/>
        </div>
      </section>
    </>
  );
};

export default dynamic(() => Promise.resolve(WebNetSeo), { ssr: false });
