"use client";
import { useState } from "react";
import CategoryDropDownList from "./inputExpenseComponents/CategoryDropDownList";
import Display from "./inputExpenseComponents/Display";
import InputPad from "./inputExpenseComponents/InputPad";
import { motion } from "framer-motion";
import { useData, useNav } from "@/store";
import { updateData } from "@/lib/utils";

export default function InputExpense(){
  
  const [value, setValue] = useState<number>(0);
  
  const [ category, setCategory ]= useState<string>("Housing");
  
  const setOpenInput = useNav(state => state.setOpenInput);
  
  const { setData, data } = useData(state => {
    return {
      setData: state.setData, 
      data: state.data
    }
  });
  
  const submit = async () => {
    const index = data.findIndex((item) => item.category === category);
    const newData = [...data];
    newData[index].amount = value;
    setData(newData);
    setOpenInput(false);
    await updateData(newData);
  }
  
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
        className="flex flex-col justify-start items-start gap-2 py-2 px-4 rounded-xl bg-black dark:bg-white fixed bottom-20 w-fit h-fit backdrop-blur-md mx-auto self-center">
            <CategoryDropDownList setCategory={setCategory}/>
            <Display value={value}/>
            <InputPad setValue={setValue} submit={submit}/>
        </motion.div>
    )
}