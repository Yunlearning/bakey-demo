import Image from "next/image";

import TopNav from './ui/homePage/topNav';
import Carousel from "./ui/components/Carousel";
// import { EmblaOptionsType } from 'embla-carousel'
// import EmblaCarousel from "./ui/components/testEmbla/EmblaCarousel";
import Introduce from "./ui/homePage/Introduce";
import Footer from "./ui/homePage/Footer";


// const OPTIONS: EmblaOptionsType = { loop: false }
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <TopNav />
      {/* <div style={{
        position: 'sticky',
        top: '220px',
        width: '100%',
        boxShadow: '0px 0.5px 0.5px 1.5px rgba(0,0,0,0.75)',
      }}></div>
      <div className=""></div> */}
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <Carousel />
      <Introduce />
      <Footer />
    </main>
  );
}
