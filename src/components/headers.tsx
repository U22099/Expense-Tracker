"use client";
import { useEffect } from "react";
import { fetchUser } from "@/lib/utils";
import { useUser } from "@/store";
import Image from "next/image";

export default function Header(){
  const {user, setUser} = useUser();
  useEffect(()=>{
    fetchUser(setUser);
  }, [])
  return (
    <div className="bg-white dark:bg-black shadow-md flex items-center justify-between px-5 md:px-10 h-16 py-2">
        <div className="flex h-full gap-2 items-center">
          <Image src="/Logo.JPG" alt="logo" className="object-cover rounded-full w-12 h-12"/>
          <h1 className="text-black dark:text-white text-md md:text-2xl">Expense Tracker</h1>
        </div>
        <div className="flex h-full gap-2 items-center">
          <Image src={user?.image ?? 'avatar.JPG'} alt="image" className="object-cover rounded-full w-12 h-12"/>
          <div className="flex text-md text-black dark:text-white">{user?.name.split(" ")[1]}</div>
        </div>
    </div>
  )
}
