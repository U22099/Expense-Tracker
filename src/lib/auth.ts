import NextAuth from "next-auth";
import { User } from "@/lib/model";
import { compare } from "bcryptjs";
import { connectToDb } from "@/lib/utils";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const logIn = async (credentials: Partial<Record<string, unknown>>): Promise<Object | null> => {
    try{
        await connectToDb();
        const email = credentials.email as string;
        const password = credentials.password as string;
        const user = await User.findOne({email});

        console.log(email, "login", user);
        if(!user) throw new Error("Username or email does not exist");

        const match = await compare(password, user.password);
        if(!match){
            throw new Error("Incorrect password")
        }
        return user;
    } catch(err) {
        throw new Error("Error while logging user in");
    }
}
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHub, 
        Google,
        Credentials({
            async authorize(credentials: Partial<Record<string, unknown>>): Promise<Object | null>{
                try{
                    const user = await logIn(credentials);
                    console.log(user);
                    return user;
                } catch(err) {
                    console.log(err);
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn({ account , profile }): Promise<string | boolean>{
            if(account?.provider === "github"){
                try{
                    await connectToDb();
                    const user = await User.findOne({ email: profile?.email });
                    if(!user){
                        const user = new User({
                            username: profile?.login,
                            email: profile?.email,
                            image: profile?.avatar_url,
                        })
                        await user.save();
                    }
                } catch(e) {
                    console.log(e, "Error in callback");
                    return false;
                }
                return true
            } else if(account?.provider === "google"){
                try{
                    await connectToDb();
                    const user = await User.findOne({ email: profile?.email });
                    if(!user){
                        const user = new User({
                            username: profile?.name,
                            email: profile?.email,
                            image: profile?.picture,
                        })
                        await user.save();
                    }

                } catch(e) {
                    console.log(e, "Error in callback");
                    return false;
                }
                return true
            } else {
                return false
            }
        },
    },
    pages: {
        signIn: "/",
    },
})
