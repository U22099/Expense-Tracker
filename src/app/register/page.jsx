"use client";

import { handleRegister } from "@/lib/action";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col justify-start items-center gap-3 w-screen h-screen bg-gray-200 dark:bg-black p-3">
      <h1 className="w-[70vw] md:w-[30vw] text-[2em] md:text-[3em] text-bold text-black dark:text-white text-center text-wrap custom-font">Sign Up for Expense Tracker</h1>
      <form action={handleRegister} className="flex flex-col gap-3 mx-auto mt-3">
        <input type="username" name="username" placeholder="Username" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-gray-300 shadow-md text-black custom-font"/>
        <input type="email" name="email" placeholder="Email" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-gray-300 shadow-md text-black custom-font"/>
        <input type="password" name="password" placeholder="Password" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-gray-300 shadow-md text-black custom-font"/>
        <button className="p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap- custom-font"> Sign Up </button>
      </form>
      <p className="text-gray-700">Already have an account? <Link href="/" className="text-black custom-font">Sign In</Link></p>
    </div>
  );
}