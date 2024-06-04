"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconBtn from '@/app/ui/components/IconBtn';
import { RadioInput } from "@/app/ui/components/inputs/inputComponents";
import { SpringModal } from "@/app/ui/components/SpringModal";
import { FaPlus } from "react-icons/fa";
import { GrLinkPrevious } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NewSteps } from "@/app/ui/SteppedProgress";
const stepsLabels = [
    "商品確認",
    "付款資訊",
    "確認訂單",
]

const dummyAddr = [
    {
        name: "王*明",
        address: "**********義路四段100巷100號100樓"
    },
    {
        name: "王*明",
        address: "**********西路一段50巷50號50樓"
    }
]

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [stepsComplete, setStepsComplete] = useState(1);
    const numSteps = 3;
    const [isOpen, setIsOpen] = useState(false);
    const [switchToAdd, setSwitchToAdd] = useState(false);
    const handleModalOpen = () => {
        setIsOpen(true)
    };
    const handleCancel = () => {
        if (switchToAdd) {
            setSwitchToAdd(false)
        } else {
            setIsOpen(false)
        }
    }
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
                    href={`/deliver/list_cart`}
                    className="py-2 px-3 border border-slate-400 hover:border-slate-700 rounded"
                >
                    <GrLinkPrevious />
                </Link>
                <p className="font-bold text-2xl">付款資訊</p>
            </div>
            <ul className="flex flex-row items-center gap-4 px-16">
                <li className="flex-initial w-3/4 p-2 flex flex-col gap-4 self-start border-t-2">
                    <div className="flex-initial flex flex-col gap-4 bg-white rounded p-2">
                        <p className="text-xl font-bold">運送方式</p>
                        <div className="flex flex-row gap-8">
                            <RadioInput
                                htmlFor="deliver_0"
                                name="deliver"
                                value="0"
                                defaultChecked
                            >
                                {"宅配 - 冷凍"}
                            </RadioInput>
                            <RadioInput
                                htmlFor="deliver_1"
                                name="deliver"
                                value="1"
                            >{"黑貓離島宅配-冷凍"}</RadioInput>
                        </div>
                        <div>
                            <p>王*明</p>
                            {/* <p>台北市大安區信義路四段100巷100號100樓</p> */}
                            <p>**********義路四段100巷100號100樓</p>
                        </div>
                        <div>
                            <button className="p-2 border border-slate-700 hover:border-amber-500 hover:text-orange-600 rounded font-bold text-xs "
                                onClick={handleModalOpen}
                            >選擇其他收件方式(modal)</button>
                        </div>
                        {/* <input type="text" placeholder="姓名" className="w-full p-2" />
                        <input type="text" placeholder="地址" className="w-full p-2" /> */}
                    </div>
                    <div className="flex-initial flex flex-col gap-4 bg-white rounded p-2 border-t-2">
                        <p className="text-xl font-bold">付款方式</p>
                        <RadioInput
                            defaultChecked
                            htmlFor="creditCard"
                            name="payment"
                            value="creditCard"
                        >{"信用卡付款"}</RadioInput>
                        <RadioInput
                            htmlFor="linePay"
                            name="payment"
                            value="linePay"
                        >{"LINE Pay"}</RadioInput>
                        <RadioInput
                            htmlFor="ATM"
                            name="payment"
                            value="atm"
                        >{"銀行轉帳／ATM"}</RadioInput>
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
                    <Link href="/deliver/checkout/1" className="flex-initial p-2 bg-gradient-to-r from-amber-500 to-orange-500 font-bold rounded-lg text-white text-center">結帳</Link>
                </li>
            </ul>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} isMaskClosable={false}>
                <ul className="bg-white rounded p-4 flex flex-col gap-4">
                    <li className="text-2xl font-bold border-b-2 py-2">選擇收件方式</li>

                    {
                        switchToAdd ? (
                            <li className="flex items-center gap-4 border-b-2 pb-4">
                                <input type="checkbox" className="w-4 h-4" />
                                <p>同會員資料</p>
                            </li>) :
                            (
                                <li className="flex justify-between items-center border-b-2 pb-4">
                                    <p>收件資料</p>
                                    <button
                                        className="flex justify-around items-center py-2 w-20 border border-slate-400 hover:border-orange-500 hover:text-orange-500 rounded font-bold text-sm"
                                        onClick={() => setSwitchToAdd(!switchToAdd)}
                                    >
                                        <FaPlus />
                                        新增
                                    </button>
                                </li>
                            )
                    }
                    {
                        switchToAdd ? (
                            <li className="flex flex-col gap-2">
                                <input type="text" placeholder="姓名" className="w-full p-2" />
                                <input type="text" placeholder="地址" className="w-full p-2" />
                            </li>
                        ) : (
                            <li className="border-b-2 pb-4">
                                <div className="flex flex-col gap-8">
                                    {dummyAddr.map((addr, index) => (
                                        <div
                                            key={index}
                                            className="flex justify-between"
                                        >
                                            <RadioInput
                                                defaultChecked={index === 0 && true}
                                                name="address"
                                                value={index.toString()}
                                                htmlFor={`address_${index}`}
                                                labelAlign="start"
                                            >{
                                                    <>
                                                        <p>{addr.name}</p>
                                                        <p>{addr.address}</p>
                                                    </>
                                                }</RadioInput>
                                            <button className="flex justify-around items-center w-20 border border-slate-400 hover:border-slate-700 rounded font-bold text-sm">
                                                <RiDeleteBin6Line />
                                                刪除
                                            </button>
                                        </div>

                                    ))}
                                </div>
                            </li>
                        )
                    }

                    <li className="flex justify-end gap-2">
                        <button
                            className="py-2 w-16 border border-slate-700 rounded font-bold text-sm"
                            onClick={handleCancel}
                        >取消</button>
                        {
                            switchToAdd ? (
                                <button
                                    className="py-2 w-32 
                                    bg-orange-500 text-white
                                    border border-orange-500 rounded font-bold text-sm"
                                    onClick={handleCancel}
                                >確認新增</button>
                            ) : (
                                <button
                                    className="py-2 w-32 
                            bg-orange-500 text-white
                            border border-orange-500 rounded font-bold text-sm"
                                    onClick={handleCancel}
                                >新增收件資訊</button>
                            )
                        }
                        {/* <button
                            className="py-2 w-32 
                            bg-orange-500 text-white
                            border border-orange-500 rounded font-bold text-sm"
                            onClick={handleCancel}
                        >使用此收件資訊</button> */}

                    </li>
                </ul>
            </SpringModal>
        </div>
    )
}
