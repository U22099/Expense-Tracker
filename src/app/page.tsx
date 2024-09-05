import { handleSocialLogin } from "@/lib/action";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center gap-3 w-screen h-screen bg-white dark:bg-black p-3">
      <Image src="/logo1.jpg" alt="logo" className="rounded-full object-cover w-28 h-28 mx-auto mb-4 mt-4"/>
      <h1 className="text-[2.3em] md:text-[4em] text-bold text-black dark:text-white text-center">Expense Tracker</h1>
      <p className="text-black dark:text-white text-center" >Sign in with the following no sign up needed</p>
      <form action={handleSocialLogin} className="flex flex-col gap-3 mx-auto mt-4">
        <button name="provider" value="google" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaGoogle className="fill-[#4285f4] text-3xl"/> Sign In with Google</button>
        <button name="provider" value="github" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaGithub className="fill-[#333333] text-3xl"/> Sign In with GitHub</button>
        <button name="provider" value="facebook" className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black text-[1.3em] md:text-[1.5em] flex justify-center gap-4"><FaFacebook className="fill-[#4267b2] text-3xl"/> Sign In with Facebook</button>
      </form>
    </div>
  );
}