"use server"
import { signIn, signOut } from "./auth";

export const handleSocialLogin = async (formData: FormData) => {
    const provider = formData.get("action") as string;

    await signIn(provider, {redirectTo: "/homepage"});
}

export const handleSocialLogout = async () => {
    await signOut({redirectTo: "/"});
}