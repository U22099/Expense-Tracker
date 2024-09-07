"use client";
import { handleLogin, handleSocialLogin } from "@/lib/action";
import { AiOutlineLoading } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle  } from "react-icons/fc";
import { useFormState, useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
  const [state, formAction] = useFormState(handleLogin , undefined) as [{error?: string} | undefined, string | ((formData: FormData) => void) | undefined, boolean]

  return (
    <motion.div
    initial={{opacity: 0, y: 200}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1}}
     className="flex flex-col justify-start items-center gap-3 w-screen min-h-screen bg-gray-200 dark:bg-black p-3 pb-10">
      <Image src="/Logo.JPG" alt="logo" className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 mx-auto mb-2 mt-4" />
      <h1 className="text-[2.3em] md:text-[4em] text-bold text-black dark:text-white text-center custom-font">Expense Tracker</h1>
      <p className="text-black dark:text-white text-center custom-font" >Track, manage, and master your expenses with ease</p>
      <form action={handleSocialLogin} className="flex flex-col gap-3 mx-auto mt-4">
        <button name="provider" value="google" className="p-2 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.2em] md:text-[1.5em] flex justify-center gap-4"><FcGoogle className="text-3xl custom-font"/> Sign In with Google</button>
        <button name="provider" value="github" className="p-2 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaGithub className="fill-[#333333] text-3xl custom-font"/> Sign In with GitHub</button>
      </form>
      <div className="flex justify-center items-center w-[65vw] md:w-[28vw] mx-auto mx-4 gap-1">
        <span className="max-w-[45%] text-black dark:text-white">-------------</span>
          Or
        <span className="max-w-[45%] text-black dark:text-white">-------------</span>
      </div>
      <form action={formAction} className="flex flex-col gap-3 mx-auto mt-3">
        <input type="email" name="email" placeholder="Email" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <input type="password" name="password" placeholder="Password" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        {state?.error && <p className="text-red-600 font-mono text-sm">{state.error}</p>}
        <Button text="Sign In"/>
      </form>
      <p className="text-gray-700">New to Expense Tracker? <Link href="/register" className="text-black custom-font">Sign Up</Link></p>
    </motion.div>
  );
}

function Button({text}: {text: string}){
  const {pending}  = useFormStatus();
  return(
    <button className="p-2 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap- custom-font">{pending ? <AiOutlineLoading className="animate-spin fill-white text-md dark:fill-black"/> : text} </button>
  )
}