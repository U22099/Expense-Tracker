import { handleLogout } from "@/lib/action";
import { auth } from "@/lib/auth";
import Image from "next/image";


export default async function Page(){
  const session = await auth();
  if(!session) return null
  return (
    <div>
        <div className="flex text-black bg-white text-3xl font-serif">Homepage</div>
        <Image src={session.user?.image ?? ''} alt="image" className="object-cover rounded-full mx-auto w-40 h-40"/>
        <div className="flex text-black bg-white text-3xl font-serif">{session.user?.name}</div>
        <div className="flex text-black bg-white text-3xl font-serif">{session.user?.email}</div>
        <form action={handleLogout}>
          <button className="flex p-4 px-5 items-center w-[80vw] md:w-[40vw] rounded-full bg-black text-white dark:bg-white dark:text-black">Logout</button>
        </form>
    </div>
  )
}
