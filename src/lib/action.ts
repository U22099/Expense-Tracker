"use server"
import { signIn } from "./auth";

export const handleGitHubLogin = async () => {
    await signIn("github", {redirectTo: "/homepage"});
}