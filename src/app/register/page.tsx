"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { handleRegister, getSession } from "@/lib/action";
import { useFormState, useFormStatus } from "react-dom";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  
  const [state, formAction] = useFormState(handleRegister , undefined);

  const parentVariant = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.3
      }
    }
  }
  const childrenVariant = {
    hidden: { x: -100 },
    visible: { x: 0 }
  }
  useEffect(()=>{
    if(state?.success){
      router.push("/homepage");
    }
  }, [state]);
  // useEffect(()=>{
	// 	if(getSession()){
	// 		router.push("/homepage");
	// 	}
	// },[router])
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1}} className="flex flex-col justify-center items-center gap-3 w-screen min-h-screen bg-gray-200 dark:bg-black p-3 pb-10">
      <Image src="/Logo.JPG" alt="logo" className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 mx-auto mb-2 mt-4" />
      <h1 className="w-[70vw] md:w-[30vw] text-[2em] md:text-[3em] text-bold text-black dark:text-white text-center text-wrap custom-font">Sign Up for Expense Tracker</h1>
      <motion.div variants={parentVariant} initial="hidden" animate="visible">
        <form action={formAction} className="flex flex-col gap-4 mx-auto mt-3">
          <motion.input variants={childrenVariant} initial="hidden" animate="visible" type="text" name="firstname" placeholder="Firstname" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
          <motion.input variants={childrenVariant} initial="hidden" animate="visible"  type="text" name="lastname" placeholder="Lastname" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
          <motion.input variants={childrenVariant} initial="hidden" animate="visible"  type="email" name="email" placeholder="Email" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
          <motion.input variants={childrenVariant} initial="hidden" animate="visible"  type="password" name="password" placeholder="Password" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
          {state?.success && <p className="text-green-600 font-mono text-sm">{state.success}</p>}
          {state?.error && <p className="text-red-600 font-mono text-sm">{state.error}</p>}
          <Button text="Sign Up" />
        </form>
      </motion.div>
      <p className="text-gray-700">Already have an account? <Link href="/" className="text-black custom-font">Sign In</Link></p>
    </motion.div>
  );
}

function Button({text}: {text: string}){
  const childrenVariant = {
    hidden: { x: -100 },
    visible: { x: 0 }
  }
  const {pending}  = useFormStatus();
  return(
    <motion.button variants={childrenVariant} initial="hidden" animate="visible" className="p-2 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap- custom-font">{pending ? <AiOutlineLoading className="animate-spin fill-white text-md dark:fill-black"/> : text} </motion.button>
  )
}