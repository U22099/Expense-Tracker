import { handleSocialLogin } from "@/lib/action";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center gap-3 w-screen h-screen bg-white dark:bg-black p-3">
      <h1 className="text-[3em] md:text-[4em] text-bold text-black dark:text-white">Expense Tracker</h1>
      <Link href="/homepage" className="text-bold text-black dark:text-white">Homepage</Link>
      <form action={handleSocialLogin} className="flex flex-col gap-3 mx-auto">
        <button name="provider" value="google" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black"><FaGoogle className="fill-white dark:fill-black"/> SignIn with Google</button>
        <button name="provider" value="github" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black"><FaGithub className="fill-white dark:fill-black"/> SignIn with GitHub</button>
      </form>
    </div>
  );
}