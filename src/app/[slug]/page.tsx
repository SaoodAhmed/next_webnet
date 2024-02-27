import React from "react";
import Pricing from "../pricing/Pricing";



// about us page
import Banner from "../components/aboutpg/Banner/Banner";
import HeadText from "../components/aboutpg/HeadText/HeadText";
import AboutFace from "../components/aboutpg/InventDesign/AboutFace";
import Offices from "../components/aboutpg/Offices/Offices";
import Gestures from "../components/aboutpg/BeliefsGestures/Gestures";
import BookAppointment from "../components/homepg/BookApointment/Appointment"; // common


// contact us page
import ContactUs from "../components/ContactUsPage/ContactUs";


// blog
import LeftBanner from "../components/BlogPage/LeftBanner/LeftBanner";
import NavBar from "../components/BlogPage/Navbar/NavBar";
import BlogList from "../components/BlogPage/BlogList/BlogList";
import BlogListOne from "../components/BlogPage/BlogList1/BlogListOne";
import FourWayMobileApp from "../components/BlogPage/fourWayMoblApp/FourWayMobileApp";
import BlogPagination from "../components/BlogPage/BlogPagination/BlogPagination";

const fetchHomePageData = async (slug: any) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/page/${slug}`, {
      cache: "no-store",
    });
    console.log("Home response: " + res.ok);
    if (!res.ok) {
      throw new Error("Data fetching fail");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const dynamicPage = async ({ params }: { params: { slug: any } }) => {
  const pageData = await fetchHomePageData(params.slug);
  console.log("parameter: ",params.slug)

  //console.log("page data: ", pageData);

  if (params.slug === 'pricing') {
    //console.log(pageData.page.slug === 'pricing')
    return (
      <>
        <Pricing data={pageData} />
      </>
    );
  } else if (params.slug === 'about') {
    return (
      <>
        <Banner />
        <HeadText />
        <AboutFace />
        <Offices />
        <Gestures />
        <BookAppointment />
      </>
    );
  } else if (params.slug === "contact") {
    return (
      <>
        <ContactUs />
      </>
    );
  } else if (params.slug === "blog") {
    return (
      <>
        <LeftBanner />
        <NavBar />
        <BlogList />
        <BlogListOne />
        <FourWayMobileApp />
        <BlogPagination />
        <BookAppointment />
      </>
    );
  } else {
    return (
      <p className="text-3xl font-semibold h-screen  text-slate-500 flex justify-center items-center">
        Page Not Found
      </p>
    );
  }
};

export default dynamicPage;
