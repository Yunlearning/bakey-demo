"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GrLinkPrevious } from "react-icons/gr";
import { NewSteps } from "@/app/ui/SteppedProgress";

const stepsLabels = [
    "商品確認",
    "付款資訊",
    "確認訂單",
]

const itemList = [
    {
        id: 1,
        name: "bagel",
        price: 50,
        quantity: 2,
        img: "/bagel/bagel-5.jpg",
    },
    {
        id: 2,
        name: "Bagel",
        price: 80,
        quantity: 12,
        img: "/bagel/bagel-1.jpg",
    },
    // {
    //     id: 3,
    //     name: "Croissant",
    //     price: 4.5,
    //     quantity: 4,
    //     img: "/croissant/croissant-1.jpg",
    // },
    // {
    //     id: 4,
    //     name: "Donut",
    //     price: 5.5,
    //     quantity: 5,
    //     img: "/donut/donut-1.jpg",
    // },
    // {
    //     id: 5,
    //     name: "Muffin",
    //     price: 6.5,
    //     quantity: 6,
    //     img: "/muffin/muffin-1.jpg",
    // },
    // {
    //     id: 6,
    //     name: "Pastry",
    //     price: 7.5,
    //     quantity: 7,
    //     img: "/pastry/pastry-1.jpg",
    // },
    // {
    //     id: 7,
    //     name: "Pie",
    //     price: 8.5,
    //     quantity: 8,
    //     img: "/pie/pie-1.jpg",
    // },
    // {
    //     id: 8,
    //     name: "Pizza",
    //     price: 9.5,
    //     quantity: 9,
    //     img: "/pizza/pizza-1.jpg",
    // },
    // {
    //     id: 9,
    //     name: "Roll",
    //     price: 10.5,
    //     quantity: 10,
    //     img: "/roll/roll-1.jpg",
    // },
    // {
    //     id: 10,
    //     name: "Scone",
    //     price: 11.5,
    //     quantity: 11,
    //     img: "/scone/scone-1.jpg",
    // },
    // {
    //     id: 11,
    //     name: "Tart",
    //     price: 12.5,
    //     quantity: 12,
    //     img: "/tart/tart-1.jpg",
    // },
    // {
    //     id: 12,
    //     name: "Tartlet",
    //     price: 13.5,
    //     quantity: 13,
    //     img: "/tartlet/tartlet-1.jpg",
    // },
]
export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [stepsComplete, setStepsComplete] = useState(2);
    const numSteps = 3;

    // const { cart, setCart } = useCart()
    // const [cartTotal, setCartTotal] = useState(0)
    // const [cartQuantity, setCartQuantity] = useState(0)

    // useEffect(() => {
    //     let total = 0
    //     let quantity = 0
    //     cart.forEach((item) => {
    //         total += item.price * item.quantity
    //         quantity += item.quantity
    //     })
    //     setCartTotal(total)
    //     setCartQuantity(quantity)
    // }, [cart])

    return (
        <div className="border-b-2 pb-4">
            <ul className="bg-white py-8 w-full flex flex-row justify-center items-center text-lg">
                <NewSteps width="w-1/2" labels={stepsLabels} numSteps={numSteps} stepsComplete={stepsComplete} />
            </ul>
            <div className="px-16 py-4 flex gap-4 items-center">
                <Link
                    href={`/deliver/choice/${id}`}
                    className="py-2 px-3 border border-slate-400 hover:border-slate-700 rounded"
                >
                    <GrLinkPrevious />
                </Link>
                <p className="font-bold text-2xl">確認訂單</p>
            </div>
            <ul className="flex flex-row items-center gap-4 px-16">
                <li className="flex-initial w-3/4 p-2 flex flex-col gap-4 self-start border-t-2">
                    <div className="flex-initial flex flex-col gap-8 bg-white rounded p-2">
                        <div className="flex-initial w-full flex flex-row gap-4 flex-wrap items-center">
                            <p className="text-xl font-bold">購買品項</p>
                        </div>
                        <div className="flex-initial w-full flex flex-row gap-4 flex-wrap">
                            {itemList.map((item) => (
                                <ul key={item.id}
                                    className="w-full flex flex-row items-start gap-4 p-2"
                                >
                                    <li className="w-16 h-16">
                                        <Image
                                            src={item.img}
                                            alt={item.name}
                                            width={60}
                                            height={60}
                                            style={
                                                {
                                                    objectFit: 'cover',
                                                    width: "100%",
                                                    height: "100%",
                                                }
                                            }
                                        />
                                    </li>
                                    <li className="flex flex-col justify-between w-full  h-full">
                                        <p className="w-full flex justify-between">
                                            <span>{item.name}</span><span className="text-sm"> x{item.quantity}</span>
                                        </p>
                                        <p className="font-bold text-sm">NT$ {item.price}</p>
                                        {/* <p>{item.price * item.quantity}</p> */}
                                    </li>
                                    <li>

                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>
                    <div className="flex-initial flex flex-col gap-8 bg-white rounded p-2 border-t-2">
                        <div className="flex-initial w-full flex flex-row gap-4 flex-wrap items-center">
                            <p className="text-xl font-bold">運送方式</p>
                            <p className="">宅配 - 冷凍</p>
                        </div>
                        <div className="flex-initial w-full flex flex-row gap-4 flex-wrap">
                            <p className="text-xl font-bold">運送地址</p>
                            <div>
                                <p>王*明</p>
                                {/* <p>台北市大安區信義路四段100巷100號100樓</p> */}
                                <p>**********義路四段100巷100號100樓</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-initial flex flex-row items-center gap-4 bg-white rounded p-2 border-t-2">
                        <p className="text-xl font-bold">付款方式</p>
                        <p>信用卡付款</p>
                    </div>
                </li>
                <li className="sticky top-20 z-19 flex-initial flex flex-col justify-between gap-4 w-1/4 h-48 border border-zinc-300 p-2 self-start bg-zinc-100 rounded shadow">
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

                    <Link href="/deliver/success" className="flex-initial p-2 bg-gradient-to-r from-amber-500 to-orange-500 font-bold rounded-lg text-white text-center">確認付款</Link>
                </li>
            </ul>
        </div>
    )
}
