
import { motion, Variants } from "framer-motion";
const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};
interface DropDownContentProps {
    itemText: string
}
export default function DropDownContent({ itemText }: DropDownContentProps) {
    return (
        <motion.li variants={itemVariants}>{itemText}</motion.li>
    )

}