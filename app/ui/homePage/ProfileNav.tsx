"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { hylia } from '@/app/ui/fonts';
import { BuildingStorefrontIcon, UserIcon } from '@heroicons/react/24/outline';
import IconBtn from '@/app/ui/components/IconBtn';

export default function ProfileNav({ className }: { className?: string }) {
    return (
        <div
            id='page-header'
            className={`sticky bg-amber-500 py-2 px-8 top-0 z-20 transition-shadow shadow ${className}`}
        >
            <div className='flex flex-row w-full justify-between pr-4 items-center'>
                <Link className='text-white text-xs' href="/" >
                    <div className='flex justify-center'>
                        <BuildingStorefrontIcon className="w-6" />
                    </div>
                    <p className={`${hylia.className}`}>Bakery</p>
                </Link>
                <IconBtn><UserIcon className="w-6 text-white" /></IconBtn>
            </div>
        </div>
    );
}