import { motion } from "framer-motion";
import { useState } from "react";

// const tabs = ["商品描述", "了解更多", "送貨及付款方式", "顧客評價"];

interface ChipTabsProps {
    tabs: string[];
    setTabIndex?: (index: number) => void;
    children?: React.ReactNode;
}
const ChipTabs = ({ tabs, setTabIndex, children }: ChipTabsProps) => {
    const [selected, setSelected] = useState(tabs[0]);

    return (
        <>
            <div className="px-24 py-14 bg-slate-200 flex justify-around items-center flex-wrap gap-8">
                {tabs.map((tab, index) => (
                    <Chip
                        index={index}
                        text={tab}
                        selected={selected === tab}
                        setSelected={setSelected}
                        setIndex={setTabIndex}
                        key={tab}
                    />

                ))}
            </div>
            <div className="bg-white p-4 rounded-md">
                {children}
            </div>
        </>

    );
};

interface ChipProps {
    index: number;
    text: string;
    selected: boolean;
    setSelected: (text: string) => void;
    setIndex?: (index: number) => void;
}

const Chip = ({
    index,
    text,
    selected,
    setSelected,
    setIndex,
}: ChipProps) => {
    const handleClick = (text: string, index: number) => {
        setSelected(text);
        if (setIndex) {
            setIndex(index);
        }
    }
    return (
        <button
            onClick={handleClick.bind(null, text, index)}
            className={`${selected
                ? "text-white font-bold"
                : "text-slate-700 hover:text-slate-700 hover:bg-orange-300"
                } text-sm transition-colors px-4 py-2 rounded-md relative`}
        >
            <span className="relative z-10 text-xl">{text}</span>
            {selected && (
                <motion.span
                    layoutId="pill-tab"
                    transition={{ type: "spring", duration: 0.5 }}
                    className="absolute inset-0 z-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md"
                ></motion.span>
            )}
        </button>
    );
};

export default ChipTabs;