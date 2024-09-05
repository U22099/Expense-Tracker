"use server"
import { signIn } from "./auth";

export const handleSocialLogin = async (formData: FormData) => {
    const provider = formData.get("action");

    await signIn(provider, {redirectTo: "/homepage"});
}