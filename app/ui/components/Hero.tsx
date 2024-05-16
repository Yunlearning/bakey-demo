"use client"
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";


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
]

export default function Hero(props: any) {

    // emblaRef will be a reference to our carousel viewport
    const [emblaRef, embla] = useEmblaCarousel({

        align: "start",
        // aligns the first slide to the start
        // of the viewport else will align it to the middle.

        loop: true,
        // we need the carousel to loop to the
        // first slide once it reaches the last slide.

        skipSnaps: false,
        // Allow the carousel to skip scroll snaps if
        // it's dragged vigorously.

        inViewThreshold: 0.7,
        // percentage of a slide that need's to be visible
        // inorder to be considered in view, 0.7 is 70%.
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    // this function allow's us to scroll to the slide whose
    // id correspond's to the id of the navigation dot when we
    // click on it.

    const scrollTo = useCallback(
        (index: number) => embla && embla.scrollTo(index),
        [embla]
    );

    // set the id of the current slide to active id
    // we need it to correctly highlight it's corresponding
    // navigation dot.

    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);

    // make sure embla is mounted and return true operation's
    // can be only performed on it if it's successfully mounted.

    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    return (
        <div className="py-12 ">
            {/* title */}
            <div className="flex justify-center items-center pb-10">
                <h2 className="text-center text-black dark:text-gray-100 text-4xl font-bold">
                    Trending
                </h2>
            </div>

            {/* // Carousel viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
                {/* // Carousel container */}
                <div className="flex">
                    {/* // Carousel slide's */}
                    {imagesPost.map((post: any) => (
                        <div
                            className="relative flex flex-none flex-wrap lg:flex-nowrap w-full "
                            key={post.title}
                        >
                            {/* <div className="overflow-hidden cursor-pointer lg:w-1/2">
                                <Link href={`/`}>
                                    <Image
                                        src={post.image_cover}
                                        layout='fill'
                                        objectFit="contain"
                                        className="rounded-lg"
                                        alt="cover image"
                                        placeholder="blur"
                                        blurDataURL={post.blur_cover}
                                    />
                                </Link>
                            </div> */}
                            <div style={{ width: '100%', height: '500px', position: 'relative' }}>
                                <Image
                                    alt='Mountains'
                                    src={post.image_cover}
                                    layout='fill'
                                    objectFit='cover'
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}