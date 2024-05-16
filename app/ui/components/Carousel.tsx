
"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { DotButton, useDotButton } from './CarouselDotBtn'
// import classes from './Carousel.module.css';
// import "./embla.css"
import Image from 'next/image';

const imagesPost = [
    {
        title: "1",
        image_cover: "/bread/bread1.jpg",
        blur_cover: "/bread/bread1.jpg",
        tag: "1",
    },
    {
        title: "2",
        image_cover: "/bread/bread2.jpg",
        blur_cover: "/bread/bread2.jpg",
        tag: "2"
    },
    {
        title: "3",
        image_cover: "/bread/bread3.jpg",
        blur_cover: "/bread/bread3.jpg",
        tag: "3"
    },
    {
        title: "4",
        image_cover: "/bread/bread4.jpg",
        blur_cover: "/bread/bread4.jpg",
        tag: "4"
    },
    {
        title: "5",
        image_cover: "/bread/bread5.jpg",
        blur_cover: "/bread/bread5.jpg",
        tag: "5"
    },
]

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 45 }
        // , [Autoplay()]
    )
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    return (
        <>
            <div className="overflow-hidden" ref={emblaRef}>
                {/* // Carousel container */}
                <div className="flex touch-pan-x touch-pinch-zoom">
                    {/* // Carousel slide's */}
                    {imagesPost.map((image: any, index) => (
                        <div
                            className="flex-none flex-grow-0 flex-shrink-0  w-full px-4"
                            // 透明度測試&顯示其他部分圖片
                            // className={`flex-none flex-grow-0 flex-shrink-0 basis-9/12 px-4 ${index !== selectedIndex ? "opacity-50" : ""}`}
                            key={image.title}
                        >
                            <div className='w-full relative' style={{ height: '500px' }}>
                                <Image
                                    src={image.image_cover}
                                    blurDataURL={image.blur_cover}
                                    layout='fill'
                                    objectFit="cover"
                                    className="rounded-lg"
                                    alt="cover image"
                                    placeholder="blur"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {/* ----- */}
            <div className='pt-10 pb-2 text-center'>
                <div className="flex flex-row flex-nowrap justify-center">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`mx-2 w-12 h-2 rounded-lg ${index === selectedIndex ? "bg-sky-400" : "bg-gray-300"}`}
                        />
                    ))}
                </div>
            </div>
        </>

    );
}