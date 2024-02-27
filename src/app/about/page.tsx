import Banner from "../components/aboutpg/Banner/Banner";
import HeadText from "../components/aboutpg/HeadText/HeadText";
import AboutFace from "../components/aboutpg/InventDesign/AboutFace";
import Offices from "../components/aboutpg/Offices/Offices";
import Gestures from "../components/aboutpg/BeliefsGestures/Gestures";
import BookAppointment from "../components/homepg/BookApointment/Appointment"; // common

const Page = () => {
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
};

export default Page;
