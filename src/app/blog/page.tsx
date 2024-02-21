import Head from "next/head";
import LeftBanner from "../components/BlogPage/LeftBanner/LeftBanner";
import NavBar from "../components/BlogPage/Navbar/NavBar";
import BlogList from "../components/BlogPage/BlogList/BlogList";
import BlogListOne from "../components/BlogPage/BlogList1/BlogListOne";
import FourWayMobileApp from "../components/BlogPage/fourWayMoblApp/FourWayMobileApp";
import BlogPagination from "../components/BlogPage/BlogPagination/BlogPagination";
import BookAppointment from "../components/homepg/BookApointment/Appointment";
import UrlNotSelected from "../components/BlogDetailPage/UrlNotSelected/UrlNotSelected";

function Page() {
  return (
    <>

<Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Webnet</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href=" https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css "
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
                />
                <link href="css/bootstrap.min.css" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/css/intlTelInput.css"
                />
                <link href="css/style.css" rel="stylesheet" />
                {/*  */}
            </Head>

            <LeftBanner/>
            <NavBar/>
            <BlogList/>
            <BlogListOne/>
            <FourWayMobileApp/>
            <BlogPagination/>
            <BookAppointment/>

            
    
    </>
  )
}

export default Page;