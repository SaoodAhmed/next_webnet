import Cnav from "../../aboutpg/CNav/Cnav";

const LeftBanner = () => {
    return (
        <section
            className="banner-page leftBanner"
            style={{ backgroundImage: 'url("img/white-bg.jpg")' }}
        >
            <Cnav/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <div className="text_area_1">
                            <h3>Simple Website</h3>
                            <h1>Be Simple Create Jingle</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                                gravida elit sed ex ultrices, ac tincidunt eros accumsan. Etiam eu
                                neque a felis fringilla congue.
                            </p>
                            <div className="sblogdiv">
                                <input type="text" placeholder="Search Blog" />
                                <button>
                                    <img src="img/searchbtn.png" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default LeftBanner


