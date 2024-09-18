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
        <motion.div variants={container} initial="hidden" animate="visible" className="h-fit w-full md:w-[60vw] w-[90vw] flex justify-between items-center px-3 md:px-5 py-3 md:py-5 bg-black dark:bg-white rounded-full">

            <motion.div variants={children} initial="hidden" animate="visible" >
                <IoMdHome className={"rounded-full p-2 text-[2.5em] md:text-[4em] fill-white dark:fill-black" + (nav === 0 ? "bg-white fill-black dark:bg-black dark:fill-white ": "")} onClick={() => setNav(0)}/>
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" >
                <MdBarChart className={"rounded-full p-2 text-[2.5em] md:text-[4em] fill-white dark:fill-black" + (nav === 1 ? "bg-white fill-black dark:bg-black dark:fill-white ": "")} onClick={() => setNav(1)} />
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" >
                <FaGear className={"rounded-full p-2 text-[2.5em] md:text-[4em] fill-white dark:fill-black" + (nav === 2 ? "bg-white fill-black dark:bg-black dark:fill-white ": "")} onClick={() => setNav(2)} />
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" >
                <FaPlus className={"rounded-full p-2 text-[2.5em] md:text-[4em] fill-white dark:fill-black" + (nav === 3 ? "bg-white fill-black dark:bg-black dark:fill-white ": "")} onClick={() => setNav(3)} />
            </motion.div>
        </motion.div>
    )
}