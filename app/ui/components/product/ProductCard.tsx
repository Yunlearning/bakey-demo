
"use client";
import Link from 'next/link';
import React from 'react';
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image"


interface ProductCardProps {
    img: {
        title: string,
        image_cover: string,
        blur_cover: string,
        tag: string,
        price: string,
        discount: string,
    }
    // animate: {
    //     x: number,
    //     y: number,
    //     rotate: number,
    // }
    // key: number
}
const container = {
    scale: { scale: 0.97 },
    hidden: { opacity: 0 },
}
const btnAnimate = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    show: {
        y: -10,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.3,
        }
    },
    hover: {
        y: -10,
        opacity: 1,
        transition: {
            ease: "easeOut",
            duration: 0.3,
        }
    },
}

export default function ProductCard({ img }: ProductCardProps) {
    const prefersReducedMotion = useReducedMotion()
    const isCloseBtnHover = prefersReducedMotion ? "hidden" : false
    return (
        <motion.div
            className="relative flex-initial w-1/2 p-4 md:w-1/4 "
            initial="hidden"
            // initial={isCloseBtnHover}
            whileHover="hover"
            whileTap={{ scale: 0.97 }}
        >
            <div

            >
                <Link href="/products/product/1" className="relative" >
                    <Image src={img.image_cover} alt={img.title}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                        width={500} height={500}
                    />
                    {/* <motion.div
                        className='absolute top-0 w-8 h-8 bg-green-400 rounded shadow'
                        animate={{ x: animate.x, y: animate.y, rotate: animate.rotate }}
                        transition={{ type: "spring" }}
                    /> */}
                </Link>
                <motion.button
                    className="w-full p-4 bg-orange-600 text-white text-center shadow-md"
                    variants={btnAnimate}
                >加入購物車</motion.button>
            </div>

            <div className="text-center pb-2">
                <p className="py-1">{img.title}</p>
                <p className="font-bold text-sky-400">NT$ {
                    img.discount !== "" ? img.discount : img.price
                }</p>
                {
                    img.discount !== "" &&
                    <p className="line-through text-gray-500">NT$ {img.price}</p>
                }
            </div>
        </motion.div>
    )
}