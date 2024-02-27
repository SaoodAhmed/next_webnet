import React from 'react'

import Head from "next/head";
import Banner from "../components/AccountPage/Banner/Banner";
import InspiringServices from "../components/homepg/InspiringService/InspServic";
import Servic from "../components/homepg/Hero/Service";
import Gestures from "../components/aboutpg/BeliefsGestures/Gestures";
import CoreBeliefs from "../components/AccountPage/CoreBelief/CoreBelief";
import GetExp from "../components/AccountPage/GetExp/GetExp";
import SeoWebsite from "../components/aboutpg/SeoWebsit/SeoWebsite";
import GetExpOne from "../components/AccountPage/GetExp1/GetExp1";
import BookAppointment from "../components/homepg/BookApointment/Appointment";




const Page = async () => {
    
  return (
        <>
            
            <Banner/>
            {/* <Servic /> */}
            <Gestures/>
            <CoreBeliefs/>
            <GetExp/>
            <GetExpOne/>
            <BookAppointment/>
            
             
        </>
  )
}

export default Page