"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconBtn from '@/app/ui/components/IconBtn';
import { RadioInput } from "@/app/ui/components/inputs/inputComponents";
import { SpringModal } from "@/app/ui/components/SpringModal";

export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [isOpen, setIsOpen] = useState(false)
    const handleModalOpen = () => {
        setIsOpen(true)
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
            <ul className="bg-slate-300 py-4 flex flex-row justify-center items-center gap-4 text-lg">
                <li>商品確認</li>
                <li className="text-blue-500">付款資訊</li>
                <li>確認購買</li>
            </ul>
            <div className="px-16 py-4">
                <p className="font-bold text-2xl">付款資訊</p>
            </div>
            <ul className="flex flex-row items-center gap-4 px-16">
                <li className="flex-initial w-3/4 p-2 flex flex-col gap-4 self-start border-t-2">
                    <div className="flex-initial flex flex-col gap-4 bg-white rounded p-2">
                        <p className="text-xl font-bold">運送方式</p>
                        <div className="flex flex-row gap-8">
                            <RadioInput
                                htmlFor="deliver_0"
                                label="宅配 - 冷凍"
                                name="deliver"
                                value="0"
                                defaultChecked
                            />
                            <RadioInput
                                htmlFor="deliver_1"
                                label="黑貓離島宅配-冷凍"
                                name="deliver"
                                value="1"
                            />
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
                            label="信用卡付款"
                            name="payment"
                            value="creditCard"
                        />
                        <RadioInput
                            htmlFor="linePay"
                            label="LINE Pay"
                            name="payment"
                            value="linePay"
                        />
                        <RadioInput
                            htmlFor="ATM"
                            label="銀行轉帳／ATM"
                            name="payment"
                            value="atm"
                        />
                    </div>
                </li>
                <li className="sticky top-20 z-19 flex-initial flex flex-col justify-between gap-4 w-1/4 h-48 border border-zinc-300 p-2 self-start bg-zinc-100 rounded shadow">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-sm">
                            <p className=" font-bold">商品總金額</p>
                            <p>NT$ 100</p>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <p className=" font-bold">運費</p>
                            <p>NT$ 100</p>
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold">
                            <p className="font-bold">訂單金額</p>
                            <p className="text-lg text-red-500">NT$ 200</p>
                        </div>
                    </div>
                    <Link href="/deliver/checkout/1" className="flex-initial p-2 bg-gradient-to-r from-amber-500 to-orange-500 font-bold rounded-lg text-white text-center">結帳</Link>
                </li>
            </ul>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} isMaskClosable={false}>
                <div className="bg-white rounded">
                    content
                </div>
            </SpringModal>
        </div>
    )
}
