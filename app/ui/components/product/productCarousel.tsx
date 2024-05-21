"use client";
import * as React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
// import { wrap } from "popmotion";
// import { images } from "./image-data";

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    }
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};
interface ProductCarouselProps {
    images: string[]
}

interface testWrapperProps {
    start: number,
    length: number,
    currentNum: number
}
// return array index
// 取餘數，使分頁循環
const testWrapper = ({ start, length, currentNum }: testWrapperProps) => {
    currentNum = Math.abs(currentNum);
    return start + currentNum % length
}


export const ProductCarousel = ({ images }: ProductCarouselProps) => {
    const [[page, direction], setPage] = useState([0, 0]);
    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    // const imageIndex = testWrapper(0, images.length, page);
    const imageIndex = testWrapper({ start: 0, length: images.length, currentNum: page });

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <AnimatePresence initial={false} custom={direction}>
                {/* <motion.div
                    className="relative"
                    key={page}
                    // src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    <Image
                        src={images[imageIndex]}
                        alt="product"
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: '100vh',
                            objectFit: 'cover',
                            // objectFit: 'contain',
                        }}
                        width={500} height={500}
                    />
                </motion.div> */}
                <motion.img
                    className="absulute cursor-pointer object-cover h-screen"
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                />
            </AnimatePresence>
            <div className="next absolute top[50%] right-0 w-10 h-10 mr-1 rounded-full bg-white flex justify-center items-center cursor-pointer z-10" onClick={() => paginate(1)}>
                {/* {"‣"} */}
                <IoMdArrowDropright />
            </div>
            <div className="prev absolute top[50%] left-0 w-10 h-10 ml-1 rounded-full bg-white flex justify-center items-center cursor-pointer z-10"
                style={{ transform: "scale(-1)" }}
                onClick={() => paginate(-1)}>
                {/* {"‣"} */}
                <IoMdArrowDropright />
            </div>
        </>
    );
};
