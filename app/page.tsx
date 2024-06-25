import Image from "next/image";
import Blogs from "./components/Blogs";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Sustainability from "./components/Sustainability";
import Marquee from "react-fast-marquee";
import Marque from './components/Marque'
import ReshapingSus from "./components/ReshapingSus";
import Results from "./components/Results"
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";
import Tech from "./components/Tech"
import Youtube from "./components/Youtube";

export default function Home() {
  return (
    <>
    <Youtube/>
    <Vision/>
    <Results/>
    {/* <Services/> */}
    <Sustainability/>
    <Blogs/>
    <Tech/>
    <ReshapingSus/>
    <Solutions/>
    <Marque/>
  <Footer/>
    </>
  );
}
