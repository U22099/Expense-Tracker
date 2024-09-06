import NextAuth from "next-auth";
import { User } from "@/lib/model";
import { compare } from "bcryptjs";
import { connectToDb } from "@/lib/utils";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const logIn = async (credentials): Promise<Object> => {
    try{
        await connectToDb();
        const email = credentials.email as string;
        const password = credentials.password as string;
        const user = await User.findOne({email});

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
export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHubProvider, 
        GoogleProvider,
        CredentialsProvider({
            async authorize(credentials: Record<string, string>): Promise<Object>{
                try{
                    const user = await logIn(credentials);
                    return user;
                } catch(err) {
                    return null
                }
            }
        })
    ],
    callbacks: {
        async signIn({ account , profile }): Promise<string | boolean>{
            if(account?.provider === "github"){
                await connectToDb();
                try{
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
                    console.log(e);
                    return false;
                }
                return true
            } else if(account?.provider === "google"){
                await connectToDb();
                try{
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
                    console.log(e);
                    return false;
                }
                return true
            } else {return false}
        }
    },
    pages: {
        signIn: "/"
    }
})