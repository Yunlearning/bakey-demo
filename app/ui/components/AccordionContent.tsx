"use client";
import * as React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";


const itemVariants: Variants = {
    collapsed: { scale: 0.8 },
    open: { scale: 1 }
}

interface AccordionContentProps {
    itemList: {
        id: number,
        name: string
    }[]
}

export default function AccordionContent({ itemList }: AccordionContentProps) {
    return (
        <motion.div
            variants={itemVariants}
            transition={{ duration: 0.4 }}
        // className="p-5"
        >
            {itemList.map((item, i) => (
                <motion.div
                    key={`${i + item.name}`}
                    className="pl-8 py-2 text-gray-500 hover:text-violet-600 hover:font-bold"
                >
                    {item.name}
                </motion.div>
            ))}
        </motion.div>
    )
};
