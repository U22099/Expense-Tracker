"use server"
import { signIn, signOut } from "./auth";
import { hash } from "bcryptjs";

export const handleSocialLogin = async (formData: FormData) => {
    const provider = formData.get("action") as string;

    await signIn(provider, {redirectTo: "/homepage"});
}

export const handleLogout = async () => {
    await signOut({redirectTo: "/"});
}

export const handleLogin = async (formData: FormData) => {
    const { email, password } = Object.entries(formData);

    await signIn("credentials", { email, password, redirectTo: "/homepage" });
}

export const handleRegister = async (formData: FormData): Promise<Object> => {
    try{
        await connectToDb();
        const { username, email, password } = Object.entries(formData);

        const user = User.findOne({email});

        if(user) throw new Error("Email already exists");

        const hash = await hash(password, 10);

        const user = new User({
            username,
            email,
            password: hash,
            image: "/avatar.JPG",
        })
        await user.save();
        await handleLogin(formData);
        return {success: true}
    } catch(err) {
        throw new Error("Error while logging user in");
        return {error: e.message}
    }
}