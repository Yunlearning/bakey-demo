
import { motion, Variants } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import {
    FiChevronDown,
} from "react-icons/fi";
import React, { useState } from "react";

const arrowVariants: Variants = {
    open: { rotate: 180 },
    closed: { rotate: 0 }
}
const dropDownContentVariants = {
    // open: {
    //     opacity: 1,
    //     y: 0,
    //     transition: { type: "spring", stiffness: 300, damping: 24 }
    // },
    // closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    // open: {
    //     clipPath: "inset(0% 0% 0% 0% round 10px)",
    //     // boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // adjust as needed
    //     transition: {
    //         type: "spring",
    //         bounce: 0,
    //         duration: 0.7,
    //         delayChildren: 0.3,
    //         staggerChildren: 0.05
    //     }
    // },
    // closed: {
    //     // boxShadow: "none",
    //     clipPath: "inset(10% 50% 90% 50% round 10px)",
    //     transition: {
    //         type: "spring",
    //         bounce: 0,
    //         duration: 0.3
    //     }
    // }
    open: {
        backgroundColor: "#fff",
        opacity: 1,
        scaleY: 1,
        // 讓底下的元素依序出現
        // transition: {
        //     when: "beforeChildren",
        //     staggerChildren: 0.1,
        // },
    },
    closed: {
        scaleY: 0,
        opacity: 0,
        // transition: {
        //     when: "afterChildren",
        //     staggerChildren: 0.1,
        // },
    },
};
const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
interface DropDownContentProps {
    children: React.ReactNode
}

interface DropDownProps {
    className?: string,
    btnText: string,
    // isOpen: boolean,
    // setIsOpen: (isOpen: boolean) => void
    children: React.ReactNode
}



export function DropDown({
    className,
    // isOpen,
    // setIsOpen,
    btnText,
    children }: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <motion.section
            className={`${className} relative`}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}

        >
            <motion.button
                className="flex justify-center items-center w-full gap-2 p-2 bg-white-500 hover:bg-orange-300 cursor-pointer rounded"
                // whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}

            >
                <span className="font-bold pr-1">{btnText}</span>
                <motion.span
                    variants={arrowVariants}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <FiChevronDown />
                </motion.span>
            </motion.button>
            <motion.ul
                className="
                absolute top-12 border p-2 z-20 bg-white-500 rounded shadow-xl flex flex-col w-full md:w-64 overflow-hidden"
                style={{ originY: "top" }}
                variants={dropDownContentVariants}
                initial={dropDownContentVariants.closed}
                layout
            >
                {children}
            </motion.ul>
        </motion.section>
    )
}

export function DropDownContent({ children }: DropDownContentProps) {
    return (
        <motion.li className="p-2 hover:text-orange-400 
        flex w-full
        text-xs font-bold
        whitespace-nowrap
        cursor-pointer" variants={itemVariants}>{children}</motion.li>
    )

}