"use server"
import { signIn, signOut } from "next-auth/react";
import { connectToDb } from "./utils";
import { User } from "./model";
import { hash } from "bcryptjs";

export const handleSocialLogin = async (formData: FormData) => {
    const provider = formData.get("action") as string;

    await signIn(provider, {redirectTo: "/homepage"});
}

export const handleLogout = async () => {
    await signOut({redirectTo: "/"});
}

export const handleLogin = async (formData: FormData) => {
    const { email, password } = Object.fromEntries(formData);

    await signIn("credentials", { email, password, redirectTo: "/homepage" });
}

export const handleRegister = async (prevState, formData: FormData): Promise<Object> => {
    try{
        await connectToDb();
        const { username, email, password } = Object.fromEntries(formData) as {username: string, email: string, password: string};

        const user = await User.findOne({email});

        if(user) return {err: "Email already exists"}

        const hashed = await hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashed,
            image: "/avatar.JPG",
        })
        await newUser.save();
        await signIn("credentials", { email, password, redirectTo: "/homepage" });
        return {success: true}
    } catch(err) {
        return {error: `Error while logging user in: ${err}`}
    }
}