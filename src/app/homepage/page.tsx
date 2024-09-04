import { auth } from '@/lib/auth'

const page = async () => {
    const session = await auth();
    if(!session) return null
  return (
    <div>
        <div className="flex text-black bg-white text-3xl font-serif">Homepage</div>
        <img src={session?.user.image ?? ''} className="object-cover rounded"/>
        <div className="flex text-black bg-white text-3xl font-serif">{session?.user.name}</div>
        <div className="flex text-black bg-white text-3xl font-serif">{session?.user.email}</div>
    </div>
  )
}

export default page