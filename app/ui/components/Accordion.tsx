"use client";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import AccordionContent from "./AccordionContent";

const sectionVariants: Variants = {
    open: { backgroundColor: "#8b5cf6", color: "#fff" },
    closed: { backgroundColor: "#fff", color: "#000" }
}
const arrowVariants: Variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
}
const contentVariants: Variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 }
}

interface Child {
    id: number,
    name: string
}
interface AccordionProps {
    item: {
        name: string,
        category: string,
        children?: Child[]
    },
    expanded: number | false,
    setExpanded: (i: number | false) => void,
    itemIndex: number
}

export default function Accordion({ itemIndex, expanded, setExpanded, item }: AccordionProps) {
    // const [isOpen, setIsOpen] = useState(false);
    const isOpen = itemIndex === expanded;
    return (
        <>
            <motion.section
                className="mb-4 w-full flex flex-row justify-between items-center bg-violet-500 rounded text-white px-4 py-2 text-start font-bold cursor-pointer"
                initial={false}
                variants={sectionVariants}
                animate={isOpen ? "open" : "closed"}
                whileTap={{ scale: 0.97 }}
                onClick={() => setExpanded(isOpen ? false : itemIndex)}
            >
                <span>{item.name}</span>
                {item.children && <motion.span
                    variants={arrowVariants}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <FaCaretDown />
                </motion.span>}
            </motion.section>
            {
                item.children && <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.section
                            variants={contentVariants}
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            transition={{ duration: 0.2, ease: [0.25, 0.62, 1, 1] }}
                        >
                            <AccordionContent itemList={item.children} />
                        </motion.section>
                    )}
                </AnimatePresence>
            }
        </>
    )
}