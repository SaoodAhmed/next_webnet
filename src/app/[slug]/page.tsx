import React from "react";
import Pricing from "../pricing/Pricing";

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





  if(pageData.page.slug === 'pricing'){
    console.log(pageData.page.slug === 'pricing')
    return (
      <>
      
        <Pricing data={pageData}/>
  
      </>
    );

  }else if(pageData.page.slug === 'about-us-page'){

    return (
      <>
      
        <div></div>
  
      </>
    );

  }





};

export default dynamicPage;
