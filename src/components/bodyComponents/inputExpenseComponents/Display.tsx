"use client";
import { useData } from "@/store";

export default function Display({ value }: {value: number}) {
  
  const currencySymbol: string = useData(state => state.currencySymbol);
  
  return (
    <h1 className="w-full break-words font-bold text-3xl text-center px-1">
      {`${currencySymbol}${value.toLocaleString()}`}
    </h1>
  )
}