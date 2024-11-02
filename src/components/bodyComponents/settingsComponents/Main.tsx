"use client";
import Image from "next/image";
import { useUser } from "@/store";

export default function Main(){
  const { user, setUser } = useUser();
  return (
    <main>
      <header className={`flex justify-center items-center font-3xl text-black dark:text-white blur-sm w-full h-80 bg-[url('${user?.image ?? "avatar.jpg"}')]`}>
        <label htmlFor="input">
          Tap To Upload
        </label>
        <input type="file" accept="image/*" hidden id="input"/>
      </header>
      <section className="dark:text-white">
        <p>Change Currency Symbol</p>
        <p>Log Out</p>
        <p>Reset</p>
      </section>
    </main>
  )
}