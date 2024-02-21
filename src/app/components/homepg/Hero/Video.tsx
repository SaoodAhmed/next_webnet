

interface ObjectDataType {
    title_1: string,
    img_1: string,
    link_1: string,
    title_2: string,
    img_2: string,
    link_2: string,
    title_3: string,
    img_3: string,
    link_3: string,
    title_4: string,
    img_4: string,
    link_4: string,
    title_5: string,
    img_5: string,
    link_5: string,
    title_6: string,
    img_6: string,
    link_6: string,
    title_7: string,
    img_7: string,
    link_7: string,
  }
   

const Video: React.FC<{ data: ObjectDataType }> = async ({data})=>{
    //console.log("video:",data)
    
    return (
  
            <section className="videoWebnet">
                <div className="v-wraps">
                    <div className="overlay-video" />
                    <video
                    loop
                    autoPlay
                    muted
                    playsInline
                    width="100%"
                    height={240}
                    poster={`${process.env.PUBLIC_URL}/assets_frontend/img/908-Webnet-Header-2-3-(1).mp4`}
                    >
                    <source src={`${process.env.PUBLIC_URL}/assets_frontend/img/video2.mp4 `} type="video/mp4" />
                    <source src={`${process.env.PUBLIC_URL}/assets_frontend/img/video2.mp4 `} type="video/ogg" />
                    Your browser does not support the video tag.
                    </video>

                    {/* <video src="img/video2.mp4" poster="img/picture.webp" width={100} height={"240px"} autoPlay loop muted playsInline typeof="video/mp4"></video>
                    <video src="img/video2.mp4" poster="img/picture.webp" width={100} height={"240px"} autoPlay loop muted playsInline typeof="video/ogg"/> */}
                </div>
                <div className="nav-video">
                    <ul className="nav-lnks">
                    <li >
                        <a href={data.link_1}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyloaded"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv1.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv1.png`}
                            />
                            <img
                            className="ic-2 lazyloading"
                            data-src={`${process.env.PUBLIC_URL}${data.img_1}`}
                            width="100%"
                            height={254}
                            src={`${process.env.PUBLIC_URL}${data.img_1}`}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_1}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href={data.link_2}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyload"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv2.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv2.png`}
                            />
                            <img
                            className="ic-2 lazyload"
                            data-src={`${process.env.PUBLIC_URL}${data.img_2}`}
                            src={`${process.env.PUBLIC_URL}${data.img_2}`}
                            width="100%"
                            height={254}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_2}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href={data.link_3}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyload"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv3.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv3.png`}
                            />
                            <img
                            className="ic-2 lazyload"
                            data-src={`${process.env.PUBLIC_URL}${data.img_3}`}
                            src={`${process.env.PUBLIC_URL}${data.img_3}`}
                            width="100%"
                            height={254}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_3}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href={data.link_4}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyload"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv4.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv4.png`}
                            />
                            <img
                            className="ic-2 lazyload"
                            data-src={`${process.env.PUBLIC_URL}${data.img_4}`}
                            src={`${process.env.PUBLIC_URL}${data.img_4}`}
                            width="100%"
                            height={254}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_4}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href={data.link_5}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyload"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv5.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv5.png`}
                            />
                            <img
                            className="ic-2 lazyload"
                            data-src={`${process.env.PUBLIC_URL}${data.img_5}`}
                            src={`${process.env.PUBLIC_URL}${data.img_5}`}
                            width="100%"
                            height={254}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_5}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href={data.link_6}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyload"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv6.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv6.png`}
                            />
                            <img
                            className="ic-2 lazyload"
                            data-src={`${process.env.PUBLIC_URL}${data.img_6}`}
                            src={`${process.env.PUBLIC_URL}${data.img_6}`}
                            width="100%"
                            height={254}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_6}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    <li>
                        <a href={data.link_7}>
                        <div className="icon-hover">
                            <img
                            className="ic-1 lazyload"
                            data-src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv7.png`}
                            src={`${process.env.PUBLIC_URL}/assets_frontend/img/sv7.png`}
                            />
                            <img
                            className="ic-2 lazyload"
                            data-src={`${process.env.PUBLIC_URL}${data.img_7}`}
                            src={`${process.env.PUBLIC_URL}${data.img_7}`}
                            width="100%"
                            height={254}
                            />
                        </div>
                        <div className="lnk-in">
                            <span>
                            <em>{data.title_7}</em> <small />
                            </span>
                            <i className="fal fa-plus" />
                        </div>
                        </a>
                    </li>
                    </ul>
                </div>
            </section>
    )
}

export default Video


