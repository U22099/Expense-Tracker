"use client";
import { useNav } from "@/store";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdBarChart } from "react-icons/md";

export default function NavBar(){
    const { nav, setNav } = useNav();
    const container = {
        hidden: {opacity: 0, x: -200},
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.5,
                delayChildren: 0.5,
                staggerChildren: 0.3
            }
        }
    }
    const children = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }
    return(
        <motion.div variants={container} initial="hidden" animate="visible" className="h-24 w-full md:w-[60vw] flex justify-between items-center px-5 py-2 bg-black dark:bg-white rounded-full">

            <motion.div variants={children} initial="hidden" animate="visible" >
                <IoMdHome className={(nav === 0 ? "bg-white fill-black dark:bg-black dark:fill-white ": "") + "rounded-full p-2 text-[1.5em] md:text-[2em] fill-white dark:fill-black"} onClick={() => setNav(0)}/>
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" >
                <MdBarChart className={(nav === 1 ? "bg-white fill-black dark:bg-black dark:fill-white ": "") + "rounded-full p-2 text-[1.5em] md:text-[2em] fill-white dark:fill-black"} onClick={() => setNav(1)} />
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" >
                <FaGear className={(nav === 2 ? "bg-white fill-black dark:bg-black dark:fill-white ": "") + "rounded-full p-2 text-[1.5em] md:text-[2em] fill-white dark:fill-black"} onClick={() => setNav(2)} />
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" >
                <FaPlus className={(nav === 3 ? "bg-white fill-black dark:bg-black dark:fill-white ": "") + "rounded-full p-2 text-[1.5em] md:text-[2em] fill-white dark:fill-black"} onClick={() => setNav(3)} />
            </motion.div>
        </motion.div>
    )
}