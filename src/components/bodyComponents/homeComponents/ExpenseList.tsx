"use client";

import Image from "next/image";
import { useData, type datatype } from "@/store";
import Card from "@/components/utils/Card";

export default function ExpenseList() {
  const data: datatype = useData(state => state.data);
  const currencySymbol: string = useData(state => state.currencySymbol);

  return (

    <div className="flex flex-col items-start gap-2 py-8 w-full">
    
      {data.map((expense: {
        category: string,
        amount: number
      }, i: number) => (
            <div key={i} className="w-full">
              <Card className="w-full items-center justify-between">
                  <div className="flex items-center gap-3 w-full justify-start">
                    <Image src={`/${expense.category.toLowerCase()}.jpg`} alt="logo" className="object-cover rounded-lg w-14 h-14"/>
                    <h1 className="font-bold text-black dark:text-white text-[1.3em] md:text-[1.5em] w-full">{expense.category}</h1>
                  </div>
                  <p className="font-bold text-black dark:text-white text-[1em] md:text-[1.2em]">{currencySymbol}{expense.amount.toString().length >= 6 ? `${((expense.amount/1000).toFixed(2))}K` : expense.amount}</p>
              </Card>
            </div>
      ))}
    </div>
  );
}