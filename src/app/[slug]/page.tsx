import React from "react";
import Pricing from "../pricing/Pricing";
import Banner from "../components/aboutpg/Banner/Banner";
import HeadText from "../components/aboutpg/HeadText/HeadText";
import AboutFace from "../components/aboutpg/InventDesign/AboutFace";
import Offices from "../components/aboutpg/Offices/Offices";
import Gestures from "../components/aboutpg/BeliefsGestures/Gestures";
import BookAppointment from "../components/homepg/BookApointment/Appointment";

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

const dynamicPage = async ({ params }: { params: { slug: string } }) => {
  
  const pageData = await fetchHomePageData(params.slug);
  console.log("page data: ",pageData)





  if(pageData.page.slug === 'pricing'){
    //console.log(pageData.page.slug === 'pricing')
    return (
      <>
      
        <Pricing data={pageData}/>
  
      </>
    );

  }else if(pageData.page.slug === 'about'){

    return (
      <>
      
            <Banner/>
            <HeadText/>
            <AboutFace/>  
            <Offices/>
            <Gestures/> 
            <BookAppointment/> 
  
      </>
    );

  }else if(pageData.page.slug === 'contact-us'){
    return (
      <>
      
      </>
    )
  }

};

export default dynamicPage;
