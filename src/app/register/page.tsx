"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { handleRegister } from "@/lib/action";
import { useFormState } from "react-dom";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [state, formAction, isPending] = useFormState(handleRegister , undefined) as [{error?: string, success?: string} | undefined, string | ((formData: FormData) => void) | undefined, boolean]
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-screen min-h-screen bg-gray-200 dark:bg-black p-3 pb-10">
      <Image src="/Logo.JPG" alt="logo" className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 mx-auto mb-2 mt-4" />
      <h1 className="w-[70vw] md:w-[30vw] text-[2em] md:text-[3em] text-bold text-black dark:text-white text-center text-wrap custom-font">Sign Up for Expense Tracker</h1>
      <form action={formAction} className="flex flex-col gap-4 mx-auto mt-3">
        <input type="text" name="firstname" placeholder="Firstname" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <input type="text" name="lastname" placeholder="Lastname" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <input type="email" name="email" placeholder="Email" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <input type="password" name="password" placeholder="Password" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        {state?.error && <p className="text-red-600 font-mono text-sm">{state.error}</p>}
        <button className="p-2 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap- custom-font">{isPending ? <AiOutlineLoading className="animate-spin fill-white text-md"/> : "Sign Up"} </button>
      </form>
      <p className="text-gray-700">Already have an account? <Link href="/" className="text-black custom-font">Sign In</Link></p>
    </div>
  );
}