import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const ModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="px-4 py-64 bg-slate-900 grid place-content-center">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
                Open Modal
            </button>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
};

interface SpringModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    children?: React.ReactNode;
    isMaskClosable?: boolean;
}

const SpringModal = ({ isOpen, setIsOpen, children, isMaskClosable = true }: SpringModalProps) => {
    const handleMaskClick = () => {
        if (isMaskClosable) {
            setIsOpen(false);
        }
    }
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleMaskClick}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0, rotate: "12.5deg" }}
                        animate={{ scale: 1, rotate: "0deg" }}
                        exit={{ scale: 0, rotate: "0deg" }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gradient-to-br from-slate-700 to-slate-500 p-4 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                        {!isMaskClosable && <div className="flex justify-end text-2xl pb-2">
                            <motion.span
                                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                                whileTap={{ scale: 1.2 }}
                            >
                                <FaTimes
                                    onClick={() => setIsOpen(false)}
                                />
                            </motion.span>
                        </div>}

                        {children}
                        {/* <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" /> */}
                        {/* <div className="relative z-10">
                            <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                                <FiAlertCircle />
                            </div>
                            <h3 className="text-3xl font-bold text-center mb-2">
                                One more thing!
                            </h3>
                            <p className="text-center mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                                aperiam vitae, sapiente ducimus eveniet in velit.
                            </p>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                                >
                                    Nah, go back
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                                >
                                    Understood!
                                </button>
                            </div>
                        </div> */}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export { ModalWrapper, SpringModal };