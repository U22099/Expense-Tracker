"use server"
import { signIn, signOut, auth } from "@/lib/auth";
import { connectToDb } from "@/lib/utils";
import { User } from "@/lib/model";
import { hash } from "bcryptjs";
import { cookies } from "next/headers";


export const handleSocialLogin = async (formData: FormData) => {
    const provider = formData.get("provider") as string;

    await signIn(provider, {redirectTo: "/homepage"});
    await storeSession();
}

export const handleLogout = async () => {
    deleteSession();
    await signOut({redirectTo: "/"});
}

export const handleLogin = async (prevState: any, formData: FormData) => {
    const { email, password } = Object.fromEntries(formData) as {email: string, password: string};

    console.log(email, "loginBase");
    try{
        await signIn("credentials", { email: email.trim(), password: password.trim(), redirectTo: "/homepage" });
        await storeSession();
    } catch(e: any){
		if(e.digest.includes("NEXT_REDIRECT")){
            await storeSession();
		    return { success: "Successfull" }
		}
        console.log("*Start*", e, "*End*");
        return {error: "An error occured, Please try again"}
    }
}

export const handleRegister = async (prevState: any, formData: FormData) => {
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
        await storeSession();
        return { success: "Successfull" }
    } catch(err) {
        return {error: "Error while registering user, Try again"}
    }
}

export const setCookie = (name: string, value: any) => {
    cookies().set(name, value);
}
export const getCookie = (name: string): any => {
    const data = cookies().get(name);
    return data;
}

export const storeSession = async (): Promise<boolean> => {
    const session = await auth();
    if(session&&session.user){
        setCookie("session", session.user);
        return true;
    } else {
        return false
    }
}
export const getSession = (): UserObj | null => {
    const user = getCookie("session") as UserObj | null;
    if(user){
        return user
    }
}
export const deleteSession = (): boolean => {
    const user = getSession();
    if(user){
        setCookie("session", null);
    }
    return true;
}
type UserObj = {
    id: string,
    name: string,
    image: string,
    email: string
}