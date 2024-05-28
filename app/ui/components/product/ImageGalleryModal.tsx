
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearchPlus } from "react-icons/fa";
import { SpringModal } from "@/app/ui/components/SpringModal";

const fadeVariants = {
    open: { opacity: 0.45 },
    closed: { opacity: 0 }
}

const Mask = () => {
    const [isFade, setIsFade] = useState(false);
    return (
        <motion.div
            className="bg-slate-800 absolute top-0 left-0 w-full h-full rounded flex justify-center items-center"
            variants={fadeVariants}
            initial={false}
            animate={isFade ? "open" : "closed"}
            onMouseEnter={() => setIsFade(true)}
            onMouseLeave={() => setIsFade(false)}
        >
            <span className="text-white text-2xl"><FaSearchPlus /></span>
        </motion.div>
    )
}

interface PageWrapProps {
    start: number,
    length: number,
    currentNum: number
}

interface ProductModalProps {
    imgIndex: number;
    images: {
        src: string,
        alt: string
    }[];
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const pageWrap = ({ start, length, currentNum }: PageWrapProps) => {
    currentNum = Math.abs(currentNum);
    return start + currentNum % length;
}

export default function ImageGalleryModal({ imgIndex, images, isOpen, setIsOpen }: ProductModalProps) {
    const [modalImgIndex, setModalImgIndex] = useState(0);
    const [[page, direction], setPage] = useState([0, 0]);
    const handleModalOpen = (index: number) => {
        setIsOpen(true);
        setModalImgIndex(index);
    }
    const modalImgPaginate = (newDirection: number) => {
        const newPage = page + newDirection;
        setPage([newPage, newDirection]);
        const newIndex = pageWrap({ start: 0, length: images.length, currentNum: newPage });
        setModalImgIndex(newIndex);
    }

    return (
        <>
            <div className="relative pt-4 flex flex-row justify-start gap-x-2 cursor-pointer">
                {
                    images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`relative w-1/6 bg-orange-300 rounded
                                ${imgIndex === index ? "border-solid border-2 border-blue-400 " : ""
                                }
                                `}
                            onClick={handleModalOpen.bind(null, index)}
                        >
                            <Image
                                className="rounded"
                                sizes="100vw"
                                style={{
                                    width: '100vw',
                                    height: 'auto',
                                    objectFit: 'cover',
                                }}
                                width={100}
                                height={100}
                                src={img.src}
                                alt={img.alt}
                            />
                            <Mask />
                        </motion.div>
                    ))
                }
            </div>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} isMaskClosable={false}>
                <div className="relative cursor-pointer">
                    <Image
                        src={images[modalImgIndex].src}
                        alt={images[modalImgIndex].alt}
                        sizes="100vw"
                        width={500}
                        height={500}
                        style={{
                            objectFit: 'contain',
                        }}
                    />
                    <div
                        className="absolute top-0 left-0 w-1/2 h-full"
                        onClick={() => modalImgPaginate(-1)}
                    ></div>
                    <div className="absolute top-0 right-0 w-1/2 h-full"
                        onClick={() => modalImgPaginate(1)}
                    ></div>
                </div>
            </SpringModal>
        </>

    )
}