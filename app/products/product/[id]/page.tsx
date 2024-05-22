"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
    FiChevronDown,
} from "react-icons/fi";
import { FaPlus, FaMinus, FaShoppingBag, FaSearchPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { NumberInput } from "@/app/ui/components/inputs/inputComponents";
import { ProductCarousel } from "@/app/ui/components/product/productCarousel";
import { ModalWrapper, SpringModal } from "@/app/ui/components/SpringModal";

const ulVariants = {
    open: {
        opacity: 1,
        height: "auto"
    },
    close: {
        opacity: 0,
        height: 0
    }
}
const fadeVariants = {
    open: { opacity: 0.45 },
    closed: { opacity: 0 }
}
const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
}

const product = {
    id: 1,
    name: "紅莓女神貝果（奶素）",
    description: "粉紅爆擊 💕💕💕 一起享受五月份香甜粉色的環抱吧!!!",
    price: 50,
    tags: ["葷", "奶", "素", "蛋"],
    discount: {
        end: "2024/05/31 00:00",
        rules: [
            "全店，消費滿$1580享冷凍免運費",
            "全店，離島消費滿$2500免運費",
            "全店，限時活動⏱常溫配送滿$998 免運費",
            "其他優惠..."
        ]
    },
    img: [{
        src: "/bagel/bagel-1.jpg",
        alt: "紅莓女神貝果"
    },
    {
        src: "/bagel/bagel-2.webp",
        alt: "紅莓女神貝果"
    }, {
        src: "/bagel/bagel-3.png",
        alt: "紅莓女神貝果"
    }, {
        src: "/bagel/bagel-4.jpg",
        alt: "紅莓女神貝果"
    }, {
        src: "/bagel/bagel-5.jpg",
        alt: "紅莓女神貝果"
    }, {
        src: "/bagel/bagel-6.webp",
        alt: "紅莓女神貝果"
    }
    ]
}

const images = [
    "/bagel/bagel-1.jpg",
    "/bagel/bagel-2.webp",
    "/bagel/bagel-3.png",
    "/bagel/bagel-4.jpg",
    "/bagel/bagel-5.jpg",
    "/bagel/bagel-6.webp",
    // "/sample/bridge-01@2x.png",
    // "/sample/bridge-02@2x.png",
    // "/sample/bridge-03@2x.png",
]


const Mask = () => {
    const [isFade, setIsFade] = useState(false);
    return (
        <motion.div
            className="bg-slate-800 absolute top-0 left-0 w-full h-full rounded flex justify-center items-center"
            variants={fadeVariants}
            initial={false}
            animate={isFade ? "open" : "closed"}
            onMouseEnter={() => setIsFade(true)}
            onMouseLeave={() => setIsFade(false)}
        >
            <span className="text-white text-2xl"><FaSearchPlus /></span>
        </motion.div>
    )
}



