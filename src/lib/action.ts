"use server"
import { signIn } from "./auth";

export const handelGitHubLogin = async () => {
    await signIn("github", {redirectTo: "/homepage"});
}