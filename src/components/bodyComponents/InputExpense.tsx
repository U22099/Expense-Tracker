"use client";
import { useState } from "react";
import CategoryDropDownList from "./inputExpenseComponents/CategoryDropDownList";
import Display from "./inputExpenseComponents/Display";
import InputPad from "./inputExpenseComponents/InputPad";
import { motion } from "framer-motion";
import { useData, useNav } from "@/store";
import { updateData, updateExpenseData } from "@/lib/utils";
import { type datatype3 } from "@/store";
import { getCurrentDate } from "@/store";

export default function InputExpense(){
  
  const [value, setValue] = useState<number>(0);
  
  const [ category, setCategory ]= useState<string>("Housing");
  
  const setOpenInput = useNav(state => state.setOpenInput);
  
  const { setData, data, setExpense, expense } = useData(state => {
    return {
      setData: state.setData, 
      data: state.data,
      setExpense: state.setExpense,
      expense: state.expense
    }
  });
  
  const submit = async () => {
    const index = data.findIndex((item) => item.category === category);
    const newData = [...data];
    newData[index].amount += value;
    setData(newData);
    const date: string = getCurrentDate();
    await updateExpense(value, date, setExpense, expense);
    await updateData(newData);
    setOpenInput(false);
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

const updateExpense = async (value: number, date: string, setExpense: (expense: datatype3) => void, expense: datatype3): Promise<void> => {
  let expenseArr = [...expense];
  if(!expenseArr.length){
    expenseArr.push({
      amount: value,
      date
    });
  } else {
    const sameExpenseDate = expenseArr.find(x => x.date === date);
    if(sameExpenseDate){
      sameExpenseDate.amount += value;
    } else {
      expenseArr.push({
        amount: value,
        date
      });
    }
  }
  console.log(expenseArr);
  setExpense(expenseArr);
  await updateExpenseData(expenseArr);
}