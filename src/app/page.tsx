import Head from "next/head";
import Video from "./components/homepg/Hero/Video";
import Servic from "./components/homepg/Hero/Service";
import InspiringServices from "./components/homepg/InspiringService/InspServic";
import AboutUs from "./components/homepg/AboutUs/AboutUs";
import BgChair from "./components/homepg/BgChair/BgChair";
import WebNetSeo from "./components/homepg/SeoWebnet/WebNetSeo";
import WorriedAbou from "./components/homepg/WorriedAbout/WorriedAbout";
import TailorMadeWebsite from "./components/homepg/Tailor/Tailor";
import Served from "./components/homepg/Served/Served";
import ClientExpect from "./components/homepg/ClientExpect/ClientExpectation";
import BookAppointment from "./components/homepg/BookApointment/Appointment";




const  fetchHomePageData = async ()=>{
  try {
      const res = await fetch(`${process.env.BASE_URL}/api/page`,{cache:'no-store'})
      console.log("Home response: " + res.ok)
      if(!res.ok){
          throw new Error('Data fetching fail')
      }

      const result = await res.json()
      return result
      
      
  } catch (error) {
      console.log(error)
      
  }

}



export default async function Home() {
  const {type, page, components} = await fetchHomePageData()
    console.log("Home Page Data", components[2].meta)
  return (
    <>
    {
      components.map((item:any, i:number)=>{
        if(item.type === 'header-1'){
          return <Video data={item.meta} />
        }else if(item.type === 'content-1'){
          return <Servic data = {item.meta} />
        }else if(item.type==='icons-1'){
          return <InspiringServices data={item.meta}/>
        }else if(item.type === 'content-2'){
          return <WebNetSeo data={item.meta} />
        }else if(item.type === 'counter-1'){
          return <WorriedAbou data={item.meta} />
        }else if(item.type === "content-3"){
          return <TailorMadeWebsite data={item.meta} />
        }else if(item.type === "clients-1"){
          return <Served data={item.meta}/>
        }else if(item.type === "testimonials-1"){
          return <ClientExpect data = {item.meta}/>
        }


      })
    }
      
      {/* <Servic />
      <InspiringServices />
      <AboutUs />
      <BgChair />
      <WebNetSeo />
      <WorriedAbou />
      <TailorMadeWebsite />
      <Served />
      <ClientExpect />
      <BookAppointment/>    */}
    </>
  );
}
