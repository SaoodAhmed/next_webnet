import Cnav from "../../aboutpg/CNav/Cnav";

export default function Banner(){
    return (
        <>
            <section
                className="banner-page"
                style={{ backgroundImage: 'url("img/web-banner.jpg")' }}
                >
                    <Cnav/>
                
                <div className="container">
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="text_area_1">
                        <h3>Simple Website</h3>
                        <h1>Be Simple Create Jingle</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}