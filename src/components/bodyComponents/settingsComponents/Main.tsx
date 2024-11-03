"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useUser, useData } from "@/store";
import Card from "@/components/utils/Card";
import { handleLogout } from "@/lib/action";
import { updateCurrency, reset, deleteUser } from "@/lib/utils";

export default function Main(){
  const { user, setUser } = useUser();
  const { setData, setExpense, currencySymbol, setCurrencySymbol } = useData(state => {
    return {
      setData: state.setData,
      setExpense: state.setExpense,
      currencySymbol: state.currencySymbol,
      setCurrencySymbol: state.setCurrencySymbol
    }
  })
  const [ showList, setShowList ] = useState<boolean>(false);
  useEffect(() => {
    updateCurrency(currencySymbol);
  }, [currencySymbol]);
  return (
    <main className="pb-16 flex flex-col gap-2">
      <header className="rounded-md flex justify-center items-center w-full h-80 relative">
        <Image src={`${user?.image ?? "/avatar.JPG"}`} alt="Profile Picture" className="absolute bg-fixed h-80 w-full object-cover" />
      </header>
      <Card className="gap-2 flex-col text-[gold] text-xl font-bold">
        <h1>Name: {user?.name}</h1>
        <h1>Email: {user?.email}</h1>
      </Card>
      <section className="text-black dark:text-white text-xl font-bold flex flex-col gap-4">
        <Card onClick={() => setShowList(!showList)} className="relative text-black dark:text-white bg-white dark:bg-black">
        Change Currency Symbol {currencySymbol}
        {showList&&<List setCurrencySymbol={setCurrencySymbol}/>}
        </Card>
        
        <Card onClick={async () => await handleLogout()} >Log Out</Card>
        
        <Card onClick={async () => await reset(setData, setExpense)}>Reset</Card>        
        
        <Card className="text-red-700" onClick={async () => {
          await deleteUser();
          await handleLogout();
        }}>Delete Account</Card>
      </section>
    </main>
  )
}

const List = ({ setCurrencySymbol }: { setCurrencySymbol: (arg: string) => void}) => {
  return(
    <div className="flex absolute max-w-[60vw] w-fit text-2xl h-fit flex-wrap p-2 rounded-md bg-black dark:bg-white">
      <p onClick={() => setCurrencySymbol("$")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">$</p>
        <p onClick={() => setCurrencySymbol("€")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">€</p>
        <p onClick={() => setCurrencySymbol("£")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">£</p>
        <p onClick={() => setCurrencySymbol("₹")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">₹</p>
        <p onClick={() => setCurrencySymbol("₦")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">₦</p>
        <p onClick={() => setCurrencySymbol("¥")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">¥</p>
        <p onClick={() => setCurrencySymbol("R")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">R</p>
        <p onClick={() => setCurrencySymbol("৳")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">৳</p>
        <p onClick={() => setCurrencySymbol("₽")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">₽</p>
    </div>
  )
}