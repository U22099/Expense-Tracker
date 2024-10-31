"use client";
import { useNav } from "@/store";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdBarChart } from "react-icons/md";

export default function NavBar(){
    const { nav, setNav, openInput, setOpenInput } = useNav();
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
        <motion.div variants={container} initial="hidden" animate="visible" className="h-fit md:w-[40vw] w-[75vw] flex justify-between items-center px-3 md:px-5 py-3 bg-black dark:bg-white rounded-full mx-auto">

            <motion.div variants={children} initial="hidden" animate="visible" onClick={() => setNav(0)} className="cursor-pointer">
                <IoMdHome className={"rounded-full p-2 text-[2.5em] md:text-[3.5em]" + (nav === 0 ? " bg-white fill-black dark:bg-black dark:fill-white": " fill-white dark:fill-black")}/>
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" onClick={() => setNav(1)} className="cursor-pointer" >
                <MdBarChart className={"rounded-full p-2 text-[2.5em] md:text-[3.5em]" + (nav === 1 ? " bg-white fill-black dark:bg-black dark:fill-white": " fill-white dark:fill-black")} />
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" onClick={() => setNav(2)} className="cursor-pointer" >
                <FaGear className={"rounded-full p-2 text-[2.5em] md:text-[3.5em]" + (nav === 2 ? " bg-white fill-black dark:bg-black dark:fill-white": " fill-white dark:fill-black")} />
            </motion.div>

            <motion.div variants={children} initial="hidden" animate="visible" onClick={() => setOpenInput(!openInput)} className="cursor-pointer" >
                <FaPlus className={"rounded-full p-2 text-[2.5em] md:text-[3.5em]" + (openInput ? " bg-white fill-black dark:bg-black dark:fill-white": " fill-white dark:fill-black")} />
            </motion.div>
        </motion.div>
    )
}