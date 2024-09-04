import { handleGitHubLogin } from "@/lib/action";
import {FaGithub, FaGoogle} from "react-icons/fa6";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 w-screen h-screen bg-white dark:bg-black">
      <h1>Expense Tracker</h1>
      <Link href="/homepage">Homepage</Link>
      <form action="">
        <button className="flex w-3/4 md:w-2/4 rounded-full bg-black dark:bg-white dark:text-black"><FaGoogle className="inline fill-white dark:fill-black"/> SignIn with Google</button>
      </form>
      <form action={handleGitHubLogin}>
        <button className="flex w-3/4 md:w-2/4 rounded-full bg-black dark:bg-white dark:text-black"><FaGithub className="inline fill-white dark:fill-black"/> SignIn with GitHub</button>
      </form>
    </div>
  );
}
