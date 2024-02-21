import Link from "next/link"
import Cnav from "../CNav/Cnav"


export default function Banner(){
    return (
        <>
            <section
                className="banner-page leftBanner"
                style={{ backgroundImage: 'url("img/white-bg.jpg")' }}
                >
                <Cnav/>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-7">
                        <div className="text_area_1">
                        <h1>Empowering Your Digital Presence:</h1>
                        <h3>
                            Innovative Solutions in Digital Marketing and Software Development
                        </h3>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )
}