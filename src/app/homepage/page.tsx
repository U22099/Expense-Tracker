"use server";
import Header from "@/components/headers";
import Body from "@/components/body";
import NavBar from "@/components/navbar";


export default async function Page(){
  return (
    <div className="flex flex-col justify-start h-screen">
        <Header/>
        <Body />
    </div>
    <nav className="fixed bottom-2">
      <NavBar />
    </nav>
  )
}
