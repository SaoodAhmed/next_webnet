import Link from "next/link"



export default function Cnav() {
    return (

            <div className="container cnav">
                <div className="row">
                    <div className="col-md-12">
                        <div className="simple_web_top_link">
                            <ul>
                                <li>
                                    <a href="#" className="show_btn">
                                        Website Design Solution
                                    </a>
                                    <ul className="hide_dive">
                                        <li>
                                            <Link to="/account" href={"/account"}> Simple Website Design </Link>
                                        </li>
                                        <li>
                                            <Link to="/blog" href={"/blog"}> Website Redesign </Link>
                                        </li>
                                        <li>
                                            <a href="#"> Website Maintenance Services </a>
                                        </li>
                                        <li>
                                            <a href="#"> Ecommerce Website Development </a>
                                        </li>
                                        <li>
                                            <a href="#"> Hack Proof Website </a>
                                        </li>
                                        <li className="book_appointment">
                                            <a href="#" className="">
                                                Book Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="show_btn">
                                        Digital Marketing
                                    </a>
                                    <ul className="hide_dive">
                                        <li>
                                            <a href="#"> Simple Website Design </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Redesign </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Maintenance Services </a>
                                        </li>
                                        <li>
                                            <a href="#"> Ecommerce Website Development </a>
                                        </li>
                                        <li>
                                            <a href="#"> Hack Proof Website </a>
                                        </li>
                                        <li className="book_appointment">
                                            <a href="#" className="">
                                                Book Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="show_btn">
                                        Ecommerce Software
                                    </a>
                                    <ul className="hide_dive">
                                        <li>
                                            <a href="#"> Simple Website Design </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Redesign </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Maintenance Services </a>
                                        </li>
                                        <li>
                                            <a href="#"> Ecommerce Website Development </a>
                                        </li>
                                        <li>
                                            <a href="#"> Hack Proof Website </a>
                                        </li>
                                        <li className="book_appointment">
                                            <a href="#" className="">
                                                Book Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="show_btn">
                                        CMS Software
                                    </a>
                                    <ul className="hide_dive">
                                        <li>
                                            <a href="#"> Simple Website Design </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Redesign </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Maintenance Services </a>
                                        </li>
                                        <li>
                                            <a href="#"> Ecommerce Website Development </a>
                                        </li>
                                        <li>
                                            <a href="#"> Hack Proof Website </a>
                                        </li>
                                        <li className="book_appointment">
                                            <a href="#" className="">
                                                Book Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="show_btn">
                                        Graphic Designing
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="show_btn">
                                        Web App Solution
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="show_btn">
                                        App Development
                                    </a>
                                
                                    <ul className="hide_dive">
                                        <li>
                                            <a href="#"> Simple Website Design </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Redesign </a>
                                        </li>
                                        <li>
                                            <a href="#"> Website Maintenance Services </a>
                                        </li>
                                        <li>
                                            <a href="#"> Ecommerce Website Development </a>
                                        </li>
                                        <li>
                                            <a href="#"> Hack Proof Website </a>
                                        </li>
                                        <li className="book_appointment">
                                            <a href="#" className="">
                                                Book Appointment
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}