"use client";
import { useEffect } from "react";
import { fetchUser } from "@/lib/utils";
import { useUser } from "@/store";
import Image from "next/image";

export default async function Navbar(){
  const {user, setUser} = useUser();
  useEffect(()=>{
    fetchUser(setUser);
  }, [])
  return (
    <div className="bg-white dark:bg-black flex items-center justify-between px-5 md:px-10">
        <div className="flex">
          <Image src="Logo.JPG" alt="logo" className="object-cover rounded-full mx-auto w-12 h-12"/>
          <h1 className="text-black dark:text-white text-xl md:text-2xl font-serif">Expense Tracker</h1>
        </div>
        <div className="flex">
          <Image src={user?.image ?? 'avatar.JPG'} alt="image" className="object-cover rounded-full mx-auto w-12 h-12"/>
          <div className="flex text-xl font-serif text-black dark:text-white">{user?.name.split(" ")[0]}</div>
        </div>
    </div>
  )
}
