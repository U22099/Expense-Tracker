"use client";
import { handleLogout } from "@/lib/action";
import { useState, useEffect } from "react";
import { fetchUser } from "@/lib/utils";
import Image from "next/image";

interface UserObj{
  id: string;
  name: string;
  image: string;
  email: string;
}

export default async function Navbar(){
  const [user, setUser] = useState<UserObj | null>(null);
  useEffect(()=>{
    fetchUser(setUser);
  }, [])
  return (
    <div>
        <div className="flex text-black bg-white text-3xl font-serif">Homepage</div>
        <Image src={user?.image ?? ''} alt="image" className="object-cover rounded-full mx-auto w-40 h-40"/>
        <div className="flex text-black bg-white text-3xl font-serif">{user?.name}</div>
        <div className="flex text-black bg-white text-3xl font-serif">{user?.email}</div>
        <form action={handleLogout}>
          <button className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black">Logout</button>
        </form>
    </div>
  )
}
