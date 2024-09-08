"use server"
import { signIn, signOut } from "@/lib/auth";
import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/model";
import { hash } from "bcryptjs";

export const handleSocialLogin = async (formData: FormData) => {
    const provider = formData.get("provider") as string;

    await signIn(provider, {redirectTo: "/homepage"});
}

export const handleLogout = async () => {
    await signOut({redirectTo: "/"});
}

export const handleLogin = async (prevState: {error?: string} | undefined | void, formData: FormData): Promise<Object | void> => {
    const { email, password } = Object.fromEntries(formData) as {email: string, password: string};

    console.log(email, "loginBase");
    try{
        await signIn("credentials", { email: email.trim(), password: password.trim(), redirectTo: "/homepage" });
    } catch(e){
        console.log("Start", e, "End");
        return {error: "An error occured, Please try again"}
    }
}

export const handleRegister = async (prevState: {error?: string, success?: string} | undefined | void, formData: FormData): Promise<Object> => {
    try{
        await connectToDb();
        const { firstname, lastname, email, password } = Object.fromEntries(formData) as {firstname: string, lastname: string, email: string, password: string};

        const user = await User.findOne({email});

        if(user) return {err: "Email already exists"}

        const hashed = await hash(password.trim(), 10);

        const newUser = new User({
            username: firstname.trim() +" "+ lastname.trim(),
            email: email.trim(),
            password: hashed,
            image: "/avatar.JPG",
        })
        await newUser.save();
        await signIn("credentials", { email, password, redirectTo: "/homepage" });
        return { success: "Successfull" }
    } catch(err) {
        return {error: "Error while registering user, Try again"}
    }
}