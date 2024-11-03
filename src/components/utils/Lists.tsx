"use client";

import Image from "next/image";
import Card from "@/components/utils/Card";
import { useData } from "@/store";

export default function Lists({ name, amount, key } : {
  name: string | number,
  amount: string | number,
  key?: number
}) {
  const currencySymbol: string = useData(state => state.currencySymbol);
  return (
    <div className="w-full" key={key || 0}>
      <Card className="w-full items-center justify-between">
        <div className="flex items-center gap-3 w-full justify-start">
        <h1 className="font-bold text-black dark:text-white text-[1.3em] md:text-[1.5em] w-full">{name}</h1>
        </div>
        <p className="font-bold text-black dark:text-white text-[1em] md:text-[1.2em]">{currencySymbol}{amount.toString().length >= 6 ? `${((amount/1000).toFixed(2))}K` : amount}
        </p>
      </Card>
    </div>
  );
}