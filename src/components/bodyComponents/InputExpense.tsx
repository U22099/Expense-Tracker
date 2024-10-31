"use client";
import { useState } from "react";
import CategoryDropDownList from "./inputExpenseComponents/CategoryDropDownList";
import Display from "./inputExpenseComponents/Display";
import InputPad from "./inputExpenseComponents/InputPad";
import { motion } from "framer-motion";

export default function InputExpense(){
  
  const [value, setValue] = useState<number>(0);
  
  const [ category, setCategory ]= useState<string>("Housing");
  
    return(
        <motion.div
        initial={{
          y: 200,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        exit={{
          y: 200,
          opacity: 0
        }}
        className="flex flex-col justify-start items-start gap-2 p-6 rounded-xl bg-black dark:bg-white fixed bottom-14 w-fit h-fit backdrop-blur-md mx-auto">
            <CategoryDropDownList setCategory={setCategory}/>
            <Display value={value}/>
            <InputPad setValue={setValue}/>
        </motion.div>
    )
}