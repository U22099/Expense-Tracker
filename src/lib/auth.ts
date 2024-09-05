import NextAuth from "next-auth";
import { User } from "@/lib/model";
import { connectToDb } from "@/lib/utils";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";


export const { handlers: {GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [GitHub, Google],
    callbacks: {
        async signIn({ account , profile }): Promise<string | boolean>{
            if(account.provider === "github"){
                await connectToDb();
                try{
                    const user = await User.findOne({ email: profile.email });
                    if(!email){
                        const user = new User({
                            username: profile.login,
                            email: profile.email,
                            image: profile.avatar_url,
                        })
                        await user.save();
                    }

                } catch(e) {
                    console.log(e);
                    return false;
                }
                return true
            } else if(account.provider === "google"){
                console.log( account, profile );
                return true;
            }
        }
    }
})