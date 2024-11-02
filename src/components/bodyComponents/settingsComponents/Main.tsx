"use client";
import Image from "next/image";
import { useUser, useData } from "@/store";
import Card from "@/components/utils/Card";
import { handleLogout } from "@/lib/action";
import { reset } from "@/lib/utils";

export default function Main(){
  const { user, setUser } = useUser();
  const currencySymbol = useData(state => state.currencySymbol);
  return (
    <main>
      <header className={`flex justify-center items-center font-3xl text-black dark:text-white w-full h-80 bg-[url('${user?.image ?? "avatar.jpg"}')]`}>
        <label htmlFor="input" className="w-full h-full bg-gray-100">
          Tap To Upload
        </label>
        <input type="file" accept="image/*" hidden id="input"/>
      </header>
      <Card>
        <h1>Name: {user.username}</h1>
        <h1>Email: {user.email}</h1>
      </Card>
      <section className="text-black dark:text-white text-xl font-bold">
        <Card>Change Currency Symbol {currencySymbol}</Card>
        
        <Card onClick={async () => await handleLogout()} >Log Out</Card>
        
        <Card onClick={async () => await reset()}>Reset</Card>
        
      </section>
    </main>
  )
}