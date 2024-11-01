import NextAuth from "next-auth";
import { User } from "@/lib/model";
import { compare } from "bcryptjs";
import { connectToDb } from "@/lib/utils";
import { storeSession } from "@/lib/action";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const logIn = async (credentials: Partial<Record<string, unknown>>): Promise<Object | null> => {
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
        const data = {
            id: user._id.toString(),
            name: user.username,
            email: user.email,
            image: user.image
        };
        storeSession(data);
        return data
    } catch(err) {
        throw new Error("Error while logging user in");
    }
}
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    session: {
        strategy: 'jwt',
    },
    providers: [
        GitHub, 
        Google,
        Credentials({
            async authorize(credentials: Partial<Record<string, unknown>>): Promise<Object | null>{
                try{
                    const user = await logIn(credentials);
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
                    const user = await User.findOne({ email: profile?.email }, "username email image");
                    let newUser;
                    if(!user){
                        newUser = new User({
                            username: profile?.login,
                            email: profile?.email,
                            image: profile?.avatar_url,
                        })
                        await newUser.save();
                    }
                    const session = user || newUser;
                    if(!session) return false;
                    const data = {
                        id: "",
                        name: session.username,
                        image: session.image,
                        email: session.email
                    }
                    storeSession(data);
                } catch(e) {
                    console.log(e, "Error in callback");
                    return false;
                }
                return true
            } else if(account?.provider === "google"){
                try{
                    await connectToDb();
                    const user = await User.findOne({ email: profile?.email });
                    let newUser;
                    if(!user){
                        newUser = new User({
                            username: profile?.name,
                            email: profile?.email,
                            image: profile?.picture,
                        })
                        await newUser.save();
                    }
                    const session = user || newUser;
                    if(!session) return false;
                    const data = {
                        id: "",
                        name: session.username,
                        image: session.image,
                        email: session.email
                    }
                    storeSession(data);

                } catch(e) {
                    console.log(e, "Error in callback");
                    return false;
                }
                return true
            } else if(account?.provider === "credentials"){
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
