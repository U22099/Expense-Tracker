"use client";
import { useState, useEffect } from "react";
import { useUser, useData } from "@/store";
import Card from "@/components/utils/Card";
import { handleLogout } from "@/lib/action";
import { updateCurrency, reset } from "@/lib/utils";

export default function Main(){
  const { user, setUser } = useUser();
  const { currencySymbol, setCurrencySymbol } = useData(state => {
    return {
      currencySymbol: state.currencySymbol,
      setCurrencySymbol: state.setCurrencySymbol
    }
  })
  const [ showList, setShowList ] = useState<boolean>(false);
  useEffect(() => {
    updateCurrency(currencySymbol);
  }, [currencySymbol]);
  return (
    <main className="pb-12 flex flex-col gap-2">
      <header className={`rounded-md flex justify-center items-center w-full h-80 bg-[url('${user?.image ?? "/avatar.JPG"}')]`}>
        <label htmlFor="input" className="w-full h-full flex justify-center items-center text-3xl font-bold text-center text-black dark:text-white">
          Tap To Upload
        </label>
        <input type="file" accept="image/*" hidden id="input"/>
      </header>
      <Card className="gap-2 flex-col">
        <h1>Name: {user?.name}</h1>
        <h1>Email: {user?.email}</h1>
      </Card>
      <section className="text-black dark:text-white text-xl font-bold flex flex-col gap-4">
        <Card onClick={() => setShowList(!showList)} className="relative text-black dark:text-white bg-white dark:bg-black">
        Change Currency Symbol {currencySymbol}
        {showList&&<List setCurrencySymbol={setCurrencySymbol}/>}
        </Card>
        
        <Card onClick={async () => await handleLogout()} >Log Out</Card>
        
        <Card onClick={async () => await reset()}>Reset</Card>
        
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
        <p onClick={() => setCurrencySymbol("¥")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">¥</p>
        <p onClick={() => setCurrencySymbol("$")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">$</p>
        <p onClick={() => setCurrencySymbol("$")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">$</p>
        <p onClick={() => setCurrencySymbol("R")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">R</p>
        <p onClick={() => setCurrencySymbol("৳")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">৳</p>
        <p onClick={() => setCurrencySymbol("₽")} className="flex justify-center items-center p-2 rounded-md text-white dark:text-black active:bg-white active:dark:bg-black">₽</p>
    </div>
  )
}