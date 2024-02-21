import dynamic from "next/dynamic";
import Image from "next/image";


interface ContentDataType {
  color:string,
  top_heading:string,
  heading:string,
  sub_heading:string,
  content:string,
  img:string,
}

const Servic: React.FC<{ data: ContentDataType }> = ({data})=>{
  return (
    <section className="leads orange">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <h3>
              {data.top_heading}
            </h3>
            <h2>{data.heading}</h2>
            <h4 className=" font-bold">{data.sub_heading}</h4>
            
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
          <div className="col-md-6 aos-init aos-animate" data-aos="flip-left">
            {/* <img class="" alt="" src="img/tr2.png" /> */}
            <Image src={`${process.env.PUBLIC_URL}${data.img}`} height={700} width={700} alt="Image 3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default dynamic(() => Promise.resolve(Servic))
