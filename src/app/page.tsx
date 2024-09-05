import { handleSocialLogin } from "@/lib/action";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center gap-3 w-screen h-screen bg-white dark:bg-black p-3">
      <Image src="/logo1.jpg" alt="logo" className="rounded-full object-cover w-24 h-24 mx-auto mb-4"/>
      <h1 className="text-[2.3em] md:text-[4em] text-bold text-black dark:text-white">Expense Tracker</h1>
      <p className="text-black dark:text-white" >Sign in with github or google no sign up needed</p>
      <form action={handleSocialLogin} className="flex flex-col gap-3 mx-auto">
        <button name="provider" value="google" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaGoogle className="fill-white dark:fill-black text-2xl"/> SignIn with Google</button>
        <button name="provider" value="github" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaGithub className="fill-white dark:fill-black text-2xl"/> SignIn with GitHub</button>
      </form>
    </div>
  );
}