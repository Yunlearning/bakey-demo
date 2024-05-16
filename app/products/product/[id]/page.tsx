"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import {
    FiChevronDown,
} from "react-icons/fi";
import { FaPlus, FaMinus, FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { NumberInput } from "@/app/ui/components/inputs/inputComponents";

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

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [expanded, setExpanded] = useState(false);
    const [count, setCount] = useState(1);
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
    return (

        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "Home", href: "/", active: false },
                    { label: "Products", href: "/products", active: false },
                    { label: "個品", href: `/products/product/${[id]}`, active: true }
                ]}
            />
            {/* <h1>Product Info {id}</h1> */}
            <div className="flex flex-row px-16">
                <div className="flex-initial w-full p-4 md:w-1/2 bg-orange-300"></div>
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
                            className="p-4 w-1/2 bg-sky-600"
                            whileTap={{ scale: 0.97 }}
                        >加入追蹤清單</motion.button>
                        <motion.button
                            className="p-4 w-1/2 bg-black flex justify-center items-center"
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