import { handleGitHubLogin } from "@/lib/action";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Expense Tracker</h1>
      <Link href="/homepage">Homepage</Link>
      <form action={handleGitHubLogin}>
        <button>SignIn with GitHub</button>
      </form>
    </div>
  );
}
