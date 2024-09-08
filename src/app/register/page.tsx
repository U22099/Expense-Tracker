"use client";

import { AiOutlineLoading } from "react-icons/ai";
import { handleRegister } from "@/lib/action";
import { useFormState, useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { auth }  from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const router = useRouter();
  auth().then(session => {
    if(session) router.push("/homepage");
  });
  const [state, formAction] = useFormState(handleRegister , undefined) as unknown as [{error?: string, success?: string} | undefined, string | void | ((formData: FormData) => Promise<Object>), boolean]

  const parentVariant = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  const childrenVariant = {
    hidden: { x: -100 },
    visible: { x: 0 }
  }
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 1}} className="flex flex-col justify-center items-center gap-3 w-screen min-h-screen bg-gray-200 dark:bg-black p-3 pb-10">
      <Image src="/Logo.JPG" alt="logo" className="rounded-full object-cover w-32 h-32 md:w-40 md:h-40 mx-auto mb-2 mt-4" />
      <h1 className="w-[70vw] md:w-[30vw] text-[2em] md:text-[3em] text-bold text-black dark:text-white text-center text-wrap custom-font">Sign Up for Expense Tracker</h1>
      <motion.form variant={parentVariant} action={formAction} className="flex flex-col gap-4 mx-auto mt-3">
        <motion.input variant={childrenVariant} type="text" name="firstname" placeholder="Firstname" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <motion.input variant={childrenVariant}  type="text" name="lastname" placeholder="Lastname" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <motion.input variant={childrenVariant}  type="email" name="email" placeholder="Email" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        <motion.input variant={childrenVariant}  type="password" name="password" placeholder="Password" className="flex p-2 items-center w-[80vw] md:w-[40vw] rounded-lg bg-white text-[1.2em] md:text-[1.5em] shadow-md text-black custom-font"/>
        {state?.success && <p className="text-green-600 font-mono text-sm">{state.success}</p>}
        {state?.error && <p className="text-red-600 font-mono text-sm">{state.error}</p>}
        <Button text="Sign Up" />
      </motion.form>
      <p className="text-gray-700">Already have an account? <Link href="/" className="text-black custom-font">Sign In</Link></p>
    </motion.div>
  );
}

function Button({text}: {text: string}){
  const {pending}  = useFormStatus();
  return(
    <motion.button variant={childrenVariant}  className="p-2 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap- custom-font">{pending ? <AiOutlineLoading className="animate-spin fill-white text-md dark:fill-black"/> : text} </motion.button>
  )
}