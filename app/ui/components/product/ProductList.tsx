"use client";
import React, { useState } from "react";
import ProductCard from "@/app/ui/components/product/ProductCard";
import { Input } from "@/app/ui/components/product/MontionInput";
const cardimgs = [
    {
        title: "bread-1",
        image_cover: "/bread/bread1.jpg",
        blur_cover: "/bread/bread1.jpg",
        tag: "1",
        price: "100",
        discount: "90",
    },
    {
        title: "bread-2",
        image_cover: "/bread/bread2.jpg",
        blur_cover: "/bread/bread2.jpg",
        tag: "2",
        price: "100",
        discount: "",
    },
    {
        title: "bread-3",
        image_cover: "/bread/bread3.jpg",
        blur_cover: "/bread/bread3.jpg",
        tag: "3",
        price: "100",
        discount: "",
    },
    {
        title: "bread-4",
        image_cover: "/bread/bread4.jpg",
        blur_cover: "/bread/bread4.jpg",
        tag: "4",
        price: "100",
        discount: "",
    },
    {
        title: "bread-5",
        image_cover: "/bread/bread5.jpg",
        blur_cover: "/bread/bread5.jpg",
        tag: "5",
        price: "100",
        discount: "",
    },

]

export default function ProductList() {
    // const [x, setX] = useState(0);
    // const [y, setY] = useState(0);
    // const [rotate, setRotate] = useState(0);
    return (
        <div>
            {/* <div className="flex flex-col items-end">
                <Input value={x} set={setX}>
                    x
                </Input>
                <Input value={y} set={setY}>
                    y
                </Input>
                <Input value={rotate} set={setRotate} min={-180} max={180}>
                    rotate
                </Input>
            </div> */}
            <div className="flex flex-row flex-wrap justify-between">
                {
                    cardimgs.map((img, index) => (
                        <ProductCard key={index}
                            img={img}
                        // animate={{ x, y, rotate }} 
                        />
                    ))
                }
            </div>

        </div>
    )
}