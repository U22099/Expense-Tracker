"use client";

import Image from "next/image";
import { useData } from "@/store";
import Card from "@/components/utils/Card";

type datatype = {[index: string]: string | number};

export default function ExpenseList(){
  const data = useData(state => state.data);  

  return(
    <div className="flex flex-col justify-start items-center gap-2 py-8 px-2">
      {data.map((expense: datatype) => {
          return(
            <Card>
              <div className="flex w-full gap-4 items-center">
                <Image src="logo.jpg" className="object-cover rounded-full w-14 h-14"/>
                <h1 className="font-bold text-black dark:text-white text-[1.3em] md:text-[1.5em] w-full">{expense.category}</h1>
                <p className="font-bold text-black dark:text-white text-[1em] md:text-[1.2em]">{expense.amount}</p>
              <div>
            </Card>
          )
        })
      }
    </div>
  )
}