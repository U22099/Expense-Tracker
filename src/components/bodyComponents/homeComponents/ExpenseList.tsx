"use client";

import Image from "next/image";
import { useData } from "@/store";
import Card from "@/components/utils/Card";

type datatype = {
  [index: string]: string | number };

export default function ExpenseList() {
  const data = useData((state) => state.data);

  return (

    <div className="flex flex-col justify-start items-start gap-2 py-8 w-full">
    
      {data.map((expense: datatype, i: number) => (
            <div key={i}>
              <Card className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-3 w-full justify-start">
                    <Image src="/Logo.JPG" alt="logo" className="object-cover rounded-lg w-14 h-14"/>
                    <h1 className="font-bold text-black dark:text-white text-[1.3em] md:text-[1.5em] w-full">{expense.category}</h1>
                  </div>
                  <p className="font-bold text-black dark:text-white text-[1em] md:text-[1.2em]">{expense.amount}</p>
              </Card>
            </div>
      ))}
    </div>
  );
}