export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [count, setCount] = useState(1);
    const [imgIndex, setImgIndex] = useState(0);
    const [clickImgIndex, setClickImgIndex] = useState(0);
    const handleExpand = () => {
        setExpanded(!expanded);
    }
    const handleModalOpen = (index: number) => {
        setIsOpen(true);
        setClickImgIndex(index);
    }
    const handleCount = (e: React.MouseEvent<HTMLLIElement>, action: string) => {
        e.preventDefault();
        if (action === "add") {
            count + 1 > 99 ? setCount(99) : setCount(count + 1);
        } else {
            count - 1 < 1 ? setCount(1) : setCount(count - 1);

        }
    }
    return (

        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/", active: false },
                    { label: "Products", href: "/products", active: false },
                    { label: "個品", href: `/products/product/${[id]}`, active: true }
                ]}
            />


            <div className="flex flex-wrap flex-row px-2 md:px-8 lg:px-16">
                <div className="flex-initial w-full p-4 md:w-1/2 bg-white">
                    <div
                        className="w-full max-h-96 relative overflow-hidden flex justify-end items-center"
                    >
                        <ProductCarousel images={images} setImageIndex={setImgIndex} />
                    </div>
                    <div className="relative pt-4 flex flex-row justify-start gap-x-2 cursor-pointer">
                        {
                            product.img.map((img, index) => (
                                <motion.div
                                    key={index}
                                    // initial={false}

                                    // animate={isFade ? "open" : "closed"}
                                    // onMouseEnter={() => setIsFade(true)}
                                    // onMouseLeave={() => setIsFade(false)}
                                    // initial={{ opacity: 1 }}
                                    className={`relative w-1/6 bg-orange-300 rounded
                                ${imgIndex === index ? "border-solid border-2 border-blue-400 " : ""
                                        }
                                `}

                                    onClick={handleModalOpen.bind(null, index)}
                                >
                                    <Image
                                        className="rounded"
                                        sizes="100vw"
                                        style={{
                                            width: '100vw',
                                            height: 'auto',
                                            objectFit: 'cover',
                                            // objectFit: 'contain',
                                        }}
                                        width={100}
                                        height={100}
                                        src={img.src}
                                        alt={img.alt}
                                    />
                                    <Mask />
                                </motion.div>
                            )
                            )
                        }
                    </div>
                    <div>
                        <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} isMaskClosable={false}>
                            {/* <div>Modal!</div> */}
                            <Image
                                src={product.img[clickImgIndex].src}
                                alt="紅莓女神貝果"
                                sizes="100vw"
                                width={500}
                                height={500}
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </SpringModal>
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-initial w-full p-4 md:w-1/2 ">
                    <p className="text-3xl font-bold">紅莓女神貝果（奶素）</p>
                    <div className="w-full flex flex-row gap-1">
                        <div className="rounded-xl w-16 text-center text-sm font-bold shadow text-white bg-blue-500">葷</div>
                        <div className="rounded-xl w-16 text-center text-sm font-bold shadow text-white bg-blue-500">奶</div>
                        <div className="rounded-xl w-16 text-center text-sm font-bold shadow text-white bg-blue-500">素</div>
                        <div className="rounded-xl w-16 text-center text-sm font-bold shadow text-white bg-blue-500">蛋</div>
                    </div>
                    <p className="text-base">粉紅爆擊 💕💕💕 一起享受五月份香甜粉色的環抱吧!!!</p>
                    <hr className="" />
                    <div className="border-sky-400 border p-4 rounded-lg">
                        商品將於 2024/05/31 00:00 結束販售
                    </div>
                    <motion.div
                        className=" text-sm"
                        initial={false}
                        animate={expanded ? "open" : "closed"}
                    >
                        <motion.ul
                            className="border-l-4 border-sky-400 p-4 bg-slate-200 rounded flex flex-col gap-2"

                        >
                            <li>全店，消費滿$1580享冷凍免運費</li>
                            <li>全店，離島消費滿$2500免運費</li>
                            <motion.li
                                className="flex flex-col gap-2"
                                variants={ulVariants}
                                // style={{ originY: "top" }}
                                initial={ulVariants.close}
                                layout
                            >
                                <div>全店，限時活動⏱常溫配送滿$998 免運費</div>
                                <div>其他優惠...</div>
                            </motion.li>
                        </motion.ul>
                        <div className="flex justify-center font-bold"
                            onClick={handleExpand}
                        >
                            <div
                                className="cursor-pointer flex justify-center items-center gap-1 py-4"

                            >
                                <span>展開內容</span>
                                <motion.span
                                    variants={arrowVariants}
                                    transition={{ duration: 0.2 }}
                                    style={{ originY: 0.55 }}

                                ><FiChevronDown /></motion.span>
                            </div>

                        </div>
                        <div className="p-4">
                            <p id="price" className="font-bold text-xl">NT$50</p>
                            <ul className="py-4 flex flex-row justify-center items-center gap-8">
                                <li className="cursor-pointer "
                                    onClick={(e) => handleCount(e, "minus")}
                                ><FaMinus /></li>
                                <li>
                                    <NumberInput
                                        className="text-center font-bold"
                                        value={count}
                                        min={1}
                                        max={9}
                                        set={setCount} />
                                </li>
                                <li className="cursor-pointer "
                                    onClick={(e) => handleCount(e, "add")}
                                ><FaPlus /></li>
                            </ul>
                        </div>
                    </motion.div>
                    <div className="flex space-x-4 justify-center font-bold text-white">
                        <motion.button
                            className="p-4 w-1/2 bg-sky-600 shadow-lg"
                            whileTap={{ scale: 0.97 }}
                        >加入追蹤清單</motion.button>
                        <motion.button
                            className="p-4 w-1/2 bg-black flex justify-center items-center shadow-lg"
                            whileTap={{ scale: 0.97 }}
                        >
                            <span className="pr-2"><FaShoppingBag /></span>
                            立即購買
                        </motion.button>
                    </div>
                    <div className="flex justify-center font-bold">
                        <button className="p-4 bg-white-300 flex justify-center items-center hover:text-sky-400">
                            <span className="pr-1"><CiHeart /></span>
                            加入追蹤清單
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}