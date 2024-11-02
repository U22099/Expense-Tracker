"use client";
import Image from "next/image";
import { useUser } from "@/store";

export default function Main(){
  const { user, setUser } = useUser();
  return (
    <main>
      <header className={`text-slate-300 blur-sm w-full h-80 bg-[${user?.image ?? "avatar.jpg"}]`}>
        <label htmlFor="input">
          Tap To Upload
        </label>
        <input type="file" accepts="image/*" hidden id="input"/>
      </header>
      <section>
        <p>Change Currency Symbol</p>
        <p>Log Out</p>
        <p>Reset</p>
      </section>
    </main>
  )
}