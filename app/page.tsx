import Image from "next/image";

import TopNav from './ui/homePage/topNav';
import Carousel from "./ui/components/Carousel";
// import { EmblaOptionsType } from 'embla-carousel'
// import EmblaCarousel from "./ui/components/testEmbla/EmblaCarousel";
import Introduce from "./ui/homePage/Introduce";
import Footer from "./ui/homePage/Footer";

import { ProductCarousel } from "@/app/ui/components/product/productCarousel";
const images = [
  // "/bagel/bagel-1.jpg",
  // "/bagel/bagel-2.webp",
  // "/bagel/bagel-3.png",
  // "/bagel/bagel-4.jpg",
  // "/bagel/bagel-5.jpg",
  // "/bagel/bagel-6.webp",
  "/sample/bridge-01@2x.png",
  "/sample/bridge-02@2x.png",
  "/sample/bridge-03@2x.png",
]
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
    // 
    // <div
    //   style={{
    //     width: '100vw',
    //     height: '100vh',
    //     overflow: 'hidden',
    //     margin: 0,
    //     padding: 0,
    //     display: 'flex',
    //     justifyContent: 'start',
    //     alignItems: 'center',
    //   }}>
    //   <div
    //     style={{
    //       width: '100vw',
    //       height: '100vh',
    //       position: 'relative',
    //       display: 'flex',
    //       justifyContent: 'start',
    //       alignItems: 'center',
    //     }}
    //   >
    //     <ProductCarousel images={images} />
    //   </div> </div>
  );
}
