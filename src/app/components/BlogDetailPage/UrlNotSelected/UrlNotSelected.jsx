import Cnav from "../../aboutpg/CNav/Cnav"




const UrlNotSelected = () => {
    return (
        <section
            className="banner-page leftBanner"
            style={{ backgroundImage: 'url("img/blog-detail.png")' }}
        >
            <Cnav />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="duplicate">
                            <h1>
                                Duplicate, submitted URL not selected as canonical, HOW TO FIX?
                            </h1>
                            <label>SEO</label>
                            <div className="">
                                <ul>
                                    <li>
                                        <i className="fa fa-clock" /> 10 min
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" /> Published April 4, 2023
                                    </li>
                                    <li>
                                        <i className="fas fa-user" /> Auther: Webnet Pakistan
                                    </li>
                                </ul>
                                <p>
                                    <strong>2554488 </strong> Reads
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default UrlNotSelected;
