"use client";
import { useState } from "react";
import categoryDropDownList from "./inputExpenseComponents/categoryDropDownList";
import display from "./inputExpenseComponents/display";
import inputPad from "./inputExpenseComponents/inputPad";
import { motion } from "framer-motion";

export default function InputExpense(){
  
  const [value, setValue]: [value: number, setValue: (arg: number) => void] = useState(0);
  
  const [ category, setCategory ]: [category: string, setCategory: (arg: string) => void] = useState("Housing");
  
    return(
        <motion.div
        initial={{
          height: 0,
          opacity: 0
        }}
        animate={{
          height: 1,
          opacity: 1
        }}
        exit={{
          height: 0,
          opacity: 0
        }}
        className="flex flex-col justify-start items-start gap-2 p-2 rounded-xl bg-black dark:bg-white fixed bottom-10 w-fit h-fit backdrop-blur-md">
            <categoryDropDownList setCategory={setCategory}/>
            <display value={value}/>
            <inputPad setValue={setValue}/>
        </motion.div>
    )
}