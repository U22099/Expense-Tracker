"use server";
import Header from "@/components/headers";
import Body from "@/components/body";
import NavBar from "@/components/navbar";


export default async function Page(){
  return (
    <div className="flex flex-col justify-center">
        <Header/>
        <Body />
        <NavBar />
    </div>
  )
}
