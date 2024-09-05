"use client";

import { handleSocialLogin } from "@/lib/action";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle  } from "react-icons/fc";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(1);
  return (
    <div className="flex flex-col justify-start items-center gap-3 w-screen h-screen bg-white dark:bg-black p-3">
      <Image src="logo7.png" alt="logo" className="rounded-full object-cover w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 mt-4"/>
      <h1 className="text-[2.3em] md:text-[4em] text-bold text-black dark:text-white text-center">Expense Tracker</h1>
      <p className="text-black dark:text-white text-center" >Track, manage, and master your expenses with ease</p>
      <form action={handleSocialLogin} className="flex flex-col gap-3 mx-auto mt-4">
        <button name="provider" value="google" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.2em] md:text-[1.5em] flex justify-center gap-4"><FcGoogle className="text-3xl"/> Sign In with Google</button>
        <button name="provider" value="github" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaGithub className="fill-[#333333] text-3xl"/> Sign In with GitHub</button>
      </form>
      <hr className="w-[75vw] md:w-[38vw] mx-auto border-black dark:border-white">
    </div>
  );
}