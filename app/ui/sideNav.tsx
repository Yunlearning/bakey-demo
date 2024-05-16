"use client";
import React, { useState } from "react";
import Accordion from "@/app/ui/components/Accordion";

const navDatas = [
    {
        name: '送禮禮盒',
        category: 'gift',
        // children: [
        //     {
        //         path: "/",
        //         name: "Home",
        //         category: 'toast'
        //     }
        // ]
    },
    {
        name: '新品上架',
        category: 'newest',
        children: [
            {
                id: 10,
                name: "蔓越莓吐司"
            },
        ]
    },
    {
        name: '吐司',
        category: 'toast',
        children: [
            {
                id: 7,
                name: "柔軟吐司"
            }, {
                id: 8,
                name: "酥脆吐司"
            }, {
                id: 9,
                name: "紅豆吐司"
            },
        ]
    },
    {
        name: '核桃麵包',
        category: 'walnutBread',
        children: [
            {
                id: 1,
                name: "起司核桃"
            }, {
                id: 2,
                name: "番茄核桃"
            }, {
                id: 3,
                name: "紅豆核桃"
            },
        ]
    },
    {
        name: '司康',
        category: 'scone',
        children: [
            {
                id: 4,
                name: "原味司康"
            }, {
                id: 5,
                name: "葡萄司康"
            },
        ]
    },
    {
        name: '貝果',
        category: 'bagel',
        children: [
            {
                id: 6,
                name: "起司貝果"
            }, {
                id: 7,
                name: "蔬菜貝果"
            },
        ]
    },
]

export default function SideNav() {
    const [expanded, setExpanded] = useState<false | number>(0);
    return (
        <nav className="px-2">
            {navDatas.map((item, i) => (
                <Accordion
                    key={i}
                    itemIndex={i}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    item={item} />
            ))}
        </nav>
        // <div className="flex flex-col items-center">
        //     <div className="flex flex-col items-center">
        //         <div className="w-24 h-24 bg-gray-300 rounded-full mt-4"></div>
        //         <div className="text-lg font-bold mt-2">User Name</div>
        //         <div className="text-lg font-bold mt-2"><FaCaretDown /></div>
        //         <div className="text-sm text-gray-500">
        //             <span>
        //                 <Link href="/profile">
        //                     Profile
        //                 </Link>
        //             </span>
        //             <span className="mx-2">|</span>
        //             <span>
        //                 <Link href="/logout">
        //                     Logout
        //                 </Link>
        //             </span>
        //         </div>
        //     </div>
        //     <div className="flex flex-col items-center">
        //         <span className="p-2 font-bold hover:bg-blue-300">Home</span>
        //         <span className="p-2 font-bold hover:bg-blue-300">Products</span>
        //         <span className="p-2 font-bold hover:bg-blue-300">Cart</span>
        //         <span className="p-2 font-bold hover:bg-blue-300">Contact</span>
        //     </div>
        // </div>
    );
}
