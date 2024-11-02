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
    <main>
      <header className={`flex justify-center items-center font-3xl text-black dark:text-white w-full h-80 bg-[url('${user?.image ?? "/avatar.JPG"}')]`}>
        <label htmlFor="input" className="w-full h-full bg-gray-100">
          Tap To Upload
        </label>
        <input type="file" accept="image/*" hidden id="input"/>
      </header>
      <Card>
        <h1>Name: {user?.username}</h1>
        <h1>Email: {user?.email}</h1>
      </Card>
      <section className="text-black dark:text-white text-xl font-bold">
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
    <div className="flex absolute max-w-[40vw] h-fit flex-wrap p-2 rounded-md bg-black dark:bg-white">
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