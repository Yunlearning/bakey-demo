"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { Counter } from "../../components/counter/Counter";
import { SpringModal } from "@/app/ui/components/SpringModal";
import { NumberInput } from "@/app/ui/components/inputs/inputComponents";
import IconBtn from '@/app/ui/components/IconBtn';
import SteppedProgress, { NewSteps } from "@/app/ui/SteppedProgress";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { removeItem, increment, decrement, checkItem, iscCheckAll, selectCart } from "@/lib/features/cart/cartSlice";
const stepsLabels = [
    "商品確認",
    "付款資訊",
    "確認訂單",
]
// const cartList = [
//     {
//         id: 1,
//         name: "bagel",
//         price: 50,
//         quantity: 2,
//         img: "/bagel/bagel-5.jpg",
//     },
//     {
//         id: 2,
//         name: "Bagel",
//         price: 80,
//         quantity: 12,
//         img: "/bagel/bagel-1.jpg",
//     },
//     // {
//     //     id: 3,
//     //     name: "Croissant",
//     //     price: 4.5,
//     //     quantity: 4,
//     //     img: "/croissant/croissant-1.jpg",
//     // },
//     // {
//     //     id: 4,
//     //     name: "Donut",
//     //     price: 5.5,
//     //     quantity: 5,
//     //     img: "/donut/donut-1.jpg",
//     // },
//     // {
//     //     id: 5,
//     //     name: "Muffin",
//     //     price: 6.5,
//     //     quantity: 6,
//     //     img: "/muffin/muffin-1.jpg",
//     // },
//     // {
//     //     id: 6,
//     //     name: "Pastry",
//     //     price: 7.5,
//     //     quantity: 7,
//     //     img: "/pastry/pastry-1.jpg",
//     // },
//     // {
//     //     id: 7,
//     //     name: "Pie",
//     //     price: 8.5,
//     //     quantity: 8,
//     //     img: "/pie/pie-1.jpg",
//     // },
//     // {
//     //     id: 8,
//     //     name: "Pizza",
//     //     price: 9.5,
//     //     quantity: 9,
//     //     img: "/pizza/pizza-1.jpg",
//     // },
//     // {
//     //     id: 9,
//     //     name: "Roll",
//     //     price: 10.5,
//     //     quantity: 10,
//     //     img: "/roll/roll-1.jpg",
//     // },
//     // {
//     //     id: 10,
//     //     name: "Scone",
//     //     price: 11.5,
//     //     quantity: 11,
//     //     img: "/scone/scone-1.jpg",
//     // },
//     // {
//     //     id: 11,
//     //     name: "Tart",
//     //     price: 12.5,
//     //     quantity: 12,
//     //     img: "/tart/tart-1.jpg",
//     // },
//     // {
//     //     id: 12,
//     //     name: "Tartlet",
//     //     price: 13.5,
//     //     quantity: 13,
//     //     img: "/tartlet/tartlet-1.jpg",
//     // },
// ]

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    img: string;
    isCheck?: boolean;
}

