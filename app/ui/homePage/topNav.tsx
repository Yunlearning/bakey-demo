"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { hylia } from '@/app/ui/fonts';
import { BuildingStorefrontIcon, UserIcon, MagnifyingGlassIcon, ShoppingCartIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import IconBtn from '@/app/ui/components/IconBtn';
import NavBar from './NavBar';

const logoVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    zoomIn: {
        // scale: 1.5,
        height: "100px",
        fontSize: "2.5rem",
        // lineHeight: 1

    },
    zoomOut: {
        // scale: 1,
        height: "50px",
        fontSize: "1rem",
    },


}

export default function TopNav({ className }: { className?: string }) {
    const { scrollYProgress } = useScroll();
    const [isAtTop, setIsAtTop] = useState(false);
    useEffect(() => {
        setIsAtTop(scrollYProgress.get() === 0);
        const unsubscribe = scrollYProgress.onChange(value => {
            setIsAtTop(value === 0);
        });

        return () => {
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <motion.div
            id='page-header'
            className={`sticky bg-white pb-4 top-0 z-20 transition-shadow shadow ${className}`}
        >
            <div className='flex flex-row w-full justify-end pr-4'>
                <IconBtn><UserIcon className="w-6 text-blue-500" /></IconBtn>
                <span className='p-2'><MagnifyingGlassIcon className="w-6 " /></span>
                {/* <span className='p-2'><ShoppingCartIcon className="w-6 " /></span> */}
                <Link className='p-2 text-blue-500' href="/deliver/list_cart"><ShoppingCartIcon className="w-6 " /></Link>
                <span className='p-2'><ChatBubbleBottomCenterTextIcon className="w-6 " /></span>
            </div>
            <motion.div
                variants={logoVariant}
                initial='zoomIn'
                animate={isAtTop ? "zoomIn" : "zoomOut"}
                transition={{ duration: 0.2 }}
                className='text-amber-500 text-center'
            >
                <Link href="/" >
                    <div className='flex justify-center'>
                        <BuildingStorefrontIcon className="w-6" />
                    </div>
                    <p className={`${hylia.className}`}>Bakery</p>
                </Link>
            </motion.div>
            <NavBar />
        </motion.div>
    );
}