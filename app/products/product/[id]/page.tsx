"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
    FiChevronDown,
} from "react-icons/fi";
import { FaPlus, FaMinus, FaShoppingBag, FaCheckCircle } from "react-icons/fa";
import { MdLocalShipping, MdOutlinePayment } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { NumberInput } from "@/app/ui/components/inputs/inputComponents";
import { ProductCarousel } from "@/app/ui/components/product/productCarousel";
import ImageGalleryModal from "@/app/ui/components/product/ImageGalleryModal";
import ChipTabs from "@/app/ui/components/ChipTabs";
import Introduce from "@/app/ui/homePage/Introduce";

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

const arrowVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
}
const tabs = ["商品描述", "了解更多", "送貨及付款方式"];
const product = {
    id: 1,
    name: "紅莓女神貝果（奶素）",
    description: "粉紅爆擊 💕💕💕 一起享受五月份香甜粉色的環抱吧!!!",
    subDescription: "商品將於 2024/05/31 00:00 結束販售",
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

const ProductInfo = () => {
    return (
        <div className="py-16">
            <Introduce />
        </div>
    )
}

const Ingredients = () => {
    return (
        <div className="flex flex-row gap-4 px-16">
            {/* <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">主要成分</p>
                    <div className="flex flex-col gap-2">
                        <div>麵粉</div>
                        <div>糖</div>
                        <div>奶油</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">次要成分</p>
                    <div className="flex flex-col gap-2">
                        <div>麵粉</div>
                        <div>糖</div>
                        <div>奶油</div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-bold">適用人群</p>
                <div className="flex flex-col gap-2">
                    <div>素食者</div>
                    <div>奶素</div>
                    <div>蛋素</div>
                </div>
            </div> */}
            <div

                className="flex-initial w-1/3 h-52 p-4 bg-gradient-to-b from-orange-500 from-45% to-white to-45% self-stretch rounded-lg border-2"
            >
                <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                    主要成分
                </p>
                <ul className="bg-white h-32 p-2 flex flex-col gap-2 rounded text-lg items-start">
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>麵粉</div>
                    </li>
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>糖</div>
                    </li>
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>奶油</div>
                    </li>
                </ul>
            </div>
            <div

                className="flex-initial w-1/3 h-52 p-4 bg-gradient-to-b from-orange-500 from-45% to-white to-45% self-stretch rounded-lg border-2"
            >
                <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                    次要成分
                </p>
                <ul className="bg-white h-32 p-2 flex flex-col gap-2 rounded text-lg">
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>食鹽</div>
                    </li>
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>紅梅</div>
                    </li>
                </ul>
            </div>
            <div

                className="flex-initial w-1/3 h-52 p-4 bg-gradient-to-b from-orange-500 from-45% to-white to-45% self-stretch rounded-lg border-2"
            >
                <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                    適用人群
                </p>
                <ul className="bg-white h-32 p-2 flex flex-col gap-2 rounded text-lg">
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>素食者</div>
                    </li>
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>奶素</div>
                    </li>
                    <li className="border-b border-slate-400 w-full text-start">
                        <div>蛋素</div>
                    </li>
                </ul>
            </div>
        </div>
    )

}

const ShippingAndPayment = () => {
    return (
        <div className="px-16 flex flex-row justify-center items-center gap-4 text-start">
            {/* <div className="flex-initial w-1/2 bg-violet-400">
                <p className="text-xl font-bold">送貨方式</p>
                <ul>
                    <li>宅配 - 冷凍</li>
                    <li>黑貓離島宅配-冷凍</li>
                </ul>
            </div> */}
            <div

                className="flex-initial w-1/3 h-52 p-4 bg-gradient-to-b from-blue-500 from-45% to-white to-45% self-stretch rounded-lg border-2"
            >
                <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                    <MdLocalShipping />
                    送貨方式
                </p>
                <ul className="bg-white h-32 p-2 flex flex-col gap-2 rounded text-lg">
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>宅配 - 冷凍</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>黑貓離島宅配-冷凍</p>
                    </li>
                </ul>
            </div>
            <div className="flex-initial w-1/3 h-52 p-4 bg-gradient-to-b from-blue-500 from-45% to-white to-45% self-stretch rounded-lg border-2">
                <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                    <MdOutlinePayment />
                    付款方式
                </p>
                <ul className="bg-white h-32 p-2 flex flex-col gap-2 rounded">
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>信用卡付款</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>LINE Pay</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>銀行轉帳／ATM</p>
                    </li>
                </ul>
            </div>
            <div className="flex-initial w-1/3 h-52 p-4 bg-gradient-to-b from-blue-500 from-45% to-white to-45% self-stretch rounded-lg border-2">
                <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                    {/* <MdOutlinePayment /> */}
                    其他內容
                </p>
                <ul className="bg-white h-32 p-2 flex flex-col gap-2 rounded">
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>其他項目</p>
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p>其他項目</p>
                    </li>
                </ul>
            </div>
            {/* <p>ShippingAndPayment</p> */}
        </div>
    )
}

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [count, setCount] = useState(1);
    const [imgIndex, setImgIndex] = useState(0);
    const [tabIndex, setTabIndex] = useState(0);
    const handleExpand = () => {
        setExpanded(!expanded);
    }

    const handleCount = (e: React.MouseEvent<HTMLLIElement>, action: string) => {
        e.preventDefault();
        if (action === "add") {
            count + 1 > 99 ? setCount(99) : setCount(count + 1);
        } else {
            count - 1 < 1 ? setCount(1) : setCount(count - 1);
        }
    }
    console.log("tabIndex", tabIndex)
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
                        <ProductCarousel images={product.img} setImageIndex={setImgIndex} />
                    </div>
                    <ImageGalleryModal
                        imgIndex={imgIndex}
                        images={product.img}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
                <div className="flex flex-col gap-5 flex-initial w-full p-4 md:w-1/2 ">
                    <p className="text-3xl font-bold">{product.name}</p>
                    <div className="w-full flex flex-row gap-1">
                        {
                            product.tags.map((tag, index) => (
                                <div key={index} className="rounded-xl w-16 text-center text-sm font-bold shadow text-white bg-blue-500">{tag}</div>
                            ))
                        }
                    </div>
                    <p className="text-base">{product.description}</p>
                    <hr className="" />
                    <div className="border-sky-400 border p-4 rounded-lg">
                        {product.subDescription}
                    </div>
                    <motion.div
                        className=" text-sm"
                        initial={false}
                        animate={expanded ? "open" : "closed"}
                    >
                        <motion.ul
                            className="border-l-4 border-sky-400 p-4 bg-slate-200 rounded flex flex-col gap-2"

                        >
                            {
                                product.discount.rules.slice(0, 2).map((rule, index) => (
                                    <li key={index}>{rule}</li>
                                ))
                            }
                            {product.discount.rules.length > 2 && <motion.li
                                className="flex flex-col gap-2"
                                variants={ulVariants}
                                // style={{ originY: "top" }}
                                initial={ulVariants.close}
                                layout
                            >
                                {
                                    product.discount.rules.slice(2).map((rule, index) => (
                                        <div key={index}>{rule}</div>
                                    ))
                                }
                            </motion.li>}
                        </motion.ul>
                        {product.discount.rules.length > 2 &&
                            <div className="flex justify-center font-bold"

                            >
                                <div
                                    className="cursor-pointer flex justify-center items-center gap-1 py-4"
                                    onClick={handleExpand}
                                >
                                    <span>展開內容</span>
                                    <motion.span
                                        variants={arrowVariants}
                                        transition={{ duration: 0.2 }}
                                        style={{ originY: 0.55 }}

                                    ><FiChevronDown /></motion.span>
                                </div>
                            </div>
                        }
                        <div className="p-4">
                            <p id="price" className="font-bold text-xl">NT${product.price}</p>
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
            <div className="w-100 text-center">
                <ChipTabs tabs={tabs} setTabIndex={setTabIndex} >
                    {/* <Ingredients /> */}
                    {tabIndex === 0 && <ProductInfo />}
                    {tabIndex === 1 && <Ingredients />}
                    {tabIndex === 2 && <ShippingAndPayment />}
                </ChipTabs>
            </div>
            {/* <div className="bg-orange-300 w-100 h-96 text-center">
                product wall
            </div> */}
        </div>
    )
}