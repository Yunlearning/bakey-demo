"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { NumberInput } from "@/app/ui/components/inputs/inputComponents";
import IconBtn from '@/app/ui/components/IconBtn';


export default function Page({ params }: { params: { id: string } }) {
    const id = params.id;
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
                <li>付款資訊</li>
                <li className="text-blue-500">確認購買</li>
            </ul>
            <div className="px-16 py-4">
                <p className="font-bold text-2xl">結帳</p>
            </div>
            <ul className="flex flex-row items-center gap-4 px-16">
                <li></li>
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
                            <p className="text-lg text-red-500">NT$ 100</p>
                        </div>
                    </div>

                    <Link href="/deliver/checkout/1" className="flex-initial p-2 bg-gradient-to-r from-amber-500 to-orange-500 font-bold rounded-lg text-white text-center">結帳</Link>
                </li>
            </ul>
        </div>
    )
}
