"use server";
import Header from "@/components/headers";
import Body from "@/components/body";
import NavBar from "@/components/navbar";


export default async function Page(){
  return (
    <div className="flex flex-col justify-start h-screen my-6">
      <Header/>
      <Body />
      <nav className="fixed bottom-2 w-full">
        <NavBar />
      </nav>
    </div>
  )
}