export default function Page() {
    const dispatch = useAppDispatch();
    const cartList = useAppSelector(selectCart);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [allCheck, setAllCheck] = useState(false);
    const [isPaymentDisabled, setIsPaymentDisabled] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
    const [amount, setAmount] = useState(1);
    const [stepsComplete, setStepsComplete] = useState(0);
    const numSteps = 3;
    const handleCheckItem = (item: CartItem) => {
        dispatch(checkItem(item));
    }
    const handleCheckAll = () => {
        const newAllCheck = !allCheck;
        setAllCheck(newAllCheck);
        dispatch(iscCheckAll(newAllCheck));
    }
    const handleOpenModal = (itemId: number) => {
        console.log(itemId)
        setSelectedItemId(itemId);
        setIsOpen(true);
    };
    const handleRemoveItem = (id: number | null) => {
        if (id !== null) {
            dispatch(removeItem(id));
        }
        setSelectedItemId(null);
        setIsOpen(false);
    }
    useEffect(() => {
        const allChecked = cartList.every(item => item.isCheck);
        setAllCheck(allChecked);
        const handlePayment = cartList.some(item => item.isCheck);
        setIsPaymentDisabled(!handlePayment);
        let newTotalItems = 0;
        const newTotal = cartList.reduce((acc, item) => {
            if (item.isCheck) {
                newTotalItems += 1;
                return acc + item.quantity * item.price
            }
            return acc;
        }, 0)
        setTotal(newTotal);
        setTotalItems(newTotalItems);
    }, [cartList])
    return (
        <>
            <Counter />
            <div className="border-b-2 pb-4">
                <ul className="bg-white py-8 w-full flex flex-row justify-center items-center text-lg">
                    <NewSteps width="w-1/2" labels={stepsLabels} numSteps={numSteps} stepsComplete={stepsComplete} />
                </ul>
                <div className="px-16 py-4">
                    <p className="font-bold text-2xl">購物車</p>
                </div>

                <ul className="flex flex-row items-center gap-4 px-16">
                    <li className="flex-initial w-3/4 p-2">
                        <div className="pt-2 pb-4 border-b-2">
                            <div className="w-32 p-2 rounded bg-slate-200 border border-slate-300 shadow-sm"

                            >
                                <input type="checkbox" checked={allCheck} onChange={handleCheckAll} />
                                <label className="pl-2">全選</label>
                            </div>
                        </div>
                        {cartList.map((item) => (
                            <ul key={item.id} className="flex flex-row items-start gap-4 p-4 border-b-2">
                                <li className="self-center">
                                    <input type="checkbox"
                                        checked={item.isCheck}
                                        onChange={() => handleCheckItem(item)}
                                    />
                                </li>
                                <li className="relative cursor-pointer  flex-initial self-center w-1/4 h-36 rounded-lg">
                                    <Image src={item.img} alt={item.name}
                                        sizes="100vw"
                                        width={128} height={128}
                                        style={{
                                            width: '100vw',
                                            height: '100%',
                                            objectFit: "cover"
                                        }}
                                        className="rounded"
                                    />
                                </li>
                                <li className="flex-initial flex flex-col justify-between w-1/4 self-stretch">
                                    <div className="flex-initial">
                                        <p className="text-base pb-1">{item.name}</p>
                                        <p className="text-orange-500 text-sm font-bold">NT$ {item.price}</p>
                                    </div>

                                    {/* <div className="flex-initial flex gap-2 justify-end">
                                        <IconBtn className="flex items-center text-slate-400 hover:text-blue-500 pr-2 border-slate-300 border-r-2"><FaRegHeart /><span className="pl-2 text-sm">加到最愛</span></IconBtn>
                                        <IconBtn className="flex items-center text-slate-400 hover:text-red-600"><RiDeleteBin6Line /><span className="pl-2 text-sm">刪除</span></IconBtn>
                                    </div> */}
                                </li>
                                <li className="flex-initial w-1/2 flex flex-col justify-between self-stretch items-end">
                                    <div className="flex gap-4 items-center">
                                        <button className="border border-slate-500 rounded-lg w-10 h-10"
                                            onClick={() => dispatch(decrement(item))}
                                        >-</button>
                                        {/* <NumberInput
                                            value={amount}
                                            // min={1}
                                            // max={99}
                                            set={setAmount}
                                            className="text-center"
                                        /> */}
                                        <p>{item.quantity}</p>
                                        <button className="border border-slate-500 rounded-lg w-10 h-10"
                                            onClick={() => dispatch(increment(item))}
                                        >+</button>
                                    </div>

                                    <div className="flex-initial flex gap-2 justify-end">
                                        {/* <IconBtn className="flex items-center text-slate-400 hover:text-blue-500 pr-2 border-slate-300 border-r-2"><FaRegHeart /><span className="pl-2 text-sm">加到最愛</span></IconBtn> */}
                                        <IconBtn
                                            className="flex items-center text-slate-400 hover:text-red-600"
                                            onClick={() => handleOpenModal(item.id)}
                                        ><RiDeleteBin6Line /><span className="pl-2 text-sm">刪除</span></IconBtn>
                                    </div>
                                </li>
                            </ul>
                        ))}
                        <div className="pt-4 pb-2">
                            <div className="w-32 p-2 rounded bg-slate-200 border border-slate-300 shadow-sm"

                            >
                                <input type="checkbox" checked={allCheck} onChange={handleCheckAll} />
                                <label className="pl-2">全選</label>
                            </div>
                        </div>
                    </li>
                    <li className="sticky top-20  z-19 flex-initial flex flex-col justify-between gap-4 w-1/4 h-48  border border-zinc-300 p-2 self-start bg-zinc-100 rounded shadow">
                        <div className="flex flex-col gap-2">
                            <p className="text-2xl font-bold">
                                商品小計 <span className="text-xl">( 共 {totalItems} 項 )</span>:
                            </p>
                            <p className="text-lg font-bold text-red-500">NT$ {total}</p>
                        </div>
                        <Link
                            href="/deliver/choice/1"
                            className={`${isPaymentDisabled ? "pointer-events-none from-amber-300 to-orange-300" : " from-amber-500 to-orange-500"} p-2 bg-gradient-to-r  font-bold rounded-lg text-white text-center`}
                            aria-disabled={isPaymentDisabled}
                            tabIndex={isPaymentDisabled ? -1 : undefined}
                        >付款資訊</Link>
                    </li>
                </ul>
                <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}>
                    <ul className="bg-white rounded p-4 flex flex-col justify-around gap-8 h-40">
                        <li className="text-center">
                            <p className="text-xl">確認刪除商品 ?</p>
                        </li>
                        <li className="flex justify-center gap-4">
                            <button
                                className="py-2 w-20 border border-slate-700 rounded font-bold text-sm"
                                onClick={() => setIsOpen(false)}
                            >取消</button>
                            <button
                                className="py-2 w-20 
                            bg-red-500 text-white
                            border border-orange-500 rounded font-bold text-sm"
                                onClick={() => handleRemoveItem(selectedItemId)}
                            >刪除</button>

                        </li>
                    </ul>
                </SpringModal>
            </div>
        </>
    )


}