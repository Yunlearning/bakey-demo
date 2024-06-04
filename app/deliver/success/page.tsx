"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrLinkPrevious } from "react-icons/gr";
import { FaPlus, FaMinus, FaShoppingBag, FaCheckCircle } from "react-icons/fa";
import { NewSteps } from "@/app/ui/SteppedProgress";

const stepsLabels = [
    "商品確認",
    "付款資訊",
    "確認訂單",
]

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [stepsComplete, setStepsComplete] = useState(3);
    const numSteps = 3;
    return (
        <div className="border-b-2 pb-4">
            <ul className="bg-white py-8 w-full flex flex-row justify-center items-center text-lg">
                <NewSteps width="w-1/2" labels={stepsLabels} numSteps={numSteps} stepsComplete={stepsComplete} />
            </ul>
            <ul className="flex flex-row justify-center items-center gap-4 px-16">
                <li className="flex-initial w-1/3">
                    <div
                        className="flex-initial w-full h-64 p-4 bg-gradient-to-b from-green-500 from-45% to-white to-45% self-stretch rounded-lg border-2"
                    >

                        <p className="py-6 text-2xl text-white font-bold h-1/4 flex items-center gap-2">
                            {/* <FaCheckCircle className="text-green-400" /> */}
                            訂單完成
                        </p>
                        <ul className="bg-white h-40 p-2 flex flex-col justify-between rounded text-lg">
                            <li className="flex items-center gap-2">
                                {/* <FaCheckCircle className="text-green-400" />
                                <p>宅配 - 冷凍</p> */}
                                訂單已經完成，本店會盡快出貨。
                            </li>
                            <li className="text-center">
                                <Link href="/" className="flex-initial p-2 bg-gradient-to-r from-green-400 to-emerald-500 font-bold rounded-lg text-white text-center">回首頁</Link>
                            </li>
                            {/* <li className="flex items-center gap-2">
                                <FaCheckCircle className="text-green-400" />
                                <p>黑貓離島宅配-冷凍</p>
                            </li> */}
                        </ul>
                    </div>
                </li>
                {/* <li className="sticky top-20 z-19 flex-initial flex flex-col justify-between gap-4 w-1/4 h-48 border border-zinc-300 p-2 self-start bg-zinc-100 rounded shadow">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-sm">
                            <p className=" font-bold">商品總金額</p>
                            <p>NT$ 130</p>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <p className=" font-bold">運費</p>
                            <p>NT$ 100</p>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold">
                            <p className="font-bold">訂單金額</p>
                            <p className="text-lg text-red-500">NT$ 230</p>
                        </div>
                    </div>

                    <Link href="/" className="flex-initial p-2 bg-gradient-to-r from-amber-500 to-orange-500 font-bold rounded-lg text-white text-center">確認付款</Link>
                </li> */}
            </ul>
        </div >
    )
}
